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
## Examples

### Modal + ActionBar

Modals are responsive and should be used with `InlineActionBar` which renders the `ActionBar` inline inside the modal instead of the root `ActionBarLayer`.

```vue
<template>
	<div>
		<m-action-bar-layer class="FixInlineActionBarLayerDemosInStyleguide">
			<m-button
				size="small"
				@click="openModal"
			>
				Open modal
			</m-button>
		</m-action-bar-layer>
		<m-modal-layer />
	</div>
</template>

<script>
import { MActionBarLayer } from '@square/maker/components/ActionBar';
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import ActionBarDemoModal from 'doc/ActionBarDemoModal.vue';

export default {
	name: 'ActionBarDemoSetup',

	components: {
		MModalLayer,
		MButton,
		MActionBarLayer,
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
		</m-modal-content>
		<m-inline-action-bar position="absolute">
			<m-action-bar-button
				key="close"
				shape="pill"
				color="#f6f6f6"
				@click="modalApi.close()"
			>
				<x-icon class="icon" />
			</m-action-bar-button>
			<m-action-bar-button
				key="confirm"
				shape="pill"
				full-width
				@click="modalApi.close()"
			>
				Confirm
			</m-action-bar-button>
		</m-inline-action-bar>
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

### Multi-view Modals

If you need to
- open a modal "on top" of another modal
- transition between different modals with dynamic heights

Then what you actually want is a **Multi-view Modal**. This is not a special component, but a combination of `Modal` + `TransitionResize`. If you have multiple modals refactor them into their own views and then switch between them inside a single modal inside of a `TransitionResize` component. Note: if all your views have the same height you may want to just skip using `TransitionResize`.

```vue
<template>
	<m-action-bar-layer class="FixInlineActionBarLayerDemosInStyleguide">
		<m-button
			size="small"
			@click="openModal"
		>
			Open modal
		</m-button>
		<m-modal-layer />
	</m-action-bar-layer>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import { MActionBarLayer } from '@square/maker/components/ActionBar';
import MutliViewDemoModal from 'doc/MutliViewDemoModal.vue';

export default {
	name: 'MultiViewDemoSetup',

	components: {
		MModalLayer,
		MButton,
		MActionBarLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(() => <MutliViewDemoModal />);
		},
	},
};
</script>
```

_MutliViewDemoModal.vue_

```vue
<template>
	<m-modal>
		<m-transition-resize>
			<component
				:is="currentView"
				:switch-view="switchView"
			/>
		</m-transition-resize>
	</m-modal>
</template>

<script>
import { MModal } from '@square/maker/components/Modal';
import { MTransitionResize } from '@square/maker/components/TransitionResize';
import MutliViewDemoFirstView from 'doc/MutliViewDemoFirstView.vue';
import MutliViewDemoSecondView from 'doc/MutliViewDemoSecondView.vue';

