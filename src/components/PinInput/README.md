# PinInput

### Correct test code is 123456
```vue
<template>
	<m-pin-input
		:disabled="disableInput"
		@complete="onCodeComplete"
	>
		<template
			v-if="hasError"
			#error
		>
			<m-notice type="error">
				Error slot
			</m-notice>
		</template>
	</m-pin-input>
</template>

<script>
import { MPinInput } from '@square/maker/components/PinInput';
import { MNotice } from '@square/maker/components/Notice';

export default {
	components: {
		MPinInput,
		MNotice,
	},
	data() {
		return {
			testCode: '123456',
			hasError: '',
			disableInput: false,
		};
	},
	methods: {
		onCodeComplete(code) {
			this.disableInput = true;
			const DELAY_MS = 500;

			// simulate API validation time
			setTimeout(() => {
				if (this.testCode === code) {
					this.hasError = false;
				} else {
					this.hasError = true;
				}
				this.disableInput = false;
			}, DELAY_MS);
		},
	},
};
</script>

<style module="$s">

</style>
```

<!-- api-tables:start -->
## Props

| Prop       | Type      | Default              | Possible values | Description |
| ---------- | --------- | -------------------- | --------------- | ----------- |
| pin-length | `number`  | `6`                  | —               | —           |
| disabled   | `boolean` | `false`              | —               | —           |


## Slots

| Slot  | Description      |
| ----- | ---------------- |
| error | Input error slot |


## Events

| Event    | Type | Description        |
| -------- | ---- | ------------------ |
| complete | -    | On input completed |
<!-- api-tables:end -->
