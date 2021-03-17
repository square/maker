<template>
	<div :class="$s.Layer">
		<m-transition-fade-in>
			<div
				v-if="bladeApi.state.vnode"
				:class="$s.Translucent"
			/>
		</m-transition-fade-in>
		<m-transition-responsive :transitions="transitions">
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
		</m-transition-responsive>
	</div>
</template>

<script>
import Vue from 'vue';
import V from 'vue-v';
import PseudoWindow from 'vue-pseudo-window';
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
import { MTransitionResponsive } from '@square/maker/utils/TransitionResponsive';
import {
	springUpFn, springDownFn, springLeftFn, springRightFn, mobileMinWidth, tabletMinWidth,
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
		MTransitionFadeIn,
		MTransitionResponsive,
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
				enter: springUpFn,
				leave: springDownFn,
			}, {
				minWidth: tabletMinWidth,
				enter: springLeftFn,
				leave: springRightFn,
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
