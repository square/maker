# Thumbnails

Use Thumbnails to display a list of images with built-in accessibility features.

## Examples

```vue
<template>
	<div class="container">
		Thumbnails with no overflow
		<m-thumbnails
			:thumbnails="thumbnails"
			:max-thumbnails="10"
		/>
		<m-divider />
		Thumbnails with overflow
		<m-thumbnails
			:thumbnails="thumbnails"
			:max-thumbnails="3"
		/>
		<m-divider />
		Thumbnails with click events
		<m-thumbnails
			:thumbnails="thumbnails"
			:max-thumbnails="5"
			@thumbnail:click="clickThumbnail"
			@overflow:click="clickOverflow"
		/>
		clicked: {{ lastClicked }}
		<m-divider />
		Thumbnails with custom sizes
		<m-thumbnails
			:thumbnails="thumbnails"
			:max-thumbnails="3"
			size="100px"
			:overflow-text-size="5"
		/>
		<m-divider />
		Thumbnails with accessibility features
		<m-thumbnails
			:thumbnails="thumbnails"
			:max-thumbnails="4"
			:thumbnail-alt="altTexts"
			thumbnails-aria-label="Product gallery"
			overflow-aria-label="View additional product images"
			@thumbnail:click="clickThumbnail"
			@overflow:click="clickOverflow"
		/>
		<m-divider />
		Thumbnails with single alt text for all images
		<m-thumbnails
			:thumbnails="thumbnails"
			:max-thumbnails="3"
			thumbnail-alt="Product image"
		/>
	</div>
</template>

<script>
import { MDivider } from '@square/maker/components/Divider';
import { MThumbnails } from '@square/maker/components/Thumbnails';

export default {
	components: {
		MDivider,
		MThumbnails,
	},

	data() {
		return {
			thumbnails: [
				'https://source.unsplash.com/random/100x100?1',
				'https://source.unsplash.com/random/100x100?2',
				'https://source.unsplash.com/random/100x100?3',
				'https://source.unsplash.com/random/100x100?4',
				'https://source.unsplash.com/random/100x100?5',
				'https://source.unsplash.com/random/100x100?6',
			],
			altTexts: [
				'Product front view',
				'Product side view',
				'Product back view',
				'Product detail view',
				'Product in use',
				'Product packaging',
			],
			lastClicked: '',
		};
	},

	methods: {
		clickThumbnail(thumbnail) {
			this.lastClicked = thumbnail;
		},

		clickOverflow() {
			this.lastClicked = 'overflow';
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

## Accessibility Features

The Thumbnails component includes comprehensive accessibility support:

- **Alt text support**: Provide descriptive alt text for all thumbnail images
- **Keyboard navigation**: Full keyboard support with Enter and Space key activation
- **Screen reader support**: Proper ARIA labels and roles for assistive technologies
- **Focus indicators**: Clear visual focus indicators for keyboard navigation
- **Semantic markup**: Proper roles and labels based on interactivity

### Alt Text Options

You can provide alt text in several ways:

```html
<!-- Automatic numbering (default) -->
<m-thumbnails :thumbnails="images" />
<!-- Results in: "Thumbnail 1", "Thumbnail 2", etc. -->

<!-- Single alt text for all images -->
<m-thumbnails
  :thumbnails="images"
  thumbnail-alt="Product image"
/>

<!-- Individual alt text for each image -->
<m-thumbnails
  :thumbnails="images"
  :thumbnail-alt="['Front view', 'Side view', 'Back view']"
/>
```

### ARIA Labels

Customize ARIA labels for better screen reader experience:

```html
<m-thumbnails 
  :thumbnails="images" 
  thumbnails-aria-label="Product gallery"
  overflow-aria-label="View additional product images"
/>
```

<!-- api-tables:start -->
## Props

| Prop                  | Type           | Default              | Possible values | Description                                                                                            |
| --------------------- | -------------- | -------------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| thumbnails            | `array`        | —                    | -               | Image urls to display for thumbnails                                                                   |
| size                  | `string`       | `'32px'`             | -               | Size to display thumbnail images                                                                       |
| max-thumbnails        | `number`       | `5`                  | -               | Maximum number of thumbnails to display                                                                |
| overflow-text-size    | `number`       | `0`                  | -               | Overflow text size. Size of text as step in fluid scale (-2 to 7).                                     |
| thumbnail-alt         | `string|array` | `() => []`           | -               | Alt text for thumbnail images. Can be a string (used for all) or
array of strings (one per thumbnail). |
| thumbnails-aria-label | `string`       | `'Thumbnail images'` | -               | ARIA label for the thumbnails group                                                                    |
| overflow-aria-label   | `string`       | —                    | -               | ARIA label for the overflow button                                                                     |


## Events

| Event           | Type | Description |
| --------------- | ---- | ----------- |
| thumbnail:click | -    | —           |
| overflow:click  | -    | —           |
<!-- api-tables:end -->
