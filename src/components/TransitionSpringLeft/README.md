# Transition Spring Left

```vue
<template>
	<div>
		<div class="container">
			<m-transition-spring-left>
				<div
					v-if="shown"
					class="gray-box"
				/>
			</m-transition-spring-left>
		</div>
		<p>
			{{ shown ? 'Visible' : 'Hidden' }}
		</p>
	</div>
</template>

<script>
import { MTransitionSpringLeft } from '@square/maker/components/TransitionSpringLeft';

export default {
	components: {
		MTransitionSpringLeft,
	},

	data() {
		return {
			shown: true,
		};
	},

	mounted() {
		const transitionIntervalMs = 2000;
		setInterval(() => {
			this.shown = !this.shown;
		}, transitionIntervalMs);
	},
};
</script>

<style scoped>
.container {
    width: 300px;
    height: 500px;
    overflow: hidden;
}

.gray-box {
    width: 100%;
    height: 100%;
    border-radius: 16px 0 0 16px;
    background-color: var(--maker-color-neutral-10);
}
</style>
```

<!-- api-tables:start -->
## Slots

| Slot    | Description            |
| ------- | ---------------------- |
| default | content to spring left |
<!-- api-tables:end -->
