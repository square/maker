<template>
	<div :class="$s.Layer">
		<m-transition-fade-in>
			<div
				v-if="currentLayer.state.renderFn"
				:class="[
					$s.Translucent,
					{ [$s.Transparent]: currentLayer.state.isStacked },
				]"
			/>
		</m-transition-fade-in>
		<m-transition-responsive :transitions="transitions">
			<div
				v-if="currentLayer.state.renderFn"
				ref="baseModalLayer"
				:class="$s.ModalLayer"
				@click.capture="closeOnClickOutside"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<pseudo-window
					document
					@keyup.esc="closeOnEsc"
				/>
				<div
					ref="modal"
					:class="$s.Container"
				>
					<render-fn :render-fn="currentLayer.state.renderFn" />
				</div>
			</div>
		</m-transition-responsive>
		<modal-layer v-if="currentLayer.state.renderFn" />
	</div>
</template>

<script>
import Vue from 'vue';
import PseudoWindow from 'vue-pseudo-window';
import { MTransitionFadeIn } from '@square/maker/utils/TransitionFadeIn';
import { MTransitionResponsive } from '@square/maker/utils/TransitionResponsive';
import {
	fadeOutFn,
	springUpFn,
	springDownFn,
	springDelay,
	floatUpFn,
	floatDownFn,
	delayedFloatUpFn,
	delayedFadeInFn,
	mobileMinWidth,
	tabletMinWidth,
} from '@square/maker/utils/transitions';
import RenderFn from '@square/maker/utils/RenderFn';
import modalApi from './modal-api';
import { PopoverAPIKey } from '../../Popover/src/keys';

function isPromise(thing) {
	return typeof thing === 'object' && typeof thing.then === 'function';
}

const apiMixin = {
	inject: {
		currentLayer: {
			default: undefined,
			from: modalApi,
		},
	},

	provide() {
		const vm = this;
		const api = {
			state: Vue.observable({
				renderFn: undefined,
				options: {},
				isStacked: !!vm.currentLayer,
				// return parent modal to allow to close child and parent modals at the same time
				parentModal: vm.currentLayer,
			}),

			open(renderFn, options = {}) {
				this.state.renderFn = renderFn;
				this.state.options = options;
				// returned method only closes this specific modal
				return () => {
					if (this.state.renderFn === renderFn) {
						this.state.renderFn = undefined;
					}
				};
			},

			close() {
				const modalOnTop = !!this.state.renderFn;
				// can't close modal if it has another modal on top
				if (modalOnTop) {
					return false;
				}
				const noLayer = !vm.currentLayer;
				// no modal to close, so "closing" is successful
				if (noLayer) {
					return true;
				}

				if (typeof this.state.options.beforeCloseHook === 'function') {
					const canClose = this.state.options.beforeCloseHook();
					if (isPromise(canClose)) {
						return new Promise(async (resolve, reject) => {
							let resolvedCanClose = true;
							try {
								resolvedCanClose = await canClose;
							} catch (e) {
								reject(e);
								return;
							}
							if (!resolvedCanClose) {
								resolve(false);
								return;
							}
							// Close the open popover (if present) and then close the modal in the next tick.
							// Closing at the same time will result in the popover content becoming inline and
							// causes a weird content shift as the modal fades away.
							if (vm.popoverApi?.currentInstance) {
								vm.popoverApi.closePopover();
								vm.$nextTick(() => {
									vm.currentLayer.state.renderFn = undefined;
									resolve(true);
								});
								return;
							// no popover open
							} else {
								vm.currentLayer.state.renderFn = undefined;
								resolve(true);
								return;
							}
						});
					// canClose is not a promise
					} else {
						if (!canClose) {
							return false;
						}
					}
				}

				// no beforeCloseHook, safe to close

				// Close the open popover (if present) and then close the modal in the next tick.
				// Closing at the same time will result in the popover content becoming inline and
				// causes a weird content shift as the modal fades away.
				if (vm.popoverApi?.currentInstance) {
					vm.popoverApi.closePopover();
					return new Promise((resolve, _reject) => {
						vm.$nextTick(() => {
							vm.currentLayer.state.renderFn = undefined;
							resolve(true);
						});
					});
				// no popover open
				} else {
					vm.currentLayer.state.renderFn = undefined;
					return true;
				}
			},

			closeAll() {
				const closed = this.close();

				if (isPromise(closed)) {
					return new Promise(async (resolve, reject) => {
						let resolvedClose = true;
						try {
							resolvedClose = await closed;
						} catch (e) {
							reject(e);
							return;
						}
						if (!resolvedClose) {
							resolve(false);
							return;
						}
						if (vm.currentLayer) {
							const resolvedClosedAll = await vm.currentLayer.closeAll();
							resolve(resolvedClosedAll);
							return;
						}
					});
				// closed is not a promise
				} else {
					if (!closed) {
						return false;
					}
				}

				if (vm.currentLayer) {
					return vm.currentLayer.closeAll();
				}

				// closed
				return true;
			},

			forceCloseParent() {
				if (vm.currentLayer && vm.currentLayer.state.parentModal) {
					vm.currentLayer.state.parentModal.state.renderFn = undefined;
				}
				return true;
			}
		};

		if (!this.modalApi) {
			this.modalApi = api;
		}

		return {
			[modalApi]: api,
		};
	},
};

