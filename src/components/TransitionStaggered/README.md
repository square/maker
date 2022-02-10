# Transition Staggered

MTransitionStaggered creates a staggered load animation on a group of items (in a list or grid layout). It wraps each individual item and calculates its animation distance through an item-index prop.

```vue
<template>
	<div class="grid">
		<div
			v-for="index in 12"
			:key="index"
			class="grid-column"
		>
			<m-transition-staggered
				:items-per-row-mobile="1"
				:items-per-row-tablet="4"
				:item-index="index"
			>
				<div
					v-show="visible"
					class="grid-item"
				/>
			</m-transition-staggered>
		</div>
	</div>
</template>

<script>
import { MTransitionStaggered } from '@square/maker/components/TransitionStaggered';

export default {
	components: {
		MTransitionStaggered,
	},

	data() {
		return {
			visible: true,
		};
	},

	mounted() {
		const transitionIntervalMs = 2000;
		setInterval(() => {
			this.visible = !this.visible;
		}, transitionIntervalMs);
	},
};
</script>

<style scoped>
.grid {
	display: flex;
	flex-wrap: wrap;
	min-height: 624px;
}

.grid-column {
	width: 100%;
	height: 40px;
	margin: 0 auto 12px;
}

.grid-item {
	width: 100%;
	height: 40px;
	background-color: #999;
}

@media screen and (min-width: 840px) {
	.grid {
		min-height: 372px;
	}

	.grid-column {
		width: calc(25% - 24px);
		height: 100px;
		margin: 0 12px 24px;
	}
	.grid-item {
		height: 100px;
	}
}
</style>
```

<!-- api-tables:start -->
## Props

| Prop                 | Type     | Default | Possible values | Description                         |
| -------------------- | -------- | ------- | --------------- | ----------------------------------- |
| items-per-row-mobile | `number` | `1`     | —               | Items to stagger per row on mobile  |
| items-per-row-tablet | `number` | `1`     | —               | Items to stagger per row on tablet  |
| item-index           | `number` | `1`     | —               | The index of the item within a list |

## Slots

| Slot    | Description        |
| ------- | ------------------ |
| default | content to animate |
<!-- api-tables:end -->
