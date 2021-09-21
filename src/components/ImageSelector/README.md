# ImageSelector

Use ImageSelector to provide a visual wrapper for a file input. Use with an upload handler to track upload progress and trigger uploads on file selection.

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
				<m-image-selector
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
			<m-image-selector
				:model="normalImages"
				@input="setNormalImages"
			/>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-magic-numbers */
import { MHeading } from '@square/maker/components/Heading';
import { MImageSelector, IMAGE_SELECTOR_STATUSES } from '@square/maker/components/ImageSelector';

const nextStatuses = [
	IMAGE_SELECTOR_STATUSES.PENDING,
	IMAGE_SELECTOR_STATUSES.ERROR,
	IMAGE_SELECTOR_STATUSES.COMPLETE,
];

export default {
	components: {
		MImageSelector,
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

| Prop           | Type     | Default                                                                    | Possible values        | Description                                                                                                   |
| -------------- | -------- | -------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| model          | `array`  | `[]`                                                                       | `[]`                   | An array of selected images. See below for interface details                                                  |
| upload-handler | `func`   | `({ image, uploadProgressHandler }) => undefined` | `Function | undefined` | Function to trigger an upload on file selection, should be async. Argument is object with image file and a function to update progress |
| max-images     | `number` | `undefined`                                                                | -                      | Maximum number of images allowed to be selected                                                               |
| max-size       | `number` | `undefined`                                                                | -                      | Maximum size of images allowed to be selected (in bytes)                                                      |


## Events

| Event | Type | Description                             |
| ----- | ---- | --------------------------------------- |
| input | `[]` | Array of images when a file is selected |

## Image Selection Interface
```typescript
interface ImageSelectionWithUpload {
	id: number;
	file: File | Blob;
	url: string; // base64 representation of image to display on UI
	status: 'pending' | 'complete' | 'error';
	progress: number; // progress of upload, should be value from 0-100
	apiResponse?: any; // return value from upload handler, only present when status is 'complete'
	apiError?: any; // error from upload handler if an error is thrown, only present when status is 'error'
}

interface ImageSelectionWithoutUpload {
	id: number;
	file: File | Blob;
	url: string; // base64 representation of image to display on UI
	status: 'complete';
	progress: 100;
}
```
<!-- api-tables:end -->