export default {
	name: 'ModalLayer',

	components: {
		RenderFn,
		PseudoWindow,
		MTransitionFadeIn,
		MTransitionResponsive,
	},

	mixins: [
		apiMixin,
	],

	inject: {
		popoverApi: {
			from: PopoverAPIKey,
			default: undefined,
		},
	},

	inheritAttrs: false,

	apiMixin,

	data() {
		let tabletEnterFn = floatUpFn;
		let tabletLeaveFn = floatDownFn;
		if (this.currentLayer.state.isStacked) {
			tabletEnterFn = delayedFloatUpFn;
			tabletLeaveFn = floatDownFn;
		}
		return {
			transitions: [{
				minWidth: mobileMinWidth,
				enter: springUpFn,
				leave: springDownFn,
			}, {
				minWidth: tabletMinWidth,
				enter: tabletEnterFn,
				leave: tabletLeaveFn,
			}],
		};
	},

	mounted() {
		const vm = this;
		this.unwatchStackedModal = this.$watch(() => vm.modalApi.state.renderFn, () => {
			const isTablet = window.innerWidth >= tabletMinWidth;
			const isMobile = !isTablet;
			const isOpeningStackedModal = !!vm.modalApi.state.renderFn;
			const isClosingStackedModal = !isOpeningStackedModal;
			const element = this.$refs.baseModalLayer;

			/*
			element can be undefined when closing child modal and parent modal at the same so
			we need to check if element exists before applying transitions
			*/
			if (!element) {
				return;
			}

			if (isTablet && isOpeningStackedModal) {
				fadeOutFn({ element });
			} else if (isTablet && isClosingStackedModal) {
				delayedFadeInFn({ element });
			} else if (isMobile && isOpeningStackedModal) {
				setTimeout(() => {
					element.style.opacity = '0%';
				}, springDelay);
			} else if (isMobile && isClosingStackedModal) {
				element.style.removeProperty('opacity');
			}
		});
	},

	destroyed() {
		this.unwatchStackedModal();
	},

	methods: {
		closeOnClickOutside(event) {
			const { closeOnClickOutside } = this.currentLayer.state.options;
			const { modal } = this.$refs;
			if (modal && closeOnClickOutside && !modal.contains(event.target)) {
				this.modalApi.close();
			}
		},
		closeOnEsc() {
			const { closeOnEsc } = this.currentLayer.state.options;
			const { modal } = this.$refs;

			if (modal && closeOnEsc) {
				this.modalApi.close();
			}
		},
	},
};
</script>

<style module="$s">
.Layer {
	position: relative;
	z-index: 1;
}

.ModalLayer {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.Translucent {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: $maker-color-overlay;
}

.Transparent {
	background-color: transparent;
}

.disableScroll {
	overflow: hidden;
}

.Container {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

@media screen and (--for-tablet-landscape-up) {
	.Container {
		display: inline-block;
		width: auto;
		height: auto;
		border-radius: $maker-shape-default-border-radius;
		box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
	}
}
</style>
