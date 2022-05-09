# Card

Use Card to provide a stylized container of information.



## Examples
```vue
<template>
	<div class="spaceout">
		<m-card>
			here is my card content
		</m-card>
		<div class="container">
			<m-card>
				this is my card inside of a 300px wide container.
				the card fits the width of the container, but there is no padding on the outside.
			</m-card>
		</div>
		<div style="width:400px;">
			<m-card>
				here is my card content. there is a fixed width of 400px applied directly to the card.
			</m-card>
		</div>
	</div>
</template>

<script>
import { MCard } from '@square/maker/components/Card';

export default {
	components: {
		MCard,
	},
};
</script>
<style scoped>
.spaceout > * {
	margin-bottom: 16px;
}
.spaceout > *:last-child {
	margin-bottom: 0;
}
.container {
	width: 300px;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop  | Type     | Default | Possible values              | Description |
| ----- | -------- | ------- | ---------------------------- | ----------- |
| shape | `string` | —       | `squared`, `rounded`, `pill` | card shape  |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | card content |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
