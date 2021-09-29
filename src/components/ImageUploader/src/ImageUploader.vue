<template>
	<div :class="$s.ImageUploaderContainer">
		<image-picker
			v-if="canUploadImage"
			:class="$s.ImageUploaderItem"
			:multiple="canUploadMultiple"
			:accept="accept"
			@image-picker:pick-images="addImages"
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
		// Not disabling and breaking the line causes the doc generator to break.
		/* eslint-disable max-len */
		/**
		 * Function called to trigger an upload. Called immediately on image selection, provided max size and max number image constraints are met.
		*/
		/* eslint-enable max-len */
		uploadHandler: {
			type: Function,
			default: undefined,
		},
		/**
		 * The maximum number of images allowed to be selected.
		 */
		maxImages: {
			type: Number,
			default: undefined,
		},
		/**
		 * The maximum file size allowed (in bytes)
		 */
		maxSize: {
			type: Number,
			default: undefined,
		},
		/**
		 * Allowed file types, must be an image type (eg image/jpeg)
		 */
		accept: {
			type: String,
			default: 'image/*',
			validator: (accept) => accept.startsWith('image/'),
		},
	},

	data: () => ({
		images: [],
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

	watch: {
		images: {
			deep: true,
			handler() {
				this.updateImages();
			},
			immediate: true,
		},
	},

	methods: {
		/**
		 * Processes images selected by the picker, ensuring the number of images
		 * is not above the max, passes them to the formatter, and then triggers the upload.
		 *
		 * @param {Array} images a list of Files
		 */
		async addImages(images) {
			if (!this.canUploadImage) {
				return;
			}

			const imagesToUpload = images.length > this.remainingImagesCount
				// eslint-disable-next-line no-magic-numbers
				? images.slice(0, this.remainingImagesCount)
				: images;

			const formattedImages = await this.formatImages(imagesToUpload);
			this.images = [...this.images, ...formattedImages];
			formattedImages.forEach((image) => this.handleImageUpload(image));
		},

		/**
		 * Transforms a list of image Files into a standard object with status/upload attributes
		 *
		 * @param {Array} images a list of Files
		 */
		async formatImages(images) {
			const formattedImages = images
				.map((image) => {
					this.nextID += ID_INCREMENT;

					return {
						id: this.nextID,
						file: image,
						status: IMAGE_SELECTOR_STATUSES.UPLOADING,
						progress: 0,
					};
				});

			await this.buildImageURLs(formattedImages);

			return formattedImages;
		},

		/**
		 * Transforms an image File into a base64 URL. Used to display on the UI.
		 *
		 * @param {Object} image formatted image object
		 */
		async buildImageURLs(images) {
			images.forEach(async (image) => {
				try {
					const url = await new Promise((resolve, reject) => {
						const reader = new FileReader();
						reader.onloadend = () => resolve(reader.result);
						// eslint-disable-next-line unicorn/prefer-add-event-listener
						reader.onerror = reject;
						reader.readAsDataURL(image.file);
					});

					this.$set(image, 'url', url);
				} catch (error) {
					this.$set(image, 'fileReadError', true);
					this.setImageError(image, error);
				}
			});
		},

		/**
		 * Starts the upload process for a formatted image. First checks to make sure an image
		 * fits the filesize limit, and then calls the upload handler function (if present).
		 *
		 * @param {Object} image a formatted image object
		 */
		async handleImageUpload(image) {
			this.validateImageSize(image);

			if (!this.isImageValid(image)) {
				this.setImageFailed(image);
				return;
			}

			if (!this.uploadHandler) {
				this.setImageComplete(image);
				return;
			}

			try {
				const response = await this.uploadHandler({
					imageFile: image.file,
					setImageProgress: (progress) => this.setImageProgress(image, progress),
				});
				this.setImageComplete(image, response);
			} catch (error) {
				this.setImageFailed(image, error);
			}
		},

		/**
		 * Removes an image from the list
		 *
		 * @param {String} imageID id of a formatted image object
		 */
		removeImage(imageID) {
			this.images = this.images.filter(({ id }) => id !== imageID);
		},

		/**
		 * Validates image file size (if set)
		 *
		 * @param i{Object} mage image record to be validated
		 */
		validateImageSize(image) {
			if (this.maxSize && image.file.size > this.maxSize) {
				this.$set(image, 'fileTooLarge', true);
			}
		},

		/**
		 * Checks if a file meets validation (max-size)
		 *
		 * @param {Object} image image record to be validated
		 *
		 * @returns {Boolean} true if valid, false if not
		 */
		isImageValid(image) {
			return !image.fileTooLarge && !image.fileReadError;
		},

		/**
		 * Sets image state after an upload is completed
		 *
		 * @param {Object} image image record to be updated
		 * @param {Object} apiResponse return value of upload handler callback
		 */
		setImageComplete(image, apiResponse) {
			if (apiResponse) {
				this.setImageApiResponse(image, apiResponse);
			}

			this.setImageStatus(image, IMAGE_SELECTOR_STATUSES.COMPLETE);
			this.setImageProgress(image, MAX_PROGRESS);
		},

		/**
		 * Sets image state after an upload has failed
		 *
		 * @param {Object} image image record to be updated
		 * @param {Object} apiResponse thrown error from upload handler callback
		 */
		setImageFailed(image, error) {
			if (error) {
				this.setImageError(image, error);
			}

			this.setImageStatus(image, IMAGE_SELECTOR_STATUSES.ERROR);
			this.setImageProgress(image, MAX_PROGRESS);
		},

		/**
		 * Sets image status
		 *
		 * @param {Object} image image record to be updated
		 * @param {String} status new status for image
		 */
		setImageStatus(image, status) {
			this.$set(image, 'status', status);
		},

		/**
		 * Sets image progress
		 *
		 * @param {Object} image image record to be updated
		 * @param {Number} progress new progress for image
		 */
		setImageProgress(image, progress) {
			this.$set(image, 'progress', progress);
		},

		/**
		 * Sets image API response
		 *
		 * @param {Object} image image record to be updated
		 * @param {String} apiResponse API response from upload of the image
		 */
		setImageApiResponse(image, apiResponse) {
			this.$set(image, 'apiResponse', apiResponse);
		},

		/**
		 * Sets image error
		 *
		 * @param {Object} image image record to be updated
		 * @param {String} error error thrown by image upload
		 */
		setImageError(image, error) {
			this.$set(image, 'error', error);
		},

		imagesForStatus(status) {
			return this.images.filter((image) => image.status === status);
		},

		sanitizeOutputImages(images) {
			return images.map((image) => ({
				status: image.status,
				file: image.file,
				apiResponse: image.apiResponse,
				error: image.error,
				fileTooLarge: image.fileTooLarge,
				fileReadError: image.fileReadError,
			}));
		},

		updateImages(newImages) {
			if (newImages) {
				this.images = newImages;
			}

			this.$emit('image-uploader:change', this.sanitizeOutputImages(this.images));
			this.$emit(
				'image-uploader:uploading',
				this.sanitizeOutputImages(this.imagesForStatus(IMAGE_SELECTOR_STATUSES.UPLOADING)),
			);
			this.$emit(
				'image-uploader:error',
				this.sanitizeOutputImages(this.imagesForStatus(IMAGE_SELECTOR_STATUSES.ERROR)),
			);
			this.$emit(
				'image-uploader:complete',
				this.sanitizeOutputImages(this.imagesForStatus(IMAGE_SELECTOR_STATUSES.COMPLETE)),
			);
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
