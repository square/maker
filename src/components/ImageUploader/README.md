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
				With Upload Handler
			</m-heading>
			<div>
				<m-image-uploader
					:model="uploadedImages"
					:upload-handler="selectImage"
					:max-size="2000000"
					@input="setUploadedImages"
				/>
			</div>
		</div>

		<div :class="$s.SelectorContainer">
			<m-heading
				:size="2"
				:class="$s.SelectorHeader"
			>
				Without Upload Handler
			</m-heading>
			<m-image-uploader
				:model="normalImages"
				@input="setNormalImages"
			/>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-magic-numbers */
import { MHeading } from '@square/maker/components/Heading';
import { MImageUploader, IMAGE_SELECTOR_STATUSES } from '@square/maker/components/ImageUploader';

const nextStatuses = [
	IMAGE_SELECTOR_STATUSES.PENDING,
	IMAGE_SELECTOR_STATUSES.ERROR,
	IMAGE_SELECTOR_STATUSES.COMPLETE,
];

export default {
	components: {
		MImageUploader,
		MHeading,
	},

	data() {
		return {
			uploadedImages: [],
			normalImages: [],
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
		setUploadedImages(images) {
			this.uploadedImages = images;
		},

		setNormalImages(images) {
			this.normalImages = images;
		},

		async selectImage({ image, uploadProgressHandler }) {
			return new Promise((resolve, reject) => {
				this.uploadImage({
					resolve,
					reject,
					uploadProgressHandler,
					image,
				});
			});
		},

		// Pay no mind to any weirdness here, this is to simulate an image taking time to upload
		uploadImage({
			progress = 0,
			resolve,
			reject,
			uploadProgressHandler,
			image,
		}) {
			let newProgress;
			const nextStatus = nextStatuses[Math.floor(Math.random() * 3)];
			setTimeout(() => {
				if (nextStatus === IMAGE_SELECTOR_STATUSES.PENDING || progress < 75) {
					const remainingProgress = 100 - progress;
					newProgress = progress + Math.min(10, Math.random() * remainingProgress);
					uploadProgressHandler(newProgress);
					this.uploadImage({
						resolve,
						reject,
						uploadProgressHandler,
						progress: newProgress,
					});
				} else if (nextStatus === IMAGE_SELECTOR_STATUSES.COMPLETE) {
					uploadProgressHandler(100);
					resolve({ data: { hello: 'world!', image } });
				} else {
					uploadProgressHandler(100);
					reject(new Error('Some error'));
				}
			}, Math.random() * 500);
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

| Prop           | Type     | Default           | Possible values | Description |
| -------------- | -------- | ----------------- | --------------- | ----------- |
| model          | `array`  | `[]`              | —               | —           |
| upload-handler | `func`   | `() => undefined` | —               | —           |
| max-images     | `number` | `() => undefined` | —               | —           |
| max-size       | `number` | `() => undefined` | —               | —           |


## Events

| Event | Type | Description |
| ----- | ---- | ----------- |
| input | -    | —           |
<!-- api-tables:end -->
