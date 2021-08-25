# Card

Use Card to provide a stylized container of information.



## Examples
```vue
<template>
	<div>
		<m-card
			label="this is my card label"
		>
			here is my card content
		</m-card>
		<div class="container">
			<m-card
				label="this is my card label"
			>
				here is my card content
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
.container {
	width: 300px;
	height: 80px;
	background-color: grey;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop  | Type     | Default | Possible values | Description |
| ----- | -------- | ------- | --------------- | ----------- |
| label | `string` | `''`    | —               | Card label  |


## Slots

| Slot    | Description           |
| ------- | --------------------- |
| default | card content          |
| actions | put card buttons here |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
