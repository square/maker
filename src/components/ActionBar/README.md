# ActionBar

```vue
<template>
	<m-action-bar-layer>
		hello world
		<m-action-bar-button>
			1st button button
		</m-action-bar-button>
		<m-action-bar>
			2nd button button
		</m-action-bar>
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
		MActionBar,
		MActionBarButton,
		DemoActionBar,
	},
};
</script>

<style scoped>

</style>
```

_DemoActionBar.vue_

```vue
<template>
	<m-action-bar>
		<div key="key1">
			test test test
		</div>
		<div
			key="key2"
			style="width: 100%"
		>
			test test test test
		</div>
	</m-action-bar>
</template>

<script>
import { MActionBar } from '@square/maker/components/ActionBar';

export default {
	name: 'DemoActionBar',
	components: {
		MActionBar,
	},
};
</script>

<style scoped>
div {
	height: 200px;
	background-color: tomato;
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

| Prop       | Type      | Default     | Possible values                    | Description                           |
| ---------- | --------- | ----------- | ---------------------------------- | ------------------------------------- |
| type       | `string`  | `'button'`  | —                                  | Type of the button                    |
| full-width | `boolean` | `false`     | —                                  | Whether to make the button full-width |
| color      | `string`  | `'#000'`    | —                                  | Background color of button            |
| text-color | `string`  | —           | —                                  | Text color of button                  |
| variant    | `string`  | `'primary'` | `primary`, `secondary`, `tertiary` | Semantic variant                      |
| shape      | `string`  | `'rounded'` | `squared`, `rounded`, `pill`       | Shape of button                       |
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
