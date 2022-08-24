# Toast

Use MToast to notify users of things.

```vue
<template>
	<div>
		<button @click="openToast">
			open toast
		</button>
		<m-toast-layer />
	</div>
</template>

<script>
import { MToastLayer, MBread } from '@square/maker/components/Toast';

export default {
	components: {
		MToastLayer,
	},

	mixins: [
		MToastLayer.apiMixin,
	],

	methods: {
		openToast() {
			this.toastApi.open(() => <MBread>mmm toasted bread</MBread>);
		},
	},
};
</script>
```

## Setup

As demostrated in the opening example above, to open toasts you have to mount a `MToastLayer` and register the `MToastLayer.apiMixin` mixin inside a component. The location of `MToastLayer` determines where toasts will be rendered. The mixin provides the toast API to the current component and all nested child components. It can be accessed within the current component by `this.toastApi` and can be accessed by nested child components by injecting `toastApi`. Type info for the functions available on `toastApi`:

```ts
// Vue render function
type VueRenderFn = () => VueVNodes;

// options to toastApi.open
type OpenOptions = {
	// add offset to bottom of layer give space for actionbar
	actionbarOffset: boolean;
};

// closes a specific instance of an opened toast
type CloseOpenedToastFn = () => void;

type toastApi = {
	// renders toast into nearest parent toast layer using
	// the render function & provided options, returns
	// a function to close that specific opened toast if called
	open: (VueRenderFn, OpenOptions) => CloseOpenedToastFn;

	// closes toast which was opened by specific render fn
	close: (VueRenderFn) => void;

	// closes all open toasts, if any
	closeAll: () => void;

	// only available within custom toasts, will close self
	closeSelf?: () => void;
}
```

## Examples

### MToast

put MToast examples here once I have a working MToast component

Relationship between MToast MBread: MToast is gonna be the opinionated pre-made Toast component that will work & look out-of-the-box how designers and engineers expect. MBread is a lower-level component that specific unique toasts for specific unique circumstances can be built upon.

### MBread

placeholder MBread example talking about `dismiss-after` and `persistent` props. I'll move this section up above once I have a working MToast component with `dismiss-after` and `persistent` props.

MBreads automatically dismiss after 5 seconds. You can customize this duration via the `dismiss-after` prop. If you don't want the MBread to automatically dismiss then you can deactivate it with the `persistent` prop. If a MBread is marked as `persistent` it can only be closed via the following ways:
1. calling the close function returned from `toastApi.open` when the toast is initially opened
2. calling `toastApi.close` with the same render function passed to `toastApi.open`
3. injecting `toastApi` into the toast instance and calling `toastApi.closeSelf`
4. calling `toastApi.closeAll` (as the name suggests, this will close ALL toasts)

```vue
<template>
	<div>
		<button @click="openQuickToast">
			open quick toast (1s)
		</button>
		<button @click="openDefaultToast">
			open default toast (5s)
		</button>
		<button @click="openLongToast">
			open long toast (10s)
		</button>
		<button @click="openPersistentToast">
			open persistent toast (indefinite)
		</button>
		<button @click="openUserDismissibleToast">
			open user dismissible toast (indefinite)
		</button>
		<br>
		<button
			@click="closePersistentToast"
		>
			close persistent toast
		</button>
		<button
			@click="closeAllToasts"
		>
			close all toasts
		</button>
		<m-toast-layer />
	</div>
</template>

<script>
import { MToastLayer, MBread } from '@square/maker/components/Toast';
import UserDismissibleToast from 'doc/UserDismissibleToast.vue';

export default {
	components: {
		MToastLayer,
	},

	mixins: [
		MToastLayer.apiMixin,
	],

	data() {
		return {
			closeFns: [],
		};
	},

	methods: {
		openQuickToast() {
			this.toastApi.open(() => <MBread dismissAfter={1000}>quick toast (1s)</MBread>);
		},
		openDefaultToast() {
			this.toastApi.open(() => <MBread>default toast (5s)</MBread>);
		},
		openLongToast() {
			this.toastApi.open(() => <MBread dismissAfter={10000}>long toast (10s)</MBread>);
		},
		openPersistentToast() {
			const closeFn = this.toastApi.open(() => <MBread>persistent toast (indefinite)</MBread>);
			this.closeFns.push(closeFn);
		},
		openUserDismissibleToast() {
			this.toastApi.open(() => <UserDismissibleToast />);
		},
		closePersistentToast() {
			const closeFn = this.closeFns.shift();
			if (closeFn) {
				closeFn();
			}
		},
		closeAllToasts() {
			this.toastApi.closeAll();
		},
	},
};
</script>
```

_UserDismissibleToast.vue_

```vue
<template>
	<m-bread persistent>
		<button @click="toastApi.closeSelf">
			click me to close
		</button>
	</m-bread>
</template>

<script>
import { MBread, toastApi } from '@square/maker/components/Toast';

export default {
	components: {
		MBread,
	},
	inject: {
		toastApi,
	},
};
</script>
```

