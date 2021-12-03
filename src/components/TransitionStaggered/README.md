# Transition Staggered

MTransitionStaggered creates a staggered load animation on a group of items (in a list or grid layout). It wraps each individual item and calculates its animation distance through an item-index prop.

```vue
<template>
	<div class="grid">
		<m-transition-staggered
			v-for="index in 12"
			:key="index"
			:items-per-row-mobile="1"
			:items-per-row-tablet="4"
			:item-index="index"
		>
			<div
				v-show="visible"
				class="grid-item"
			>
				{{ index }}
			</div>
		</m-transition-staggered>
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

<style>
:root {
	--item-height: 100px;
	--min-rows: 3;
	--gap: 16px;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: var(--gap);
	height: calc((var(--item-height) + var(--gap)) * var(--min-rows));
}

.grid-item {
	height: var(--item-height);
	background-color: #999;
	color: white;
	font-size: 32px;
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
