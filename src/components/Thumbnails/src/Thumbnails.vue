<template>
	<div
		:class="$s.Thumbnails"
		:style="thumbnailStyles"
		role="group"
		:aria-label="thumbnailsAriaLabel"
	>
		<m-image
			v-for="(thumbnailSrc, index) in visibleThumbnails"
			:key="thumbnailSrc"
			:class="$s.ThumbnailImage"
			:src="thumbnailSrc"
			:alt="getThumbnailAlt(thumbnailSrc, index)"
			:role="isClickable ? 'button' : 'img'"
			:tabindex="isClickable ? 0 : undefined"
			:aria-label="isClickable ? getThumbnailClickLabel(thumbnailSrc, index) : undefined"
			@click="$emit('thumbnail:click', thumbnailSrc)"
			@keydown="onThumbnailKeydown($event, thumbnailSrc)"
		/>
		<div
			v-if="overflowImageCount > 0"
			:class="$s.ThumbnailOverflow"
			role="button"
			:tabindex="isOverflowClickable ? 0 : undefined"
			:aria-label="computedOverflowAriaLabel"
			@click="$emit('overflow:click')"
			@keydown="onOverflowKeydown"
		>
			<m-text
				:size="overflowTextSize"
				aria-hidden="true"
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
		/**
		 * Alt text for thumbnail images. Can be a string (used for all) or
		 * array of strings (one per thumbnail).
		 */
		thumbnailAlt: {
			type: [String, Array],
			default: () => [],
		},
		/**
		 * ARIA label for the thumbnails group
		 */
		thumbnailsAriaLabel: {
			type: String,
			default: 'Thumbnail images',
		},
		/**
		 * ARIA label for the overflow button
		 */
		overflowAriaLabel: {
			type: String,
			default: undefined,
		},
	},

	computed: {
		visibleThumbnails() {
			return this.thumbnails.slice(0, this.maxThumbnails);
		},

		overflowImageCount() {
			return this.thumbnails.length - this.maxThumbnails;
		},

		isClickable() {
			return !!this.$listeners['thumbnail:click'];
		},

		isOverflowClickable() {
			return !!this.$listeners['overflow:click'];
		},

		computedOverflowAriaLabel() {
			return this.overflowAriaLabel
				|| `View ${this.overflowImageCount} more images`;
		},

		thumbnailStyles() {
			const styles = {
				'--size': this.size,
			};
			if (this.isClickable) {
				styles['--thumbnail-cursor'] = 'pointer';
			}
			if (this.isOverflowClickable) {
				styles['--overflow-cursor'] = 'pointer';
			}
			return styles;
		},
	},

	methods: {
		getThumbnailAlt(thumbnailSource, index) {
			if (Array.isArray(this.thumbnailAlt)) {
				// eslint-disable-next-line no-magic-numbers
				return this.thumbnailAlt[index] || `Thumbnail ${index + 1}`;
			}
			if (typeof this.thumbnailAlt === 'string' && this.thumbnailAlt) {
				return this.thumbnailAlt;
			}
			// eslint-disable-next-line no-magic-numbers
			return `Thumbnail ${index + 1}`;
		},

		getThumbnailClickLabel(thumbnailSource, index) {
			// eslint-disable-next-line no-magic-numbers
			return `View thumbnail ${index + 1}`;
		},

		onThumbnailKeydown(event, thumbnailSource) {
			if (!this.isClickable) {
				return;
			}

			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				this.$emit('thumbnail:click', thumbnailSource);
			}
		},

		onOverflowKeydown(event) {
			if (!this.isOverflowClickable) {
				return;
			}

			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				this.$emit('overflow:click');
			}
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

.ThumbnailImage,
.ThumbnailOverflow {
	width: var(--size);
	min-width: var(--size);
	max-width: var(--size);
	height: var(--size);
}

.ThumbnailImage {
	border-radius: 4px;
	cursor: var(--thumbnail-cursor, auto);
}

.ThumbnailImage:focus {
	outline: 2px solid #06c;
	outline-offset: 2px;
}

.ThumbnailOverflow {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
	border: 1px solid #ccc;
	border-radius: 4px;
	cursor: var(--overflow-cursor, default);
}

.ThumbnailOverflow:focus {
	outline: 2px solid #06c;
	outline-offset: 2px;
}

.ThumbnailOverflow:hover {
	background-color: #e8e8e8;
}
</style>
