# ImageUploader

Use ImageUploader to provide a visual wrapper for a file input. Use with an upload handler to track upload progress and trigger uploads on file selection.

Allows JPEG, PNG, and GIF file formats. HEIC is converted to JPEG by iOS with this configuration.

## Basic Usage With Upload Handler
The upload hander (passed in as the `uploadHandler` prop) should accept an object as the first argument. This object will contain the fields:

- `imageFile`: A `File` instance for the image to upload
- `setImageProgress`: A `Function` to push progress updates to the uploader, takes a number as an argument.

If you require the response from your API, it will be added to the image record as the `apiResponse` field.

If you want to listen for images that have completed upload, you can listen to the `@image-uploader:completed` event.

```vue
<template>
	<div>
		<p>Handler uses a simulated delay to mimic an actual upload.</p>
		<m-image-uploader
			:upload-handler="uploadImage"
			@image-uploader:change="setImages"
			@image-uploader:complete="setCompleteImages"
		/>

		<demo-image-status
			:images="images"
			header="All Images"
		/>
		<demo-image-status
			:images="completeImages"
			header="Completed Images"
		/>
	</div>
</template>

<script>
import { MImageUploader } from '@square/maker/components/ImageUploader';
import mockImageApi from '@square/maker/components/ImageUploader/demo-api';
import DemoImageStatus from '@square/maker/components/ImageUploader/DemoImageStatus.vue';

export default {
	components: {
		MImageUploader,
		DemoImageStatus,
	},

	data() {
		return {
			images: [],
			completeImages: [],
		};
	},

	methods: {
		setImages(images) {
			this.images = images;
		},

		setCompleteImages(images) {
			this.completeImages = images;
		},

		async uploadImage({ imageFile, setImageProgress }) {
			const response = await mockImageApi.uploadImage({
				image: imageFile,
				onUploadProgress: ({ loaded }) => setImageProgress(loaded),
			});

			return response;
		},
	},
};
</script>
```

## Errors With Upload Handler
The upload handler tracks upload success and failure state. When the upload handler completes or throws an error, the uploader will update the state accordingly. The actual error thrown will be added as the `apiError` field.

You can also listen to the `image-uploader:error` event.

```vue
<template>
	<div>
		<p>Handler uses a simulated delay to mimic an actual upload.</p>
		<m-image-uploader
			:upload-handler="uploadImage"
			@image-uploader:change="setImages"
			@image-uploader:error="setErrorImages"
		/>

		<demo-image-status
			:images="images"
			header="All Images"
		/>
		<demo-image-status
			:images="errorImages"
			header="Error Images"
		/>
	</div>
</template>

<script>
import { MImageUploader } from '@square/maker/components/ImageUploader';
import mockImageApi from '@square/maker/components/ImageUploader/demo-api';
import DemoImageStatus from '@square/maker/components/ImageUploader/DemoImageStatus.vue';

export default {
	components: {
		MImageUploader,
		DemoImageStatus,
	},

	data() {
		return {
			images: [],
			errorImages: [],
		};
	},

	methods: {
		setImages(images) {
			this.images = images;
		},

		setErrorImages(images) {
			this.errorImages = images;
		},

		async uploadImage({ imageFile, setImageProgress }) {
			const response = await mockImageApi.uploadImage({
				image: imageFile,
				onUploadProgress: ({ loaded }) => setImageProgress(loaded),
				shouldSucceed: false,
			});

			return response;
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
```

## Usage Without an Upload Handler
If you do not require an immediate upload for selected images, you may simply omit the handler prop. Valid images will be added to the list with a completed state.

```vue
<template>
	<div>
		<m-image-uploader
			@image-uploader:change="setImages"
		/>

		<demo-image-status :images="images" />
	</div>
</template>

<script>
import { MImageUploader } from '@square/maker/components/ImageUploader';
import DemoImageStatus from '@square/maker/components/ImageUploader/DemoImageStatus.vue';

export default {
	components: {
		MImageUploader,
		DemoImageStatus,
	},

	data() {
		return {
			images: [],
		};
	},

	methods: {
		setImages(images) {
			this.images = images;
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
```

## Filesize Limits
If you need to set a maximum file size, you can do so with the `max-size` prop. This prop takes a number and represents the maximum number of bytes a file is allowed. The demo below has a max of 50KB.

Images that do not fit the limit will immediately be set to an error state (and will not be uploaded). The `fileTooLarge` flag will also be set to `true`.

```vue
<template>
	<div>
		<m-image-uploader
			:max-size="50000"
			@image-uploader:change="setImages"
			@image-uploader:error="setErrorImages"
		/>

		<demo-image-status
			:images="images"
			header="All Images"
		/>
		<demo-image-status
			:images="errorImages"
			header="Error Images"
		/>
	</div>
</template>

<script>
import { MImageUploader } from '@square/maker/components/ImageUploader';
import DemoImageStatus from '@square/maker/components/ImageUploader/DemoImageStatus.vue';

export default {
	components: {
		MImageUploader,
		DemoImageStatus,
	},

	data() {
		return {
			images: [],
			errorImages: [],
		};
	},

	methods: {
		setImages(images) {
			this.images = images;
		},

		setErrorImages(images) {
			this.errorImages = images;
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
```

## Max Number of Images
You can set the maximum number of images allowed with the `:max-images` prop. This should be a number. When reached, the file picker will be removed. The demo below has a max of 3 images.

If a user selects more than the max from the OS prompt, images beyond the limit will be dropped from the selection.

```vue
<template>
	<div>
		<m-image-uploader
			:max-images="3"
			@image-uploader:change="setImages"
		/>

		<demo-image-status :images="images" />
	</div>
</template>

<script>
import { MImageUploader } from '@square/maker/components/ImageUploader';
import DemoImageStatus from '@square/maker/components/ImageUploader/DemoImageStatus.vue';

export default {
	components: {
		MImageUploader,
		DemoImageStatus,
	},

	data() {
		return {
			images: [],
		};
	},

	methods: {
		setImages(images) {
			this.images = images;
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
```

<!-- api-tables:start -->
## Props

| Prop           | Type     | Default     | Possible values | Description                                                                                                                              |
| -------------- | -------- | ----------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| accept         | `string` | `'image/*'` | -               | Allowed file types, must be an image type (eg image/jpeg)                                                                                |
| max-images     | `number` | —           | -               | The maximum number of images allowed to be selected.                                                                                     |
| max-size       | `number` | —           | -               | The maximum file size allowed (in bytes)                                                                                                 |
| upload-handler | `func`   | —           | -               | Function called to trigger an upload. Called immediately on image selection, provided max size and max number image constraints are met. |


## Events

| Event                    | Type    | Description                                              |
| ------------------------ | ------- | -------------------------------------------------------- |
| image-uploader:change    | `Array` | Update to list of images                                 |
| image-uploader:complete  | `Array` | Update to list of images that have successfully uploaded |
| image-uploader:error     | `Array` | Update to list of images with an error                   |
| image-uploader:uploading | `Array` | Update to list of images that are currently uploading    |
<!-- api-tables:end -->
