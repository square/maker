# Text

```vue
<template>
	<div class="container">
		<m-text
			v-for="size in [-1, 0, 1]"
			:key="size"
			:size="size"
		>
			Size {{ size }}
		</m-text>
	</div>
</template>

<script>
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MText,
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).

| Prop        | Type     | Default | Possible values | Description                              |
| ----------- | -------- | ------- | --------------- | ---------------------------------------- |
| element     | `string` | `'p'`   | `p`, `span`     | which HTML element to wrap the text with |
| size        | `number` | —       | —               | size of text                             |
| font-family | `string` | —       | —               | text font family                         |
| text-color  | `string` | —       | —               | text color                               |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | text content |


## Events

Supports events from [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).
<!-- api-tables:end -->
