# Stepper

```vue
<template>
	<div
		style="text-align: center"
	>
		<m-stepper
			v-model="number"
			min="0"
			max="10"
		/>
		v-model: {{ number }}
	</div>
</template>

<script>
import { MStepper } from '@square/maker/components/Stepper';

export default {
	components: {
		MStepper,
	},

	data() {
		return {
			number: 0,
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Props

| Prop       | Type            | Default | Possible values              | Description                     |
| ---------- | --------------- | ------- | ---------------------------- | ------------------------------- |
| v-model*   | `number`        | —       | —                            | stepper's current value         |
| min        | `number|string` | —       | —                            | stepper min value               |
| max        | `number|string` | —       | —                            | stepper max value               |
| color      | `string`        | —       | —                            | stepper button background color |
| text-color | `string`        | —       | —                            | stepper button text color       |
| shape      | `string`        | —       | `squared`, `rounded`, `pill` | stepper button shape            |


## Events

| Event          | Type     | Description           |
| -------------- | -------- | --------------------- |
| stepper:update | `number` | updated stepper value |
<!-- api-tables:end -->
