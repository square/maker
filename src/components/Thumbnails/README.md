# Thumbnails

Use Thumbnails to display a list of images.

## Examples
```vue
<template>
	<div class="container">
		Thumbnails - click on thumbnails / overflow-text to view emitted event
		<m-thumbnails
			:thumbnails="thumbnails"
			:max-thumbnails="3"
			@thumbnail:click="clickThumbnail"
			@overflow:click="clickOverflow"
		/>
		<m-divider />
		Thumbnails with no overflow
		<m-thumbnails
			:thumbnails="thumbnails"
			:max-thumbnails="10"
			@thumbnail:click="clickThumbnail"
			@overflow:click="clickOverflow"
		/>
		<m-divider />
		Thumbnails with specified image size and overflow with specified text size
		<m-thumbnails
			:thumbnails="thumbnails"
			:max-thumbnails="3"
			:size="100"
			:overflow-text-size="5"
			@thumbnail:click="clickThumbnail"
			@overflow:click="clickOverflow"
		/>
		<m-toast-layer />
	</div>
</template>

<script>
import { MToastLayer, MToast } from '@square/maker/components/Toast';
import { MDivider } from '@square/maker/components/Divider';
import { MThumbnails } from '@square/maker/components/Thumbnails';

export default {
	components: {
		MToastLayer,
		MDivider,
		MThumbnails,
	},

	mixins: [
		MToastLayer.apiMixin,
	],

	data() {
		return {
			thumbnails: [
				'https://source.unsplash.com/random/100x100',
				'https://source.unsplash.com/random/200x200',
				'https://source.unsplash.com/random/300x300',
				'https://source.unsplash.com/random/400x400',
				'https://source.unsplash.com/random/500x500',
				'https://source.unsplash.com/random/600x600',
			],
		};
	},

	methods: {
		clickThumbnail(thumbnail) {
			this.toastApi.open(() => <MToast
					text={`Hello. Thumbnail (${thumbnail}) clicked.`}
			/>);
		},

		clickOverflow() {
			this.toastApi.open(() => <MToast
					text={'Hello. Overflow clicked.'}
			/>);
		},
	},
};
</script>
<style scoped>
.container {
	width: 500px;
}

.container > * {
	margin: 20px 0;
}
</style>
```

<!-- api-tables:start -->
## Props

| Prop               | Type     | Default                   | Possible values | Description                                                        |
| ------------------ | -------- | ------------------------- | --------------- | ------------------------------------------------------------------ |
| thumbnails         | `array`  | —                         | -               | Image urls to display for thumbnails                               |
| size               | `number` | `32`                      | -               | Size to display thumbnail images (in px)                           |
| max-thumbnails     | `number` | `DEFAULT_THUMBNAIL_COUNT` | -               | Maximum number of thumbnails to display                            |
| overflow-text-size | `number` | —                         | -               | Overflow text size. Size of text as step in fluid scale (-2 to 7). |


## Events

| Event           | Type | Description |
| --------------- | ---- | ----------- |
| thumbnail:click | -    | —           |
| overflow:click  | -    | —           |
<!-- api-tables:end -->
