# Transition Fade In

```vue
<template>
	<div class="container">
		<m-transition-fade-in>
			<div
				v-if="visible"
				class="gray-box"
			/>
		</m-transition-fade-in>
	</div>
</template>

<script>
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';

export default {
	components: {
		MTransitionFadeIn,
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
.container {
    width: 300px;
    height: 500px;
    overflow: hidden;
}

.gray-box {
    width: 300px;
    height: 500px;
    background-color: #ccc;
}
</style>
```

<!-- api-tables:start -->
## Slots

| Slot    | Description              |
| ------- | ------------------------ |
| default | content to fade in & out |
<!-- api-tables:end -->
