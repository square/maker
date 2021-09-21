<template>
	<div :class="$s.ImageUploaderContainer">
		<m-image-picker
			v-if="canUploadImage"
			:class="$s.ImageUploaderItem"
			@selectImages="selectImages"
		/>
		<m-image-selection
			v-for="image of model"
			:key="image.id"
			:image="image"
			:class="$s.ImageUploaderItem"
			@removeImage="removeImage"
		/>
	</div>
</template>

<script>
import Vue from 'vue';
import uuid from 'uuid';
import MImagePicker from './ImagePicker.vue';
import MImageSelection from './ImageSelection.vue';
import { IMAGE_SELECTOR_STATUSES } from './constants';

export default {
	name: 'MImageSelector',

	components: {
		MImagePicker,
		MImageSelection,
	},

	props: {
		model: {
			type: Array,
			default: () => [],
		},
		uploadHandler: {
			type: Function,
			default: () => undefined,
		},
		maxImages: {
			type: Number,
			default: () => undefined,
		},
	},

	computed: {
		canUploadImage() {
			if (this.maxImages === undefined) {
				return true;
			}

			return this.model.length < this.maxImages;
		},
		remainingImagesCount() {
			if (!this.canUploadImage) {
				return 0;
			}

			return this.maxImages - this.model.length;
		},
	},

	methods: {
		selectImages(images) {
			if (!this.canUploadImage) {
				return;
			}

			let imagesToUpload;
			if (images.length > this.remainingImagesCount) {
				// display error/warning
				imagesToUpload = images.slice(0, this.remainingImagesCount);
			} else {
				imagesToUpload = images;
			}

			const formattedImages = this.formatImages(imagesToUpload);
			this.$emit('input', [...this.model, ...formattedImages]);
			formattedImages.forEach((image) => this.handleImageUpload(image));
		},

		formatImages(images) {
			const formattedImages = images
				.map((image) => ({
					id: uuid(),
					file: image,
					status: IMAGE_SELECTOR_STATUSES.PENDING,
				}));
			formattedImages.forEach((image) => this.buildImageURL(image));

			return formattedImages;
		},

		async handleImageUpload(image) {
			if (!this.uploadHandler) {
				Vue.set(image, 'progress', 100);
				Vue.set(image, 'status', IMAGE_SELECTOR_STATUSES.COMPLETE);
				return;
			}

			try {
				const response = await this.uploadHandler({
					image: image.file,
					uploadProgressHandler: (progress) => Vue.set(image, 'progress', progress),
				});
				Vue.set(image, 'progress', 100);
				Vue.set(image, 'apiResponse', response);
				Vue.set(image, 'status', IMAGE_SELECTOR_STATUSES.COMPLETE);
			} catch (error) {
				Vue.set(image, 'progress', 100);
				Vue.set(image, 'apiError', error);
				Vue.set(image, 'status', IMAGE_SELECTOR_STATUSES.ERROR);
			}
		},

		removeImage(imageID) {
			this.$emit('input', this.model.filter(({ id }) => id !== imageID));
		},

		async buildImageURL(image) {
			const url = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.onloadend = () => resolve(reader.result);
				// TODO: Add error logging
				// eslint-disable-next-line unicorn/prefer-add-event-listener
				reader.onerror = () => resolve('');
				reader.readAsDataURL(image.file);
			});

			Vue.set(image, 'url', url);
		},
	},
};
</script>

<style module="$s">
.ImageUploaderContainer {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
}

.ImageUploaderItem {
	flex-shrink: 0;
	margin-top: 16px;
	margin-right: 16px;
}
</style>
