<template>
	<div :class="$s.Layer">
		<m-transition-fade>
			<div
				v-if="_currentLayer.state.vnode"
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
				v-if="_currentLayer.state.vnode"
				:class="$s.ModalLayer"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<v :nodes="_currentLayer.state.vnode" />
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

		let api = {
			state: Vue.observable({
				vnode: undefined,
			}),

			open(renderFn) {
				const vnode = renderFn(vm.$createElement);
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
				assert.warn(vm._currentLayer, 'Layer not found.');

				// eslint-disable-next-line no-underscore-dangle
				if (vm._currentLayer) {
					// eslint-disable-next-line no-underscore-dangle
					vm._currentLayer.state.vnode = undefined;
				}
			},
		};

		return {
			[modalApi]: api,
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
			if (this._currentLayer.state.vnode) {
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
