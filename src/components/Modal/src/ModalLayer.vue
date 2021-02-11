<template>
	<div>
		<m-transition-fade>
			<div
				v-if="modalApi.state.vnode"
				:class="$s.Translucent"
			/>
		</m-transition-fade>
		<pseudo-window
			@resize.passive="updateWidth"
		/>
		<component
			:is="currentTransitionComponent"
		>
			<div
				v-if="modalApi.state.vnode"
				:class="$s.ModalLayer"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<v :nodes="modalApi.state.vnode" />

				<modal-layer />

			</div>
		</component>
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
		let depth = [Math.random().toString(36).slice(2, 5)];
		if (vm._currentLayer) {
			depth = vm._currentLayer.state.depth.concat(depth);
		}
		//let id = Math.random().toString(36).slice(2, 5);
		return {
			[modalApi]: {
				state: Vue.observable({
					vnode: undefined,
					depth,
					//id,
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

	data() {
		return {
			windowWidth: 0,
			currentTransition: MTransitionFade,
		};
	},

	computed: {
		transitionComponent() {
			if (this.windowWidth < 1200) {
				return MTransitionSpringUp;
			}
			return MTransitionFade;
		},
		currentTransitionComponent() {
			// if modal is currently open then lock transition despite window resizes
			// this prevents visual arifacts caused by dynamically switching the
			// transition component while the modal is open
			if (this.modalApi.state.vnode) {
				return this.currentTransition;
			}
			// eslint-disable-next-line vue/no-side-effects-in-computed-properties
			this.currentTransition = this.transitionComponent;
			return this.currentTransition;
		},
	},

	mounted() {
		this.updateWidth();
	},

	methods: {
		updateWidth() {
			this.windowWidth = window.innerWidth;
		},
	},
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

.disableScroll {
	overflow: hidden;
}
</style>
