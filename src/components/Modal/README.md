# Modal

Use the modal component to enter the user into a new _mode_.

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
		<m-modal-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import DemoModal from 'doc/DemoModal.vue';

export default {
	components: {
		MModalLayer,
		MButton,
	},

	mixins: [
		MModalLayer.apiMixin,
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
			src="https://picsum.photos/800/300"
		>
		<m-modal-content>
			<m-text pattern="title">
				Modal heading
			</m-text>
			<m-text>
				<slot>
					Modal content
				</slot>
			</m-text>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="modalApi.close()"
			>
				Close
			</m-button>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';

export default {
	components: {
		MModal,
		MButton,
		MText,
		MModalContent,
	},

	inject: {
		modalApi,
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

## Setup

Register the `MModalLayer.apiMixin` mixin and mount the `MModalLayer` component inside a component template. The location of the Layer component determines where the modal will be mounted. The mixin _provides_ the modal API to the current component and all nested child components. It can be accessed by the current component with `this.modalApi` and can be accessed by nested child components by injecting the `modalApi`.

```html
<template>
	<div>
		<button @click="openMyModal">
			Open MyModal
		</button>

		<m-modal-layer />
	</div>
</template>

<script>
import { MModalLayer } from '@square/maker/components/Modal';
import MyModal from './MyModal.vue';

export default {
	components: {
		MModalLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openMyModal() {
			// this.modalApi is provided by MModalLayer.apiMixin
			this.modalApi.open(() => <MyModal />);
		}
	}
};
</script>
```

### Composition API

When using the composition API, you can use the `useModalLayer` composable instead of the mixin:

```html
<template>
	<div>
		<button @click="openMyModal">
			Open MyModal
		</button>

		<m-modal-layer />
	</div>
</template>

<script>
import { inject } from 'vue';
import { MModalLayer, modalApi as modalKey } from '@square/maker/components/Modal';
import MyModal from './MyModal.vue';

export default {
	components: {
		MModalLayer,
	},

	setup() {
		const { modalApi } = ModalLayer.useModalLayer();
		const openMyModal = () => this.modalApi.open((h) => h(MyModal));

		return {
			openMyModal,
		};
	}
}

</script>
```

## Usage

Modals must always be created in their own Single File Component (SFC) file to separate concerns because it introduces a new mode or context to your app. Use the `MModal` component at the root of your Modal SFC to signify the modal and to communicate with the Modal Layer.

```html
<template>
	<m-modal>
		Modal content

		<!-- modalApi is provided by the injected the modalApi key below -->
		<button @click="modalApi.close()">
			Close modal
		</button>
	</m-modal>
</template>

<script>
import { MModal, modalApi } from '@square/maker/components/Modal';

export default {
	components: {
		MModal,
	},

	inject: {
		modalApi,
	},
};
</script>
```

To open a modal programmatically, import `modalApi` and _inject_ it into your component to access the Modal Layer API. In the function you want to open the modal from (e.g. a click-event handler), invoke `this.modalApi.open()` with a function that returns the modal instance. This function receives [`createElement`](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments) (aliased to `h`) as an argument to instantiate the modal component with, but it's recommended to use the [Vue JSX Babel plugin](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments) instead for better readability.

```html
<template>
	<button @click="openModal">
		Open modal
	</button>
</template>

<script>
import { modalApi } from '@square/maker/components/Modal';
import MyModal from './MyModal.vue';

export default {
	// Bind the modal API
	inject: {
		modalApi,
	},

	methods: {
		openModal() {
			// Use the Vue JSX Babel plugin to instantiate the modal component declaratively
			this.modalApi.open(() => (
				<MyModal
					someProp="prop value"
					vOn:someEvent={this.eventHandler}
				/>
			));

			// Alternatively, use the createElement API
			this.modal.open(h => h(MyModal, {
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
## modalApi

Full type definitions for `modalApi`:

```ts
// Vue render function
type VueRenderFn = () => VueVNodes;

type OpenOptions = {
	// Modal will close when clicked outside of it - default false.
	closeOnClickOutside: boolean;

	// Modal will close when esc key is pressed - default false.
	// Only use this in Modals without ActionBars, if the Modal
	// has an ActionBar it's strongly encouraged to use listen
	// on the window-esc event emitted from ActionBarButtons.
	closeOnEsc: boolean;

	// Hook that will run right before the Modal is closed. If
	// the hook returns false then closing is cancelled. This
	// hook can be async, e.g. it returns a Promise that resolves
	// to a boolean.
	beforeCloseHook: () => boolean | Promise<boolean>;
}

// Closes a specific instance of an opened modal.
type CloseOpenedModalFn = () => void;

type modalApi = {
	// Renders modal into nearest parent modal layer using
	// the render function & provided options, returns
	// a function to close that specific opened modal if called.
	open: (VueRenderFn, OptionOptions) => CloseOpenedModalFn;

	// This method only works inside of modals. Will attempt
	// to close the current modal and will return true if closing
	// was successful and false otherwise. Can be async.
	close: () => boolean | Promise<boolean>;

	// This method only works inside of modals. Will attempt
	// to close the current modal and all modals beneath it. Returns
	// true if successful, false otherwise. Can be async.
	closeAll: () => boolean | Promise<boolean>;
}
```

## Examples

### Composition API

```vue
<template>
	<div>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="openMyModal"
		>
			Open Modal From Root
		</m-button>

		<nested-component />

		<m-modal-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import DemoModal from 'doc/DemoModal.vue';
import NestedComponent from 'doc/NestedComponent.vue';

export default {
	components: {
		MModalLayer,
		MButton,
		NestedComponent,
	},

	setup() {
		const { modalApi } = MModalLayer.useModalLayer();

		// eslint-disable-next-line no-unused-vars
		const openMyModal = () => modalApi.open((h) => h(DemoModal));

		return {
			openMyModal,
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
		@click="openMyModal"
	>
		Open Modal From Nested Component
	</m-button>
</template>

<script>
import { inject } from 'vue';
import { modalApi as modalKey } from '@square/maker/components/Modal';
import { MButton } from '@square/maker/components/Button';
import DemoModal from 'doc/DemoModal.vue';

export default {
	components: {
		MButton,
	},

	setup() {
		const modalApi = inject(modalKey);
		const openMyModal = () => modalApi.open((h) => h(DemoModal), {
			// eslint-disable-next-line no-restricted-globals, no-alert
			beforeCloseHook: () => confirm('Are you sure???'),
		});

		return {
			openMyModal,
		};
	},
};
</script>
```

### beforeCloseHook

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
		<m-modal-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import DemoModal from 'doc/DemoModal.vue';

export default {
	components: {
		MModalLayer,
		MButton,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openModal() {
			let firstCall = true;
			const beforeCloseHook = () => {
				// synchronously blocks closing
				// on first invocation
				if (firstCall) {
					firstCall = false;
					return false;
				}

				// asynchronously allows closing
				// on second invocation
				const ONE_SECOND = 1000;
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve(true);
					}, ONE_SECOND);
				});
			};
			const content = 'This modal can be closed by clicking outside or pressing esc key. The first close will be synchronously blocked by the beforeCloseHook and the second close will be asynchronously allowed after one second.';
			this.modalApi.open(
				// 1st param: render function
				() => <DemoModal>{content}</DemoModal>,
				// 2nd param: options
				{
					// runs right before close, can block or delay closing
					beforeCloseHook,
					// this modal will close if user clicks outside
					closeOnClickOutside: true,
					// this modal will close if user presses esc key
					closeOnEsc: true,
				},
			);
		},
	},
};
</script>
```

A hook can also be passed via the Modal's `beforeClose` prop but setting the hook via the `modalApi`'s options is recommended. If different hooks are set via the prop and via the options both will be run right before close, and both can block or delay closing.

### Modal + ActionBar

Modals are responsive and should be used with `InlineActionBar` which renders the `ActionBar` inline inside the modal.

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
		<m-modal-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import ActionBarDemoModal from 'doc/ActionBarDemoModal.vue';

export default {
	components: {
		MModalLayer,
		MButton,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(() => <ActionBarDemoModal />);
		},
	},
};
</script>
```

_ActionBarDemoModal.vue_

```vue
<template>
	<m-modal>
		<img
			class="cover-photo"
			src="https://picsum.photos/800/300"
		>
		<m-modal-content>
			<m-text pattern="title">
				Modal heading
			</m-text>
			<m-text>
				modal content
			</m-text>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					@click="modalApi.close()"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
					@click="modalApi.close()"
				>
					Confirm
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MText } from '@square/maker/components/Text';
import { MModal, modalApi, MModalContent } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	components: {
		MText,
		MModal,
		MActionBarButton,
		MInlineActionBar,
		MModalContent,
		XIcon,
	},

	inject: {
		modalApi,
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

.icon {
	width: 24px;
	height: 24px;
}
</style>
```

### Stacking modals

It's possible to stack modals, i.e. open another modal from inside a modal. Simply call `modalApi.open` from within one modal to open another on top. Each modal can be closed by calling `modalApi.close`, but if you'd like to close all of them at once then call `modalApi.closeAll`.

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
		<m-modal-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import StackingDemoFirstModal from 'doc/StackingDemoFirstModal.vue';

export default {
	components: {
		MModalLayer,
		MButton,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(() => <StackingDemoFirstModal />);
		},
	},
};
</script>
```

_StackingDemoFirstModal.vue_

```vue
<template>
	<m-modal>
		<img
			class="cover-photo"
			src="https://picsum.photos/800/300"
		>
		<m-modal-content>
			<m-text pattern="title">
				First modal heading
			</m-text>
			<m-text>
				First modal content
			</m-text>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					@click="modalApi.close()"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
					@click="openSecondModal"
				>
					Open second modal
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import StackingDemoSecondModal from 'doc/StackingDemoSecondModal.vue';
import XIcon from '@square/maker-icons/X';

export default {
	components: {
		MModal,
		MText,
		MModalContent,
		MInlineActionBar,
		MActionBarButton,
		XIcon,
	},

	inject: {
		modalApi,
	},

	methods: {
		openSecondModal() {
			this.modalApi.open(() => <StackingDemoSecondModal />);
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

.icon {
	width: 24px;
	height: 24px;
}
</style>
```

_StackingDemoSecondModal.vue_

```vue
<template>
	<m-modal>
		<img
			class="cover-photo"
			src="https://picsum.photos/800/300"
		>
		<m-modal-content>
			<m-text pattern="title">
				Second modal heading
			</m-text>
			<m-text>
				Second modal content
			</m-text>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					@click="modalApi.close()"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
					@click="modalApi.closeAll()"
				>
					Close all modals
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	components: {
		MModal,
		MText,
		MModalContent,
		MActionBarButton,
		XIcon,
		MInlineActionBar,
	},

	inject: {
		modalApi,
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

.icon {
	width: 24px;
	height: 24px;
}
</style>
```

<!-- api-tables:start -->
## Modal Props

Themable props* can be configured via the [Theme](#/Theme) component using the key `modal`.

| Prop                | Type      | Default     | Possible values | Description                             |
| ------------------- | --------- | ----------- | --------------- | --------------------------------------- |
| before-close        | `func`    | —           | -               | Before close hook, can block closing    |
| bg-color*           | `string`  | `'#ffffff'` | -               | Background color of modal               |
| color*              | `string`  | `'#000000'` | -               | Text color of modal                     |
| close-on-swipe-down | `boolean` | `true`      | -               | Toggle to allow swiping the dialog away |


## Modal Slots

| Slot    | Description   |
| ------- | ------------- |
| default | Modal content |


## ModalContent Slots

| Slot    | Description                                  |
| ------- | -------------------------------------------- |
| default | Modal Content content (gets correct padding) |



<!-- api-tables:end -->
