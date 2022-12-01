# Select

Use Select when you'd like the user to select a single option from a dropdown list of options. If the options are information dense and you need something fancier, use [Menu](#/Menu) (in single-select mode). If you'd like all of the options to inlined use [Radio](#/Radio), [SegmentedControl](#/SegmentedControl), or [Choice](#/Choice) (in single-select mode). If you'd like the user to select potentially many options from a dropdown list of options use [Menu](#/Menu) (in multi-select mode). If you'd like all the options to be inlined use [Checkbox](#/Checkbox) or [Choice](#/Choice) (in multi-select mode).

## Examples

### Default State

Filled variant.

```vue
<template>
	<m-select
		v-model="currentValue"
		placeholder="Placeholder"
		:options="options"
	/>
</template>

<script>
import { MSelect } from '@square/maker/components/Select';

export default {
	components: {
		MSelect,
	},

	data() {
		return {
			currentValue: undefined,
			options: [
				{
					value: '1',
					label: 'Short Option 1',
				},
				{
					value: '2',
					label: 'Longer Option 2',
				},
				{
					value: '3',
					label: 'Even Longer Option 3',
				},
				{
					value: '4',
					disabled: true,
					label: 'Really Long Disabled Option 4',
				},
			],
		};
	},
};
</script>
```

### Disabled State

```vue
<template>
	<m-select
		v-model="currentValue"
		placeholder="Placeholder"
		:options="options"
		disabled
	/>
</template>

<script>
import { MSelect } from '@square/maker/components/Select';

export default {
	components: {
		MSelect,
	},

	data() {
		return {
			currentValue: undefined,
			options: [
				{
					value: '1',
					label: 'Short Option 1',
				},
				{
					value: '2',
					label: 'Longer Option 2',
				},
				{
					value: '3',
					label: 'Even Longer Option 3',
				},
			],
		};
	},
};
</script>
```

### Invalid State

```vue
<template>
	<m-select
		v-model="currentValue"
		placeholder="Placeholder"
		:options="options"
		invalid
	/>
</template>

<script>
import { MSelect } from '@square/maker/components/Select';

export default {
	components: {
		MSelect,
	},

	data() {
		return {
			currentValue: undefined,
			options: [
				{
					value: '1',
					label: 'Short Option 1',
				},
				{
					value: '2',
					label: 'Longer Option 2',
				},
				{
					value: '3',
					label: 'Even Longer Option 3',
				},
				{
					value: '4',
					disabled: true,
					label: 'Really Long Disabled Option 4',
				},
			],
		};
	},
};
</script>
```

### With Error Slot

```vue
<template>
	<m-select
		v-model="currentValue"
		placeholder="Placeholder"
		:options="options"
	>
		<template #error>
			<m-notice pattern="error">
				error message here
			</m-notice>
		</template>
	</m-select>
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
					value: '1',
					label: 'Short Option 1',
				},
				{
					value: '2',
					label: 'Longer Option 2',
				},
				{
					value: '3',
					label: 'Even Longer Option 3',
				},
				{
					value: '4',
					disabled: true,
					label: 'Really Long Disabled Option 4',
				},
			],
		};
	},
};
</script>
```

### With Prefix Slot

Only 16px by 16px icons can be used in the prefix slot

```vue
<template>
	<m-select
		v-model="currentValue"
		placeholder="Placeholder"
		:options="options"
	>
		<template #prefix>
			<feather-icon class="icon" />
		</template>
	</m-select>
</template>

<script>
import { MSelect } from '@square/maker/components/Select';
import FeatherIcon from '@square/maker-icons/Feather';

export default {
	components: {
		MSelect,
		FeatherIcon,
	},

	data() {
		return {
			currentValue: undefined,
			options: [
				{
					value: '1',
					label: 'Short Option 1',
				},
				{
					value: '2',
					label: 'Longer Option 2',
				},
				{
					value: '3',
					label: 'Even Longer Option 3',
				},
				{
					value: '4',
					disabled: true,
					label: 'Really Long Disabled Option 4',
				},
			],
		};
	},
};
</script>

<style scoped>
.icon {
	width: 16px;
	height: 16px;
}
</style>
```

### Outline Variant

```vue
<template>
	<m-select
		v-model="currentValue"
		placeholder="Placeholder"
		variant="outline"
		:options="options"
	/>
</template>

<script>
import { MSelect } from '@square/maker/components/Select';

export default {
	components: {
		MSelect,
	},

	data() {
		return {
			currentValue: undefined,
			options: [
				{
					value: '1',
					label: 'Short Option 1',
				},
				{
					value: '2',
					label: 'Longer Option 2',
				},
				{
					value: '3',
					label: 'Even Longer Option 3',
				},
				{
					value: '4',
					disabled: true,
					label: 'Really Long Disabled Option 4',
				},
			],
		};
	},
};
</script>
```

### Outline Variant Disabled State

```vue
<template>
	<m-select
		v-model="currentValue"
		placeholder="Placeholder"
		variant="outline"
		:options="options"
		disabled
	/>
</template>

<script>
import { MSelect } from '@square/maker/components/Select';

export default {
	components: {
		MSelect,
	},

	data() {
		return {
			currentValue: undefined,
			options: [
				{
					value: '1',
					label: 'Short Option 1',
				},
				{
					value: '2',
					label: 'Longer Option 2',
				},
				{
					value: '3',
					label: 'Even Longer Option 3',
				},
			],
		};
	},
};
</script>
```

### Outline Variant Invalid State

```vue
<template>
	<m-select
		v-model="currentValue"
		placeholder="Placeholder"
		variant="outline"
		:options="options"
		invalid
	/>
</template>

<script>
import { MSelect } from '@square/maker/components/Select';

export default {
	components: {
		MSelect,
	},

	data() {
		return {
			currentValue: undefined,
			options: [
				{
					value: '1',
					label: 'Short Option 1',
				},
				{
					value: '2',
					label: 'Longer Option 2',
				},
				{
					value: '3',
					label: 'Even Longer Option 3',
				},
				{
					value: '4',
					disabled: true,
					label: 'Really Long Disabled Option 4',
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

| Prop        | Type      | Default  | Possible values       | Description                  |
| ----------- | --------- | -------- | --------------------- | ---------------------------- |
| variant     | `string`  | `'fill'` | `'fill'`, `'outline'` | Select variant               |
| v-model     | `string`  | —        | -                     | current selected value       |
| placeholder | `string`  | `''`     | -                     | Select placeholder           |
| options     | `array`   | `[]`     | -                     | Select options               |
| invalid     | `boolean` | `false`  | -                     | Toggles select invalid state |


## Slots

| Slot   | Description             |
| ------ | ----------------------- |
| prefix | Select prefix           |
| error  | slot for error messages |


## Events

Supports events from [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

| Event         | Type | Description |
| ------------- | ---- | ----------- |
| select:update | -    | —           |
<!-- api-tables:end -->
