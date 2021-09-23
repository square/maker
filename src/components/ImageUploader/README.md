# ImageUploader

Use ImageUploader to provide a visual wrapper for a file input. Use with an upload handler to track upload progress and trigger uploads on file selection.

Allows JPEG, PNG, and GIF file formats. HEIC is converted to JPEG by iOS with this configuration.

```vue
<template>
	<div>
		<div :class="$s.SelectorContainer">
			<m-heading
				:size="2"
				:class="$s.SelectorHeader"
			>
				With Upload Handler (No errors)
			</m-heading>
			<p>Handler uses a simulated delay to mimic an actual upload.</p>
			<m-image-uploader
				:images="successImages"
				:upload-handler-fn="uploadSuccessfulImage"
				@input="setImages('success', $event)"
			/>
		</div>

		<div :class="$s.SelectorContainer">
			<m-heading
				:size="2"
				:class="$s.SelectorHeader"
			>
				With Upload Handler (API errors)
			</m-heading>
			<p>Handler uses a simulated delay to mimic an actual upload.</p>
			<m-image-uploader
				:images="apiErrorImages"
				:upload-handler-fn="uploadErrorImage"
				@input="setImages('apiError', $event)"
			/>
		</div>

		<div :class="$s.SelectorContainer">
			<m-heading
				:size="2"
				:class="$s.SelectorHeader"
			>
				Without Upload Handler
			</m-heading>
			<p>
				If a handler is not provided, the file will be added to the list
				and be immediately marked as 'complete'.
			</p>
			<m-image-uploader
				:images="normalImages"
				@input="setImages('normal', $event)"
			/>
		</div>

		<div :class="$s.SelectorContainer">
			<m-heading
				:size="2"
				:class="$s.SelectorHeader"
			>
				Max Image Size (50KB)
			</m-heading>
			<p>
				If a size limit has been set, files that are too large will be
				set to an error state before uploading.
			</p>
			<m-image-uploader
				:images="maxSizeImages"
				:max-size="50000"
				@input="setImages('maxSize', $event)"
			/>
		</div>

		<div :class="$s.SelectorContainer">
			<m-heading
				:size="2"
				:class="$s.SelectorHeader"
			>
				Max Number of Images (3)
			</m-heading>
			<p>
				If an image count limit is set, the picker component will be removed
				once it is reached. If a user selects more than the max, only the images
				within the limited will be selected/uploaded.
			</p>
			<m-image-uploader
				:images="maxNumberImages"
				:max-images="3"
				@input="setImages('maxNumber', $event)"
			/>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-magic-numbers */
import { MHeading } from '@square/maker/components/Heading';
import { MImageUploader } from '@square/maker/components/ImageUploader';

export default {
	components: {
		MImageUploader,
		MHeading,
	},

	data() {
		return {
			successImages: [],
			apiErrorImages: [],
			normalImages: [],
			maxSizeImages: [],
			maxNumberImages: [],
		};
	},

	computed: {
		lowOverheadImages() {
			return {
				uploaded: this.uploadedImages.map((image) => ({ ...image, url: 'hidden for performance' })),
				normal: this.normalImages.map((image) => ({ ...image, url: 'hidden for performance' })),
			};
		},
	},

	methods: {
		setImages(key, images) {
			this[`${key}Images`] = images;
		},
		setUploadedImages(images) {
			this.uploadedImages = images;
		},

		setNormalImages(images) {
			this.normalImages = images;
		},

		async uploadSuccessfulImage({ image, uploadProgressHandler }) {
			return new Promise((resolve, reject) => {
				this.uploadImage({
					image,
					uploadProgressHandler,
					shouldSucceed: true,
					resolve,
					reject,
				});
			});
		},

		async uploadErrorImage({ image, uploadProgressHandler }) {
			return new Promise((resolve, reject) => {
				this.uploadImage({
					image,
					uploadProgressHandler,
					shouldSucceed: false,
					resolve,
					reject,
				});
			});
		},

		uploadImage({
			progress = 0,
			resolve,
			reject,
			uploadProgressHandler,
			image,
			shouldSucceed,
		}) {
			let newProgress;

			setTimeout(() => {
				if (progress < 75) {
					newProgress = progress + 15;
					uploadProgressHandler(newProgress);
					this.uploadImage({
						resolve,
						reject,
						uploadProgressHandler,
						progress: newProgress,
						shouldSucceed,
					});
				} else if (shouldSucceed) {
					uploadProgressHandler(100);
					resolve({ data: { hello: 'world!', image } });
				} else {
					uploadProgressHandler(100);
					reject(new Error('Some error'));
				}
			}, 500);
		},
	},
};
</script>

<style module="$s">
.SelectorContainer + .SelectorContainer {
	margin-top: 32px;
}

.SelectorHeader {
	margin-bottom: 16px;
}
</style>

```

<!-- api-tables:start -->
## Props

| Prop              | Type     | Default           | Possible values | Description                                                                                                                              |
| ----------------- | -------- | ----------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| images            | `array`  | `[]`              | —               | List of images that have been selected                                                                                                   |
| upload-handler-fn | `func`   | `() => undefined` | —               | Function called to trigger an upload. Called immediately on image selection, provided max size and max number image constraints are met. |
| max-images        | `number` | `() => undefined` | —               | The maximum number of images allowed to be selected.                                                                                     |
| max-size          | `number` | `() => undefined` | —               | The maximum file size allowed (in bytes)                                                                                                 |
| accept            | `string` | `() => 'image/*'` | —               | Allowed file types, be an image type (eg image/jpeg)                                                                                     |


## Events

| Event | Type | Description |
| ----- | ---- | ----------- |
| input | -    | —           |
<!-- api-tables:end -->
