# OrderCard

Use OrderCard to display order information


## Examples
```vue
<template>
	<div class="container">
		<m-order-card
			:label="'Order Label'"
			:title="'Order Title'"
			:thumbnails="thumbnails"
			:primary-action-text="'Primary'"
			:secondary-action-text="'Secondary'"
		/>
		<m-divider />
		<m-order-card
			:title="'Order with no label'"
			:thumbnails="thumbnails"
			:primary-action-text="'Primary'"
			:secondary-action-text="'Secondary'"
		/>
		<m-divider />
		<m-order-card
			:label="'Order Label'"
			:title="'Order with fewer thumbnails'"
			:thumbnails="fewerThumbnails"
			:primary-action-text="'Primary'"
		/>
		<m-divider />
		<m-order-card
			:label="'Order Label'"
			:title="'Order with no thumbnails'"
			:primary-action-text="'Primary'"
			:secondary-action-text="'Secondary'"
		/>
		<m-divider />
		<m-order-card
			:label="'Order Label'"
			:title="'Order with no secondary action'"
			:thumbnails="thumbnails"
			:primary-action-text="'Primary'"
		/>
	</div>
</template>

<script>
import { MOrderCard } from '@square/maker/components/OrderCard';
import { MDivider } from '@square/maker/components/Divider';

export default {
	components: {
		MOrderCard,
		MDivider,
	},

	data() {
		return {
			thumbnails: [
				'https://source.unsplash.com/random/400x600',
				'https://source.unsplash.com/random/400x600',
				'https://source.unsplash.com/random/400x600',
				'https://source.unsplash.com/random/400x600',
				'https://source.unsplash.com/random/400x600',
				'https://source.unsplash.com/random/400x600',
			],
			fewerThumbnails: [
				'https://source.unsplash.com/random/400x600',
				'https://source.unsplash.com/random/400x600',
			],
		};
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

| Prop       | Type     | Default | Possible values | Description |
| ---------- | -------- | ------- | --------------- | ----------- |
| label      | `string` | —       | —               | The label for the order card                        |
| title      | `string` | —       | —               | The title for the order card                        |
| thumbnails | `array`  | `[]`    | —               | The thumbnails to display for the order card        |
| primaryActionText | `string`  | —   | —               | The primary action label                        |
| secondaryActionText | `string`  | —    | —               | The secondary action label                   |
<!-- api-tables:end `-->`
