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
		<m-image
			class="cover-photo"
			src="https://picsum.photos/800/300"
		/>
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
import { MImage } from '@square/maker/components/Image';

export default {
	name: 'DemoModal',

	components: {
		MModal,
		MImage,
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
}

@media screen and (min-width: 1200px) {
	.cover-photo {
		width: inherit;
		height: inherit;
	}
}
</style>
```

## Setup

Register the `MModalLayer.apiMixin` mixin and mount the `MModalLayer` component at the top (eg. root) of your app. The location of the Layer component determines where the modal will be mounted. The mixin _provides_ the modal API to the rest of your app, which is accessed by injecting the `modalApi` key in the components you want to open a modal from.

```html
<template>
	<div>
		<app />

		<m-modal-layer />
	</div>
</template>

<script>
import { MModalLayer } from '@square/maker/components/Modal';
import App from './App.vue';

export default {
	components: {
		App,
		MModalLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
	],
};
</script>
```

## Usage

Modals must always be created in its own Single File Component (SFC) file to separate concerns because it introduces a new mode or context to your app. Use the `MModal` component at the root of your Modal SFC to signify the modal and to communicate with the Modal Layer.

```html
<template>
	<m-modal>
		Modal content

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

### Stacked Modals


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
import StackedDemoFirstModal from 'doc/StackedDemoFirstModal.vue';

export default {
	name: 'StackedDemoSetup',

	components: {
		MModalLayer,
		MButton,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(() => <StackedDemoFirstModal />);
		},
	},
};
</script>
```

_StackedDemoFirstModal.vue_

```vue
<template>
	<m-modal>
		<m-image
			class="cover-photo"
			src="https://picsum.photos/800/300"
		/>
		First modal

		<br><br>

		<m-button
			size="small"
			@click="openStackedModal"
		>
			Open another modal
		</m-button>

		<br><br>

		<m-button
			size="small"
			@click="modalApi.close()"
		>
			Close
		</m-button>

		<m-modal-layer />
	</m-modal>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MModal, MModalLayer } from '@square/maker/components/Modal';
import { MImage } from '@square/maker/components/Image';
import StackedDemoSecondModal from 'doc/StackedDemoSecondModal.vue';

export default {
	name: 'StackedDemoFirstModal',

	components: {
		MModal,
		MImage,
		MModalLayer,
		MButton,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openStackedModal() {
			this.modalApi.open(() => <StackedDemoSecondModal />);
		},
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 300px;
}

@media screen and (min-width: 1200px) {
	.cover-photo {
		width: inherit;
		height: inherit;
	}
}
</style>
```

_StackedDemoSecondModal.vue_

```vue
<template>
	<m-modal>
		<m-image
			class="cover-photo"
			src="https://picsum.photos/600/600"
		/>
		Second stacked modal

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
import { MImage } from '@square/maker/components/Image';
import { MModal, modalApi } from '@square/maker/components/Modal';

export default {
	name: 'StackedDemoSecondModal',

	components: {
		MButton,
		MImage,
		MModal,
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
}

@media screen and (min-width: 1200px) {
	.cover-photo {
		width: inherit;
		height: inherit;
	}
}
</style>
```



### Gallery Lightbox

```vue
<template>
	<div>
		<m-image
			v-for="(src, i) in images"
			:key="src"
			:src="src"
			class="Image"
			@click="openLightbox(i)"
		/>
		<m-modal-layer />
	</div>
</template>

<script>
import { MModalLayer } from '@square/maker/components/Modal';
import { MImage } from '@square/maker/components/Image';
import LightboxDemoModal from 'doc/LightboxDemoModal.vue';

export default {
	name: 'LightboxDemoSetup',

	components: {
		MImage,
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
			<m-image
				class="image"
				:src="currentSrc"
				@click="nextSrc"
			/>
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
import { MImage } from '@square/maker/components/Image';

export default {
	components: {
		MModalContainer,
		MImage,
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
	padding: 72px;
	user-select: none;
	width: auto;
	height: auto;
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
	top: calc(72px - 24px - 8px);
	right: calc(72px + 24px - 8px);
}
.navViewBox {
	display: flex;
	align-items: center;
}
.image {
	cursor: pointer;
	height: calc(100vh - 72px * 2);
}
</style>
```

<!-- api-tables:start -->
## Modal Slots

| Slot    | Description   |
| ------- | ------------- |
| default | Modal content |

## ModalContainer Slots

| Slot    | Description             |
| ------- | ----------------------- |
| default | modal container content |

<!-- api-tables:end -->
