<template>
	<div :class="$s.Layer">
		<m-transition-fade>
			<div
				v-if="bladeApi.state.vnode"
				:class="$s.Translucent"
			/>
		</m-transition-fade>
		<m-transition-spring-responsive :transitions="transitions">
			<div
				v-if="bladeApi.state.vnode"
				:class="$s.BladeLayer"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<v :nodes="bladeApi.state.vnode" />
			</div>
		</m-transition-spring-responsive>
	</div>
</template>

<script>
import Vue from 'vue';
import V from 'vue-v';
import PseudoWindow from 'vue-pseudo-window';
import { MTransitionFade } from '@square/maker/components/TransitionFade';
import { MTransitionSpringResponsive } from '@square/maker/utils/TransitionSpringResponsive';
import {
	springUp, springDown, springLeft, springRight, mobileMinWidth, desktopMinWidth,
} from '@square/maker/utils/transitions';
import bladeApi from './blade-api';

const apiMixin = {
	provide() {
		const vm = this;
		const api = {
			state: Vue.observable({
				vnode: undefined,
			}),

			open(renderFn) {
				const vnode = renderFn(vm.$createElement);
				this.state.vnode = vnode;
				// Method that only closes this specific blade
				return () => {
					if (this.state.vnode === vnode) {
						this.state.vnode = undefined;
					}
				};
			},

			close() {
				this.state.vnode = undefined;
			},
		};

		if (!this.bladeApi) {
			this.bladeApi = api;
		}

		return {
			[bladeApi]: api,
		};
	},
};

export default {
	name: 'BladeLayer',

	components: {
		V,
		PseudoWindow,
		MTransitionFade,
		MTransitionSpringResponsive,
	},

	inject: {
		bladeApi,
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
				enter: springLeft,
				leave: springRight,
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

.BladeLayer {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: flex-end;
}

.Translucent {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
}

.disableScroll {
	overflow: hidden;
}
</style>
