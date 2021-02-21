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
		Modal content
		<br><br>
		<m-button
			size="small"
			@click="modalApi.close()"
		>
			Close
		</m-button>
	</m-modal>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MModal, modalApi } from '@square/maker/components/Modal';

export default {
	name: 'DemoModal',

	components: {
		MModal,
		MButton,
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
}

@media screen and (min-width: 1200px) {
	.cover-photo {
		height: inherit;
	}
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

### with ActionBar

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
			src="https://picsum.photos/800/300"
		>
		<m-modal-content>
			<m-heading>
				Modal heading
			</m-heading>
			<m-text>
				modal content
			</m-text>
		</m-modal-content>
		<template #actionbar>
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
		</template>
	</m-modal>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModal, modalApi, MModalContent } from '@square/maker/components/Modal';
import { MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'ActionBarDemoModal',

	components: {
		MHeading,
		MText,
		MModal,
		MActionBarButton,
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
}

@media screen and (min-width: 1200px) {
	.cover-photo {
		height: inherit;
	}
}

.icon {
	width: 24px;
	height: 24px;
}
</style>
```


### Stacking Modals


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
import StackedActionBarDemoFirstModal from 'doc/StackedActionBarDemoFirstModal.vue';

export default {
	name: 'StackedActionBarDemoSetup',

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
			this.modalApi.open(() => <StackedActionBarDemoFirstModal />);
		},
	},
};
</script>
```

_StackedActionBarDemoFirstModal.vue_

```vue
<template>
	<m-modal disable-pan-down-close>
		<img
			class="cover-photo"
			src="https://picsum.photos/600/600"
		>
		<m-modal-content>
			<m-heading>
				First modal heading
			</m-heading>
			<m-text>
				modal content
			</m-text>
		</m-modal-content>
		<template #actionbar>
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
				@click="openStackedModal"
			>
				Open stacked modal
			</m-action-bar-button>
		</template>
		<m-modal-layer />
	</m-modal>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import {
	MModal, MModalContent, MModalLayer,
} from '@square/maker/components/Modal';
import { MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';
import StackedActionBarDemoSecondModal from 'doc/StackedActionBarDemoSecondModal.vue';

export default {
	name: 'StackedActionBarDemoFirstModal',

	components: {
		MModal,
		MModalLayer,
		MHeading,
		MText,
		MModalContent,
		MActionBarButton,
		XIcon,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openStackedModal() {
			this.modalApi.open(() => <StackedActionBarDemoSecondModal />);
		},
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 300px;
	object-fit: cover;
}

.icon {
	width: 24px;
	height: 24px;
}

@media screen and (min-width: 1200px) {
	.cover-photo {
		height: inherit;
	}
}
</style>
```

_StackedActionBarDemoSecondModal.vue_

```vue
<template>
	<m-modal disable-pan-down-close>
		<img
			class="cover-photo"
			src="https://picsum.photos/600/300"
		>
		<m-modal-content>
			<m-heading>
				Second modal heading
			</m-heading>
			<m-text>
				modal content
			</m-text>
		</m-modal-content>
		<template #actionbar>
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
				Confirm or whatever
			</m-action-bar-button>
		</template>
	</m-modal>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModal, modalApi, MModalContent } from '@square/maker/components/Modal';
import { MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'StackedActionBarDemoSecondModal',

	components: {
		MModal,
		MHeading,
		MText,
		MModalContent,
		MActionBarButton,
		XIcon,
	},

	inject: {
		modalApi,
	},
};
</script>

<style scoped>
.icon {
	width: 24px;
	height: 24px;
}

.cover-photo {
	width: 100%;
	height: 300px;
	object-fit: cover;
}

@media screen and (min-width: 1200px) {
	.cover-photo {
		height: inherit;
	}
}
</style>
```

### Mighty Morphin Modals

Use `TransitionResize` for fancy, multi-step, resizing modals.

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
import MorphinActionBarDemoModal from 'doc/MorphinActionBarDemoModal.vue';

export default {
	name: 'MorphinActionBarDemoSetup',

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
			this.modalApi.open(() => <MorphinActionBarDemoModal />);
		},
	},
};
</script>
```

_MorphinActionBarDemoModal.vue_

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
import MorphinActionBarDemoFirstView from 'doc/MorphinActionBarDemoFirstView.vue';
import MorphinActionBarDemoSecondView from 'doc/MorphinActionBarDemoSecondView.vue';

export default {
	name: 'MorphinActionBarDemoModal',

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
				return MorphinActionBarDemoFirstView;
			}
			return MorphinActionBarDemoSecondView;
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

_MorphinActionBarDemoFirstView.vue_

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

		<m-responsive-action-bar>
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
				Switch to other view
			</m-action-bar-button>
		</m-responsive-action-bar>
	</div>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MModalContent, modalApi } from '@square/maker/components/Modal';
import { MResponsiveActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'MorphinActionBarDemoFirstView',

	components: {
		MHeading,
		MText,
		MModalContent,
		MResponsiveActionBar,
		MActionBarButton,
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
.icon {
	width: 24px;
	height: 24px;
}

.cover-photo {
	width: 100%;
	height: 300px;
	object-fit: cover;
	object-position: center;
}

@media screen and (min-width: 1200px) {
	.cover-photo {
		width: 800px;
	}
}
</style>
```

_MorphinActionBarDemoSecondView.vue_

