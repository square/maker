<template>
	<div :class="$s.Layer">
		<m-transition-fade>
			<div
				v-if="currentLayer.state.vnode"
				:class="$s.Translucent"
			/>
		</m-transition-fade>
		<m-transition-spring-responsive :transitions="transitions">
			<div
				v-if="currentLayer.state.vnode"
				:class="$s.ModalLayer"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<v :nodes="currentLayer.state.vnode" />
			</div>
		</m-transition-spring-responsive>
	</div>
</template>

<script>
import Vue from 'vue';
import V from 'vue-v';
import PseudoWindow from 'vue-pseudo-window';
import { MTransitionFade } from '@square/maker/components/TransitionFade';
import assert from '@square/maker/utils/assert';
import { MTransitionSpringResponsive } from '@square/maker/utils/TransitionSpringResponsive';
import {
	fadeIn, fadeOut, springUp, springDown, mobileMinWidth, desktopMinWidth,
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
		/*
		let depth = [Math.random().toString().slice(2, 5)];
		if (this.currentLayer) {
			depth = this.currentLayer.state.depth.concat(depth);
		}
		*/
		const api = {
			state: Vue.observable({
				vnode: undefined,
				// depth,
			}),

			open(renderFn) {
				const vnode = renderFn(vm.$createElement);
				// console.log('opening in layer', Array.from(this.state.depth));
				this.state.vnode = vnode;
				// returned method only closes this specific modal
				return () => {
					if (this.state.vnode === vnode) {
						this.state.vnode = undefined;
					}
				};
			},

			close() {
				// console.log('closing in layer', Array.from(this.state.depth));
				this.state.vnode = undefined;
			},
		};

		if (this.currentLayer) {
			if (this.modalApi) {
				// unconditional warning
				assert.warn(false, 'MModalLayer.apiMixin already provides modalApi to your component, please remove the conflicting injected modalApi');
			}
			this.modalApi = {
				state: api.state,
				open: api.open.bind(api),
				close: this.currentLayer.close.bind(this.currentLayer),
			};
		}

		if (!this.modalApi) {
			this.modalApi = {
				state: api.state,
				open: api.open.bind(api),
				close: () => {
					// unconditional warning
					assert.warn(false, 'modalApi.close() only closes the currentLayer. There is no currentLayer. If you\'re trying to close a modal you spawned from a parent then you need to use the close handler function returned from the modalApi.open() call, e.g. let closeMyModal = modal.open(); closeMyModal();');
				},
			};
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

	inject: {
		currentLayer: {
			default: undefined,
			from: modalApi,
		},
	},

	inheritAttrs: false,

	apiMixin,

	data() {
		return {
			transitions: [{
				minWidth: mobileMinWidth,
				enter: springUp,
				leave: springDown,
			}, {
				minWidth: desktopMinWidth,
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

.disableScroll {
	overflow: hidden;
}
</style>
