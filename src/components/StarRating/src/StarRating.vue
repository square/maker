<template>
	<div :style="starComputedStyles">
		<star
			v-for="star in STAR_COUNT"
			:key="star"
			:fill="fillForStar(star)"
			:color="color"
			:class="$s.Star"
			@hover="hoverStar(star)"
			@unhover="unhoverStar(star)"
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
// eslint-disable-next-line no-magic-numbers
const STAR_COUNT = 5;

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
			validate: (rating) => rating >= MIN_RATING && rating <= MAX_RATING,
		},

		/**
		 * Size of rating component
		 */
		size: {
			type: String,
			default: 'medium',
			validate: (size) => ['small', 'medium', 'large'].includes(size),
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
		editable: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			STAR_COUNT,
			hoveredRating: undefined,
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
				'--star-cursor': this.editable ? 'pointer' : 'default',
			};
		},
	},

	methods: {
		fillForStar(star) {
			if (this.displayedRating >= star) {
				return 'full';
			}

			if (this.displayedRating >= star - HALF_RATING) {
				return 'half';
			}

			return 'empty';
		},

		clickStar(star) {
			if (this.editable) {
				this.$emit('star-click', star);
			}
		},

		hoverStar(star) {
			if (this.editable) {
				this.$emit('star-hover', star);
				this.hoveredRating = star;
			}
		},

		unhoverStar(star) {
			if (this.editable) {
				this.$emit('star-unhover', star);
				this.hoveredRating = undefined;
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
