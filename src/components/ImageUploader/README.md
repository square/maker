# ImageUploader

Use ImageUploader to provide a visual wrapper for a file input. Use with an upload handler to track upload progress and trigger uploads on file selection.

Allows JPEG, PNG, and GIF file formats. HEIC is converted to JPEG by iOS with this configuration.

## Upload Handler

The upload hander (passed in as the `uploadHandlerFn` prop) should accept an object as the first argument. This object will contain the fields:

- `image`: A `File` instance for the image to upload
- `uploadProgressHandler`: A `Function` to push progress updates to the uploader, takes a number as an argument.

The API response will be added as `apiResponse` to the image object. If an error has occurred, `apiError` will be added with the thrown error.

```
<template>
  <m-image-uploader
    :images="myImages"
    :upload-handler-fn="uploadImage"
    @image-uploader:input="setMyImages"
  />
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyImageForm',

  data() {
    return {
      myImages: [],
    };
  },

  methods: {
    setMyImages(images) {
      this.myImages = images;
    },

    // The function should be async to properly reflect the status in the uploader
		async uploadImage({ image, uploadProgressHandler }) {
      const formData = // build form data as needed;
      
      // 
			const response = await axios.post({
        data: formData,
        // If your API client supports it, you can push upload progress to the component using the handler
				onUploadProgress: ({ loaded }) => uploadProgressHandler(loaded),
      });

      // This response will be added as apiResponse on the image
      return response;
    }
  }
}
</script>
```

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
				@image-uploader:input="setImages('success', $event)"
			/>

			<div :class="$s.ImagePayloads">
				<pre
					v-for="image of successImages"
					:key="image.id"
					:class="$s.ImagePayload"
				>{{ getSafeImage(image) }}</pre>
			</div>
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
				@image-uploader:input="setImages('apiError', $event)"
			/>

			<div :class="$s.ImagePayloads">
				<pre
					v-for="image of apiErrorImages"
					:key="image.id"
					:class="$s.ImagePayload"
				>{{ getSafeImage(image) }}</pre>
			</div>
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
				@image-uploader:input="setImages('normal', $event)"
			/>

			<div :class="$s.ImagePayloads">
				<pre
					v-for="image of normalImages"
					:key="image.id"
					:class="$s.ImagePayload"
				>{{ getSafeImage(image) }}</pre>
			</div>
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
				set to an error state before uploading. The `fileTooLarge` flag
				will be true if this limit is passed.
			</p>
			<m-image-uploader
				:images="maxSizeImages"
				:max-size="50000"
				@image-uploader:input="setImages('maxSize', $event)"
			/>

			<div :class="$s.ImagePayloads">
				<pre
					v-for="image of maxSizeImages"
					:key="image.id"
					:class="$s.ImagePayload"
				>{{ getSafeImage(image) }}</pre>
			</div>
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
				@image-uploader:input="setImages('maxNumber', $event)"
			/>

			<div :class="$s.ImagePayloads">
				<pre
					v-for="image of maxNumberImages"
					:key="image.id"
					:class="$s.ImagePayload"
				>{{ getSafeImage(image) }}</pre>
			</div>
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

		getSafeImage(image) {
			return {
				...image,
				url: 'base64 image',
			};
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

.ImagePayloads {
	display: flex;
	gap: 8px;
}

.ImagePayload {
	background-color: lightgrey;
	font-size: 12px;
	padding: 4px;
	border-radius: 4px;
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
| accept            | `string` | `() => 'image/*'` | —               | Allowed file types, must be an image type (eg image/jpeg)                                                                                |


## Events

| Event                | Type | Description |
| -------------------- | ---- | ----------- |
| image-uploader:input | -    | —           |
<!-- api-tables:end -->