```vue
<template>
	<div>
		<img
			class="cover-photo"
			src="https://picsum.photos/600/600"
		>
		<br>
		Second view

		<br><br>

		<m-button
			size="small"
			@click="switchView"
		>
			Switch to other view
		</m-button>

		<br><br>

		<m-button
			size="small"
			@click="modalApi.close()"
		>
			Close
		</m-button>
	</div>
</template>

<script>
import { modalApi } from '@square/maker/components/Modal';
import { MButton } from '@square/maker/components/Button';

export default {
	name: 'MorphinActionBarDemoSecondView',

	components: {
		MButton,
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
.icon {
	width: 24px;
	height: 24px;
}

.cover-photo {
	width: 100%;
	height: 300px;
	object-fit: cover;
	object-position: center;
}

@media screen and (min-width: 1200px) {
	.cover-photo {
		width: 600px;
		height: 600px;
	}
}
</style>
```

### Gallery Lightbox

Click on any of the images below to open a lightbox.

```vue
<template>
	<div>
		<img
			v-for="(src, i) in images"
			:key="src"
			:src="src"
			class="Image"
			@click="openLightbox(i)"
		>
		<m-modal-layer />
	</div>
</template>

<script>
import { MModalLayer } from '@square/maker/components/Modal';
import LightboxDemoModal from 'doc/LightboxDemoModal.vue';

export default {
	name: 'LightboxDemoSetup',

	components: {
		MModalLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	data() {
		return {
			images: [
				'https://i.picsum.photos/id/1033/2048/1365.jpg?hmac=zEuPfX7t6U866nzXjWF41bf-uxkKOnf1dDrHXmhcK-Q',
				'https://i.picsum.photos/id/1047/3264/2448.jpg?hmac=ksy0K4uGgm79hAV7-KvsfHY2ZuPA0Oq1Kii9hqkOCfU',
				'https://i.picsum.photos/id/1063/4867/3215.jpg?hmac=-ksdmOruOUma2z6ENQo9Yqp9T7lsnokLo8SFfAt-UNU',
			],
		};
	},

	methods: {
		openLightbox(sourceIndex) {
			this.modalApi.open((h) => h(
				LightboxDemoModal,
				{
					props: {
						startIndex: sourceIndex,
						images: this.images,
					},
				},
			));
		},
	},
};
</script>

<style scoped>
.Image {
	width: 200px;
	height: 200px;
	display: inline-block;
	cursor: pointer;
	object-fit: cover;
	object-position: center;
}
</style>
```

_LightboxDemoModal.vue_

```vue
<template>
	<m-modal-container class="container">
		<div
			class="close-container"
			@click="modalApi.close()"
		>
			<x-icon
				class="close icon"
			/>
		</div>
		<div class="navViewBox">
			<div
				style="icon-container"
				@click="prevSrc"
			>
				<chevron-left-icon
					class="icon"
				/>
			</div>
			<div class="img-wrapper">
				<img
					class="image"
					:src="currentSrc"
					@click="nextSrc"
				>
			</div>
			<div
				class="icon-container"
				@click="nextSrc"
			>
				<chevron-right-icon
					class="icon"
				/>
			</div>
		</div>
	</m-modal-container>
</template>

<script>
import { MModalContainer, modalApi } from '@square/maker/components/Modal';
import XIcon from '@square/maker-icons/X';
import ChevronLeftIcon from '@square/maker-icons/ChevronLeft';
import ChevronRightIcon from '@square/maker-icons/ChevronRight';

export default {
	components: {
		MModalContainer,
		XIcon,
		ChevronLeftIcon,
		ChevronRightIcon,
	},

	inject: {
		modalApi,
	},

	props: {
		startIndex: {
			type: Number,
			required: true,
		},
		images: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			currentIndex: this.startIndex,
		};
	},

	computed: {
		currentSrc() {
			return this.images[this.currentIndex];
		},
	},

	methods: {
		nextSrc() {
			this.currentIndex = (this.currentIndex + 1) % this.images.length;
		},
		prevSrc() {
			this.currentIndex = ((this.currentIndex - 1) + this.images.length) % this.images.length;
		},
	},
};
</script>

<style scoped>
.container {
	padding: 8px;
	user-select: none;
	width: auto;
	height: auto;
}
@media screen and (min-width: 900px) {
	.container {
		padding: 72px;
	}
}
.icon {
	color: white;
	width: 48px;
	height: 48px;
	cursor: pointer;
}
.icon.close {
	width: 24px;
	height: 24px;
}
.icon-container {
	display: inline-block;
}
.close-container {
	position: absolute;
	display: inline-block;
	top: 34px;
	right: 24px;
}
@media screen and (min-width: 900px) {
	.close-container {
		top: calc(72px - 24px - 8px);
		right: calc(72px + 24px - 8px);
	}
}
.navViewBox {
	display: flex;
	align-items: center;
}
.image {
	cursor: pointer;
	height: calc(100vh - 72px * 2);
	object-fit: cover;
	object-position: center;
	width: 100%;
}
</style>
```

<!-- api-tables:start -->
## Modal Props

| Prop                   | Type      | Default | Possible values | Description |
| ---------------------- | --------- | ------- | --------------- | ----------- |
| disable-pan-down-close | `boolean` | `false` | —               | —           |


## Modal Slots

| Slot      | Description      |
| --------- | ---------------- |
| default   | Modal content    |
| actionbar | Modal action bar |


## ModalContainer Slots

| Slot    | Description             |
| ------- | ----------------------- |
| default | modal container content |


## ModalContent Slots

| Slot    | Description                                  |
| ------- | -------------------------------------------- |
| default | Modal Content content (gets correct padding) |



<!-- api-tables:end -->
