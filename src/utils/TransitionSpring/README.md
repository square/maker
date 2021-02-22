# Transition Spring

Pass popmotion enter & leave configs to configure this spring transition component. The public transition component are built on top of this component (which itself is built on top of TransitionSpringResponsive).

## Examples

### Fade in & out

If you want this just use the TransitionFade component.

```vue
<template>
	<div class="container">
		<m-transition-spring
			:enter="fadeIn"
			:leave="fadeOut"
		>
			<div
				v-if="visible"
				class="box"
			/>
		</m-transition-spring>
	</div>
</template>

<script>
import { MTransitionSpring } from '@square/maker/utils/TransitionSpring';
import { fadeIn, fadeOut } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionSpring,
	},

	inheritAttrs: false,

	data() {
		return {
			fadeIn,
			fadeOut,
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

### Spring up & down

If you want this just use the TransitionSpringUp component.

```vue
<template>
	<div class="container">
		<m-transition-spring
			:enter="springUp"
			:leave="springDown"
		>
			<div
				v-if="visible"
				class="box"
			/>
		</m-transition-spring>
	</div>
</template>

<script>
import { MTransitionSpring } from '@square/maker/utils/TransitionSpring';
import { springUp, springDown } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionSpring,
	},

	data() {
		return {
			springUp,
			springDown,
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
	border-radius: 16px 16px 0 0;
	background-color: #ccc;
}
</style>
```

### Fade in & spring down

Example of mixing different transition styles on enter and leave.

```vue
<template>
	<div class="container">
		<m-transition-spring
			:enter="fadeIn"
			:leave="springDown"
		>
			<div
				v-if="visible"
				class="box"
			/>
		</m-transition-spring>
	</div>
</template>

<script>
import { MTransitionSpring } from '@square/maker/utils/TransitionSpring';
import { fadeIn, springDown } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionSpring,
	},

	data() {
		return {
			fadeIn,
			springDown,
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
	border-radius: 16px 16px 0 0;
	background-color: #ccc;
}
</style>
```

### Spring up & fade out

Another example of mixing different transition styles on enter and leave.

```vue
<template>
	<div class="container">
		<m-transition-spring
			:enter="springUp"
			:leave="fadeOut"
		>
			<div
				v-if="visible"
				class="box"
			/>
		</m-transition-spring>
	</div>
</template>

<script>
import { MTransitionSpring } from '@square/maker/utils/TransitionSpring';
import { springUp, fadeOut } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionSpring,
	},

	data() {
		return {
			springUp,
			fadeOut,
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
	border-radius: 16px 16px 0 0;
	background-color: #ccc;
}
</style>
```


<!-- api-tables:start -->
## Props

| Prop   | Type     | Default | Possible values | Description |
| ------ | -------- | ------- | --------------- | ----------- |
| enter* | `object` | —       | —               | —           |
| leave* | `object` | —       | —               | —           |


## Slots

| Slot    | Description        |
| ------- | ------------------ |
| default | content to animate |
<!-- api-tables:end -->
