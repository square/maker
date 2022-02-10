# PinInput

## Correct test code is 123456

### Filled variant
```vue
<template>
	<m-pin-input
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
		};
	},
	methods: {
		onCodeComplete(code) {
			if (this.testCode === code) {
				this.hasError = false;
			} else {
				this.hasError = true;
			}
		},
	},
};
</script>
```

### Outline variant
```vue
<template>
	<m-pin-input
		variant="outline"
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
		};
	},
	methods: {
		onCodeComplete(code) {
			if (this.testCode === code) {
				this.hasError = false;
			} else {
				this.hasError = true;
			}
		},
	},
};
</script>
```

### With mocked API latency
```vue
<template>
	<m-pin-input
		variant="outline"
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

			// simulate API time for code validation
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
```

<!-- api-tables:start -->
## Props

| Prop       | Type      | Default   | Possible values   | Description        |
| ---------- | --------- | --------- | ----------------- | ------------------ |
| pin-length | `number`  | `6`       | —                 | Lenth of pin       |
| variant    | `string`  | `'fill'`  | `fill`, `outline` | Input variant      |
| disabled   | `boolean` | `false`   | —                 | Disable the inputs |


## Slots

| Slot  | Description      |
| ----- | ---------------- |
| error | Input error slot |


## Events

| Event    | Type | Description |
| -------- | ---- | ----------- |
| complete | -    | —           |
<!-- api-tables:end -->
