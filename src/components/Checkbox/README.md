# Checkbox

```vue
<template>
	<div>
		<h4>normal state</h4>
		<m-checkbox>
			label
		</m-checkbox>
		<m-checkbox
			v-model="checkedVals"
			value="normal"
		>
			label
		</m-checkbox>

		<h4>disabled state</h4>
		<m-checkbox disabled>
			label
		</m-checkbox>
		<m-checkbox
			v-model="checkedVals"
			disabled
			value="disabled"
		>
			label
		</m-checkbox>

		<h4>invalid state</h4>
		<m-checkbox invalid>
			label
		</m-checkbox>
		<m-checkbox
			v-model="checkedVals"
			invalid
			value="invalid"
		>
			label
		</m-checkbox>

		<h4>checked values array</h4>
		<pre><code>{{ JSON.stringify($data, null, 4) }}</code></pre>

		<h4>example with label</h4>
		<m-checkbox>
			I am a really long label with lots of text and
			more text and please wrap already wrap wrap wrap wrap
		</m-checkbox>

		<h4>example with label + sublabel</h4>
		<m-checkbox>
			I am a really long label with lots of text and
			more text and please wrap already wrap wrap wrap wrap
			<template #sublabel>
				I am a sublabel text text wrap wrap wrap
				text text text wrap wrap wrap wrap wrap wrap
			</template>
		</m-checkbox>
	</div>
</template>

<script>
import { MCheckbox } from '@square/maker/components/Checkbox';

export default {
	components: {
		MCheckbox,
	},

	data() {
		return {
			checkedVals: [
				'normal',
				'disabled',
				'invalid',
			],
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<input type="checkbox">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

| Prop     | Type            | Default | Possible values | Description                    |
| -------- | --------------- | ------- | --------------- | ------------------------------ |
| disabled | `boolean`       | `false` | -               | Toggles radio disabled state   |
| invalid  | `boolean`       | `false` | -               | Toggles checkbox invalid state |
| v-model  | `boolean|array` | —       | -               | Toggles checkbox checked state |
| value    | `undefined`     | —       | -               | Value to return from v-model   |


## Slots

| Slot     | Description       |
| -------- | ----------------- |
| default  | Checkbox label    |
| sublabel | Checkbox sublabel |


## Events

Supports events from [`<input type="checkbox">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

| Event           | Type | Description |
| --------------- | ---- | ----------- |
| checkbox:update | -    | —           |
<!-- api-tables:end -->
