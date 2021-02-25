# ActionBar

There are 2 versions of ActionBar:
1. InlineActionBar - this should be used when the action bar needs to be rendered inline, e.g. in a Card or in a Section, as well as when the action bar needs to be rendered inside any responsive components, e.g. Modal or Blade.
2. ActionBar - this is a special, but older version, of ActionBar that only works with a parent ActionBarLayer. You should use this if you need a "persistent" ActionBar that stays above all other layered components and animates between different routed views. Also, this ActionBar is only visible on mobile resolutions (width < 1200px) and is hidden on desktop resolutions (width >= 1200px). Again, this is somewhat of a special case, so you probably want InlineActionBar.
3. In a future major release of Maker we may attempt to coalesce the above 2 components into a single one.

## Examples

### InlineActionBar

```vue
<template>
	<div>
		<button @click="showClose = !showClose">
			toggle close button
		</button>
		<div class="container">
			<div class="card">
				<div class="content">
					<ol>
						<li
							v-for="i in 20"
							:key="i"
						>
							content content content
						</li>
					</ol>
					<m-inline-action-bar>
						<m-action-bar-button
							v-if="showClose"
							key="close"
							color="#f6f6f6"
						>
							<x-icon class="icon" />
						</m-action-bar-button>
						<m-action-bar-button
							key="confirm"
							full-width
						>
							Confirm or whatever
						</m-action-bar-button>
					</m-inline-action-bar>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'InlineDemo',
	components: {
		MInlineActionBar,
		MActionBarButton,
		XIcon,
	},
	data() {
		return {
			showClose: true,
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
.icon {
	width: 24px;
	height: 24px;
}
</style>
```

### ActionBar

```vue
<template>
	<m-action-bar-layer class="FixInlineActionBarLayerDemosInStyleguide">
		<button @click="showActionBar = !showActionBar">
			toggle actionbar
		</button>
		<demo-action-bar v-if="showActionBar" />
	</m-action-bar-layer>
</template>

<script>
import { MActionBarLayer } from '@square/maker/components/ActionBar';
import DemoActionBar from 'doc/DemoActionBar.vue';

export default {
	name: 'Demo',
	components: {
		MActionBarLayer,
		DemoActionBar,
	},
	data() {
		return {
			showActionBar: true,
		};
	},
};
</script>
```

_DemoActionBar.vue_

```vue
<template>
	<div>
		<button @click="showClose = !showClose">
			toggle close button
		</button>
		<m-action-bar>
			<m-action-bar-button
				v-if="showClose"
				key="close"
				color="#f6f6f6"
			>
				<x-icon class="icon" />
			</m-action-bar-button>
			<m-action-bar-button
				key="confirm"
				full-width
			>
				Confirm or whatever
			</m-action-bar-button>
		</m-action-bar>
	</div>
</template>

<script>
import { MActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	name: 'DemoResponsiveActionBar',
	components: {
		MActionBar,
		MActionBarButton,
		XIcon,
	},
	data() {
		return {
			showClose: true,
		};
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


## InlineActionBar Props

| Prop     | Type     | Default      | Possible values                           | Description |
| -------- | -------- | ------------ | ----------------------------------------- | ----------- |
| position | `string` | `'absolute'` | `static`, `relative`, `absolute`, `fixed` | —           |
| hide-on  | `string` | `'none'`     | `none`, `mobile`, `desktop`               | —           |


## InlineActionBar Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


<!-- api-tables:end -->
