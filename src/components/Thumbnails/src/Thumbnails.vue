<template>
	<div
		:class="$s.Thumbnails"
		:style="thumbnailStyles"
	>
		<m-image
			v-for="thumbnailSrc in visibleThumbnails"
			:key="thumbnailSrc"
			:class="$s.ThumbnailImage"
			:src="thumbnailSrc"
			@click="$emit('thumbnail:click', thumbnailSrc)"
		/>
		<div
			v-if="overflowImageCount > 0"
			:class="$s.ThumbnailOverflow"
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
import cssValidator from '@square/maker/utils/css-validator';
import { MImage } from '@square/maker/components/Image';
import { MText } from '@square/maker/components/Text';

const MIN_TEXT_SIZE = -2;
const MAX_TEXT_SIZE = 7;

export default {
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
		 * Size to display thumbnail images
		 */
		size: {
			type: String,
			default: '32px',
			validator: cssValidator('width'),
		},
		/**
		 * Maximum number of thumbnails to display
		 */
		maxThumbnails: {
			type: Number,
			default: 5,
			validator: (count) => count >= 0,
		},
		/**
		 * Overflow text size. Size of text as step in fluid scale (-2 to 7).
		 */
		overflowTextSize: {
			type: Number,
			default: 0,
			validator: (size) => size >= MIN_TEXT_SIZE && size <= MAX_TEXT_SIZE,
		},
	},

	computed: {
		visibleThumbnails() {
			return this.thumbnails.slice(0, this.maxThumbnails);
		},

		overflowImageCount() {
			return this.thumbnails.length - this.maxThumbnails;
		},

		thumbnailStyles() {
			const styles = {
				'--size': this.size,
			};
			if (this.$listeners['thumbnail:click']) {
				styles['--thumbnail-cursor'] = 'pointer';
			}
			if (this.$listeners['overflow:click']) {
				styles['--overflow-cursor'] = 'pointer';
			}
			return styles;
		},
	},
};
</script>

<style module="$s">
.Thumbnails {
	display: flex;
	gap: 8px;
	align-items: center;
}

.ThumbnailImage {
	cursor: var(--thumbnail-cursor, auto);
}

.ThumbnailImage,
.ThumbnailOverflow {
	width: var(--size);
	min-width: var(--size);
	max-width: var(--size);
	height: var(--size);
}

.ThumbnailOverflow {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: var(--overflow-cursor, default);
}
</style>
