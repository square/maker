# Transition Staggered

```vue
<template>
	<div class="grid">
		<div
			v-for="index in 16"
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
	height: 530px;
}

.grid-column {
	width: 100%;
	margin: 0 auto 24px;
}

@media screen and (min-width: 840px) {
	.grid-column {
		width: calc(25% - 24px);
		margin: 0 12px 24px;
	}
}

.grid-item {
	background-color: #999;
	width: 100%;
	height: 100px;
}
</style>
```

<!-- api-tables:start -->
## Props

| Prop                 | Type     | Default | Possible values                    | Description                           |
| -------------------- | -------- | ------- | ---------------------------------- | ------------------------------------- |
| items-per-row-mobile | `number` | `1`     | —                                  | items to stagger per row on mobile    |
| items-per-row-tablet | `number` | `1`     | —                                  | items to stagger per row on tablet    |
| item-index           | `number` | `1`     | —                                  | the index of the item within a list   |

## Slots

| Slot    | Description          |
| ------- | -------------------- |
| default | content to spring up |
<!-- api-tables:end -->
