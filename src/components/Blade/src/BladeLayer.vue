<template>
	<div>
		<m-transition-fade>
			<div
				v-if="bladeApi.state.vnode"
				:class="$s.Translucent"
			/>
		</m-transition-fade>
		<m-transition-spring-left>
			<div
				v-if="bladeApi.state.vnode"
				:class="$s.BladeLayer"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<div :class="$s.BladeContainer">
					<v :nodes="bladeApi.state.vnode" />
				</div>
				<blade-layer />
			</div>
		</m-transition-spring-left>
	</div>
</template>

<script>
import Vue from 'vue';
import V from 'vue-v';
import PseudoWindow from 'vue-pseudo-window';
import { last } from 'lodash';
import { MTransitionFade } from '@square/maker/components/TransitionFade';
import { MTransitionSpringLeft } from '@square/maker/components/TransitionSpringLeft';
import assert from '@square/maker/utils/assert';
import bladeApi from './blade-api';

const apiMixin = {
	inject: {
		_currentLayer: {
			default: undefined,
			from: bladeApi,
		},
	},

	provide() {
		const vm = this;
		return {
			[bladeApi]: {
				state: Vue.observable({
					vnode: undefined,
				}),

				open(renderFn) {
					const vnode = renderFn(vm.$createElement);
					vnode.componentOptions.bladeFunction = true;
					return this.setBladeVnode(vnode);
				},

				setBladeVnode(vnode) {
					this.state.vnode = vnode;

					// Method that only closes this specific blade
					return () => {
						if (this.state.vnode === vnode) {
							this.state.vnode = undefined;
						}
					};
				},

				close() {
					// eslint-disable-next-line no-underscore-dangle
					assert.warn(vm._currentLayer, 'Layer not found. If this is a routed blade, use .closeRouted() instead.');

					// eslint-disable-next-line no-underscore-dangle
					if (vm._currentLayer) {
						// eslint-disable-next-line no-underscore-dangle
						vm._currentLayer.state.vnode = undefined;
					}
				},

				closeRouted() {
					assert.warn(vm.$router, 'Vue Router not found');

					if (vm.$router) {
						const parentRoute = last(vm.$route.matched).parent;
						assert.warn(parentRoute, 'Parent route not found. Make sure the route nesting reflects the blade nesting');

						if (parentRoute) {
							vm.$router.push({
								name: parentRoute.name,
							});
						}
					}
				},
			},
		};
	},
};

export default {
	name: 'BladeLayer',

	components: {
		V,
		PseudoWindow,
		MTransitionFade,
		MTransitionSpringLeft,
	},

	mixins: [apiMixin],

	inject: {
		bladeApi,
	},

	inheritAttrs: false,

	apiMixin,
};
</script>

<style module="$s">
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

.BladeContainer {
	width: 100%;
	height: 100%;
	overflow: scroll;
	box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 1200px) {
	.BladeContainer {
		width: 480px;
		height: 100%;
	}
}

.disableScroll {
	overflow: hidden;
}
</style>
