<template>
	<div :class="$s.PopoverLayer">
		<m-transition-fade-in>
			<pseudo-window @blur.passive="handleBlur">
				<pseudo-window
					@mousedown="trackClickSrc"
					@touchstart="trackClickSrc"
					@click.capture="handleClick"
					@touchend="handleClick"
				>
					<component
						:is="popoverApi.currentInstance"
						v-if="popoverApi.currentInstance"
						ref="instance"
						@close="popoverApi.closePopover"
					/>
				</pseudo-window>
			</pseudo-window>
		</m-transition-fade-in>
	</div>
</template>

<script>
import { MTransition } from '@square/maker/utils/Transition';
import { fadeInFn, fadeOutFn } from '@square/maker/utils/transitions';
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
import PseudoWindow from 'vue-pseudo-window';
import Vue from 'vue';
import PopoverInstance from './PopoverInstance.vue';
import { PopoverAPIKey } from './keys';

const newPopover = (popoverData, layerName, onDestroy) => ({
	render() {
		const { props, on } = popoverData;
		const onClose = () => this.$emit('close');

		return (
			<PopoverInstance
				onDestroy={onDestroy}
				onClose={onClose}
				{...{ props, on }}
			>
				<div id={layerName}></div>
			</PopoverInstance>
		);
	},
});

const popoverMixin = {
	inject: {
		currentPopoverLayer: {
			from: PopoverAPIKey,
			default: undefined,
		},
	},

	provide() {
		const startingLayer = 0;
		const layerIncrement = 1;

		const layerDepth = (this.currentPopoverLayer?.layerDepth || startingLayer) + layerIncrement;
		const target = `portal-${layerDepth}`;

		const api = Vue.observable({
			currentInstance: undefined,
			tetherEl: undefined,
			ignoreEls: [],
			popperConfig: undefined,
			popperId: undefined,
			clickSrc: undefined,
			layerDepth,
			target,
			targetSelector: `#${target}`,
			setPopover(popoverData) {
				if (this.currentInstance) {
					this.closePopover();
				}

				if (!popoverData || !popoverData.props?.tetherEl) {
					return undefined;
				}

				return new Promise((resolve) => {
					this.tetherEl = popoverData.props.tetherEl;
					this.ignoreEls = popoverData.props.ignoreEls;
					this.popperConfig = popoverData.props.popperConfig;
					this.popperId = popoverData.props.popperId;
					this.currentInstance = newPopover(popoverData, this.target, resolve);
				});
			},

			closePopover() {
				this.currentInstance = undefined;
			},
		});

		if (!this.popoverApi) {
			this.popoverApi = api;
		}

		return {
			[PopoverAPIKey]: api,
		};
	},
};

export default {
	name: 'PopoverLayer',

	components: {
		PseudoWindow,
		MTransition,
		MTransitionFadeIn,
	},

	inject: {
		popoverApi: PopoverAPIKey,
	},

	data() {
		return {
			fadeInFn,
			fadeOutFn,
		};
	},

	popoverMixin,

	beforeDestroy() {
		this.popoverApi.closePopover();
	},

	methods: {
		handleBlur() {
			if (document.activeElement !== document.body) {
				this.popoverApi.closePopover();
			}
		},

		trackClickSrc({ target }) {
			this.popoverApi.clickSrc = target;
		},

		handleClick() {
			const $instance = this.$refs.instance;
			if (!$instance || !this.popoverApi.clickSrc) {
				return;
			}

			const clickInBubble = $instance.$el?.contains(this.popoverApi.clickSrc);
			const clickInAction = this.popoverApi.tetherEl?.contains(this.popoverApi.clickSrc);
			const clickInIgnores = this.popoverApi.ignoreEls?.some(
				(element) => element.contains?.(this.popoverApi.clickSrc),
			);

			if (!clickInBubble && !clickInAction && !clickInIgnores) {
				this.popoverApi.closePopover();
			}

			this.popoverApi.clickSrc = undefined;
		},
	},
};
</script>

<style module="$s">
.PopoverLayer {
	overflow: hidden;
}
</style>
