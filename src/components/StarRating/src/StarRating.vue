<template>
	<div
		:style="starComputedStyles"
		:role="isEditable ? 'slider' : 'img'"
		tabindex="0"
		aria-readonly="true"
		aria-valuemin="0"
		aria-valuemax="5"
		:aria-valuenow="displayedRating"
		:aria-label="ariaLabel"
		v-bind="$attrs"
		v-on="$listeners"
		@keydown="onKeyDown"
	>
		<m-star
			v-for="star in MAX_RATING"
			:key="star"
			:fill="fillForStarRating(star)"
			:color="resolvedColor"
			:class="$s.Star"
			@mouseenter="hoverStar(star)"
			@mouseleave="unhoverStar(star)"
			@click="clickStar(star)"
		/>
	</div>
</template>

<script>
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import cssValidator from '@square/maker/utils/css-validator';
import MStar from './Star.vue';

const MIN_RATING = 0;
const MAX_RATING = 5;
const HALF_RATING = 0.5;

const STAR_STYLES = {
	small: {
		height: 16,
		spacing: 1,
	},
	medium: {
		height: 24,
		spacing: 2,
	},
	large: {
		height: 32,
		spacing: 4,
	},
};

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		MStar,
	},

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	props: {
		/**
		 * Rating value from 0-5, determines fill state of stars
		 */
		rating: {
			type: Number,
			default: 0,
			validator: (rating) => rating >= MIN_RATING && rating <= MAX_RATING,
		},
		/**
		 * Size of rating component
		 */
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['small', 'medium', 'large'].includes(size),
		},
		/**
		 * Color of the star
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * Determines whether to bubble up click/hover events and show pointer cursor
		 */
		isEditable: {
			type: Boolean,
			default: false,
		},
		/**
		 * Accessible label for the star rating
		 */
		ariaLabel: {
			type: String,
			default: 'Rating',
		},
	},

	data() {
		return {
			MAX_RATING,
			hoveredRating: 0,
		};
	},

	computed: {
		...resolveThemeableProps('starrating', [
			'color',
		]),

		displayedRating() {
			return this.hoveredRating || this.rating;
		},

		starComputedStyles() {
			const styles = STAR_STYLES[this.size];

			return {
				'--star-height': `${styles.height}px`,
				'--star-spacing': `${styles.spacing}px`,
				'--star-cursor': this.isEditable ? 'pointer' : 'default',
			};
		},
	},

	methods: {
		fillForStarRating(rating) {
			if (this.displayedRating >= rating) {
				return 'full';
			}

			if (this.displayedRating >= rating - HALF_RATING) {
				return 'half';
			}

			return 'empty';
		},

		clickStar(star) {
			if (this.isEditable) {
				this.$emit('star-click', star);
			}
		},

		hoverStar(star) {
			if (this.isEditable) {
				this.$emit('star-hover', star);
				this.hoveredRating = star;
			}
		},

		unhoverStar(star) {
			if (this.isEditable) {
				this.$emit('star-unhover', star);
				this.hoveredRating = 0;
			}
		},

		onKeyDown(event) {
			if (!this.isEditable) {
				return;
			}

			const { key } = event;
			if (key === 'ArrowRight' || key === 'ArrowUp') {
				event.preventDefault();
				const increment = 1;
				const newRating = Math.min(this.displayedRating + increment, MAX_RATING);
				this.$emit('star-click', newRating);
			} else if (key === 'ArrowLeft' || key === 'ArrowDown') {
				event.preventDefault();
				const decrement = 1;
				const newRating = Math.max(this.displayedRating - decrement, MIN_RATING);
				this.$emit('star-click', newRating);
			}
		},
	},
};
</script>

<style module="$s">
.Star {
	height: var(--star-height);
	padding: 0 var(--star-spacing);
	cursor: var(--star-cursor);
}

.Star:first-of-type {
	padding-left: 0;
}

.Star:last-of-type {
	padding-right: 0;
}
</style>
