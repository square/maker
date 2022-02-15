# PinInput

The Pin Input component is to be used when there is a need to enter in a challenge code of some length,
and have that challenge code verified.

Note: In the following examples the code 123456 will trigger a successful input, whereas any other code will trigger
an error state.

To trigger the 'shake and clear' functionality add a ref value to your PinInput component, and then on the parent component
call `shakeAndClearInputs()` on the referenced component.
### Filled variant
```vue
<template>
	<m-pin-input
		ref="pinInput"
		:invalid="invalidEntry"
		@complete="onCodeComplete"
	>
		<template
			v-if="invalidEntry"
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
			invalidEntry: false,
		};
	},
	methods: {
		onCodeComplete(code) {
			if (this.testCode === code) {
				this.invalidEntry = false;
			} else {
				this.invalidEntry = true;
				this.$refs.pinInput.shakeAndClearInputs();
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
		ref="pinInput"
		:invalid="invalidEntry"
		variant="outline"
		@complete="onCodeComplete"
	>
		<template
			v-if="invalidEntry"
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
			invalidEntry: false,
		};
	},
	methods: {
		onCodeComplete(code) {
			if (this.testCode === code) {
				this.invalidEntry = false;
			} else {
				this.invalidEntry = true;
				this.$refs.pinInput.shakeAndClearInputs();
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
		ref="pinInput"
		variant="outline"
		:invalid="invalidEntry"
		:disabled="disableInput"
		@complete="onCodeComplete"
	>
		<template
			v-if="invalidEntry"
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
			invalidEntry: false,
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
					this.invalidEntry = false;
				} else {
					this.invalidEntry = true;
					this.$refs.pinInput.shakeAndClearInputs();
				}
				this.disableInput = false;
			}, DELAY_MS);
		},
	},
};
</script>
```

### In a dialog for mobile testing
```vue
<template>
	<div>
		<m-button
			size="small"
			@click="openDialog"
		>
			Open dialog
		</m-button>
		<m-dialog-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MDialogLayer } from '@square/maker/components/Dialog';
import DemoDialog from 'doc/DemoDialog.vue';

export default {
	name: 'DemoSetup',

	components: {
		MDialogLayer,
		MButton,
	},

	mixins: [
		MDialogLayer.apiMixin,
	],

	methods: {
		openDialog() {
			this.dialogApi.open(() => <DemoDialog />);
		},
	},
};
</script>
```

_DemoDialog.vue_

```vue
<template>
	<m-dialog>
		<m-dialog-content>
			<m-heading :size="3">
				Dialog heading
			</m-heading>
			<m-pin-input
				ref="pinInput"
				:class="$s.padding"
				:invalid="invalidEntry"
				variant="outline"
				@complete="onCodeComplete"
			>
				<template
					v-if="invalidEntry"
					#error
				>
					<m-notice type="error">
						Error slot
					</m-notice>
				</template>
			</m-pin-input>
			<m-button
				size="small"
				@click="dialogApi.close()"
			>
				Close
			</m-button>
		</m-dialog-content>
	</m-dialog>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MPinInput } from '@square/maker/components/PinInput';
import { MNotice } from '@square/maker/components/Notice';
import { MDialog, MDialogContent, dialogApi } from '@square/maker/components/Dialog';

export default {
	name: 'DemoDialog',

	components: {
		MDialog,
		MDialogContent,
		MButton,
		MHeading,
		MPinInput,
		MNotice,
	},

	inject: {
		dialogApi,
	},

	data() {
		return {
			testCode: '123456',
			invalidEntry: false,
		};
	},
	methods: {
		onCodeComplete(code) {
			if (this.testCode === code) {
				this.invalidEntry = false;
				this.dialogApi.close();
			} else {
				this.invalidEntry = true;
				this.$refs.pinInput.shakeAndClearInputs();
			}
		},
	},
};
</script>
<style module="$s">
.padding {
	padding: 16px 0;
}
</style>
```
<!-- api-tables:start -->
## Props

| Prop       | Type      | Default              | Possible values   | Description                 |
| ---------- | --------- | -------------------- | ----------------- | --------------------------- |
| pin-length | `number`  | `DEFAULT_INPUT_SIZE` | —                 | Lenth of pin                |
| variant    | `string`  | `'fill'`             | `fill`, `outline` | Input variant               |
| invalid    | `boolean` | `false`              | —                 | Toggles input invalid state |
| disabled   | `boolean` | `false`              | —                 | Disable the inputs          |


## Slots

| Slot  | Description      |
| ----- | ---------------- |
| error | Input error slot |


## Events

| Event    | Type | Description |
| -------- | ---- | ----------- |
| complete | -    | —           |
<!-- api-tables:end -->
