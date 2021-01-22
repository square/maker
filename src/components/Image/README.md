# Image

```vue
<template>
	<div>
		<h4>image</h4>
		<m-image
			class="image"
			src="https://source.unsplash.com/random/400x400"
		/>
	</div>
</template>

<script>
import { MImage } from '@square/maker/components/Image';

export default {
	components: {
		MImage,
	},
};
</script>

<style scoped>
.image {
	width: 400px;
	height: 400px;
}
</style>
```

## Props
Supports all `<img>` attributes

<!-- api-tables:start -->
## Props

Supports attributes from [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

| Prop   | Type     | Default | Possible values | Description |
| ------ | -------- | ------- | --------------- | ----------- |
| src    | `string` | —       | —               | —           |
| srcset | `string` | —       | —               | —           |


## Events

Supports events from [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).
<!-- api-tables:end -->
