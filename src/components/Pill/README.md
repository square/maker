# Pill

Use Pill to notify users of things.

## Examples

Pill has the following built-in patterns: error, warning, success, info.

```vue
<template>
	<div class="spaceout">
		<m-pill
			v-for="pattern in patterns"
			:key="pattern"
			:pattern="pattern"
		>
			{{ pattern }} pill
		</m-pill>
	</div>
</template>

<script>
import { MPill } from '@square/maker/components/Pill';

export default {
	components: {
		MPill,
	},
	data() {
		return {
			patterns: [
				'error',
				'warning',
				'success',
				'info',
				'errorOutline',
				'warningOutline',
				'successOutline',
				'infoOutline',
				'errorSubtle',
				'warningSubtle',
				'successSubtle',
				'infoSubtle',
			],
		};
	},
};
</script>

<style scoped>
.spaceout > * {
	margin: 4px;
}
</style>
```


<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop       | Type     | Default | Possible values | Description                                  |
| ---------- | -------- | ------- | --------------- | -------------------------------------------- |
| pattern    | `string` | —       | —               | pattern defined at theme level               |
| text-color | `string` | —       | —               | text color, also border color if no bg color |
| bg-color   | `string` | —       | —               | bg & border color                            |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | pill content |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
