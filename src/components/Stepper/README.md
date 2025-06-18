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

## Accessibility Example

```vue
<template>
	<div style="text-align: center">
		<m-stepper
			v-model="quantity"
			:min="1"
			:max="10"
			aria-label="Product quantity selector"
			decrement-aria-label="Decrease quantity"
			increment-aria-label="Increase quantity"
			input-aria-label="Enter desired quantity"
			quantity-aria-label="Current quantity selection"
		/>
		Selected quantity: {{ quantity }}
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
			quantity: 1,
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Themable props* can be configured via the [Theme](#/Theme) component using the key `stepper`.

| Prop                     | Type            | Default       | Possible values                    | Description                                            |
| ------------------------ | --------------- | ------------- | ---------------------------------- | ------------------------------------------------------ |
| v-model                  | `number`        | —             | -                                  | stepper's current value                                |
| min                      | `number|string` | —             | -                                  | stepper min value                                      |
| max                      | `number|string` | —             | -                                  | stepper max value                                      |
| color*                   | `string`        | `'#f1f1f1'`   | -                                  | stepper button background color                        |
| text-color*              | `string`        | `'#1b1b1b'`   | -                                  | stepper button text color                              |
| shape*                   | `string`        | —             | `'squared'`, `'rounded'`, `'pill'` | stepper button shape                                   |
| aria-label               | `string`        | `''`          | -                                  | Overall label for the stepper group                    |
| aria-labelledby          | `string`        | `''`          | -                                  | References to elements that label the stepper          |
| aria-describedby         | `string`        | `''`          | -                                  | References to elements that describe the stepper       |
| decrement-aria-label     | `string`        | `'Decrement'` | -                                  | Custom label for the decrement button                  |
| increment-aria-label     | `string`        | `'Increment'` | -                                  | Custom label for the increment button                  |
| input-aria-label         | `string`        | `''`          | -                                  | Custom label for the manual input field                |
| input-aria-describedby   | `string`        | `''`          | -                                  | Additional description for the input field             |
| quantity-aria-label      | `string`        | `''`          | -                                  | Custom label for the quantity display                  |
| ariaLabel                | `string`        | —             | -                                  | Accessible label for the entire stepper control         |
| ariaLabelledby           | `string`        | —             | -                                  | ID of an element that labels the stepper                |
| decrementAriaLabel       | `string`        | `'Decrement'` | -                                  | Accessible label for the minus button                   |
| incrementAriaLabel       | `string`        | `'Increment'` | -                                  | Accessible label for the plus button                    |
| inputAriaLabel           | `string`        | —             | -                                  | Accessible label for the manual number input            |
| inputAriaDescribedby     | `string`        | —             | -                                  | ID of element that describes the manual input           |
| quantityAriaLabel        | `string`        | —             | -                                  | Accessible label for the quantity display                |


## Events

| Event          | Type     | Description           |
| -------------- | -------- | --------------------- |
| stepper:update | `number` | updated stepper value |
<!-- api-tables:end -->
