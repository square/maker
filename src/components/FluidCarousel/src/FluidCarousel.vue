<!--
  sliderWindow
  ┌──────────────────────────┐         slider
  │ ┌────┐ ┌────┐ ┌────┐ ┌───┼┐ ┌────┐ ┌────┐
  │ │    │ │    │ │    │ │   ││ │    │ │    │
  │ └────┘ └────┘ └────┘ └───┼┘ └────┘ └────┘
  └──────────────────────────┘
-->
<template>
	<div
		:class="containerClasses"
	>
		<div
			ref="sliderHeader"
		>
			<slot name="header"	/>
		</div>
		<div
			ref="sliderWindow"
			:class="[$s.FluidCarousel, fluidCarouselClasses]"
		>
			<div
				ref="slider"
				:class="[$s.FluidCarouselSlider, sliderClasses]"
			>
				<slot />
			</div>
			<pseudo-window
				@resize="onResize"
			/>
		</div>
		<div
			ref="sliderFooter"
		>
			<slot name="footer" />
		</div>
	</div>
</template>

<script>
import PseudoWindow from 'vue-pseudo-window';
import { throttle } from 'lodash';
import { CAROUSEL_BACK_EVENT, CAROUSEL_FORWARD_EVENT } from './constants';

const THROTTLE_MOUSE_MOVE_MS = 20;
const ZERO_PIXELS = 0;

