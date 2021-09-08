# ItemCard



## Examples
```vue
<template>
	<div class="spaceout">
		<m-item-card
			label="this is my card label"
		>
			here is my card content
		</m-item-card>
		<div class="container">
			<m-item-card
				label="this is my card inside of a 300px wide container"
			>
				here is my card content
			</m-item-card>
		</div>
		<div style="width:400px;">
			<m-item-card
				label="this is my truncated label inside of a card with fixed width"
				price="$999.99"
			>
				here is my card content
				<template #actions>
					<m-notice-button>button</m-notice-button>
				</template>
			</m-item-card>
		</div>
	</div>
</template>

<script>
import { MItemCard } from '@square/maker/components/ItemCard';
import { MNoticeButton } from '@square/maker/components/Notice';

export default {
	components: {
		MItemCard,
		MNoticeButton,
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

| Prop    | Type     | Default     | Possible values | Description      |
| ------- | -------- | ----------- | --------------- | ---------------- |
| label   | `string` | `''`        | —               | Item Card label  |
| price   | `string` | `''`        | —               | Item price label |
| variant | `string` | `'reorder'` | `reorder`       | Semantic variant |


## Slots

| Slot    | Description             |
| ------- | ----------------------- |
| default | card content            |
| actions | put notice buttons here |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
