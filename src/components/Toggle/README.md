# Toggle

```vue
<template>
	<div>
		<h4>normal state</h4>
		<m-toggle>
			label
		</m-toggle>
		<m-toggle v-model="normalValue">
			label
		</m-toggle>

		<h4>disabled state</h4>
		<m-toggle disabled>
			label
		</m-toggle>
		<m-toggle
			v-model="disabledValue"
			disabled
		>
			label
		</m-toggle>

		<h4>invalid state</h4>
		<m-toggle invalid>
			label
		</m-toggle>
		<m-toggle
			v-model="invalidValue"
			invalid
		>
			label
		</m-toggle>

		<h4>toggle values</h4>
		<pre><code>{{ JSON.stringify($data, null, 4) }}</code></pre>

		<h4>example with label</h4>
		<m-toggle>
			I am a really long label with lots of text and
			more text and please wrap already wrap wrap wrap wrap
		</m-toggle>

		<h4>example with label + sublabel</h4>
		<m-toggle>
			I am a really long label with lots of text and
			more text and please wrap already wrap wrap wrap wrap
			<template #sublabel>
				I am a sublabel text text wrap wrap wrap
				text text text wrap wrap wrap wrap wrap wrap
			</template>
		</m-toggle>
	</div>
</template>

<script>
import { MToggle } from '@square/maker/components/Toggle';

export default {
	components: {
		MToggle,
	},

	data() {
		return {
			normalValue: true,
			disabledValue: true,
			invalidValue: true,
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<input type="checkbox">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

| Prop    | Type      | Default | Possible values | Description                  |
| ------- | --------- | ------- | --------------- | ---------------------------- |
| v-model | `boolean` | `false` | —               | Current toggled state        |
| invalid | `boolean` | `false` | —               | Toggles Toggle invalid state |


## Slots

| Slot     | Description     |
| -------- | --------------- |
| default  | toggle label    |
| sublabel | toggle sublabel |


## Events

Supports events from [`<input type="checkbox">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

| Event         | Type      | Description            |
| ------------- | --------- | ---------------------- |
| toggle:update | `boolean` | toggle's updated value |
<!-- api-tables:end -->
