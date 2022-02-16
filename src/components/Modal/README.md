# Modal

Use the modal component to enter the user into a new _mode_.

```vue
<template>
	<div>
		<m-button
			size="small"
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
	name: 'DemoSetup',

	components: {
		MModalLayer,
		MButton,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(
				() => <DemoModal />,
				{
					closeOnClickOutside: true,
				},
			);
		},
	},
};
</script>
```

_DemoModal.vue_

```vue
<template>
	<m-modal
		:before-close="beforeCloseHook"
	>
		<img
			class="cover-photo"
			src="https://picsum.photos/800/300"
		>
		<m-modal-content>
			<m-heading>
				Modal heading
			</m-heading>
			<m-text>
				Modal content
			</m-text>
			<m-button
				size="small"
				@click="modalApi.close()"
			>
				Close
			</m-button>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';

export default {
	name: 'DemoModal',

	components: {
		MModal,
		MButton,
		MHeading,
		MText,
		MModalContent,
	},

	inject: {
		modalApi,
	},

	methods: {
		beforeCloseHook() {
			// intercept close here
			return true; // or false if you want to block modal from closing
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
			this.modalApi.open(
				() => <MyModal />,
				{
					closeOnClickOutside: true,
				},
			);
		}
	}
};
</script>
```

## Usage

Modals must always be created in its own Single File Component (SFC) file to separate concerns because it introduces a new mode or context to your app. Use the `MModal` component at the root of your Modal SFC to signify the modal and to communicate with the Modal Layer.

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

To open a modal programmatically, import `modalApi` and _inject_ it into your component to access the Modal Layer API. In the function you want to open the modal from (eg. a click-event handler), invoke `this.modalApi.open()` with a function that returns the modal instance. This function receives [`createElement`](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments) (aliased to `h`) as an argument to instantiate the modal component with, but it's recommended to use the [Vue JSX Babel plugin](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments) instead for better readability.

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
### Configurable options
The `modalApi.open()` function has a second optional object parameter that offers configurable options. Current available options are:

```ts
{
	// Modal will close when clicked outside of it - default false
	closeOnClickOutside: boolean;
}
```

To close a modal on ESC, use the `@window-esc` from the `MActionBarButton` component.

To hook into the close function, add the `beforeClose` prop on the modal component.
The function must return a boolean - true to close the modal or false to block closing.

```html
<template>
	<m-modal
		:before-close="beforeCloseHook"
	>
		Modal content

		<!-- modalApi is provided by the injected the modalApi key below -->
		<m-action-bar-button
			@click="modalApi.close()"
			@window-esc="modalApi.close()"
		>
			Close modal
		</m-action-bar-button>
	</m-modal>
</template>

<script>
import { MModal, modalApi } from '@square/maker/components/Modal';
import { MActionBarButton } from '@square/maker/components/ActionBar';

export default {
	components: {
		MModal,
		MActionBarButton,
	},

	inject: {
		modalApi,
	},

	methods: {
		async beforeCloseHook() {
			// intercept close here
			return true; // or false if you want to block modal from closing
		},
	},
};
</script>
```
## Examples

### Modal + ActionBar

Modals are responsive and should be used with `InlineActionBar` which renders the `ActionBar` inline inside the modal instead of the root `ActionBarLayer`.

