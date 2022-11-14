# Transition Collapse

MTransitionCollapse only animates the height property of its child, so for best results wrap your default slot content in a marginless, paddingless parent with `overflow: hidden` on it.

The example below illustrates that it's safe to use the transition even with dynamically generated content that may change the height of the content before, during, or after the transition.

```vue
<template>
	<div class="container">
		content above box
		<m-transition-collapse>
			<div
				v-if="visible"
				class="wrapper"
			>
				<div class="gray-box">
					<div
						v-for="count in repetitions"
						:key="count"
					>
						content in box {{ count }}
					</div>
				</div>
			</div>
		</m-transition-collapse>
		content below box
	</div>
</template>

<script>
import { MTransitionCollapse } from '@square/maker/components/TransitionCollapse';

const INCREMENT = 1;
const DECREMENT = -1;
const MIN_REPETITIONS = 2;
const MAX_REPETITIONS = 12;

export default {
	components: {
		MTransitionCollapse,
	},

	data() {
		return {
			visible: true,
			repetitions: MIN_REPETITIONS,
			increment: INCREMENT,
		};
	},

	mounted() {
		const transitionIntervalMs = 2000;
		const incrementIntervalMs = 500;
		setInterval(() => {
			if (this.repetitions === MAX_REPETITIONS) {
				this.increment = DECREMENT;
			} else if (this.repetitions === MIN_REPETITIONS) {
				this.increment = INCREMENT;
			}
			this.repetitions += this.increment;
		}, incrementIntervalMs);
		setInterval(() => {
			this.visible = !this.visible;
		}, transitionIntervalMs);
	},
};
</script>

<style scoped>
.wrapper {
	overflow: hidden;
}
.gray-box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
    background-color: var(--maker-color-neutral-10);
	padding: 40px;
	border: 2px solid var(--maker-color-neutral-20);
	width: 500px;
}
</style>
```

<!-- api-tables:start -->
## Slots

| Slot    | Description                  |
| ------- | ---------------------------- |
| default | content to collapse & expand |
<!-- api-tables:end -->
