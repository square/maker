<template>
	<span>
		<pseudo-window @blur.passive="handleBlur">
			<pseudo-window
				@mousedown="trackClickSrc"
				@touchstart="trackClickSrc"
				@click.capture="handleClick"
				@touchend="handleClick"
			>
				<component
					:is="popoverAPI.currentInstance"
					v-if="popoverAPI.currentInstance"
					ref="instance"
					@close="popoverAPI.closePopover"
				/>
			</pseudo-window>
		</pseudo-window>
	</span>
</template>

<script>
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
import PseudoWindow from 'vue-pseudo-window';
import Vue from 'vue';
import PopoverInstance from './PopoverInstance.vue';
import { PopoverAPIKey } from './keys';

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
	inject: {
		layer: {
			default: undefined,
			from: PopoverAPIKey,
		},
	},

	provide() {
		const api = Vue.observable({
			currentInstance: undefined,
			tetherEl: undefined,
			clickSrc: undefined,
			setPopover(popoverData) {
				if (this.currentInstance) {
					this.closePopover();
				}

				if (!popoverData) {
					return undefined;
				}

				return new Promise((resolve) => {
					this.tetherEl = popoverData.props.tetherEl;
					this.currentInstance = newPopover(popoverData, resolve);
				});
			},

			closePopover() {
				this.currentInstance = undefined;
			},
		});

		if (!this.popoverAPI) {
			this.popoverAPI = api;
		}

		return {
			[PopoverAPIKey]: api,
		};
	},
};

export default {
	name: 'PopoverLayer',

	components: {
		MTransitionFadeIn,
		PseudoWindow,
	},

	inject: {
		popoverAPI: PopoverAPIKey,
	},

	popoverMixin,

	methods: {
		handleBlur() {
			if (document.activeElement !== document.body) {
				this.popoverAPI.closePopover();
			}
		},

		trackClickSrc({ target }) {
			this.popoverAPI.clickSrc = target;
		},

		handleClick() {
			const $instance = this.$refs.instance;
			if (!$instance || !this.popoverAPI.clickSrc) {
				return;
			}

			const clickInBubble = $instance && $instance.$el.contains(this.clickSrc);
			const clickInAction = this.actionEl && this.actionEl.contains(this.clickSrc);

			if (!clickInBubble && !clickInAction) {
				this.popoverAPI.closePopover();
			}

			this.popoverAPI.clickSrc = undefined;
		},
	},
};
</script>

<style>
/* keep */
</style>
