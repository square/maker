<template>
	<div :class="$s.Layer">
		<m-transition-fade-in>
			<div
				v-if="currentLayer.state.vnode"
				:class="[
					$s.Translucent,
					{ [$s.Transparent]: currentLayer.state.isStacked },
				]"
			/>
		</m-transition-fade-in>
		<m-transition-responsive :transitions="transitions">
			<div
				v-if="currentLayer.state.vnode"
				ref="baseModalLayer"
				:class="$s.ModalLayer"
				@click.capture="closeOnClickOutside"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<div
					ref="modal"
					:class="$s.Container"
				>
					<v :nodes="currentLayer.state.vnode" />
				</div>
			</div>
		</m-transition-responsive>
		<modal-layer v-if="currentLayer.state.vnode" />
	</div>
</template>

<script>
import Vue from 'vue';
import V from 'vue-v';
import PseudoWindow from 'vue-pseudo-window';
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
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
import modalApi from './modal-api';

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
				vnode: undefined,
				options: {},
				isStacked: !!vm.currentLayer,
				parentModal: vm.currentLayer,
			}),

			open(renderFn, options = {}) {
				const vnode = renderFn(vm.$createElement);
				this.state.vnode = vnode;
				this.state.options = options;
				// returned method only closes this specific modal
				return () => {
					if (this.state.vnode === vnode) {
						this.state.vnode = undefined;
					}
				};
			},

			async close() {
				const isModalActive = !this.state.vnode; // Verify there's no modal on top

				if (isModalActive && vm.currentLayer) {
					if (typeof this.state.options.beforeCloseHook === 'function') {
						if (!(await this.state.options.beforeCloseHook())) {
							return; // cancel
						}
					}

					vm.currentLayer.state.vnode = undefined; // close modal
				}
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
		V,
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
		this.unwatchStackedModal = this.$watch(() => vm.modalApi.state.vnode, () => {
			const isTablet = window.innerWidth >= tabletMinWidth;
			const isMobile = !isTablet;
			const isOpeningStackedModal = !!vm.modalApi.state.vnode;
			const isClosingStackedModal = !isOpeningStackedModal;
			const element = this.$refs.baseModalLayer;

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
	background-color: rgba(0, 0, 0, 0.3);
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

@media screen and (min-width: 840px) {
	.Container {
		display: inline-block;
		width: auto;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
	}
}
</style>
