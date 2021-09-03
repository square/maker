# Card

Use Card to provide a stylized container of information.



## Examples
```vue
<template>
	<div class="spaceout">
		<m-card
			label="this is my card label"
		>
			here is my card content
		</m-card>
		<div class="container">
			<m-card
				label="this is my card inside of a 300px wide container"
			>
				here is my card content
				<template #actions>
					<m-notice-button>button</m-notice-button>
				</template>
			</m-card>
		</div>
		<div style="width:400px;">
			<m-card
				label="this is my truncated label inside of a card with fixed width"
				truncate-label
			>
				here is my card content
			</m-card>
		</div>
	</div>
</template>

<script>
import { MCard } from '@square/maker/components/Card';
import { MNoticeButton } from '@square/maker/components/Notice';

export default {
	components: {
		MCard,
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

| Prop  | Type     | Default | Possible values | Description |
| ----- | -------- | ------- | --------------- | ----------- |
| label | `string` | `''`    | —               | Card label  |


## Slots

| Slot    | Description             |
| ------- | ----------------------- |
| default | card content            |
| actions | put notice buttons here |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
