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
		@complete="onPinComplete"
	>
		<template
			v-if="invalidEntry"
			#error
		>
			<m-notice pattern="error">
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
		onPinComplete(code) {
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
		@complete="onPinComplete"
	>
		<template
			v-if="invalidEntry"
			#error
		>
			<m-notice pattern="error">
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
		onPinComplete(code) {
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
### With smaller pin length

```vue
<template>
	<m-pin-input
		ref="pinInput"
		:pin-length="3"
		:invalid="invalidEntry"
		@complete="onPinComplete"
	>
		<template
			v-if="invalidEntry"
			#error
		>
			<m-notice pattern="error">
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
			testCode: '123',
			invalidEntry: false,
		};
	},
	methods: {
		onPinComplete(code) {
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
### With larger pin length

```vue
<template>
	<m-pin-input
		ref="pinInput"
		:pin-length="9"
		:invalid="invalidEntry"
		@complete="onPinComplete"
	>
		<template
			v-if="invalidEntry"
			#error
		>
			<m-notice pattern="error">
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
			testCode: '123456789',
			invalidEntry: false,
		};
	},
	methods: {
		onPinComplete(code) {
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
		@complete="onPinComplete"
	>
		<template
			v-if="invalidEntry"
			#error
		>
			<m-notice pattern="error">
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
		onPinComplete(code) {
			const DELAY_MS = 1000;
			this.disableInput = true;

			// simulate API time for code validation
			setTimeout(() => {
				this.disableInput = false;
				if (this.testCode === code) {
					this.invalidEntry = false;
				} else {
					this.invalidEntry = true;
					this.$nextTick(this.$refs.pinInput.shakeAndClearInputs);
				}
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
			pattern="primaryOutline"
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
			<m-text
				variant="title"
				:size="3"
			>
				Dialog heading
			</m-text>
			<m-pin-input
				ref="pinInput"
				:class="$s.padding"
				:invalid="invalidEntry"
				variant="outline"
				@complete="onPinComplete"
			>
				<template
					v-if="invalidEntry"
					#error
				>
					<m-notice pattern="error">
						Error slot
					</m-notice>
				</template>
			</m-pin-input>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="dialogApi.close()"
			>
				Close
			</m-button>
		</m-dialog-content>
	</m-dialog>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MText } from '@square/maker/components/Text';
import { MPinInput } from '@square/maker/components/PinInput';
import { MNotice } from '@square/maker/components/Notice';
import { MDialog, MDialogContent, dialogApi } from '@square/maker/components/Dialog';

export default {
	name: 'DemoDialog',

	components: {
		MDialog,
		MDialogContent,
		MButton,
		MText,
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
		onPinComplete(code) {
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
| pin-length | `number`  | `DEFAULT_INPUT_SIZE` | —                 | Length of pin               |
| variant    | `string`  | `'fill'`             | `fill`, `outline` | Input variant               |
| invalid    | `boolean` | `false`              | —                 | Toggles input invalid state |
| disabled   | `boolean` | `false`              | —                 | Disable the inputs          |


## Slots

| Slot    | Description             |
| ------- | ----------------------- |
| default | —                       |
| error   | slot for error messages |


## Events

| Event    | Type | Description |
| -------- | ---- | ----------- |
| complete | -    | —           |


## Methods

| Method              | Description                |
| ------------------- | -------------------------- |
| shakeAndClearInputs | shakes and clears pininput |
<!-- api-tables:end -->
