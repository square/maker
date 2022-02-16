# Heading

Use the Heading component for Heading text. There are 10 text sizes: -2 to 7. The font family, font weight, and text color are customizable.

```vue
<template>
	<div>
		<m-heading
			v-for="size in [5, 4, 3, 2, 1]"
			:key="size"
			:size="size"
		>
			Heading (Size {{ size }})
		</m-heading>
	</div>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';

export default {
	components: {
		MHeading,
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<Heading_Elements>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).

| Prop        | Type     | Default | Possible values                                               | Description                                                             |
| ----------- | -------- | ------- | ------------------------------------------------------------- | ----------------------------------------------------------------------- |
| size        | `number` | —       | `7`, `6`, `5`, `4`, `3`, `2`, `1`, `0`, `-1`, `-2`            | Size of heading. Influences which element is used.                      |
| element     | `string` | —       | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`                     | Override Heading element. By default, the element is derived from size. |
| font-family | `string` | —       | —                                                             | Font family                                                             |
| font-weight | `number` | —       | `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900` | Font weight with standard numeric keyword values                        |
| color       | `string` | —       | —                                                             | Color                                                                   |


## Slots

| Slot    | Description     |
| ------- | --------------- |
| default | heading content |
<!-- api-tables:end -->