export default {

	components: {
		PseudoWindow,
	},

	provide() {
		return {
			isVertical: this.isVertical,
		};
	},

	props: {
		/**
		 * Whether the user can navigate the carousel by dragging
		 */
		isDraggable: {
			type: Boolean,
			default: false,
		},
		itemCount: {
			type: Number,
			default: 0,
		},
		/**
		 * Whether the carousel has a vertical layout - default is horizontal
		 */
		isVertical: {
			type: Boolean,
			default: false,
		},
		pixelsToScroll: {
			type: Number,
			default: 0,
		},
		snapScroll: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			shouldEmitEnd: true,
			prevItemCount: 0,
			lastDragPageX: 0,
			lastDragPageY: 0,
			throttleMousemove: throttle(this.handleMousemove, THROTTLE_MOUSE_MOVE_MS),
			sliderWidth: 0,
			sliderScrollWidth: 0,
		};
	},

	computed: {
		el() {
			return this.$refs.sliderWindow;
		},

		containerClasses() {
			return {
				[this.$s.VerticalFluidCarouselContainer]: this.isVertical,
			};
		},

		fluidCarouselClasses() {
			return {
				[this.$s.FluidCarouselDraggable]: this.isDraggable,
			};
		},

		scrollOffsetDirection() {
			return this.isVertical
				? 'top'
				: 'left';
		},

		sliderClasses() {
			return {
				[this.$s.VerticalFluidCarouselSlider]: this.isVertical,
			};
		},

		isOverflowing() {
			return this.sliderWidth < this.sliderScrollWidth;
		},
	},

	watch: {
		isOverflowing(value) {
			this.$emit('overflowing', value);
		},
	},

	created() {
		this.$on(CAROUSEL_BACK_EVENT, () => {
			this.scrollBack();
		});

		this.$on(CAROUSEL_FORWARD_EVENT, () => {
			this.scrollForwards();
		});
	},

	mounted() {
		this.el.addEventListener('scroll', this.handleCarouselMove);
		if (this.isDraggable) {
			this.el.addEventListener('mousedown', this.handleMousedown, true);
			this.el.addEventListener('mouseup', this.handleMouseup, true);
			this.el.addEventListener('mouseleave', this.handleMouseleave);
			this.el.addEventListener('dragstart', this.handleDragstart, true);
		}
		this.$emit('carousel:mounted');
		this.onResize();
	},

	beforeDestroy() {
		this.el.removeEventListener('scroll', this.handleCarouselMove);
		this.throttleMousemove.cancel();
		if (this.isDraggable) {
			this.el.removeEventListener('mousedown', this.handleMousedown);
			this.el.removeEventListener('mouseup', this.handleMouseup);
			this.el.removeEventListener('mouseleave', this.handleMouseleave);
			this.el.removeEventListener('dragstart', this.handleDragstart);
		}
	},

	updated() {
		this.sliderScrollWidth = this.$refs.slider.scrollWidth;
		if (this.itemCount > this.prevItemCount) {
			this.shouldEmitEnd = true;
			this.prevItemCount = this.itemCount;
		}
	},

	methods: {
		/**
		 * Scroll the carousel backwards
		 *
		 * @return {void}
		 */
		scrollBack() {
			const scrollPixelsDiff = this.getCurrentSliderOffset() - this.getScrollPixels();
			const newScrollOffset = scrollPixelsDiff > ZERO_PIXELS
				? scrollPixelsDiff
				: ZERO_PIXELS;

			this.scrollCarouselElement(newScrollOffset);
		},

		/**
		 * Scroll the carousel forwards
		 *
		 * @return {void}
		 */
		scrollForwards() {
			const maxScrollDistance = this.getSliderScrollMeasurement()
				- this.getBoundingClientRectMeasurement();

			let newScrollOffset = this.getCurrentSliderOffset() + this.getScrollPixels();
			newScrollOffset = newScrollOffset < maxScrollDistance
				? newScrollOffset
				: maxScrollDistance;

			this.scrollCarouselElement(newScrollOffset);
		},

		/**
		 * Gets the current slider offset on carousel move
		 * Must be a method in order to get current offset
		 *
		 * @return {void}
		 */
		getCurrentSliderOffset() {
			return this.isVertical
				? this.el.scrollTop
				: this.el.scrollLeft;
		},

		handleMousedown(event) {
			if (this.isVertical) {
				this.lastDragPageY = event.pageY;
			} else {
				this.lastDragPageX = event.pageX;
			}

			this.el.addEventListener('mousemove', this.throttleMousemove, true);
		},

		handleMouseleave() {
			this.el.removeEventListener('mousemove', this.throttleMousemove, true);
		},

		handleMouseup() {
			if (this.pixelsToScroll > ZERO_PIXELS && this.snapScroll) {
				this.initCarouselScroll({}, true);
			}

			this.el.removeEventListener('mousemove', this.throttleMousemove, true);
		},

		/**
		 * Handles the mousemove when the slider is dragged
		 *
		 * @param {Event} event
		 */
		handleMousemove(event) {
			this.initCarouselScroll(event);
			this.handleCarouselMove();
		},

		handleDragstart(event) {
			event.preventDefault();
		},

		handleCarouselMove() {
			if (this.checkIsNearEnd() && this.shouldEmitEnd) {
				this.$emit('scroll:end');
				this.shouldEmitEnd = false;
			}
			this.$emit('carousel:at-first-position', this.checkIsAtBeginning());
			this.$emit('carousel:at-last-position', this.checkIsAtEnd());
		},

		checkIsNearEnd() {
			const sliderScrollOffset = this.isVertical
				? this.el.scrollTop
				: this.el.scrollLeft;
			return sliderScrollOffset > this.getSliderScrollMeasurement()
				// eslint-disable-next-line no-magic-numbers
				- (this.getBoundingClientRectMeasurement() * 2);
		},

		checkIsAtBeginning() {
			const sliderScrollOffset = this.isVertical
				? this.el.scrollTop
				: this.el.scrollLeft;
			return sliderScrollOffset === ZERO_PIXELS;
		},

		checkIsAtEnd() {
			const sliderScrollOffset = this.isVertical
				? this.el.scrollTop
				: this.el.scrollLeft;
			return Math.ceil(sliderScrollOffset + this.getBoundingClientRectMeasurement())
				=== this.getSliderScrollMeasurement();
		},

		/**
		 * Scrolls the carousel vertically on drag
		 *
		 * @param {Event} e
		 * @param {Boolean} snapScroll
		 */
		scrollVertical(event = {}, snapScroll = false) {
			if (snapScroll) {
				const snapScrollOffset = this.getSnapScrollOffset();
				this.scrollCarouselElement(snapScrollOffset);
				this.lastDragPageY = snapScrollOffset;
				return;
			}

			const pixelsToScroll = this.lastDragPageY - event.pageY;
			this.lastDragPageY = event.pageY;
			this.el.scrollTop += pixelsToScroll;
		},

		/**
		 * Scrolls the carousel horizontally on drag
		 *
		 * @param {Event} e
		 * @param {Boolean} snapScroll
		 */
		scrollHorizontal(event = {}, snapScroll = false) {
			if (snapScroll) {
				const snapScrollOffset = this.getSnapScrollOffset();
				this.scrollCarouselElement(snapScrollOffset);
				this.lastDragPageX = snapScrollOffset;
				return;
			}

			const pixelsToScroll = this.lastDragPageX - event.pageX;
			this.lastDragPageX = event.pageX;
			this.el.scrollLeft += pixelsToScroll;
		},

		/**
		 * Scroll the carousel based on given direction
		 *
		 * @param {Event} e
		 * @param {Boolean} snapScroll
		 */
		initCarouselScroll(event = {}, snapScroll = false) {
			if (this.isVertical) {
				this.scrollVertical(event, snapScroll);
			} else {
				this.scrollHorizontal(event, snapScroll);
			}
		},

		/**
		 * Scroll the carousel element
		 *
		 * @param {Number} scrollOffset
		 */
		scrollCarouselElement(scrollOffset) {
			this.el.scrollTo({ [this.scrollOffsetDirection]: scrollOffset, behavior: 'smooth' });
			this.handleCarouselMove();
		},

		/**
		 * If snap scroll is enabled, get the item that we should snap to when drag is complete
		 *
		 * @return {Number}
		 */
		getSnapScrollOffset() {
			const targetSlide = Math.round(this.getCurrentSliderOffset() / this.pixelsToScroll);
			return targetSlide * this.pixelsToScroll;
		},

		/**
		 * Get the bounding rect measurement for the parent element
		 *
		 * @return {Number}
		 */
		getBoundingClientRectMeasurement() {
			return this.isVertical
				? this.el.getBoundingClientRect().height
				: this.el.getBoundingClientRect().width;
		},

		/**
		 * Gets the slider scroll measurement
		 *
		 * @return {Number}
		 */
		getSliderScrollMeasurement() {
			if (!this.$refs.slider) {
				return ZERO_PIXELS;
			}

			return this.isVertical
				? this.$refs.slider.scrollHeight
				: this.$refs.slider.scrollWidth;
		},

		/**
		 * Get the updated scroll pixels for the container
		 *
		 * @return {Number}
		 */
		getScrollPixels() {
			if (this.pixelsToScroll > ZERO_PIXELS) {
				return this.pixelsToScroll;
			}

			return this.getBoundingClientRectMeasurement();
		},

		/**
		 * Updates sliderWidth and sliderScrollWidth when there is a window resize event
		 */
		onResize() {
			this.sliderWidth = this.el.clientWidth;
			this.sliderScrollWidth = this.$refs.slider.scrollWidth;
		},
	},
};
</script>

<style module="$s">
.VerticalFluidCarouselContainer {
	height: inherit;
	display: flex;
	flex-flow: column;
}

.FluidCarousel {
	width: 100%;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		width: 0;
		display: none;
		height: 0;
		background: transparent; /* make scrollbar transparent */
	}

	&.FluidCarouselDraggable {
		cursor: grab;

		&:active {
			cursor: grabbing;
		}
	}
}

.FluidCarouselSlider {
	display: inline-flex;
	min-width: 100%;

	&.VerticalFluidCarouselSlider {
		flex-direction: column;
		height: var(--slider-computed-height);
	}
}
</style>
