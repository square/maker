<!-- eslint-disable vue/no-unregistered-components -->
t# Dialog

Use the Dialog component to prompt the user with some immediate information that they have to acknowledge or respond to.

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
				pattern="title"
				:size="3"
			>
				Dialog heading
			</m-text>
			<m-text>
				Dialog content
			</m-text>
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
import { MDialog, MDialogContent, dialogApi } from '@square/maker/components/Dialog';

export default {
	name: 'DemoDialog',

	components: {
		MDialog,
		MDialogContent,
		MButton,
		MText,
	},

	inject: {
		dialogApi,
	},
};
</script>
```

## Setup

Register the `MDialogLayer.apiMixin` mixin and mount the `MDialogLayer` component inside a component template. The location of the Layer component determines where the dialog will be mounted. Place `MDialogLayer` _after_ `MModalLayer` if you want Dialogs to appear above Modals. The mixin _provides_ the Dialog API to the current component and all nested child components. It can be accessed by the current component with `this.dialogApi` and can be accessed by nested child components by injecting the `dialogApi`.

```html
<template>
	<div>
		<button @click="openMyDialog">
			Open MyDialog
		</button>

		<m-dialog-layer />
	</div>
</template>

<script>
import { MDialogLayer } from '@square/maker/components/Dialog';
import MyDialog from './MyDialog.vue';

export default {
	components: {
		MDialogLayer,
	},

	mixins: [
		MDialogLayer.apiMixin,
	],

	methods: {
		openMyDialog() {
			// this.dialogApi is provided by MDialogLayer.apiMixin
			this.dialogApi.open(() => <MyDialog />);
		}
	}
};
</script>
```

### Composition API

When using the composition API, you can use the `useDialogLayer` composable instead of the mixin:

```html
<template>
	<div>
		<button @click="openMyDialog">
			Open MyDialog
		</button>

		<m-dialog-layer />
	</div>
</template>

<script>
import { inject } from 'vue';
import { MDialogLayer, dialogApi } from '@square/maker/components/Dialog';
import MyDialog from './MyDialog.vue';

export default {
	components: {
		MDialogLayer,
	},

	setup() {
		MDialogLayer.useDialogLayer();
		const modal = inject(modalApi)

		const openMyDialog = () => this.modalApi.open((h) => h(MyDialog));

		return {
			openMyDialog,
		};
	}
}

</script>
```

## Usage

Dialogs must always be created in their own Single File Component (SFC) file to separate concerns because it introduces a new mode or context to your app. Use the `MDialog` component at the root of your Dialog SFC which signifies the component is a Maker Dialog and allows it to communicate with the Dialog Layer.

```html
<template>
	<m-dialog>
		Dialog content
		<button @click="dialogApi.close()">
			Close dialog
		</button>
	</m-dialog>
</template>

<script>
import { MDialog, dialogApi } from '@square/maker/components/Dialog';

export default {
	components: {
		MDialog,
	},

	inject: {
		dialogApi,
	},
};
</script>
```

To open a dialog programmatically, import `dialogApi` and _inject_ it into your component to access the Dialog API. To open a Dialog from a function (e.g. a click-event handler), invoke `this.dialogApi.open()` with a function that returns the Dialog instance. This function receives [`createElement`](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments) (aliased to `h`) as an argument to instantiate the Dialog component with, but it's recommended to use the [Vue JSX Babel plugin](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments) instead for better readability.

```html
<template>
	<button @click="openDialog">
		Open dialog
	</button>
</template>

<script>
import { dialogApi } from '@square/maker/components/Dialog';
import MyDialog from './MyDialog.vue';

export default {
	// Bind the dialog API
	inject: {
		dialogApi,
	},

	methods: {
		openDialog() {
			// Use the Vue JSX Babel plugin to instantiate the dialog component declaratively
			this.dialogApi.open(() => (
				<MyDialog
					someProp="prop value"
					vOn:someEvent={this.eventHandler}
				/>
			));

			// Alternatively, use the createElement API
			this.dialog.open(h => h(MyDialog, {
				props: {
					someProp: 'prop value',
				},
				on: {
					someEvent: this.eventHandler,
				},
			}));
		},
	},
};
</script>
```

To close a Dialog on ESC, use the `@window-esc` from the `MActionBarButton` component.

```html
<template>
	<m-dialog>
		Dialog content
		<m-action-bar-button
			@click="dialogApi.close()"
			@window-esc="dialogApi.close()"
		>
			Close dialog
		</m-action-bar-button>
	</m-dialog>
</template>

<script>
import { MDialog, dialogApi } from '@square/maker/components/Dialog';
import { MActionBarButton } from '@square/maker/components/ActionBar';

export default {
	components: {
		MDialog,
		MActionBarButton,
	},

	inject: {
		dialogApi,
	},
};
</script>
```

### dialogApi

Full type info:

```ts
// Vue render function
type VueRenderFn = () => VueVNodes;

