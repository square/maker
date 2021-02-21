# ActionBar

```vue
<template>
	<m-action-bar-layer class="FixInlineActionBarLayerDemosInStyleguide">
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
					<demo-responsive-action-bar />
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

<!--

```vue
<template>
	<m-action-bar-layer class="FixInlineActionBarLayerDemosInStyleguide">
		<m-action-bar-button>
			action bar button
		</m-action-bar-button>
		<demo-action-bar />
	</m-action-bar-layer>
</template>

<script>
import { MActionBar, MActionBarLayer, MActionBarButton } from '@square/maker/components/ActionBar';
import DemoActionBar from 'doc/DemoActionBar.vue';

export default {
	name: 'DemoSetup',
	components: {
		MActionBarLayer,
		MActionBarButton,
		DemoActionBar,
	},
};
</script>
```

_DemoActionBar.vue_

```vue
<template>
	<m-action-bar>
		<m-action-bar-button key="close">
			<x-icon class="icon" />
		</m-action-bar-button>
		<m-action-bar-button key="confirm" full-width>
			Confirm or whatever
		</m-action-bar-button>
	</m-action-bar>
</template>

<script>
import { MActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'DemoActionBar',
	components: {
		MActionBar,
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

-->

<!-- api-tables:start -->
## ActionBar Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## ActionBarButton Props

Supports attributes from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

| Prop       | Type      | Default     | Possible values                    | Description                           |
| ---------- | --------- | ----------- | ---------------------------------- | ------------------------------------- |
| type       | `string`  | `'button'`  | —                                  | Type of the button                    |
| full-width | `boolean` | `false`     | —                                  | Whether to make the button full-width |
| color      | `string`  | `'#000'`    | —                                  | Background color of button            |
| text-color | `string`  | —           | —                                  | Text color of button                  |
| variant    | `string`  | `'primary'` | `primary`, `secondary`, `tertiary` | Semantic variant                      |
| disabled   | `boolean` | `false`     | —                                  | Toggles button disabled state         |
| align      | `string`  | `'center'`  | `center`, `stack`, `space-between` | How to align button's contents        |
| loading    | `boolean` | `false`     | —                                  | Toggles button loading state          |


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
<!-- api-tables:end -->
