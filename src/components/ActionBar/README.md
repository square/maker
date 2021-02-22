# ActionBar

```vue
<template>
	<m-action-bar-layer class="FixInlineActionBarLayerDemosInStyleguide">
		<button @click="showActionBar = !showActionBar">
			toggle actionbar
		</button>
		<div class="container">
			<div class="card">
				<div class="content">
					<ol>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
						<li>content content content</li>
					</ol>
					<demo-responsive-action-bar v-if="showActionBar" />
				</div>
			</div>
		</div>
	</m-action-bar-layer>
</template>

<script>
import { MActionBarLayer } from '@square/maker/components/ActionBar';
import DemoResponsiveActionBar from 'doc/DemoResponsiveActionBar.vue';

export default {
	name: 'ResponsiveDemoSetup',
	components: {
		MActionBarLayer,
		DemoResponsiveActionBar,
	},
	data() {
		return {
			showActionBar: true,
		};
	},
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
}
.card {
	width: 600px;
	height: 400px;
	position: relative;
	overflow: hidden;
	border-radius: 16px;
	box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.2);
	padding: 16px;
}
.content {
	overflow: scroll;
	height: 100%;
}
</style>
```

_DemoResponsiveActionBar.vue_

```vue
<template>
	<m-responsive-action-bar>
		<m-action-bar-button key="close">
			<x-icon class="icon" />
		</m-action-bar-button>
		<m-action-bar-button
			key="confirm"
			full-width
		>
			Confirm or whatever
		</m-action-bar-button>
	</m-responsive-action-bar>
</template>

<script>
import { MResponsiveActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'DemoResponsiveActionBar',
	components: {
		MResponsiveActionBar,
		MActionBarButton,
		XIcon,
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

# Keyed transitions

Use `key` on action bar items to smoothly transition them in and out when, for example, opening a modal changes the context of the action bar. Note: the root-level action bar will always be hidden on desktop resolutions, please do not put any important actions into it, or otherwise display other UI on the page at desktop resolutions `min-width: 1200px` that allows the user to perform the same actions that they would via the action bar on mobile resolutions.

```vue
<template>
	<m-action-bar-layer class="FixInlineActionBarLayerDemosInStyleguide">
		<button @click="showActionBar = !showActionBar">
			toggle actionbar
		</button>
		<demo-action-bar v-if="showActionBar" />
		<m-modal-layer />
	</m-action-bar-layer>
</template>

<script>
import { MModalLayer } from '@square/maker/components/Modal';
import { MActionBarLayer } from '@square/maker/components/ActionBar';
import DemoActionBar from 'doc/DemoActionBar.vue';

export default {
	name: 'DemoSetup',

	components: {
		MActionBarLayer,
		DemoActionBar,
		MModalLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	data() {
		return {
			showActionBar: false,
		};
	},
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
}
.card {
	width: 600px;
	height: 400px;
	position: relative;
	overflow: hidden;
	border-radius: 16px;
	box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.2);
	padding: 16px;
}
.content {
	overflow: scroll;
	height: 100%;
}
</style>
```

_DemoActionBar.vue_

```vue
<template>
	<m-action-bar>
		<m-action-bar-button
			key="primary"
			full-width
			@click="openModal"
		>
			Open modal
		</m-action-bar-button>
	</m-action-bar>
</template>

<script>
import { modalApi } from '@square/maker/components/Modal';
import { MActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import DemoActionBarModal from 'doc/DemoActionBarModal.vue';

export default {
	name: 'DemoActionBar',

	components: {
		MActionBarButton,
		MActionBar,
	},

	inject: {
		modalApi,
	},

	methods: {
		openModal() {
			this.modalApi.open(() => <DemoActionBarModal />);
		},
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

_DemoActionBarModal.vue_

```vue
<template>
	<m-modal>
		modal content
		<m-responsive-action-bar>
			<m-action-bar-button
				key="secondary"
				@click="modalApi.close()"
			>
				<x-icon class="icon" />
			</m-action-bar-button>
			<m-action-bar-button
				key="primary"
				full-width
				@click="modalApi.close()"
			>
				Confirm or whatever
			</m-action-bar-button>
		</m-responsive-action-bar>
	</m-modal>
</template>

<script>
import { MModal, modalApi } from '@square/maker/components/Modal';
import { MResponsiveActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'DemoActionBarModal',

	components: {
		MModal,
		MResponsiveActionBar,
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
</style>
```


<!-- api-tables:start -->
## ActionBar Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## ActionBarButton Props

Supports attributes from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

| Prop       | Type      | Default    | Possible values                    | Description                           |
| ---------- | --------- | ---------- | ---------------------------------- | ------------------------------------- |
| type       | `string`  | `'button'` | —                                  | Type of the button                    |
| full-width | `boolean` | `false`    | —                                  | Whether to make the button full-width |
| color      | `string`  | `'#000'`   | —                                  | Background color of button            |
| text-color | `string`  | —          | —                                  | Text color of button                  |
| disabled   | `boolean` | `false`    | —                                  | Toggles button disabled state         |
| align      | `string`  | `'center'` | `center`, `stack`, `space-between` | How to align button's contents        |
| loading    | `boolean` | `false`    | —                                  | Toggles button loading state          |


## ActionBarButton Slots

| Slot        | Description       |
| ----------- | ----------------- |
| default     | Button label      |
| information | Information label |


## ActionBarButton Events

Supports events from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).


## ActionBarLayer Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## ResponsiveActionBar Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
<!-- api-tables:end -->
