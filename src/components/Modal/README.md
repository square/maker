# Modal

Use the modal component to enter the user into a new _mode_.

```vue
<template>
	<div>
		<demo />

		<m-modal-layer />
	</div>
</template>

<script>
import { MModalLayer } from '@square/maker/components/Modal';
import Demo from 'doc/Demo.vue';

export default {
	components: {
		Demo,
		MModalLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
	],
};
</script>
```

_Demo.vue_

```vue
<template>
	<div>
		<button @click="openModal">
			Open modal
		</button>
	</div>
</template>

<script>
import { modalApi } from '@square/maker/components/Modal';
import ModalDemo from 'doc/ModalDemo.vue';

export default {
	inject: {
		modalApi,
	},

	methods: {
		openModal() {
			this.modalApi.open(() => <ModalDemo />);
		},
	},
};
</script>
```

_ModalDemo.vue_

```vue
<template>
	<m-modal>
		<div class="cover-photo">
			<m-image
				src="https://picsum.photos/900"
			/>
		</div>

		<br><br>

		Modals can stack too
		<button @click="openStackedModal">
			Open another modal
		</button>

		<br><br>

		<button @click="modalApi.close()">
			Close
		</button>
	</m-modal>
</template>

<script>
import { MModal, modalApi } from '@square/maker/components/Modal';
import { MImage } from '@square/maker/components/Image';
import ModalStackedDemo from 'doc/ModalStackedDemo.vue';

export default {
	components: {
		MModal,
		MImage,
	},

	inject: {
		modalApi,
	},

	methods: {
		openStackedModal() {
			this.modalApi.open(() => <ModalStackedDemo />);
		},
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 280px;
}
</style>
```

_ModalStackedDemo.vue_

```vue
<template>
	<m-modal>
		Second modal

		<br><br>

		<button @click="modalApi.close()">
			Close
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


### Opening the modal

The same Modal SFC file can be opened in two different ways depending on your use-case.

#### Programmatic API
The programmatic API is designed to accommodate the majority of use-cases. Use it when you want to open a modal via JavaScript (eg. on a button-click event). Its imperative style signifies that the modal is activated as a new mode outside of the app's inline template flow.

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

#### Template API
Use the template API when you want to open a modal by mounting it in the template. This API is primarily designed for associating a modal with a [Vue Router](https://router.vuejs.org) route so that the it opens upon visiting a page.

```js
import Router from 'vue-router';

export default new Router({
	// ...,

	routes: [
		// ...,

		// Router-entry associated with a modal
		// Visiting this page will automatically open the modal
		{
			path: 'account',
			component: () => import('./modals/AccountModal.vue'),
		},
	],
});
```

With this API, it also becomes possible to mount a modal inline in the template as a way to open/close it. However, this API is discouraged for the following reasons:
1. Gives the reader the impression that your modal component is rendering inline within the same context, when it's actually rendered to a top-level layer of the app to overtake the screen.
2. Requires modal state management to be implemented on user-land, and therefore could lead to inadvertently attempting to open multiple modals at once despite only one Modal being able to open at a time. Using the programmatic API allows for a much more deliberate syntax that can be traced back to an action instead of a state change.

```html
<template>
	<div>
		<button @click="isModalOpen = true">
			Open modal
		</button>

		<!-- This usage is discouraged -->
		<my-modal
			v-if="isModalOpen"
		/>
	</div>
</template>

<script>
import MyModal from './MyModal.vue';

export default {
	components: {
		MyModal,
	},

	data() {
		return {
			isModalOpen: false,
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Modal Slots

| Slot    | Description   |
| ------- | ------------- |
| default | modal content |



<!-- api-tables:end -->