## Advanced

### Dodging Actionbars

The problem with using Actionbars and Toasts together is that they occupy the same region of the viewport. To avoid overlapping an actionbar with a toast you can pass the option `actionbarOffset: true` to `toastApi.open` when opening the toast. Note: if ANY opened toast gets the `actionbarOffset: true` property it will apply to all opened toasts.

#### Dodging Global Actionbars

Use `actionbarOffset: true` when opening the toast.

```vue
<template>
	<div>
		<m-action-bar-layer class="FixInlineActionBarLayerDemosInStyleguide">
			<div class="showOnMobile">
				<button @click="showActionbar = !showActionbar">
					{{ showActionbar ? 'hide' : 'show' }}
					global actionbar
				</button>
				<div
					v-if="showActionbar"
				>
					<!-- <demo-action-bar /> -->
					<m-action-bar>
						<m-action-bar-button
							key="close"
							color="#f6f6f6"
							@click="showActionbar = !showActionbar"
						>
							<x-icon class="icon" />
						</m-action-bar-button>
						<m-action-bar-button
							key="confirm"
							full-width
							@click="showActionbar = !showActionbar"
						>
							Confirm action
						</m-action-bar-button>
					</m-action-bar>
					<button @click="openToastWithOffset">
						✅ show toast (with actionbar offset on mobile)
					</button>
					<button @click="openToast">
						❌ show default toast (i cover actionbar)
					</button>
				</div>
			</div>
			<div class="showOnTablet">
				Global actionbars are only visible on mobile resolutions.
				Resize your screen to be &lt;840px wide to see the actionbar.
			</div>
		</m-action-bar-layer>
		<m-toast-layer />
	</div>
</template>

<script>
import { MToastLayer, MBread } from '@square/maker/components/Toast';
import { MActionBar, MActionBarButton, MActionBarLayer } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	components: {
		MActionBarLayer,
		MToastLayer,
		MActionBar,
		MActionBarButton,
		XIcon,
	},
	mixins: [
		MToastLayer.apiMixin,
	],
	data() {
		return {
			showActionbar: false,
		};
	},
	methods: {
		openToast() {
			this.toastApi.open(() => <MBread>i cover the actionbar boo ❌</MBread>);
		},
		openToastWithOffset() {
			this.toastApi.open(() => <MBread>i appear above the actionbar on mobile ✅</MBread>, {
				actionbarOffset: true,
			});
		},
	},
};
</script>

<style scoped>
.icon {
	width: 24px;
	height: 24px;
}

.showOnTablet {
	display: none;
}

@media screen and (min-width: 840px) {
	.showOnMobile {
		display: none;
	}
	.showOnTablet {
		display: block;
	}
}
</style>
```

#### Dodging Inline Actionbars

It's the same as the previous example. Use `actionbarOffset: true` when opening the toast.

```vue
<template>
	<div>
		<button
			@click="openModal"
		>
			Open modal
		</button>
		<m-modal-layer />
		<m-toast-layer />
	</div>
</template>

<script>
import { MModalLayer } from '@square/maker/components/Modal';
import { MToastLayer } from '@square/maker/components/Toast';
import ActionbarModal from 'doc/ActionbarModal.vue';

export default {
	components: {
		MModalLayer,
		MToastLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
		MToastLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(() => <ActionbarModal />);
		},
	},
};
</script>
```

_ActionbarModal.vue_

```vue
<template>
	<m-modal>
		<img
			class="cover-photo"
			src="https://picsum.photos/600/300"
		>
		<m-modal-content>
			<m-text pattern="title">
				heading
			</m-text>
			resize your screen above/below 840px (breakpoint separately
			mobile &amp; desktop styles)
			<button @click="openToastWithOffset">
				✅ show toast (with actionbar offset on mobile)
			</button>
			<button @click="openToast">
				❌ show default toast (i cover actionbar)
			</button>
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
import { MText } from '@square/maker/components/Text';
import { MModal, modalApi, MModalContent } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';
import { toastApi, MBread } from '@square/maker/components/Toast';

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
		toastApi,
	},

	methods: {
		openToast() {
			this.toastApi.open(() => <MBread>i cover the actionbar boo ❌</MBread>);
		},
		openToastWithOffset() {
			this.toastApi.open(() => <MBread>i appear above the actionbar on mobile ✅</MBread>, {
				actionbarOffset: true,
			});
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

<!-- api-tables:start -->
## Bread Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop          | Type      | Default | Possible values | Description                                               |
| ------------- | --------- | ------- | --------------- | --------------------------------------------------------- |
| persistent    | `boolean` | `false` | —               | make bread persistent (no auto-dismiss)                   |
| dismiss-after | `number`  | `5000`  | —               | auto-dismiss after x milliseconds (ignored if persistent) |


## Bread Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## Bread Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).



<!-- api-tables:end -->
