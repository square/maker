# Image

```vue
<template>
	<div>
		<h4>image</h4>
		<m-image
			class="image"
			src="https://source.unsplash.com/random/400x600"
			:shape="shape"
			@image:visible="imageVisible"
		/>
		<m-image
			class="image image-tall"
			src="https://source.unsplash.com/random/400x600"
			:shape="shape"
		/>
		<m-image
			class="image image-wide"
			src="https://source.unsplash.com/random/400x600"
			:shape="shape"
		/>
		<br>
		{{ fadedInComplete }}
		<br>
		<label>
			Shape
			<select
				v-model="shape"
			>
				<option
					v-for="(value, index) in shapeOptions"
					:key="index"
					:value="value"
				>
					{{ value }}
				</option>
			</select>
		</label>
	</div>
</template>

<script>
import { MImage } from '@square/maker/components/Image';

export default {
	components: {
		MImage,
	},

	data() {
		return {
			shape: 'square',
			shapeOptions: [
				'square',
				'circle',
				'arch',
			],
			fadedInComplete: 'Fade in not completed',
		};
	},

	methods: {
		imageVisible() {
			this.fadedInComplete = 'Fade in completed';
		},
	},
};
</script>

<style scoped>
.image {
	display: inline-block;
	width: 400px;
	height: 400px;
	margin-right: 25px;
}

.image-tall {
	display: inline-block;
	width: 400px;
	height: 500px;
}

.image-wide {
	display: inline-block;
	width: 600px;
	height: 400px;
}
</style>
```

## Props
Supports all `<img>` attributes

<!-- api-tables:start -->
## Props

Supports attributes from [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

| Prop     | Type      | Default | Possible values                        | Description                                                               |
| -------- | --------- | ------- | -------------------------------------- | ------------------------------------------------------------------------- |
| src      | `string`  | —       | —                                      | —                                                                         |
| srcset   | `string`  | —       | —                                      | —                                                                         |
| sizes    | `string`  | —       | —                                      | —                                                                         |
| shape    | `string`  | —       | `original`, `square`, `circle`, `arch` | Original applies theme's border radius, square applies border radius of 0 |
| lazyload | `boolean` | `false` | —                                      | —                                                                         |


## Events

Supports events from [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

| Event         | Type | Description |
| ------------- | ---- | ----------- |
| image:visible | -    | —           |
<!-- api-tables:end -->
