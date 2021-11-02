<template>
	<m-transition-fade-in>
		<pseudo-window @blur.passive="handleBlur">
			<pseudo-window>
				{{ { currentInstance, tetherEl, clickSrc } }}
				<component
					:is="currentInstance"
					v-if="currentInstance"
					ref="instance"
					@close="closePopover"
				/>
			</pseudo-window>
		</pseudo-window>
	</m-transition-fade-in>
</template>

<script>
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
import PseudoWindow from 'vue-pseudo-window';
import PopoverInstance from './PopoverInstance.vue';
import { PopoverLayerKey } from './keys';

const newPopover = (popoverData, onDestroy) => ({
	render() {
		const { contentSlot, props, on } = popoverData;
		const onClose = () => this.$emit('close');
		const content = typeof contentSlot === 'function' ? contentSlot({ close: onClose }) : contentSlot;

		return (
			<PopoverInstance
				onDestroy={onDestroy}
				onClose={onClose}
				{...{ props, on }}
			>
				{ content }
			</PopoverInstance>
		);
	},
});

const popoverMixin = {
	provide() {
		return {
			[PopoverLayerKey]: this.API,
		};
	},

	data() {
		const vm = this;

		return {
			currentInstance: undefined,
			tetherEl: undefined,
			clickSrc: undefined,
			API: {
				setPopover: (popoverData) => {
					if (!popoverData) {
						return undefined;
					}

					if (vm.currentInstance) {
						vm.closePopover();
					}

					return new Promise((resolve) => {
						vm.tetherEl = popoverData.props.tetherEl;
						vm.currentInstance = newPopover(popoverData, resolve);
					});
				},
			},
		};
	},
};

export default {
	name: 'PopoverLayer',

	components: {
		MTransitionFadeIn,
		PseudoWindow,
	},

	mixins: [
		popoverMixin,
	],

	popoverMixin,

	methods: {
		handleBlur() {
			// keep
		},
	},
};
</script>

<style>
/* keep */
</style>
