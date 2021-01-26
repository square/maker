<template>
	<div>
		<m-transition-fade>
			<div
				v-if="modalApi.state.vnode"
				:class="$s.Translucent"
			/>
		</m-transition-fade>
		<m-transition-spring-up>
			<div
				v-if="modalApi.state.vnode"
				:class="$s.ModalLayer"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<div
					:class="$s.ModalContainer"
				>
					<v :nodes="modalApi.state.vnode" />
				</div>
				<modal-layer />
			</div>
		</m-transition-spring-up>
	</div>
</template>

<script>
import Vue from 'vue';
import V from 'vue-v';
import PseudoWindow from 'vue-pseudo-window';
import { MTransitionSpringUp } from '@square/maker/components/TransitionSpringUp';
import { MTransitionFade } from '@square/maker/components/TransitionFade';
import { last } from 'lodash';
import assert from '@square/maker/utils/assert';
import modalApi from './modal-api';

const apiMixin = {
	inject: {
		_currentLayer: {
			default: undefined,
			from: modalApi,
		},
	},

	provide() {
		const vm = this;
		return {
			[modalApi]: {
				state: Vue.observable({
					vnode: undefined,
				}),

				open(renderFn) {
					const vnode = renderFn(vm.$createElement);
					vnode.componentOptions.modalFunction = true;
					return this.setModalVnode(vnode);
				},

				setModalVnode(vnode) {
					this.state.vnode = vnode;

					// Method that only closes this specific modal
					return () => {
						if (this.state.vnode === vnode) {
							this.state.vnode = undefined;
						}
					};
				},

				close() {
					// eslint-disable-next-line no-underscore-dangle
					assert.warn(vm._currentLayer, 'Layer not found. If this is a routed modal, use .closeRouted() instead.');

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
						assert.warn(parentRoute, 'Parent route not found. Make sure the route nesting reflects the modal nesting');

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
	name: 'ModalLayer',

	components: {
		V,
		MTransitionSpringUp,
		MTransitionFade,
		PseudoWindow,
	},

	mixins: [apiMixin],

	inject: {
		modalApi,
	},

	inheritAttrs: false,

	apiMixin,
};
</script>

<style module="$s">
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

.ModalContainer {
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
}

@media screen and (min-width: 1000px) {
	.ModalContainer {
		display: inline-block;
		width: auto;
		height: auto;
		border-radius: 16px;
	}
}

.disableScroll {
	overflow: hidden;
}
</style>
