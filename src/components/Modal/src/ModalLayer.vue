<template>
	<div :class="$s.Layer">
		<!--
		currentLayer: {{ currLayerString }}<br><br>
		modalApi: {{ modalApiString }}<br><br>
		-->

		<m-transition-fade>
			<div
				v-if="currentLayer.state.vnode"
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
				v-if="currentLayer.state.vnode"
				:class="$s.ModalLayer"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<v :nodes="currentLayer.state.vnode" />
				<!--
				<modal-layer />
				-->
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
import assert from '@square/maker/utils/assert';
import modalApi from './modal-api';

const apiMixin = {
	inject: {
		currentLayer: {
			default: undefined,
			from: modalApi,
		},
	},

	computed: {
		currLayString() {
			return JSON.stringify(this.currentLayer && this.currentLayer.state.depth);
		},
		modalApiString() {
			return JSON.stringify(this.modalApi && this.modalApi.state.depth);
		},
	},

	provide() {
		const vm = this;

		let depth = 1; //[Math.random().toString().slice(2, 5)];
		if (vm.currentLayer) {
			depth += vm.currentLayer.state.depth; //.concat(depth);
		}

		console.log('creating layer', JSON.stringify(depth), 'from', this.$options.name);

		const api = {
			state: Vue.observable({
				vnode: undefined,
				depth,
			}),

			open(renderFn) {
				const vnode = renderFn(vm.$createElement);
				let state = this.state;

				/*
				if (vm.currentLayer) {
					state = vm.currentLayer.state;
				}
				*/


				state.vnode = vnode;
				console.log('opening in layer', JSON.stringify(state.depth), 'from', vm.$options.name);
				//this.state.vnode = vnode;
				//vm.currentLayer.state.vnode = vnode;
				//console.log('opening in layer', JSON.stringify(vm.currentLayer.state.depth));

				// console.log('opening in layer', JSON.stringify(this.state.depth)); //, 'from', this.$options.name);

				// Method that only closes this specific modal
				return () => {
					console.log('closing in layer', JSON.stringify(state.depth)); //, 'from', this.$options.name);
					if (state.vnode === vnode) {
						state.vnode = undefined;
					}
				};
			},

			close() {
				console.log('closing in layer', JSON.stringify(this.state.depth), 'from', vm.$options.name);
				this.state.vnode = undefined;

				if (vm.currentLayer && vm.currentLayer.state.depth.length == 2) {
					console.log('closing in layer', JSON.stringify(vm.currentLayer.state.depth));
					vm.currentLayer.state.vnode = undefined;
				}

				/*
				assert.warn(vm.currentLayer, 'Layer not found.');
				if (vm.currentLayer) {
					console.log('closing in layer', JSON.stringify(vm.currentLayer.state.depth)); //, 'from', this.$options.name);
					vm.currentLayer.state.vnode = undefined;
				}
				*/
			},
		};

/*
		if (!vm.currentLayer) {
			vm.modalApi = api;
		} else {
			vm.modalApi = vm.currentLayer;
		}
		*/

		//console.log('this in apiMixin provide', this);
		//console.log('this in apiMixin provide', this.$options.name);

		//vm.modalApi = api;

/*
		if (this.$options.name !== COMPONENT_NAME) {
			vm.modalApi = api;
		}
		*/

/*
		if (vm.currentLayer) {
			vm.modalApi = {
				state: api.state,
				open: api.open,
				openSelf: vm.currentLayer.open,
				closeSelf: vm.currentLayer.close,
				close: api.close,
			};
		}
		*/

		if (!vm.modalApi && !vm.currentLayer) {
			vm.modalApi2 = api;
		}

		console.log('inheriting from currentLayer', JSON.stringify(vm.currentLayer && vm.currentLayer.state.depth));
		if (vm.currentLayer) {
			vm.modalApi2 = {
				state: api.state,
				open: api.open.bind(api),
				//openSelf: vm.currentLayer.open,
				//closeSelf: vm.currentLayer.close,
				//close: api.close,
				close: vm.currentLayer.close.bind(vm.currentLayer),
				//closeSelfSelf: vm.currentLayer.closeSelf,
			};
		}

		/*
		if (vm.currentLayer) {
			vm.modalApi = vm.currentLayer;
		}
		*/

		return {
			[modalApi]: api,
		};
	},
};

const COMPONENT_NAME = 'ModalLayer';

export default {
	name: COMPONENT_NAME,

	components: {
		V,
		MTransitionSpringUp,
		MTransitionFade,
		PseudoWindow,
	},


	inject: {
		currentLayer: {
			default: undefined,
			from: modalApi,
		},
	},


	// if this fails revert to above
	//mixins: [apiMixin],

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
			if (this.currentLayer.state.vnode) {
				return this.currentTransition;
			}
			// eslint-disable-next-line vue/no-side-effects-in-computed-properties
			this.currentTransition = this.transitionComponent;
			return this.currentTransition;
		},
		currLayString() {
			return JSON.stringify(this.currentLayer && this.currentLayer.state.depth);
		},
		modalApiString() {
			return JSON.stringify(this.modalApi && this.modalApi.state.depth);
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
