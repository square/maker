# Stepper

```vue
<template>
	<div
		style="text-align: center"
	>
		<div>
			<h3>Small</h3>
			<m-stepper
				v-model="smallNumber"
				min="0"
				max="10"
			/>
			v-model: {{ smallNumber }}
		</div>
		<div>
			<h3>Medium</h3>
			<m-stepper
				v-model="mediumNumber"
				size="medium"
				min="0"
				max="10"
			/>
			v-model: {{ mediumNumber }}
		</div>
		<div>
			<h3>Large</h3>
			<m-stepper
				v-model="largeNumber"
				size="large"
				min="0"
				max="10"
			/>
			v-model: {{ largeNumber }}
		</div>
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
			smallNumber: 0,
			mediumNumber: 0,
			largeNumber: 0,
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Props

| Prop       | Type            | Default     | Possible values            | Description                     |
| ---------- | --------------- | ----------- | -------------------------- | ------------------------------- |
| v-model*   | `number`        | —           | —                          | stepper's current value         |
| min        | `number|string` | —           | —                          | stepper min value               |
| max        | `number|string` | —           | —                          | stepper max value               |
| color      | `string`        | `'#cccccc'` | —                          | stepper button background color |
| text-color | `string`        | `'#000000'` | —                          | stepper button text color       |
| size       | `string`        | `'small'`   | `small`, `medium`, `large` | stepper button size             |


## Events

| Event          | Type     | Description           |
| -------------- | -------- | --------------------- |
| stepper:update | `number` | updated stepper value |
<!-- api-tables:end -->
