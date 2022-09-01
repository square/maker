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
import { MToastLayer, MToast } from '@square/maker/components/Toast';

export default {
	components: {
		MToastLayer,
	},

	mixins: [
		MToastLayer.apiMixin,
	],

	methods: {
		openToast() {
			this.toastApi.open(() => <MToast
				text={'Hello. Something happened.'}
			/>);
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

Toasts will auto-dismiss after 5000 milliseconds (5 seconds) by default. You can change this by passing a custom millisecond value to the `dismiss-after` prop. If you would like the Toast to persistent indefinitely programmatically closed or explicitly closed by the user pass the value `true` to the `persistent` prop. While on the subject of programmatically closing toasts, there are 4 ways to do so:
1. Calling the close function returned from the initial call to `toastApi.open`.
2. Calling `toastApi.close` and passing it the same render function that was originally passed to `toastApi.open` to open the toast.
3. Injecting `toastApi` into a custom Toast component and calling `toastApi.closeSelf` internally
4. Calling `toastApi.closeAll` (as the name suggests, this will close all toasts)

```vue
<template>
	<div>
		<button @click="openToast(1000)">
			open short toast (1s)
		</button>
		<button @click="openToast(5000)">
			open default toast (5s)
		</button>
		<button @click="openToast(10000)">
			open long toast (10s)
		</button>
		<button @click="openToast(-1)">
			open persistent toast (indefinite)
		</button>
		<br>
		<button @click="closeAllToasts">
			programmatically close all toasts
		</button>
		<button
			:disabled="!persistentCloseFns.length"
			@click="closePersistentToast"
		>
			programmatically close persistent toast
		</button>
		<m-toast-layer />
	</div>
</template>

<script>
import { MToastLayer, MToast } from '@square/maker/components/Toast';

export default {
	components: {
		MToastLayer,
	},

	mixins: [
		MToastLayer.apiMixin,
	],

	data() {
		return {
			persistentCloseFns: [],
		};
	},

	methods: {
		openToast(dismissAfter = 5000) {
			let text = `I'll auto dismiss after ${dismissAfter}ms.`;
			let persistent = false;
			if (dismissAfter < 0) {
				text = 'I won\'t close until you explicitly close me.';
				persistent = true;
			}
			const closeFn = this.toastApi.open(() => <MToast
				persistent={persistent}
				dismissAfter={dismissAfter}
				text={text}
			/>);
			// only bother saving close functions for the persistent toasts
			if (persistent) {
				this.persistentCloseFns.push(closeFn);
			}
		},
		closePersistentToast() {
			const closeFn = this.persistentCloseFns.shift();
			if (closeFn) {
				closeFn();
			}
		},
		closeAllToasts() {
			this.toastApi.closeAll();
			this.persistentCloseFns = [];
		},
	},
};
</script>
```

Toasts can have actions which can be passed via the `actions` prop. Every action is described with an object that has a `text` field and a `click` field.

```vue
<template>
	<div>
		<button @click="openToast">
			open toast
		</button>
		<br>
		counter: {{ count }}
		<m-toast-layer />
	</div>
</template>

<script>
import { MToastLayer, MToast } from '@square/maker/components/Toast';

export default {
	components: {
		MToastLayer,
	},

	mixins: [
		MToastLayer.apiMixin,
	],

	data() {
		return {
			count: 0,
		};
	},

	methods: {
		openToast() {
			this.toastApi.open(() => <MToast
				text={`I keep count: ${this.count}!`}
				actions={[
					{ text: 'Increment', click: this.increment },
					{ text: 'Decrement', click: this.decrement },
				]}
			/>);
		},
		increment() {
			this.count += 1;
		},
		decrement() {
			this.count -= 1;
		},
	},
};
</script>
```

Toasts can also optionally display progress. To render a progress bar pass a 0 - 100 value to the `progress` prop.

```vue
<template>
	<div>
		<button @click="openToast">
			open toast
		</button>
		<br>
		<label>
			progress {{ progress }}%
			<br>
			<input
				v-model="progress"
				type="range"
				step="1"
				min="0"
				max="100"
			>
		</label>
		<m-toast-layer />
	</div>
</template>

