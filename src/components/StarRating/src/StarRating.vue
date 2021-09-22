<template>
	<div :style="starComputedStyles">
		<star
			v-for="star in stars"
			:key="star"
			:fill="fillForStar(star)"
			:class="$s.Star"
			@hover="hoverStar(star)"
			@unhover="unhoverStar(star)"
			@click="clickStar(star)"
		/>
	</div>
</template>

<script>
import Star from './Star.vue';

const MIN_RATING = 0;
const MAX_RATING = 5;
const HALF_RATING = 0.5;
// eslint-disable-next-line no-magic-numbers
const stars = [1, 2, 3, 4, 5];

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
			validate: (size) => ['medium', 'large'].includes(size),
		},

		/**
		 * Determines whether to bubble up click/hover events and show pointer cursor
		 */
		selectable: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			stars,
			styles: {
				medium: {
					height: 24,
					spacing: 2,
				},
				large: {
					height: 32,
					spacing: 4,
				},
			},
		};
	},

	computed: {
		starComputedStyles() {
			const styles = this.styles[this.size];

			return {
				'--star-height': `${styles.height}px`,
				'--star-spacing': `${styles.spacing}px`,
				'--star-cursor': this.selectable ? 'pointer' : 'default',
			};
		},
	},

	methods: {
		fillForStar(star) {
			if (this.rating >= star) {
				return 'full';
			}

			if (this.rating >= star - HALF_RATING) {
				return 'half';
			}

			return 'empty';
		},

		clickStar(star) {
			if (this.selectable) {
				this.$emit('star-click', star);
			}
		},

		hoverStar(star) {
			if (this.selectable) {
				this.$emit('star-hover', star);
			}
		},

		unhoverStar(star) {
			if (this.selectable) {
				this.$emit('star-unhover', star);
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
