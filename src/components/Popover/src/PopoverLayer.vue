<template>
	<div>
		<pseudo-window @blur.passive="handleBlur">
			<pseudo-window
				@mousedown="trackClickSrc"
				@touchstart="trackClickSrc"
				@click.capture="handleClick"
				@touchend="handleClick"
			>
				<div
					:id="popoverApi.target"
					ref="portal"
					:class="$s.PopoverLayer"
				/>
			</pseudo-window>
		</pseudo-window>
	</div>
</template>

<script>
import { fadeInFn, fadeOutFn } from '@square/maker/utils/transitions';
import PseudoWindow from 'vue-pseudo-window';
import Vue, { inject, provide } from 'vue';
import { PopoverAPIKey } from './keys';
import { getPopoverId } from './utils';

function createPopoverConfig() {
	/**
	 * This is to avoid name collisions for the popover portal if
	 * multiple exist at the same 'level'.
	 */
	const layerId = getPopoverId();
	const target = `popover-portal-${layerId}`;

	const api = Vue.observable({
		currentInstance: undefined,
		actionEl: undefined,
		ignoreEls: [],
		clickSrc: undefined,
		layerId,
		target,
		targetSelector: `#${target}`,
		setPopover(popoverData) {
			if (this.currentInstance) {
				this.closePopover();
			}

			if (!popoverData || !popoverData.actionEl) {
				return;
			}

			this.actionEl = popoverData.actionEl;
			this.ignoreEls = popoverData.ignoreEls;
			this.currentInstance = popoverData.id;
		},

		closePopover() {
			this.currentInstance = undefined;
		},
	});

	return { api, layerId, target };
}

const usePopoverLayer = () => {
	const { api } = createPopoverConfig();
	const parentPopoverApi = inject(PopoverAPIKey, undefined);

	provide(PopoverAPIKey, api);

	return parentPopoverApi || api;
};

const popoverMixin = {
	provide() {
		const { api } = createPopoverConfig();

		if (!this.popoverApi) {
			this.popoverApi = api;
		}

		return {
			[PopoverAPIKey]: api,
		};
	},
};

export default {
	components: {
		PseudoWindow,
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
	usePopoverLayer,

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
			const $portal = this.$refs.portal;
			if (!$portal || !this.popoverApi.clickSrc || !this.popoverApi.currentInstance) {
				return;
			}

			const clickInContainer = $portal.contains(this.popoverApi.clickSrc);
			const clickInAction = this.popoverApi.actionEl?.contains(this.popoverApi.clickSrc);
			const clickInIgnores = this.popoverApi.ignoreEls?.some(
				(element) => element.contains?.(this.popoverApi.clickSrc),
			);

			if (!clickInContainer && !clickInAction && !clickInIgnores) {
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
