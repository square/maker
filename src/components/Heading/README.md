# Heading

```vue
<template>
	<div>
		<m-heading
			v-for="size in [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]"
			:key="size"
			:size="size"
			class="heading"
		>
			Size {{ size }}
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

<style scoped>
.heading {
	color: #24292e;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1).

| Prop        | Type     | Default | Possible values                           | Description                                                             |
| ----------- | -------- | ------- | ----------------------------------------- | ----------------------------------------------------------------------- |
| size        | `number` | —       | —                                         | Size of heading. Influences which element is used.                      |
| element     | `string` | —       | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div` | Override Heading element. By default, the element is derived from size. |
| font-family | `string` | —       | —                                         | Heading font family                                                     |
| text-color  | `string` | —       | —                                         | Heading text color                                                      |


## Slots

| Slot    | Description     |
| ------- | --------------- |
| default | heading content |


## Events

Supports events from [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1).
<!-- api-tables:end -->
