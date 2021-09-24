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
		// Not disabling and breaking the line causes the doc generator to break.
		/* eslint-disable max-len */
		/**
		 * Function called to trigger an upload. Called immediately on image selection, provided max size and max number image constraints are met.
		*/
		/* eslint-enable max-len */
		uploadHandlerFn: {
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
		 * Allowed file types, must be an image type (eg image/jpeg)
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
		/**
		 * Processes images selected by the picker, ensuring the number of images
		 * is not above the max, passes them to the formatter, and then triggers the upload.
		 *
		 * @param {Array} images a list of Files
		 */
		selectImages(images) {
			if (!this.canUploadImage) {
				return;
			}

			const imagesToUpload = images.length > this.remainingImagesCount
				// eslint-disable-next-line no-magic-numbers
				? images.slice(0, this.remainingImagesCount)
				: images;

			const formattedImages = this.formatImages(imagesToUpload);
			this.$emit('image-uploader:input', [...this.images, ...formattedImages]);
			formattedImages.forEach((image) => this.handleImageUpload(image));
		},

		/**
		 * Transforms a list of image Files into a standard object with status/upload attributes
		 *
		 * @param {Array} images a list of Files
		 */
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

		/**
		 * Starts the upload process for a formatted image. First checks to make sure an image
		 * fits the filesize limit, and then calls the upload handler function (if present).
		 *
		 * @param {Object} image a formatted image object
		 */
		async handleImageUpload(image) {
			if (this.maxSize && image.file.size > this.maxSize) {
				this.$set(image, 'progress', MAX_PROGRESS);
				this.$set(image, 'status', IMAGE_SELECTOR_STATUSES.ERROR);
				this.$set(image, 'fileTooLarge', true);
				return;
			}

			this.$set(image, 'fileTooLarge', false);

			if (!this.uploadHandlerFn) {
				this.$set(image, 'progress', MAX_PROGRESS);
				this.$set(image, 'status', IMAGE_SELECTOR_STATUSES.COMPLETE);
				return;
			}

			try {
				const response = await this.uploadHandlerFn({
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

		/**
		 * Removes an image from the list
		 *
		 * @param {String} imageID id of a formatted image object
		 */
		removeImage(imageID) {
			this.$emit('image-uploader:input', this.images.filter(({ id }) => id !== imageID));
		},

		/**
		 * Transforms an image File into a base64 URL. Used to display on the UI.
		 *
		 * @param {Object} image formatted image object
		 */
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
