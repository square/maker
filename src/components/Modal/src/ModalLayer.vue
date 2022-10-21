<template>
	<!--
		a modal is always opened from the "parent"
		which is why every layer's template references
		the parentModalApi instead of the modalApi
	-->
	<div :class="$s.Layer">
		<m-transition-fade-in>
			<div
				v-if="parentModalApi.state.renderFn"
				:class="[
					$s.Translucent,
					{ [$s.Transparent]: parentModalApi.state.isStacked },
				]"
			/>
		</m-transition-fade-in>
		<m-transition-responsive :transitions="transitions">
			<div
				v-if="parentModalApi.state.renderFn"
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
					<render-fn :render-fn="parentModalApi.state.renderFn" />
				</div>
			</div>
		</m-transition-responsive>
		<modal-layer v-if="parentModalApi.state.renderFn" />
	</div>
</template>

<script>
import Vue from 'vue';
import PseudoWindow from 'vue-pseudo-window';
import assert from '@square/maker/utils/assert';
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

const ONE = 1;

function isPromise(thing) {
	return typeof thing === 'object' && typeof thing.then === 'function';
}

/**
 * This function can be simplified if refactored into an async function
 * HOWEVER it was intentionally written using explicit Promises because
 * it allows us to optimize for the HAPPY PATH where all of the steps
 * can be executed synchronously which closes a stack of modals much
 * faster and with fewer visual hiccups which creates a better user
 * experience. So please do not attempt to refactor this into an async
 * function to "clean up" the code because you'll be making it slower.
 * @return {boolean} true if no modal or modal was closed, false otherwise
 */
function closeModal(api) {
	// no api means no layer means no modal to close
	if (!api) {
		return true;
	}

	// can't close modal if there is another modal stacked
	// on top if it, must close that stacked modal first
	if (api.state.children > ONE) {
		return false;
	}

	// check beforeCloseHook set via Modal's beforeClose prop
	if (typeof api.state.localBeforeCloseHook === 'function') {
		const canCloseLocal = api.state.localBeforeCloseHook();
		// check if result is a promise, i.e. hook is async
		if (isPromise(canCloseLocal)) {
			// resolve async result
			return canCloseLocal
				.then((resolvedCanCloseLocal) => {
					// block closing if returned false
					if (!resolvedCanCloseLocal) {
						return false;
					}
					// check beforeClose hook set via options in api.open
					if (typeof api.state.options.beforeCloseHook === 'function') {
						return api.state.options.beforeCloseHook();
					}
					// return true to signal that we can close
					return true;
				}).then((resolvedCanCloseOpt) => {
					// block closing if returned false
					if (!resolvedCanCloseOpt) {
						return false;
					}
					// async close modal
					api.state.renderFn = undefined;
					api.uncountChild();
					return true;
				});
		}
		// canCloseLocal is not a promise, i.e. hook is sync
		// sync block closing if beforeClose returned false
		if (!canCloseLocal) {
			return false;
		}
	}

	// sync check beforeCloseHook set via api options
	if (typeof api.state.options.beforeCloseHook === 'function') {
		const canCloseOpt = api.state.options.beforeCloseHook();
		// check if result is a promise, i.e. hook is async
		if (isPromise(canCloseOpt)) {
			// resolve async result
			return canCloseOpt
				.then((resolvedCanCloseOpt) => {
					// block closing if returned false
					if (!resolvedCanCloseOpt) {
						return false;
					}
					// async close modal
					api.state.renderFn = undefined;
					api.uncountChild();
					return true;
				});
		}
		// canCloseOpt is not a promise, i.e. hook is sync
		// sync block closing if beforeClose returned false
		if (!canCloseOpt) {
			return false;
		}
	}

	// execution can only reach this point if:
	// 1. there were no registered beforeClose hooks or
	// 2. all beforeClose hooks were sync and returned true

	// sync close modal
	api.state.renderFn = undefined;
	api.uncountChild();
	return true;
}

const apiMixin = {
	// parentModalApi contains the renderFn, options,
	// and beforeClose hooks to be used for this layer
	inject: {
		parentModalApi: {
			default: undefined,
			from: modalApi,
		},
	},

	provide() {
		const vm = this;
		const api = {
			state: Vue.observable({
				// modal render function, passed via api.open
				renderFn: undefined,
				// modal beforeClose, set via beforeClose prop
				localBeforeCloseHook: undefined,
				// number of child modals stacked on this layer
				children: 0,
				// options passed via api.open
				options: {},
				// true if this modal has a modal beneath it
				isStacked: !!vm.parentModalApi,
				// although parentModal is not used within Maker it's used
				// by some of our users so removing it would be a breaking
				// change and require a major release
				parentModal: vm.parentModalApi,
			}),

			// only called from parent
			open(renderFn, options = {}) {
				// can't open modal in a layer where
				// another modal is already open
				if (this.state.renderFn) {
					return false;
				}
				this.state.renderFn = renderFn;
				this.state.options = options;
				this.countChild();

				// only called from parent
				// returned method only closes this specific modal
				return () => {
					// close specific opened modal
					if (this.state.renderFn === renderFn) {
						closeModal(this);
						return true;
					}
					// if no modal is open then "closing"
					// it trivially "successful"
					if (!this.state.renderFn) {
						return true;
					}
					// modal not closed
					return false;
				};
			},

			// only called from parent
			countChild() {
				this.state.children += ONE;
				if (vm.parentModalApi) {
					vm.parentModalApi.countChild();
				}
			},

			// only called from parent
			uncountChild() {
				this.state.children -= ONE;
				if (vm.parentModalApi) {
					vm.parentModalApi.uncountChild();
				}
			},

			// only called from child
			// allows child modal to register hook with parent
			registerBeforeCloseHook(hook) {
				// modal was rendered outside of a ModalLayer
				if (!vm.parentModalApi) {
					// no hook, no problem, fail silently
					if (!hook) {
						return;
					}
					// hook but no layer, big problem, fail loudly
					assert.error(false, 'Cannot set the beforeClose prop on a Modal if it is mounted outside of an ModalLayer', 'Modal');
				}
				vm.parentModalApi.state.localBeforeCloseHook = hook;
			},

			// only called from child
			close() {
				return closeModal(vm.parentModalApi);
			},

			// only called from child
			closeAll() {
				// try closing this modal
				const closed = this.close();

				// check if closed is a promise, i.e. close ran async
				if (isPromise(closed)) {
					// resolve async result
					return closed
						.then((resolvedClose) => {
							// block closing if returned false
							if (!resolvedClose) {
								return false;
							}
							// async resolve closing parents
							if (vm.parentModalApi) {
								return vm.parentModalApi.closeAll();
							}
							// closing was successful
							return true;
						});
				}

				// closed is not a promise, i.e. close ran sync
				// sync block closing if closed returned false
				if (!closed) {
					return false;
				}

				// sync resolve closing parents
				if (vm.parentModalApi) {
					return vm.parentModalApi.closeAll();
				}

				// closing was successful
				return true;
			},
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

	inheritAttrs: false,

	apiMixin,

	data() {
		let tabletEnterFn = floatUpFn;
		let tabletLeaveFn = floatDownFn;
		if (this.parentModalApi.state.isStacked) {
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

			// element can be undefined when closing child modal and parent modal
			// at once so we check if element exists before applying transitions
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
			const { closeOnClickOutside } = this.parentModalApi.state.options;
			const { modal } = this.$refs;
			if (modal && closeOnClickOutside && !modal.contains(event.target)) {
				this.modalApi.close();
			}
		},
		closeOnEsc() {
			const { closeOnEsc } = this.parentModalApi.state.options;
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
