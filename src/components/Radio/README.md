# Radio

Use Radio when you'd like the user to select a single option from an inline list of options. Other components you can use for this use-case are [SegmentedControl](#/SegmentedControl) and [Choice](#/Choice) (in single-select mode). If you'd like the user to select potentially many options then use [Checkbox](#/Checkbox) or [Choice](#/Choice) (in multi-select mode). If you'd like the list of options to be hidden behind a toggled dropdown list then use [Select](#/Select) or [Menu](#/Menu) (in single-select mode) for single-select use-cases and [Menu](#/Menu) (in multi-select mode) for multi-select use-cases.

```vue
<template>
	<div>
		<h4>normal state</h4>
		<m-radio
			v-model="selectedVal"
			value="normal"
		>
			label
		</m-radio>

		<h4>disabled state</h4>
		<m-radio
			v-model="selectedVal"
			disabled
			value="disabled"
		>
			label
		</m-radio>

		<h4>invalid state</h4>
		<m-radio
			v-model="selectedVal"
			invalid
			value="invalid"
		>
			label
		</m-radio>

		<h4>selected value</h4>
		<pre><code>{{ JSON.stringify($data, null, 4) }}</code></pre>

		<h4>example with label</h4>
		<m-radio
			v-model="selectedVal"
			value="label"
		>
			I am a really long label with lots of text and
			more text and please wrap already wrap wrap wrap wrap
		</m-radio>

		<h4>example with label + sublabel</h4>
		<m-radio
			v-model="selectedVal"
			value="sublabel"
		>
			I am a really long label with lots of text and
			more text and please wrap already wrap wrap wrap wrap
			<template #sublabel>
				I am a sublabel text text wrap wrap wrap
				text text text wrap wrap wrap wrap wrap wrap
			</template>
		</m-radio>
	</div>
</template>

<script>
import { MRadio } from '@square/maker/components/Radio';

export default {
	components: {
		MRadio,
	},

	data() {
		return {
			selectedVal: 'normal',
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<input type="radio">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio).

| Prop     | Type        | Default | Possible values | Description                    |
| -------- | ----------- | ------- | --------------- | ------------------------------ |
| value    | `undefined` | —       | -               | Value to return from v-model   |
| v-model  | `undefined` | —       | -               | Toggles radio's selected state |
| invalid  | `boolean`   | `false` | -               | Toggles radio's invalid state  |
| disabled | `boolean`   | `false` | -               | Toggles radio disabled state   |


## Slots

| Slot     | Description    |
| -------- | -------------- |
| default  | Radio label    |
| sublabel | Radio sublabel |


## Events

Supports events from [`<input type="radio">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio).

| Event        | Type | Description |
| ------------ | ---- | ----------- |
| radio:update | -    | —           |
<!-- api-tables:end -->
