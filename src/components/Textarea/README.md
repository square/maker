# Textarea

```vue
<template>
	<div>
		<h4>normal state</h4>
		<m-textarea placeholder="Placeholder" />

		<h4>disabled state</h4>
		<m-textarea
			placeholder="Placeholder"
			disabled
		/>

		<h4>invalid state</h4>
		<m-textarea
			placeholder="Placeholder"
			invalid
		/>

		<h4>resizable</h4>
		<m-textarea
			placeholder="Placeholder"
			resizable
		/>

		<h4>with error slot</h4>
		<m-textarea placeholder="Placeholder">
			<template #error>
				<m-notice type="error">
					error message here
				</m-notice>
			</template>
		</m-textarea>
	</div>
</template>

<script>
import { MTextarea } from '@square/maker/components/Textarea';
import { MNotice } from '@square/maker/components/Notice';

export default {
	components: {
		MNotice,
		MTextarea,
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

| Prop      | Type      | Default  | Possible values | Description                           |
| --------- | --------- | -------- | --------------- | ------------------------------------- |
| variant   | `string`  | `'fill'` | `fill`          | textarea variant                      |
| v-model   | `string`  | `''`     | —               | textarea's current value              |
| invalid   | `boolean` | `false`  | —               | Toggle textarea's invalid state       |
| resizable | `boolean` | `false`  | —               | Toggles whether textarea is resizable |


## Slots

| Slot  | Description             |
| ----- | ----------------------- |
| error | slot for error messages |


## Events

Supports events from [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

| Event           | Type     | Description            |
| --------------- | -------- | ---------------------- |
| textarea:update | `string` | updated textarea value |
<!-- api-tables:end -->