```vue
<template>
	<div>
		<m-button
			size="small"
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
	name: 'ActionBarDemoSetup',

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
			src="https://picsum.photos/600/300"
		>
		<m-modal-content>
			<m-heading>
				Modal heading
			</m-heading>
			<m-text>
				modal content
			</m-text>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					@click="modalApi.close()"
					@window-esc="modalApi.close()"
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
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModal, modalApi, MModalContent } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'ActionBarDemoModal',

	components: {
		MHeading,
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

It's possible to stack modals, i.e. open another modal from inside a modal.

```vue
<template>
	<div>
		<m-button
			size="small"
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
	name: 'StackingDemoSetup',

	components: {
		MModalLayer,
		MButton,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(
				() => <StackingDemoFirstModal />,
				{
					closeOnClickOutside: true,
				},
			);
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
			src="https://picsum.photos/600/300"
		>
		<m-modal-content>
			<m-heading>
				First modal heading
			</m-heading>
			<m-text>
				First modal content
			</m-text>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					@click="modalApi.close()"
					@window-esc="modalApi.close()"
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
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import StackingDemoSecondModal from 'doc/StackingDemoSecondModal.vue';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'StackingDemoFirstModal',

	components: {
		MModal,
		MHeading,
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
			this.modalApi.open(
				() => <StackingDemoSecondModal />,
				{
					closeOnClickOutside: true,
				},
			);
		},
		closeFirst() {
			this.modalApi.close();
		},
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 600px;
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
			src="https://picsum.photos/400/300"
		>
		<m-modal-content>
			<m-heading>
				Second modal heading
			</m-heading>
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
					@click="modalApi.close()"
				>
					Confirm
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'StackingDemoSecondModal',

	components: {
		MModal,
		MHeading,
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
	height: 400px;
	object-fit: cover;
	object-position: center;
}

.icon {
	width: 24px;
	height: 24px;
}
</style>
```

### Close stacking modals at once

It's possible to close parent modal and child modal at once. Call `this.modalApi.state.parentModal.close()` to close parent modal.

```vue
<template>
	<div>
		<m-button
			size="small"
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
import StackingDemoFirstModalCloseAll from 'doc/StackingDemoFirstModalCloseAll.vue';

export default {
	name: 'StackingDemoSetup',

	components: {
		MModalLayer,
		MButton,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(
				() => <StackingDemoFirstModalCloseAll />,
				{
					closeOnClickOutside: true,
				},
			);
		},
	},
};
</script>
```

_StackingDemoFirstModalCloseAll.vue_

```vue
<template>
	<m-modal>
		<img
			class="cover-photo"
			src="https://picsum.photos/600/300"
		>
		<m-modal-content>
			<m-heading>
				First modal heading
			</m-heading>
			<m-text>
				First modal content
			</m-text>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					@click="modalApi.close()"
					@window-esc="modalApi.close()"
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
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import StackingDemoSecondModalCloseAll from 'doc/StackingDemoSecondModalCloseAll.vue';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'StackingDemoFirstModal',

	components: {
		MModal,
		MHeading,
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
			this.modalApi.open(
				() => <StackingDemoSecondModalCloseAll />,
				{
					closeOnClickOutside: true,
				},
			);
		},
		closeFirst() {
			this.modalApi.close();
		},
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 600px;
	object-fit: cover;
	object-position: center;
}

.icon {
	width: 24px;
	height: 24px;
}
</style>
```

_StackingDemoSecondModalCloseAll.vue_

```vue
<template>
	<m-modal>
		<img
			class="cover-photo"
			src="https://picsum.photos/400/300"
		>
		<m-modal-content>
			<m-heading>
				Second modal heading
			</m-heading>
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
					@click="closeAll()"
				>
					Close all modals
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'StackingDemoSecondModal',

	components: {
		MModal,
		MHeading,
		MText,
		MModalContent,
		MActionBarButton,
		XIcon,
		MInlineActionBar,
	},

	inject: {
		modalApi,
	},

	methods: {
		closeAll() {
			this.modalApi.close();

			const { parentModal } = this.modalApi.state;
			if (parentModal) {
				parentModal.close();
			}
		},
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 400px;
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

| Prop         | Type   | Default | Possible values | Description                          |
| ------------ | ------ | ------- | --------------- | ------------------------------------ |
| before-close | `func` | —       | —               | Before close hook, can block closing |


## Modal Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## ModalContent Slots

| Slot    | Description                                  |
| ------- | -------------------------------------------- |
| default | Modal Content content (gets correct padding) |



<!-- api-tables:end -->
