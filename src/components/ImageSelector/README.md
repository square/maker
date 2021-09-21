# ImageSelector

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
					@input="setUploadedImages"
				/>
			</div>

			<pre>{{ lowOverheadImages.uploaded }}</pre>
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

			<pre>{{ lowOverheadImages.normal }}</pre>
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
.SelectorContainer {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
}

.SelectorContainer + .SelectorContainer {
	margin-top: 32px;
}

.SelectorHeader {
	grid-column: 1 / 3;
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


## Events

| Event | Type | Description |
| ----- | ---- | ----------- |
| input | -    | —           |
<!-- api-tables:end -->
