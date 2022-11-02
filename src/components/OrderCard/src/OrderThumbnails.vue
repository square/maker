<template>
	<div
		:class="$s.OrderThumbnails"
		:style="thumbnailsStyles"
	>
		<template
			v-for="(thumbnail, index) in thumbnails.slice(0, MAX_THUMBNAIL_COUNT)"
		>
			<m-image
				:key="`image-${index}`"
				:class="$s.OrderThumbnailImage"
				:src="thumbnail"
			/>
		</template>
		<div
			v-if="hasThumbnailOverflow"
		>
			<m-text
				:size="-1"
			>
				+{{ overflowImageCount }}
			</m-text>
		</div>
	</div>
</template>

<script>
import { MImage } from '@square/maker/components/Image';
import { MText } from '@square/maker/components/Text';

const MAX_THUMBNAIL_COUNT = 5;

export default {
	name: 'OrderThumbnails',

	components: {
		MImage,
		MText,
	},

	props: {
		thumbnails: {
			type: Array,
			required: true,
		},
		size: {
			type: Number,
			default: 32,
		},
	},

	data() {
		return {
			MAX_THUMBNAIL_COUNT,
		};
	},

	computed: {
		hasThumbnailOverflow() {
			return this.thumbnails.length > MAX_THUMBNAIL_COUNT;
		},

		overflowImageCount() {
			if (this.hasThumbnailOverflow) {
				return this.thumbnails.length - MAX_THUMBNAIL_COUNT;
			}
			return 0;
		},

		thumbnailsStyles() {
			return {
				'--size': `${this.size}px`,
			};
		},
	},
};
</script>

<style module="$s">
.OrderThumbnails {
	display: flex;
	align-items: center;
}

.OrderThumbnailImage {
	width: var(--size);
	min-width: var(--size);
	max-width: var(--size);
	height: var(--size);
	margin-right: 8px;
	border-radius: 4px;
}
</style>
