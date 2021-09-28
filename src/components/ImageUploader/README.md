# ImageUploader

Use ImageUploader to provide a visual wrapper for a file input. Use with an upload handler to track upload progress and trigger uploads on file selection.

Allows JPEG, PNG, and GIF file formats. HEIC is converted to JPEG by iOS with this configuration.

## Basic Usage With Upload Handler
The upload hander (passed in as the `uploadHandlerFn` prop) should accept an object as the first argument. This object will contain the fields:

- `image`: A `File` instance for the image to upload
- `uploadProgressHandler`: A `Function` to push progress updates to the uploader, takes a number as an argument.

If you require the response from your API, it will be added to the image record as the `apiResponse` field.

```vue
<template>
	<div :class="$s.SelectorContainer">
		<p>Handler uses a simulated delay to mimic an actual upload.</p>
		<m-image-uploader
			:images="images"
			:upload-handler-fn="uploadImage"
			@image-uploader:input="setImages"
		/>

		<div :class="$s.ImagePayloads">
			<pre
				v-for="image of images"
				:key="image.id"
				:class="$s.ImagePayload"
			>{{ getSafeImage(image) }}</pre>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-magic-numbers */
import { MImageUploader } from '@square/maker/components/ImageUploader';
import mockImageApi from '@square/maker/components/ImageUploader/demo-api';

export default {
	components: {
		MImageUploader,
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

		async uploadImage({ imageFile, setImageProgress }) {
			const response = await mockImageApi.uploadImage({
				image: imageFile,
				onUploadProgress: ({ loaded }) => setImageProgress(loaded),
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

<style module="$s">
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

## Errors With Upload Handler
The upload handler tracks upload success and failure state. When the upload handler completes or throws an error, the uploader will update the state accordingly. The actual error thrown will be added as the `apiError` field.

```vue
<template>
	<div :class="$s.SelectorContainer">
		<p>Handler uses a simulated delay to mimic an actual upload.</p>
		<m-image-uploader
			:images="images"
			:upload-handler-fn="uploadImage"
			@image-uploader:input="setImages"
		/>

		<div :class="$s.ImagePayloads">
			<pre
				v-for="image of images"
				:key="image.id"
				:class="$s.ImagePayload"
			>{{ getSafeImage(image) }}</pre>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-magic-numbers */
import { MImageUploader } from '@square/maker/components/ImageUploader';
import mockImageApi from '@square/maker/components/ImageUploader/demo-api';

export default {
	components: {
		MImageUploader,
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

<style module="$s">
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

## Usage Without an Upload Handler
If you do not require an immediate upload for selected images, you may simply omit the handler prop. Valid images will be added to the list with a completed state.

```vue
<template>
	<div :class="$s.SelectorContainer">
		<m-image-uploader
			:images="images"
			@image-uploader:input="setImages"
		/>

		<div :class="$s.ImagePayloads">
			<pre
				v-for="image of images"
				:key="image.id"
				:class="$s.ImagePayload"
			>{{ getSafeImage(image) }}</pre>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-magic-numbers */
import { MImageUploader } from '@square/maker/components/ImageUploader';

export default {
	components: {
		MImageUploader,
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

<style module="$s">
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

## Filesize Limits
If you need to set a maximum file size, you can do so with the `max-size` prop. This prop takes a number and represents the maximum number of bytes a file is allowed. The demo below has a max of 50KB.

Images that do not fit the limit will immediately be set to an error state (and will not be uploaded). The `fileTooLarge` flag will also be set to `true`.

```vue
<template>
	<div :class="$s.SelectorContainer">
		<m-image-uploader
			:images="images"
			:max-size="50000"
			@image-uploader:input="setImages"
		/>

		<div :class="$s.ImagePayloads">
			<pre
				v-for="image of images"
				:key="image.id"
				:class="$s.ImagePayload"
			>{{ getSafeImage(image) }}</pre>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-magic-numbers */
import { MImageUploader } from '@square/maker/components/ImageUploader';

export default {
	components: {
		MImageUploader,
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

<style module="$s">
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

## Max Number of Images
You can set the maximum number of images allowed with the `:max-images` prop. This should be a number. When reached, the file picker will be removed. The demo below has a max of 3 images.

If a user selects more than the max from the OS prompt, images beyond the limit will be dropped from the selection.

```vue
<template>
	<div :class="$s.SelectorContainer">
		<m-image-uploader
			:images="images"
			:max-images="3"
			@image-uploader:input="setImages"
		/>

		<div :class="$s.ImagePayloads">
			<pre
				v-for="image of images"
				:key="image.id"
				:class="$s.ImagePayload"
			>{{ getSafeImage(image) }}</pre>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-magic-numbers */
import { MImageUploader } from '@square/maker/components/ImageUploader';

export default {
	components: {
		MImageUploader,
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

<style module="$s">
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