// options to dialogApi.open
type OpenOptions = {
	// Dialog will close when clicked outside of it - default false
	closeOnClickOutside?: boolean;

	// Dialog will close when esc key is pressed - default false
	closeOnEsc?: boolean;

	// function will be called right before closing, if it returns
	// false then closing will be blocked
	beforeCloseHook?: (closeData?: any) => boolean | Promise<boolean>;

	// function will be called right after closing
	afterCloseHook?: (closeData?: any) => void;
};

// closes a specific instance of an opened dialog
// returns true if close was successful, false otherwise
type CloseOpenedDialogFn = () => boolean | Promise<boolean>;

type dialogApi = {
	// open dialog in nearest parent dialog layer
	open: (VueRenderFn, OpenOptions) => CloseOpenedDialogFn;

	// attempts to close dialog, returns true if successful
	// closeData, if present, is passed to any registered
	// beforeClose or afterClose hooks on the dialog, if present
	close: (closeData?: any) => boolean | Promise<boolean>;
};
```

## Examples

### Composition API

```vue
<template>
	<div>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="openMyDialog"
		>
			Open Modal From Root
		</m-button>

		<nested-component />

		<m-dialog-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MDialogLayer } from '@square/maker/components/Dialog';
import DemoDialog from 'doc/DemoDialog.vue';
import NestedComponent from 'doc/NestedComponent.vue';

export default {
	components: {
		MDialogLayer,
		MButton,
		NestedComponent,
	},

	setup() {
		const { dialogApi } = MDialogLayer.useDialogLayer();

		// eslint-disable-next-line no-unused-vars
		const openMyDialog = () => dialogApi.open((h) => h(DemoDialog));

		return {
			openMyDialog,
		};
	},
};
</script>
```

_NestedComponent.vue_
```vue
<template>
	<m-button
		size="small"
		pattern="primaryOutline"
		@click="openMyDialog"
	>
		Open Modal From Nested Component
	</m-button>
</template>

<script>
import { inject } from 'vue';
import { dialogApi as dialogKey } from '@square/maker/components/Dialog';
import { MButton } from '@square/maker/components/Button';
import DemoDialog from 'doc/DemoDialog.vue';

export default {
	components: {
		MButton,
	},

	setup() {
		const dialogApi = inject(dialogKey);
		const openMyDialog = () => dialogApi.open((h) => h(DemoDialog), {
			// eslint-disable-next-line no-restricted-globals, no-alert
			beforeCloseHook: () => confirm('Are you sure???'),
		});

		return {
			openMyDialog,
		};
	},
};
</script>
```


### beforeClose & afterClose hooks

```vue
<template>
	<div>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="openDialog"
		>
			Open Dialog
		</m-button>

		Selected Option: {{ selectedOption }}
		<m-dialog-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MDialogLayer } from '@square/maker/components/Dialog';
import CloseDataAndHooksDemoDialog from 'doc/CloseDataAndHooksDemoDialog.vue';

export default {
	name: 'CloseDataAndHooksSetup',

	components: {
		MDialogLayer,
		MButton,
	},

	mixins: [
		MDialogLayer.apiMixin,
	],

	data() {
		return {
			selectedOption: undefined,
		};
	},

	methods: {
		openDialog() {
			this.dialogApi.open(() => <CloseDataAndHooksDemoDialog />, {
				closeOnClickOutside: true,
				closeOnEsc: true,

				beforeCloseHook: (selectedOption) => {
					const shouldClose = selectedOption !== 'option-1';

					if (!shouldClose) {
						// eslint-disable-next-line no-alert
						alert('Dialog was blocked from closing!');
					}

					return shouldClose;
				},

				afterCloseHook: (selectedOption) => {
					this.selectedOption = selectedOption;
				},
			});
		},
	},
};
</script>
```

_CloseDataAndHooksDemoDialog.vue_
```vue
<template>
	<m-dialog>
		<m-dialog-content>
			<m-text
				pattern="title"
				:size="3"
			>
				Close Hooks Demo
			</m-text>
			<m-text>
				Please Select An Option
			</m-text>

			<m-radio
				v-model="selectedOption"
				value="option-1"
			>
				Option 1 (blocks the dialog from closing)
			</m-radio>
			<m-radio
				v-model="selectedOption"
				value="option-2"
			>
				Option 2
			</m-radio>
			<m-radio
				v-model="selectedOption"
				value="option-3"
			>
				Option 3
			</m-radio>

			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					full-width
					@click="dialogApi.close()"
				>
					Cancel
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					:disabled="!selectedOption"
					full-width
					@click="dialogApi.close(selectedOption)"
				>
					Confirm Selection
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-dialog-content>
	</m-dialog>
</template>

<script>
import { MText } from '@square/maker/components/Text';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import { MDialog, MDialogContent, dialogApi } from '@square/maker/components/Dialog';
import { MRadio } from '@square/maker/components/Radio';

export default {
	name: 'CloseDataAndHooksDemoDialog',

	components: {
		MDialog,
		MText,
		MDialogContent,
		MInlineActionBar,
		MActionBarButton,
		MRadio,
	},

	inject: {
		dialogApi,
	},

	data() {
		return {
			selectedOption: undefined,
		};
	},
};
</script>

