<template>
	<div
		:class="$s.FluidCarouselControls"
	>
		<div
			:class="[ $s.CarouselArrow, carouselArrowClasses ]"
			@click="handleClick(CAROUSEL_BACK_EVENT)"
		>
			<chevron-up
				v-if="isVertical"
				:class="$s.CarouselChevronIcon"
			/>
			<chevron-left
				v-else
				:class="$s.CarouselChevronIcon"
			/>
		</div>
		<div
			:class="[ carouselArrowClasses, $s.CarouselArrow ]"
			@click="handleClick(CAROUSEL_FORWARD_EVENT)"
		>
			<chevron-down
				v-if="isVertical"
				:class="$s.CarouselChevronIcon"
			/>
			<chevron-right
				v-else
				:class="$s.CarouselChevronIcon"
			/>
		</div>
	</div>
</template>

<script>
import ChevronLeft from '@square/maker-icons/ChevronLeft';
import ChevronRight from '@square/maker-icons/ChevronRight';
import ChevronUp from '@square/maker-icons/ChevronUp';
import ChevronDown from '@square/maker-icons/ChevronDown';
import { CAROUSEL_BACK_EVENT, CAROUSEL_FORWARD_EVENT } from './constants';

export default {

	components: {
		ChevronLeft,
		ChevronRight,
		ChevronUp,
		ChevronDown,
	},

	inject: [
		'isVertical',
	],

	props: {
		/**
		 * Whether the navigation buttons are disabled
		 */
		isEnabled: {
			type: Boolean,
			default: true,
		},
	},

	data() {
		return {
			CAROUSEL_BACK_EVENT,
			CAROUSEL_FORWARD_EVENT,
		};
	},

	computed: {
		/**
		 * Computed classes for the carousel arrow
		 */
		carouselArrowClasses() {
			return ({
				[this.$s.CarouselArrowDisabled]: !this.isEnabled,
			});
		},
	},

	methods: {
		handleClick(eventName) {
			if (this.isEnabled) {
				this.$parent.$emit(eventName, Date.now());
			}
		},
	},
};
</script>

<style module="$s">
.FluidCarouselControls {
	--chevron-size: 24px;
	display: inline-flex;
	gap: 4px;
}

.CarouselChevronIcon {
	width: var(--chevron-size);
	height: var(--chevron-size);
}

.CarouselArrow {
	display: inline-block;
	color: #70767c;
	cursor: pointer;
	height: var(--chevron-size);
}

.CarouselArrowDisabled {
	opacity: 0.4;
	cursor: default;
}
</style>
