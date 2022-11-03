<template>
	<div
		:class="$s.Thumbnails"
		:style="thumbnailStyles"
	>
		<template
			v-for="(thumbnail, index) in thumbnails.slice(0, maxThumbnails)"
		>
			<m-image
				:key="`image-${index}`"
				:class="$s.ThumbnailImage"
				:src="thumbnail"
				@click="$emit('thumbnail:click', thumbnail)"
			/>
		</template>
		<div
			v-if="hasThumbnailOverflow"
			@click="$emit('overflow:click')"
		>
			<m-text
				:size="overflowTextSize"
			>
				+{{ overflowImageCount }}
			</m-text>
		</div>
	</div>
</template>

<script>
import { MImage } from '@square/maker/components/Image';
import { MText } from '@square/maker/components/Text';

const DEFAULT_THUMBNAIL_COUNT = 5;
const DEFAULT_OVERFLOW_TEXT_SIZE = -1;
const MIN_SIZE = -2;
const MAX_SIZE = 7;

export default {
	name: 'Thumbnails',

	components: {
		MImage,
		MText,
	},

	props: {
		/**
		 * Image urls to display for thumbnails
		 */
		thumbnails: {
			type: Array,
			required: true,
		},
		/**
		 * Size to display thumbnail images (in px)
		 */
		size: {
			type: Number,
			default: 32,
		},
		/**
		 * Maximum number of thumbnails to display
		 */
		maxThumbnails: {
			type: Number,
			default: DEFAULT_THUMBNAIL_COUNT,
		},
		/**
		 * Overflow text size. Size of text as step in fluid scale.
		 * @values 7, 6, 5, 4, 3, 2, 1, 0, -1, -2
		 */
		overflowTextSize: {
			type: Number,
			default: DEFAULT_OVERFLOW_TEXT_SIZE,
			validator: (size) => size >= MIN_SIZE && size <= MAX_SIZE,
		},
	},

	computed: {
		hasThumbnailOverflow() {
			return this.thumbnails.length > this.maxThumbnails;
		},

		overflowImageCount() {
			if (this.hasThumbnailOverflow) {
				return this.thumbnails.length - this.maxThumbnails;
			}
			return 0;
		},

		thumbnailStyles() {
			return {
				'--size': `${this.size}px`,
			};
		},
	},
};
</script>

<style module="$s">
.Thumbnails {
	display: flex;
	align-items: center;
}

.ThumbnailImage {
	width: var(--size);
	min-width: var(--size);
	max-width: var(--size);
	height: var(--size);
	margin-right: 8px;
}
</style>
