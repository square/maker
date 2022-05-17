# Pill

Use Pill to notify users of things.

## Examples

Pill has the following built-in patterns: error, warning, success, info.

```vue
<template>
	<div class="spaceout">
		<m-pill pattern="error">
			Error Filled Pill
		</m-pill>
		<m-pill pattern="success">
			Success Filled Pill
		</m-pill>
		<m-pill pattern="warning">
			Warning Filled Pill
		</m-pill>
		<m-pill pattern="info">
			Info Filled Pill
		</m-pill>

		<m-pill
			pattern="error"
			mode="outline"
		>
			Error Outline Pill
		</m-pill>
		<m-pill
			pattern="success"
			mode="outline"
		>
			Success Outline Pill
		</m-pill>
		<m-pill
			pattern="warning"
			mode="outline"
		>
			Warning Outline Pill
		</m-pill>
		<m-pill
			pattern="info"
			mode="outline"
		>
			Info Outline Pill
		</m-pill>
	</div>
</template>

<script>
import { MPill } from '@square/maker/components/Pill';

export default {
	components: {
		MPill,
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

| Prop       | Type     | Default | Possible values     | Description                                                      |
| ---------- | -------- | ------- | ------------------- | ---------------------------------------------------------------- |
| pattern    | `string` | —       | —                   | pattern defined at theme level                                   |
| mode       | `string` | —       | `filled`, `outline` | style of pill                                                    |
| color      | `string` | —       | —                   | bg color for filled pills, text & border color for outline pills |
| text-color | `string` | —       | —                   | text color for filled pills, ignored for outline pills           |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | pill content |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
