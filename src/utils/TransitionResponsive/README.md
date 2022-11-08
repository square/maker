# Transition Responsive

Foundational transition component that the rest are built on top of. Has the ability to customize enter and leave transition based on viewport width.

## Examples

### Spring up & down on Mobile but Fade in & out on Tablet

This is used internally by the Modal component. Resize your viewport below and above the tablet breakpoint of `840px` to see the transitions change.


```vue
<template>
	<div class="container">
		<m-transition-responsive
			:transitions="transitions"
		>
			<div
				v-if="visible"
				class="box"
			/>
		</m-transition-responsive>
	</div>
</template>

<script>
import { MTransitionResponsive } from '@square/maker/utils/TransitionResponsive';
import {
	fadeInFn,
	fadeOutFn,
	springUpFn,
	springDownFn,
	mobileMinWidth,
	tabletMinWidth,
} from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionResponsive,
	},

	inheritAttrs: false,

	data() {
		return {
			transitions: [{
				minWidth: mobileMinWidth,
				enter: springUpFn,
				leave: springDownFn,
			}, {
				minWidth: tabletMinWidth,
				enter: fadeInFn,
				leave: fadeOutFn,
			}],
			visible: false,
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
	width: 200px;
	height: 300px;
	overflow: hidden;
}
.box {
	width: 100%;
	height: 100%;
	background-color: var(--maker-color-neutral-10);
	border-radius: 16px;
}
</style>
```

<!-- api-tables:start -->
## Props

| Prop        | Type    | Default | Possible values | Description |
| ----------- | ------- | ------- | --------------- | ----------- |
| transitions | `array` | —       | -               | -           |


## Slots

| Slot    | Description        |
| ------- | ------------------ |
| default | content to animate |
<!-- api-tables:end -->
