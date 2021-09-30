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
		class="fluid-carousel__container"
	>
		<div
			class="fluid-carousel__header"
		>
			<slot name="header"	/>
		</div>
		<div
			ref="sliderWindow"
			:class="fluidCarouselClasses"
			class="fluid-carousel"
		>
			<div
				ref="slider"
				:class="sliderClasses"
				class="fluid-carousel__slider"
			>
				<slot />
			</div>
			<pseudo-window
				@resize="onResize"
			/>
		</div>
		<div
			class="fluid-carousel__footer"
		>
			<slot name="footer" />
		</div>
	</div>
</template>

<script>
import PseudoWindow from 'vue-pseudo-window';
import { throttle } from 'lodash';
import { CAROUSEL_BACK_EVENT, CAROUSEL_FORWARD_EVENT } from './constants';

export default {
	components: {
		PseudoWindow,
	},

	props: {
		isDraggable: {
			type: Boolean,
			default: false,
		},
		itemCount: {
			type: Number,
			default: 0,
		},
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
			prevSlideForwards: 0,
			prevSlideBack: 0,
			prevItemCount: 0,
			lastDragPageX: 0,
			lastDragPageY: 0,
			throttleMousemove: throttle(this.handleMousemove, 20),
			sliderWidth: 0,
			sliderScrollWidth: 0,
		};
	},

	computed: {
		el() {
			return this.$refs.sliderWindow;
		},

		fluidCarouselClasses() {
			return {
				'is-draggable': this.isDraggable,
			};
		},

		scrollOffsetDirection() {
			return this.isVertical
				? 'top'
				: 'left';
		},

		sliderClasses() {
			return {
				'is-vertical': this.isVertical,
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

		if (this.lastSlideBack !== this.prevSlideBack) {
			this.prevSlideBack = this.lastSlideBack;
			this.scrollBack();
		} else if (this.lastSlideForwards !== this.prevSlideForwards) {
			this.prevSlideForwards = this.lastSlideForwards;
			this.scrollForwards();
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
			const newScrollOffset = scrollPixelsDiff > 0
				? scrollPixelsDiff
				: 0;

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

		handleMousedown(e) {
			if (this.isVertical) {
				this.lastDragPageY = e.pageY;
			} else {
				this.lastDragPageX = e.pageX;
			}

			this.el.addEventListener('mousemove', this.throttleMousemove, true);
		},

		handleMouseleave() {
			this.el.removeEventListener('mousemove', this.throttleMousemove, true);
		},

		handleMouseup() {
			if (this.pixelsToScroll > 0 && this.snapScroll) {
				this.initCarouselScroll({}, true);
			}

			this.el.removeEventListener('mousemove', this.throttleMousemove, true);
		},

		/**
		 * Handles the mousemove when the slider is dragged
		 *
		 * @param {Event} e
		 */
		handleMousemove(e) {
			this.initCarouselScroll(e);
			this.handleCarouselMove();
		},

		handleDragstart(e) {
			e.preventDefault();
		},

		handleCarouselMove() {
			if (this.checkIsNearEnd() && this.shouldEmitEnd) {
				this.$emit('scroll:end');
				console.log('scroll:end');
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
				- (this.getBoundingClientRectMeasurement() * 2);
		},

		checkIsAtBeginning() {
			const sliderScrollOffset = this.isVertical
				? this.el.scrollTop
				: this.el.scrollLeft;
			return sliderScrollOffset === 0;
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
		scrollVertical(e = {}, snapScroll = false) {
			if (snapScroll) {
				const snapScrollOffset = this.getSnapScrollOffset();
				this.scrollCarouselElement(snapScrollOffset);
				this.lastDragPageY = snapScrollOffset;
				return;
			}

			const pixelsToScroll = this.lastDragPageY - e.pageY;
			this.lastDragPageY = e.pageY;
			this.el.scrollTop += pixelsToScroll;
		},

		/**
		 * Scrolls the carousel horizontally on drag
		 *
		 * @param {Event} e
		 * @param {Boolean} snapScroll
		 */
		scrollHorizontal(e = {}, snapScroll = false) {
			if (snapScroll) {
				const snapScrollOffset = this.getSnapScrollOffset();
				this.scrollCarouselElement(snapScrollOffset);
				this.lastDragPageX = snapScrollOffset;
				return;
			}

			const pixelsToScroll = this.lastDragPageX - e.pageX;
			this.lastDragPageX = e.pageX;
			this.el.scrollLeft += pixelsToScroll;
		},

		/**
		 * Scroll the carousel based on given direction
		 *
		 * @param {Event} e
		 * @param {Boolean} snapScroll
		 */
		initCarouselScroll(e = {}, snapScroll = false) {
			if (this.isVertical) {
				this.scrollVertical(e, snapScroll);
			} else {
				this.scrollHorizontal(e, snapScroll);
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
				return 0;
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
			if (this.pixelsToScroll > 0) {
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

<style scoped>
.fluid-carousel {
	width: 100%;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: none;
	scrollbar-width: none;
}

.fluid-carousel::-webkit-scrollbar {
	width: 0;
	display: none;
	height: 0;
	background: transparent; /* make scrollbar transparent */
}

.fluid-carousel:hover {
	cursor: grab;
}

.fluid-carousel.is-draggable {
	cursor: grab;

	&:active {
		cursor: grabbing;
	}
}

.fluid-carousel__slider {
	display: inline-flex;
	min-width: 100%;

	&.is-vertical {
		flex-direction: column;
	}
}
</style>
