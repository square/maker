# Transition

Pass transition functions from `@square/maker/utils/transitions` to the `Transition` component to animate conditionally rendered elements. All of the transition components in Maker's public API are built on top of this component (which itself is built on top of the `TransitionResponsive` component).

## Examples

### Fade in & out

If you want this just use the `TransitionFadeIn` component.

```vue
<template>
	<div class="container">
		<m-transition
			:enter="fadeInFn"
			:leave="fadeOutFn"
		>
			<div
				v-if="visible"
				class="box"
			/>
		</m-transition>
	</div>
</template>

<script>
import { MTransition } from '@square/maker/components/Transition';
import { fadeInFn, fadeOutFn } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransition,
	},

	inheritAttrs: false,

	data() {
		return {
			fadeInFn,
			fadeOutFn,
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

### Spring up & down

If you want this just use the `TransitionSpringUp` component.

```vue
<template>
	<div class="container">
		<m-transition
			:enter="springUpFn"
			:leave="springDownFn"
		>
			<div
				v-if="visible"
				class="box"
			/>
		</m-transition>
	</div>
</template>

<script>
import { MTransition } from '@square/maker/components/Transition';
import { springUpFn, springDownFn } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransition,
	},

	data() {
		return {
			springUpFn,
			springDownFn,
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
	border-radius: 16px 16px 0 0;
	background-color: var(--maker-color-neutral-10);
}
</style>
```

### Fade in & spring down

Example of mixing different transition styles on enter and leave.

```vue
<template>
	<div class="container">
		<m-transition
			:enter="fadeInFn"
			:leave="springDownFn"
		>
			<div
				v-if="visible"
				class="box"
			/>
		</m-transition>
	</div>
</template>

<script>
import { MTransition } from '@square/maker/components/Transition';
import { fadeInFn, springDownFn } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransition,
	},

	data() {
		return {
			fadeInFn,
			springDownFn,
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
	border-radius: 16px 16px 0 0;
	background-color: var(--maker-color-neutral-10);
}
</style>
```

### Spring up & fade out

Another example of mixing different transition styles on enter and leave.

```vue
<template>
	<div class="container">
		<m-transition
			:enter="springUpFn"
			:leave="fadeOutFn"
		>
			<div
				v-if="visible"
				class="box"
			/>
		</m-transition>
	</div>
</template>

<script>
import { MTransition } from '@square/maker/components/Transition';
import { springUpFn, fadeOutFn } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransition,
	},

	data() {
		return {
			springUpFn,
			fadeOutFn,
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
	border-radius: 16px 16px 0 0;
	background-color: var(--maker-color-neutral-10);
}
</style>
```


<!-- api-tables:start -->
## Props

| Prop  | Type   | Default | Possible values | Description |
| ----- | ------ | ------- | --------------- | ----------- |
| enter | `func` | —       | -               | -           |
| leave | `func` | —       | -               | -           |


## Slots

| Slot    | Description        |
| ------- | ------------------ |
| default | content to animate |
<!-- api-tables:end -->
