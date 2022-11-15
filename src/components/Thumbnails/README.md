# Thumbnails

Use Thumbnails to display a list of images.

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
```

<!-- api-tables:start -->
## Props

| Prop               | Type     | Default  | Possible values | Description                                                        |
| ------------------ | -------- | -------- | --------------- | ------------------------------------------------------------------ |
| thumbnails         | `array`  | —        | -               | Image urls to display for thumbnails                               |
| size               | `string` | `'32px'` | -               | Size to display thumbnail images                                   |
| max-thumbnails     | `number` | `5`      | -               | Maximum number of thumbnails to display                            |
| overflow-text-size | `number` | `0`      | -               | Overflow text size. Size of text as step in fluid scale (-2 to 7). |


## Events

| Event           | Type | Description |
| --------------- | ---- | ----------- |
| thumbnail:click | -    | —           |
| overflow:click  | -    | —           |
<!-- api-tables:end -->