<script>
import { MToastLayer, MToast } from '@square/maker/components/Toast';

export default {
	components: {
		MToastLayer,
	},

	mixins: [
		MToastLayer.apiMixin,
	],

	data() {
		return {
			progress: 50,
		};
	},

	methods: {
		openToast() {
			this.toastApi.open(() => <MToast
				text={'I have a progress bar!'}
				progress={Number.parseInt(this.progress, 10)}
			/>);
		},
	},
};
</script>
```

Toasts have the following built-in default patterns: `info` (default), `success`, `warning`, `error`. Any of these values can be passed to the `pattern` prop without needing a parent Theme component, but if you do have a parent Theme component you can also define your own custom patterns. Toast style can be more finely-controlled using the `color`, `bgColor`, `iconColor`, and `iconName` props.

```vue
<template>
	<div>
		<button
			v-for="pattern in defaultToastPatterns"
			:key="pattern"
			class="toastbutton"
			@click="openToast(pattern)"
		>
			open {{ pattern }} toast
		</button>
		<m-toast-layer />
	</div>
</template>

<script>
import { defaultTheme } from '@square/maker/components/Theme';
import { MToastLayer, MToast } from '@square/maker/components/Toast';

export default {
	components: {
		MToastLayer,
	},

	mixins: [
		MToastLayer.apiMixin,
	],

	data() {
		return {
			defaultToastPatterns: Object.keys(defaultTheme().toast.patterns),
		};
	},

	methods: {
		openToast(pattern) {
			this.toastApi.open(() => <MToast
				pattern={pattern}
				text={`This is a ${pattern} toast.`}
			/>);
		},
	},
};
</script>

