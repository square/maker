<template>
	<star-rating
		:rating="displayedRating"
		:size="size"
		:selectable="true"
		@star-click="$emit('star-click', $event)"
		@star-hover="setStarHover($event)"
		@star-unhover="setStarHover(undefined)"
	/>
</template>

<script>
import StarRating from './StarRating.vue';

export default {
	name: 'StarRatingSelector',

	components: {
		StarRating,
	},

	props: {
		/**
		 * Rating value from 0-5, determines fill state of stars
		 */
		rating: {
			type: Number,
			default: 0,
		},

		/**
		 * Size of rating component
		 */
		size: {
			type: String,
			default: 'medium',
		},
	},

	data() {
		return {
			hoveredRating: undefined,
		};
	},

	computed: {
		displayedRating() {
			return this.hoveredRating || this.rating;
		},
	},

	methods: {
		setStarHover(star) {
			this.hoveredRating = star;
		},
	},
};
</script>

<style module="$s">
/* TODO */
</style>
