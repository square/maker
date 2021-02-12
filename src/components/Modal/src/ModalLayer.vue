<template>
	<div :class="$s.Layer">
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

	provide() {
		const vm = this;
		const api = {
			state: Vue.observable({
				vnode: undefined,
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
				this.state.vnode = undefined;
			},
		};

		if (this.currentLayer) {
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
