<template>
	<div :class="$s.ImageUploaderContainer">
		<image-picker
			v-if="canUploadImage"
			:class="$s.ImageUploaderItem"
			:multiple="canUploadMultiple"
			:accept="accept"
			@selectImages="selectImages"
		/>
		<image-selection
			v-for="image of images"
			:key="image.id"
			:image="image"
			:class="$s.ImageUploaderItem"
			@removeImage="removeImage"
		/>
	</div>
</template>

<script>
import ImagePicker from './ImagePicker.vue';
import ImageSelection from './ImageSelection.vue';
import { IMAGE_SELECTOR_STATUSES } from './constants';

const MAX_PROGRESS = 100;
const ID_INCREMENT = 1;
const NO_MORE_IMAGES_COUNT = 0;

export default {
	name: 'MImageUploader',

	components: {
		ImagePicker,
		ImageSelection,
	},

	props: {
		/**
		 * List of images that have been selected
		 */
		images: {
			type: Array,
			default: () => [],
		},
		/**
		 * Function called to trigger an upload.
		 * Called immediately on image selection, provided max size and max number
		 * image constraints are met.
		*/
		uploadHandler: {
			type: Function,
			default: () => undefined,
		},
		/**
		 * The maximum number of images allowed to be selected.
		 */
		maxImages: {
			type: Number,
			default: () => undefined,
		},
		/**
		 * The maximum file size allowed (in bytes)
		 */
		maxSize: {
			type: Number,
			default: () => undefined,
		},
		/**
		 * Allowed file types, be an image type (eg image/jpeg)
		 */
		accept: {
			type: String,
			default: () => 'image/*',
			validator: (accept) => accept.startsWith('image/'),
		},
	},

	data: () => ({
		nextID: 0,
	}),

	computed: {
		canUploadImage() {
			if (this.maxImages === undefined) {
				return true;
			}

			return this.images.length < this.maxImages;
		},
		remainingImagesCount() {
			if (!this.canUploadImage) {
				return NO_MORE_IMAGES_COUNT;
			}

			return this.maxImages - this.images.length;
		},

		canUploadMultiple() {
			// eslint-disable-next-line no-magic-numbers
			return !this.maxImages || this.maxImages > 1;
		},
	},

	methods: {
		selectImages(images) {
			if (!this.canUploadImage) {
				return;
			}

			const imagesToUpload = images.length > this.remainingImagesCount
				// eslint-disable-next-line no-magic-numbers
				? images.slice(0, this.remainingImagesCount)
				: images;

			const formattedImages = this.formatImages(imagesToUpload);
			this.$emit('input', [...this.images, ...formattedImages]);
			formattedImages.forEach((image) => this.handleImageUpload(image));
		},

		formatImages(images) {
			const formattedImages = images
				.map((image) => {
					this.nextID += ID_INCREMENT;

					return {
						id: this.nextID,
						file: image,
						status: IMAGE_SELECTOR_STATUSES.PENDING,
						progress: 0,
					};
				});
			formattedImages.forEach((image) => this.buildImageURL(image));

			return formattedImages;
		},

		async handleImageUpload(image) {
			if (this.maxSize && image.file.size > this.maxSize) {
				this.$set(image, 'progress', MAX_PROGRESS);
				this.$set(image, 'status', IMAGE_SELECTOR_STATUSES.ERROR);
				this.$set(image, 'fileTooLarge', true);
				return;
			}

			this.$set(image, 'fileTooLarge', false);

			if (!this.uploadHandler) {
				this.$set(image, 'progress', MAX_PROGRESS);
				this.$set(image, 'status', IMAGE_SELECTOR_STATUSES.COMPLETE);
				return;
			}

			try {
				const response = await this.uploadHandler({
					image: image.file,
					uploadProgressHandler: (progress) => this.$set(image, 'progress', progress),
				});
				this.$set(image, 'progress', MAX_PROGRESS);
				this.$set(image, 'apiResponse', response);
				this.$set(image, 'status', IMAGE_SELECTOR_STATUSES.COMPLETE);
			} catch (error) {
				this.$set(image, 'progress', MAX_PROGRESS);
				this.$set(image, 'apiError', error);
				this.$set(image, 'status', IMAGE_SELECTOR_STATUSES.ERROR);
			}
		},

		removeImage(imageID) {
			this.$emit('input', this.images.filter(({ id }) => id !== imageID));
		},

		async buildImageURL(image) {
			const url = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.onloadend = () => resolve(reader.result);
				// eslint-disable-next-line unicorn/prefer-add-event-listener
				reader.onerror = () => resolve('');
				reader.readAsDataURL(image.file);
			});

			this.$set(image, 'url', url);
		},
	},
};
</script>

<style module="$s">
.ImageUploaderContainer {
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	align-items: flex-start;
}

.ImageUploaderItem {
	flex-shrink: 0;
}
</style>
