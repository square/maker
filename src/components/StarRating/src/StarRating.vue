<template>
	<div :style="starComputedStyles">
		<star
			v-for="star in stars"
			:key="star"
			:fill="fillForStar(star)"
			:class="$s.Star"
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
	},

	data() {
		return {
			stars,
			sizing: {
				medium: {
					height: 24,
					spacing: 4,
				},
				large: {
					height: 32,
					spacing: 8,
				},
			},
		};
	},

	computed: {
		starComputedStyles() {
			const sizing = this.sizing[this.size];

			return {
				'--star-height': `${sizing.height}px`,
				'--star-spacing': `${sizing.spacing}px`,
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
	},
};
</script>

<style module="$s">
.Star {
	height: var(--star-height);
}

.Star + .Star {
	margin-left: var(--star-spacing);
}
</style>