<style scoped>
.toastbutton {
	margin-right: 0.5ch;
}
</style>
```

## Advanced examples

### Dodging global actionbars

The problem with using Actionbars and Toasts together is that they occupy the same region of the viewport. To avoid overlapping an actionbar with a toast you can pass the option `actionbarOffset: true` to `toastApi.open` when opening the toast. Note: if ANY opened toast gets the `actionbarOffset: true` property it will apply to all opened toasts.

Use `actionbarOffset: true` when opening the toast.

```vue
<template>
	<div>
		<m-action-bar-layer
			class="FixInlineActionBarLayerDemosInStyleguide"
			style="padding-bottom: 0"
		>
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
						❌ show default toast (covering actionbar)
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
import { MToastLayer, MToast } from '@square/maker/components/Toast';
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
			this.toastApi.open(() => <MToast
				pattern={'error'}
				text={'i cover the actionbar :('}
			/>);
		},
		openToastWithOffset() {
			this.toastApi.open(() => <MToast
				pattern={'success'}
				text={'i appear above the actionbar on mobile :)'}
			/>, {
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

### Dodging Inline Actionbars

Same as for dodging global actionbars. Use `actionbarOffset: true` when opening the toast.

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
				❌ show default toast (covering actionbar)
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
import { toastApi, MToast } from '@square/maker/components/Toast';

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
			this.toastApi.open(() => <MToast
				pattern={'error'}
				text={'i cover the actionbar :('}
			/>);
		},
		openToastWithOffset() {
			this.toastApi.open(() => <MToast
				pattern={'success'}
				text={'i appear above the actionbar on mobile :)'}
			/>, {
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

### Custom toasts

If MToast doesn't satify your needs and you need custom toast for a specific situation then you can build it yourself using MBread, which is the unopinionated and untoasted version of MToast where you can put anything you want into the default slot. For convenience MBread has some minor styling on it (which you can override if you want) and also has `persistent` and `dismissAfter` props which function the same as they do on MToast.

```vue
<template>
	<div>
		<button @click="openToast">
			open custom toast
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
			this.toastApi.open(() => <MBread style={{ background: 'transparent', boxShadow: 'none' }}><svg xmlns={'http://www.w3.org/2000/svg'} width={'100px'} height={'100px'} viewBox={'0 0 486.4 486.4'}><path fill={'#ad6b1a'} d={'M451.2 202.8c24-23.2 35.2-53.6 35.2-87.2 0-74.4-61.6-96.8-139.2-96.8-41.6 0-78.4 6.4-104 24-25.6-17.6-63.2-24-104.8-24C60.8 19.6 0 41.2 0 115.6c0 33.6 11.2 64 35.2 87.2v190.4c0 48.8-25.6 89.6 23.2 89.6h370.4c48.8 0 23.2-40.8 23.2-89.6V202.8h-.8z'}/><path fill={'#e5a641'} d={'M451.2 187.6c24-23.2 35.2-53.6 35.2-87.2 0-74.4-61.6-96.8-139.2-96.8-41.6 0-78.4 6.4-104 24-25.6-17.6-63.2-24-104.8-24C60.8 4.4 0 26 0 100.4c0 33.6 11.2 64 35.2 87.2V378c0 48.8-25.6 88.8 23.2 88.8h370.4c48.8 0 23.2-40 23.2-88.8V187.6h-.8z'}/><path fill={'#c47e22'} d={'M428 466.8c48.8 0 23.2-40 23.2-88.8V187.6c24-23.2 35.2-53.6 35.2-87.2 0-74.4-61.6-96.8-139.2-96.8-41.6 0-78.4 6.4-104 24-25.6-17.6-64-24-105.6-24'}/><path fill={'#f2e5a2'} d={'M419.2 194c16-19.2 25.6-44 25.6-71.2 0-60.8-52-78.4-115.2-78.4-33.6 0-64.8 5.6-85.6 19.2-20.8-14.4-51.2-19.2-85.6-19.2-63.2 0-116.8 17.6-116.8 78.4 0 27.2 9.6 52 25.6 71.2v155.2c0 40-14.4 85.6 24.8 85.6h301.6c40 0 24.8-46.4 24.8-85.6V194h.8z'}/><g fill={'#e2ce8d'}><path d={'M394.4 434.8c40 0 24.8-46.4 24.8-85.6V194c16-19.2 25.6-44 25.6-71.2 0-60.8-52-78.4-115.2-78.4-33.6 0-64.8 5.6-85.6 19.2-20.8-14.4-50.4-19.2-84.8-19.2'}/><circle cx={'147.2'} cy={'160.4'} r={'20'}/><circle cx={'248'} cy={'380.4'} r={'20'}/></g><circle cx={'379.2'} cy={'123.6'} r={'20'} fill={'#f2e5a2'}/><g fill={'#e2ce8d'}><circle cx={'139.2'} cy={'335.6'} r={'12.8'}/><circle cx={'123.2'} cy={'235.6'} r={'10.4'}/><circle cx={'196'} cy={'286'} r={'10.4'}/></g><circle cx={'323.2'} cy={'230.8'} r={'10.4'} fill={'#f2e5a2'}/><g fill={'#e2ce8d'}><circle cx={'103.2'} cy={'107.6'} r={'8'}/><circle cx={'188'} cy={'210'} r={'8'}/></g><circle cx={'304.8'} cy={'138'} r={'8'} fill={'#f2e5a2'}/><circle cx={'257.6'} cy={'279.6'} r={'4.8'} fill={'#e2ce8d'}/><circle cx={'367.2'} cy={'274'} r={'4.8'} fill={'#f2e5a2'}/></svg></MBread>);
		},
	},
};
</script>
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


## Toast Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop          | Type      | Default | Possible values | Description                                               |
| ------------- | --------- | ------- | --------------- | --------------------------------------------------------- |
| pattern       | `string`  | —       | —               | pattern defined at theme level                            |
| persistent    | `boolean` | —       | —               | make toast persistent (no auto-dismiss)                   |
| dismiss-after | `number`  | —       | —               | auto-dismiss after x milliseconds (ignored if persistent) |
| icon-name     | `string`  | —       | —               | name of icon to show                                      |
| text          | `string`  | `''`    | —               | toast text content                                        |
| progress      | `number`  | —       | —               | optional toast progress (0 - 100)                         |
| color         | `string`  | —       | —               | toast text & button color                                 |
| icon-color    | `string`  | —       | —               | toast icon color                                          |
| bg-color      | `string`  | —       | —               | toast background color                                    |
| actions       | `array`   | `[]`    | —               | toast actions                                             |


## Toast Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).



<!-- api-tables:end -->
