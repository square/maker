# Transition Spring Responsive

Foundational transition component that the rest are built on top of. Has the ability to customize enter and leave transition based on viewport width.

## Examples

### Spring up & down on Mobile but Fade in & out on Desktop

This is used internally by the Modal component. Resize your viewport below and above the desktop breakpoint of `1200px` to see the transitions change.


```vue
<template>
	<div class="container">
		<m-transition-spring-responsive
			:transitions="transitions"
		>
			<div
				v-if="visible"
				class="box"
			/>
		</m-transition-spring-responsive>
	</div>
</template>

<script>
import { MTransitionSpringResponsive } from '@square/maker/utils/TransitionSpringResponsive';
import {
 fadeIn, fadeOut, springUp, springDown, mobileMinWidth, desktopMinWidth,
} from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionSpringResponsive,
	},

	inheritAttrs: false,

	data() {
		return {
			transitions: [{
				minWidth: mobileMinWidth,
				enter: springUp,
				leave: springDown,
			}, {
				minWidth: desktopMinWidth,
				enter: fadeIn,
				leave: fadeOut,
			}],
			visible: false,
		};
	},

	mounted() {
		setInterval(() => {
			this.visible = !this.visible;
		}, 2000);
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
	background-color: #ccc;
	border-radius: 16px;
}
</style>
```

<!-- api-tables:start -->
## Props

| Prop         | Type    | Default | Possible values | Description |
| ------------ | ------- | ------- | --------------- | ----------- |
| transitions* | `array` | —       | —               | —           |


## Slots

| Slot    | Description        |
| ------- | ------------------ |
| default | content to animate |
<!-- api-tables:end -->
