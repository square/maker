# Select

```vue
<template>
	<div>
		<h4>normal state</h4>
		<m-select
			v-model="currentValue"
			placeholder="Placeholder"
			:options="options"
		/>

		<h4>disabled state</h4>
		<m-select
			v-model="currentDisabledValue"
			placeholder="Placeholder"
			:options="disabledOptions"
			disabled
		/>

		<h4>invalid state</h4>
		<m-select
			v-model="currentInvalidValue"
			placeholder="Placeholder"
			:options="invalidOptions"
			invalid
		/>

		<h4>with error slot</h4>
		<m-select
			v-model="currentInvalidValue"
			placeholder="Placeholder"
			:options="invalidOptions"
		>
			<template #error>
				<m-notice type="error">
					error message here
				</m-notice>
			</template>
		</m-select>
	</div>
</template>

<script>
import { MSelect } from '@square/maker/components/Select';
import { MNotice } from '@square/maker/components/Notice';

export default {
	components: {
		MSelect,
		MNotice,
	},

	data() {
		return {
			currentValue: undefined,
			options: [
				{
					value: 1,
					label: 'Short Option 1',
				},
				{
					value: 2,
					label: 'Longer Option 2',
				},
				{
					value: 3,
					label: 'Even Longer Option 3',
				},
				{
					value: 4,
					disabled: true,
					label: 'Really Long Disabled Option 4',
				},
			],
			currentDisabledValue: undefined,
			disabledOptions: [
				{
					value: 1,
					disabled: true,
					label: 'Disabled Option 1',
				},
				{
					value: 2,
					disabled: true,
					label: 'Invalid Option 2',
				},
			],
			currentInvalidValue: undefined,
			invalidOptions: [
				{
					value: 1,
					label: 'Invalid Option 1',
				},
				{
					value: 2,
					label: 'Invalid Option 2',
				},
			],
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

| Prop        | Type      | Default  | Possible values | Description                  |
| ----------- | --------- | -------- | --------------- | ---------------------------- |
| variant     | `string`  | `'fill'` | `fill`          | Select variant               |
| v-model     | `string`  | —        | —               | current selected value       |
| placeholder | `string`  | `''`     | —               | Select placeholder           |
| options*    | `array`   | —        | —               | Select options               |
| invalid     | `boolean` | `false`  | —               | Toggles select invalid state |


## Slots

| Slot  | Description             |
| ----- | ----------------------- |
| error | slot for error messages |


## Events

Supports events from [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

| Event         | Type | Description |
| ------------- | ---- | ----------- |
| select:update | -    | —           |
<!-- api-tables:end -->
