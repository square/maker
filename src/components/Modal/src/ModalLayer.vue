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
				:class="[
					$s.ModalLayer,
					{ [$s.Hidden]: modalApi.state.vnode },
				]"
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
	fadeIn, fadeOut, springUp, springDown, mobileMinWidth, tabletMinWidth,
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
		return {
			transitions: [{
				minWidth: mobileMinWidth,
				enter: springUp,
				leave: springDown,
			}, {
				minWidth: tabletMinWidth,
				enter: fadeIn,
				leave: fadeOut,
			}],
		};
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

.Hidden {
	/*
	!important is important to override the inline opacity
	added to the modal after the fadeIn/fadeOut transition
	*/
	opacity: 0 !important;
	transition: opacity 0.1s;
}

.disableScroll {
	overflow: hidden;
}
</style>