<style scoped>
.hook-choice {
	display: flex;
	flex-direction: column;
}
</style>
```

### Dialog + ActionBar

Dialogs are responsive and should be used with `InlineActionBar` which renders the `ActionBar` inline inside the dialog instead of the root `ActionBarLayer`.

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
import ActionBarDemoDialog from 'doc/ActionBarDemoDialog.vue';

export default {
	name: 'ActionBarDemoSetup',

	components: {
		MDialogLayer,
		MButton,
	},

	mixins: [
		MDialogLayer.apiMixin,
	],

	methods: {
		openDialog() {
			this.dialogApi.open(() => <ActionBarDemoDialog />);
		},
	},
};
</script>
```

_ActionBarDemoDialog.vue_

```vue
<template>
	<m-dialog>
		<m-dialog-content>
			<m-text
				pattern="title"
				:size="3"
			>
				Whoa, hold on!
			</m-text>
			<m-text>
				Did you know that adult male polar bears can weight over 1,500 lbs?
			</m-text>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					@click="dialogApi.close()"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
					@click="dialogApi.close()"
				>
					Now I do! Thanks!
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-dialog-content>
	</m-dialog>
</template>

<script>
import { MText } from '@square/maker/components/Text';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import { MDialog, MDialogContent, dialogApi } from '@square/maker/components/Dialog';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'ActionBarDemoDialog',

	components: {
		MDialog,
		MText,
		MDialogContent,
		MInlineActionBar,
		MActionBarButton,
		XIcon,
	},

	inject: {
		dialogApi,
	},
};
</script>

<style scoped>
.icon {
	width: 24px;
	height: 24px;
}
</style>
```

### Opening Dialog from Modal

As noted above, to open a Dialog on top of a Modal you must place `MDialogLayer` _after_ `MModalLayer` at the root of your app where you register both layers. Other than that, there's nothing special about opening a Dialog from a Modal, and it works the same as opening a Dialog from anywhere else.

```vue
<template>
	<div>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="openModal"
		>
			Open modal
		</m-button>

		<!-- Modal layer first, Dialog layer second -->
		<m-modal-layer />
		<m-dialog-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import { MDialogLayer } from '@square/maker/components/Dialog';
import DemoModal from 'doc/DemoModal.vue';

export default {
	name: 'ModalDemoSetup',

	components: {
		MDialogLayer,
		MModalLayer,
		MButton,
	},

	mixins: [
		MModalLayer.apiMixin,
		MDialogLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(() => <DemoModal />);
		},
	},
};
</script>
```

_DemoModal.vue_

```vue
<template>
	<m-modal>
		<img
			class="cover-photo"
			src="https://picsum.photos/600/300"
		>
		<m-modal-content>
			<m-text pattern="title">
				Modal heading
			</m-text>
			<m-text>
				Modal content
			</m-text>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="modalApi.close()"
			>
				Close
			</m-button>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="openDialog"
			>
				Open Dialog
			</m-button>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import { dialogApi } from '@square/maker/components/Dialog';
import ActionBarDemoDialog from 'doc/ActionBarDemoDialog.vue';

export default {
	name: 'DemoModal',

	components: {
		MModal,
		MButton,
		MText,
		MModalContent,
	},

	inject: {
		modalApi,
		dialogApi,
	},

	methods: {
		openDialog() {
			this.dialogApi.open(() => <ActionBarDemoDialog />);
		},
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 300px;
	object-fit: cover;
	object-position: center;
}
</style>
```

<!-- api-tables:start -->
## Dialog Props

Themable props* can be configured via the [Theme](#/Theme) component using the key `dialog`.

| Prop                | Type      | Default     | Possible values | Description                             |
| ------------------- | --------- | ----------- | --------------- | --------------------------------------- |
| bg-color*           | `string`  | `'#ffffff'` | -               | Background color of dialog              |
| color*              | `string`  | `'#000000'` | -               | Text color of dialog                    |
| close-on-swipe-down | `boolean` | `true`      | -               | Toggle to allow swiping the dialog away |


## Dialog Slots

| Slot    | Description    |
| ------- | -------------- |
| default | Dialog content |


## DialogContent Slots

| Slot    | Description                                   |
| ------- | --------------------------------------------- |
| default | Dialog Content content (gets correct padding) |


## Accessibility

It is highly recommended to label your dialogs for assistive technologies. You can do this by adding an `id` to your dialog's title element and passing that `id` to the `MDialog` component via the `aria-labelledby` prop.

```html
<template>
	<m-dialog aria-labelledby="dialog-title">
		<m-dialog-content>
			<m-text
				id="dialog-title"
				pattern="title"
				:size="3"
			>
				Dialog heading
			</m-text>
			...
		</m-dialog-content>
	</m-dialog>
</template>
```

### MDialog Props

| Prop | Type | Default | Possible values | Description |
| --- | --- | --- | --- | --- |
| aria-labelledby | `string` | — | - | The ID of the element that labels the dialog. |

<!-- api-tables:end -->
