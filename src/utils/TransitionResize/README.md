# Transition Resize

```vue
<template>
	<div
		class="bordered"
		@click="toggleSmall"
	>
		<m-transition-resize>
			<div
				v-if="showSmall"
				key="small"
				class="smallTomato"
			>
				<p class="narrow">
					narrow small tomato
				</p>
			</div>
			<div
				v-else
				key="large"
				class="largeGold"
			>
				<p class="wide">
					wiiiiide large gooooold
					wiiiiide large gooooold
					wiiiiide large gooooold
					wiiiiide large gooooold
					wiiiiide large gooooold
					wiiiiide large gooooold
					wiiiiide large gooooold
					wiiiiide large gooooold
				</p>
			</div>
		</m-transition-resize>
	</div>
</template>

<script>
import { MTransitionResize } from '@square/maker/utils/TransitionResize';

export default {
	components: {
		MTransitionResize,
	},
	data() {
		return {
			showSmall: true,
		};
	},
	methods: {
		toggleSmall() {
			this.showSmall = !this.showSmall;
		},
	},
};
</script>

<style scoped>
.bordered {
	border: 2px solid black;
	display: inline-block;
	cursor: pointer;
}
.smallTomato {
	background-color: tomato;
	display: inline-block;
	vertical-align: middle;
}
.largeGold {
	background-color: gold;
	display: inline-block;
	vertical-align: middle;
}
.wide {
	max-width: 300px;
}
.narrow {
	max-width: 100px;
}
</style>
```


<!-- api-tables:start -->
## Slots

| Slot    | Description        |
| ------- | ------------------ |
| default | content to animate |
<!-- api-tables:end -->
