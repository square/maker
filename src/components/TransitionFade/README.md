# TransitionFade

```vue
<template>
	<div>
		<div class="container">
			<m-transition-fade>
				<div
					v-if="shown"
					class="gray-box"
				/>
			</m-transition-fade>
		</div>
		<p>
			{{ shown ? 'Visible' : 'Hidden' }}
		</p>
	</div>
</template>

<script>
import { MTransitionFade } from '@square/maker/components/TransitionFade';

export default {
	components: {
		MTransitionFade,
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
