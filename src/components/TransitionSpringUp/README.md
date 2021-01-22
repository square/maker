# Transition Spring Up

```vue
<template>
	<div>
		<div class="container">
			<m-transition-spring-up>
				<div
					v-if="shown"
					class="gray-box"
				/>
			</m-transition-spring-up>
		</div>
		<p>
			{{ shown ? 'Visible' : 'Hidden' }}
		</p>
	</div>
</template>

<script>
import { MTransitionSpringUp } from '@square/maker/components/TransitionSpringUp';

export default {
	components: {
		MTransitionSpringUp,
	},

	data() {
		return {
			shown: true,
		};
	},

	mounted() {
		setInterval(() => {
			this.shown = !this.shown;
		}, 1500);
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
    border-radius: 16px 16px 0 0;
    background-color: #ccc;
}
</style>
```

<!-- api-tables:start -->
## Slots

| Slot    | Description          |
| ------- | -------------------- |
| default | content to spring up |
<!-- api-tables:end -->
