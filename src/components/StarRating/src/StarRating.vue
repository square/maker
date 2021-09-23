<template>
	<div :style="starComputedStyles">
		<star
			v-for="star in MAX_RATING"
			:key="star"
			:fill="fillForStarRating(star)"
			:color="color"
			:class="$s.Star"
			@mouseenter="hoverStar(star)"
			@mouseleave="unhoverStar(star)"
			@click="clickStar(star)"
		/>
	</div>
</template>

<script>
import chroma from 'chroma-js';
import Star from './Star.vue';

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

export default {
	name: 'StarRating',

	components: {
		Star,
	},

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
			default: '#FFBF00',
			validator: (color) => chroma.valid(color),
		},

		/**
		 * Determines whether to bubble up click/hover events and show pointer cursor
		 */
		isEditable: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			MAX_RATING,
			hoveredRating: 0,
		};
	},

	computed: {
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