export default {
	name: 'MutliViewDemoModal',

	components: {
		MModal,
		MTransitionResize,
	},

	data() {
		return {
			boolean: true,
		};
	},
	computed: {
		currentView() {
			if (this.boolean) {
				return MutliViewDemoFirstView;
			}
			return MutliViewDemoSecondView;
		},
	},

	methods: {
		switchView() {
			this.boolean = !this.boolean;
		},
	},
};
</script>
```

_MutliViewDemoFirstView.vue_

```vue
<template>
	<div>
		<img
			class="cover-photo"
			src="https://picsum.photos/800/300"
		>
		<br>
		<m-modal-content>
			<m-heading>
				First view heading
			</m-heading>
			<m-text>
				First view content
			</m-text>
		</m-modal-content>

		<m-inline-action-bar position="absolute">
			<m-action-bar-button
				key="close"
				shape="pill"
				color="#f6f6f6"
				@click="modalApi.close()"
			>
				<x-icon class="icon" />
			</m-action-bar-button>
			<m-action-bar-button
				key="confirm"
				shape="pill"
				full-width
				@click="switchView"
			>
				Proceed to next view
			</m-action-bar-button>
		</m-inline-action-bar>
	</div>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModalContent, modalApi } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'MutliViewDemoFirstView',

	components: {
		MHeading,
		MText,
		MModalContent,
		MActionBarButton,
		MInlineActionBar,
		XIcon,
	},

	inject: {
		modalApi,
	},

	props: {
		switchView: {
			type: Function,
			required: true,
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

_MutliViewDemoSecondView.vue_

```vue
<template>
	<div>
		<img
			class="cover-photo"
			src="https://picsum.photos/600/600"
		>
		<br>
		<m-modal-content>
			<m-heading>
				Second view heading
			</m-heading>
			<m-text>
				Second view content
			</m-text>
		</m-modal-content>

		<m-inline-action-bar position="absolute">
			<m-action-bar-button
				key="close"
				shape="pill"
				color="#f6f6f6"
				@click="switchView"
			>
				<chevron-left-icon class="icon" />
			</m-action-bar-button>
			<m-action-bar-button
				key="confirm"
				shape="pill"
				full-width
				@click="modalApi.close()"
			>
				Finish flow
			</m-action-bar-button>
		</m-inline-action-bar>
	</div>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModalContent, modalApi } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import ChevronLeftIcon from '@square/maker-icons/ChevronLeft';

export default {
	name: 'MutliViewDemoSecondView',

	components: {
		MHeading,
		MText,
		MModalContent,
		MActionBarButton,
		MInlineActionBar,
		ChevronLeftIcon,
	},

	inject: {
		modalApi,
	},

	props: {
		switchView: {
			type: Function,
			required: true,
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

@media screen and (min-width: 1200px) {
	.cover-photo {
		height: 600px;
	}
}

.icon {
	width: 24px;
	height: 24px;
}
</style>
```

### Stacking modals

If refactoring multiple modals into their own views and dynamically switching between them is impractical then you can literally stack a modal on top of another modal using `modalApi`. Note: Prefer the non-stacking API wherever possible, it has better UX and less gotchas.

```vue
<template>
	<div>
		<m-action-bar-layer class="FixInlineActionBarLayerDemosInStyleguide">
			<m-button
				size="small"
				@click="openModal"
			>
				Open modal
			</m-button>
		</m-action-bar-layer>
		<m-modal-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import { MActionBarLayer } from '@square/maker/components/ActionBar';
import StackingDemoFirstModal from 'doc/StackingDemoFirstModal.vue';

export default {
	name: 'StackingDemoSetup',

	components: {
		MModalLayer,
		MActionBarLayer,
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
			src="https://picsum.photos/600/300"
		>
		<m-modal-content>
			<m-heading>
				First modal heading
			</m-heading>
			<m-text>
				First modal content
			</m-text>
			<m-button @click="closeFirst">
				close
			</m-button>
			<m-inline-action-bar position="absolute">
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					class="1"
					@click="closeFirst"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					class="1"
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
import { MButton } from '@square/maker/components/Button';
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
		MButton,
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
			this.modalApi.open(() => <StackingDemoSecondModal />);
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
			<m-button @click="closeSecond">
				close
			</m-button>
			<m-inline-action-bar position="absolute">
				<m-action-bar-button
					key="close"
					class="2"
					color="#f6f6f6"
					@click="closeSecond"
				>
					<chevron-left-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					class="2"
					full-width
					@click="closeSecond"
				>
					Confirm
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import ChevronLeftIcon from '@square/maker-icons/ChevronLeft';

export default {
	name: 'StackingDemoSecondModal',

	components: {
		MModal,
		MButton,
		MHeading,
		MText,
		MModalContent,
		MActionBarButton,
		ChevronLeftIcon,
		MInlineActionBar,
	},

	inject: {
		modalApi,
	},

	methods: {
		closeSecond() {
			this.modalApi.close();
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
## Modal Slots

| Slot    | Description   |
| ------- | ------------- |
| default | Modal content |


## ModalContent Slots

| Slot    | Description                                  |
| ------- | -------------------------------------------- |
| default | Modal Content content (gets correct padding) |



<!-- api-tables:end -->
