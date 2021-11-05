<template>
	<div :class="$s.PopoverLayer">
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
	</div>
</template>

<script>
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
import PseudoWindow from 'vue-pseudo-window';
import Vue from 'vue';
import { PortalTarget } from 'portal-vue';
import PopoverInstance from './PopoverInstance.vue';
import { PopoverAPIKey } from './keys';

const newPopover = (popoverData, onDestroy) => ({
	render() {
		const { props, on } = popoverData;
		const onClose = () => this.$emit('close');

		return (
			<PopoverInstance
				onDestroy={onDestroy}
				onClose={onClose}
				{...{ props, on }}
			>
				<PortalTarget name={popoverData.popperId} />
			</PopoverInstance>
		);
	},
});

const popoverMixin = {
	provide() {
		const api = Vue.observable({
			currentInstance: undefined,
			tetherEl: undefined,
			ignoreEls: [],
			popperConfig: undefined,
			popperId: undefined,
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
					this.ignoreEls = popoverData.props.ignoreEls;
					this.popperConfig = popoverData.props.popperConfig;
					this.popperId = popoverData.props.popperId;
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

	beforeDestroy() {
		this.popoverAPI.closePopover();
	},

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

			const clickInBubble = $instance.$el?.contains(this.popoverAPI.clickSrc);
			const clickInAction = this.popoverAPI.tetherEl?.contains(this.popoverAPI.clickSrc);
			const clickInIgnores = this.popoverAPI.ignoreEls?.some(
				(element) => element.contains?.(this.popoverAPI.clickSrc),
			);

			if (!clickInBubble && !clickInAction && !clickInIgnores) {
				this.popoverAPI.closePopover();
			}

			this.popoverAPI.clickSrc = undefined;
		},
	},
};
</script>

<style module="$s">
.PopoverLayer {
	overflow: hidden;
}
</style>
