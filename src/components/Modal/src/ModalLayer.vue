<template>
	<div :class="$s.Layer">
		<m-transition-fade>
			<div
				v-if="currentLayer.state.vnode"
				:class="[
					$s.Translucent,
					{ [$s.Transparent]: currentLayer.state.isStacked },
				]"
			/>
		</m-transition-fade>
		<m-transition-spring-responsive :transitions="transitions">
			<div
				v-if="currentLayer.state.vnode"
				ref="baseModalLayer"
				:class="$s.ModalLayer"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<v :nodes="currentLayer.state.vnode" />
			</div>
		</m-transition-spring-responsive>
		<modal-layer v-if="currentLayer.state.vnode" />
	</div>
</template>

<script>
import Vue from 'vue';
import V from 'vue-v';
import PseudoWindow from 'vue-pseudo-window';
import { MTransitionFade } from '@square/maker/components/TransitionFade';
import { MTransitionSpringResponsive } from '@square/maker/utils/TransitionSpringResponsive';
import {
	fadeIn,
	fadeOut,
	fadeInSlideLeft,
	fadeOutSlideLeft,
	fadeInSlideRight,
	fadeOutSlideRight,
	springUp,
	springDown,
	mobileMinWidth,
	tabletMinWidth,
} from '@square/maker/utils/transitions';
import { spring, styler } from 'popmotion';
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
				isStacked: !!vm.currentLayer,
			}),

			open(renderFn) {
				const vnode = renderFn(vm.$createElement);
				this.state.vnode = vnode;
				// returned method only closes this specific modal
				return () => {
					if (this.state.vnode === vnode) {
						this.state.vnode = undefined;
					}
				};
			},

			close() {
				if (vm.currentLayer) {
					vm.currentLayer.state.vnode = undefined;
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
		MTransitionFade,
		PseudoWindow,
		MTransitionSpringResponsive,
	},

	mixins: [
		apiMixin,
	],

	inheritAttrs: false,

	apiMixin,

	data() {
		let tabletEnter = fadeIn;
		let tabletLeave = fadeOut;
		if (this.currentLayer.state.isStacked) {
			tabletEnter = fadeInSlideLeft;
			tabletLeave = fadeOutSlideRight;
		}
		return {
			transitions: [{
				minWidth: mobileMinWidth,
				enter: springUp,
				leave: springDown,
			}, {
				minWidth: tabletMinWidth,
				enter: tabletEnter,
				leave: tabletLeave,
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
			const baseModalLayerStyler = styler(vm.$refs.baseModalLayer);

			if (isTablet && isOpeningStackedModal) {
				spring(fadeOutSlideLeft).start({
					update: (v) => baseModalLayerStyler.set(v),
				});
			} else if (isTablet && isClosingStackedModal) {
				spring(fadeInSlideRight).start({
					update: (v) => baseModalLayerStyler.set(v),
				});
			} else if (isMobile && isOpeningStackedModal) {
				window.setTimeout(() => {
					baseModalLayerStyler.set({
						opacity: '0%',
						x: '-40px',
					});
				}, 500);
			} else if (isMobile && isClosingStackedModal) {
				baseModalLayerStyler.set({
					opacity: '100%',
					x: '0px',
				});
			}
		});
	},

	destroyed() {
		this.unwatchStackedModal();
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
</style>
