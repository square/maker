# Menu


```vue
<template>
	<div>
		<m-container
			label="Basic Usage"
			size="large"
		>
			<div :class="$s.ColorContainer">
				<label>
					Text Color
					<input
						v-model="color"
						type="color"
					>
				</label>
				<label>
					Background Color
					<input
						v-model="bgColor"
						type="color"
					>
				</label>

				<m-toggle v-model="shouldCloseOnClick">
					Close on item click
				</m-toggle>
			</div>

			<div :class="$s.GridContainer">
				<m-card>
					<div v-if="value">
						Last clicked item: {{ value }}
						<hr>
					</div>
					<m-menu
						v-model="value"
						:items="options"
						:color="color"
						:bg-color="bgColor"
						:should-close-on-click="shouldCloseOnClick"
						@menu:click="setValue"
					>
						Option
					</m-menu>
				</m-card>
			</div>
		</m-container>
		<m-popover-layer />
	</div>
</template>

<script>
import { MCard } from '@square/maker/components/Card';
import { MContainer } from '@square/maker/components/Container';
import { MMenu } from '@square/maker/components/Menu';
import { MPopoverLayer } from '@square/maker/components/Popover';
import { MToggle } from '@square/maker/components/Toggle';

export default {
	name: 'DemoSetup',

	components: {
		MCard,
		MContainer,
		MMenu,
		MPopoverLayer,
		MToggle,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],

	data() {
		return {
			value: undefined,
			multiValue: undefined,
			options: ['Option 1', 'Option 2', 'Option 3'],
			color: '#000000',
			bgColor: '#ffffff',
			shouldCloseOnClick: true,
		};
	},

	methods: {
		setValue(value) {
			this.value = value;
		},
	},
};
</script>

<style module="$s">
.ColorContainer {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-bottom: 2rem;
}
</style>
```


<!-- api-tables:start -->
## Menu Props

| Prop                  | Type        | Default  | Possible values | Description                                                      |
| --------------------- | ----------- | -------- | --------------- | ---------------------------------------------------------------- |
| value                 | `undefined` | —        | —               | Component value                                                  |
| items*                | `array`     | —        | —               | List of available items for menu                                 |
| should-close-on-click | `boolean`   | `true`   | —               | Toggles whether the popover should close when an item is clicked |
| color                 | `string`    | `'#000'` | —               | Text color for items                                             |
| bg-color              | `string`    | `'#fff'` | —               | Background color for items                                       |


## Menu Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
| item    | —           |


## Menu Events

| Event      | Type | Description                                   |
| ---------- | ---- | --------------------------------------------- |
| menu:click | -    | Emitted when one of the menu items is clicked |


## MenuItem Props

| Prop        | Type        | Default | Possible values | Description |
| ----------- | ----------- | ------- | --------------- | ----------- |
| option*     | `undefined` | —       | —               | —           |
| is-disabled | `boolean`   | `false` | —               | —           |


## MenuItem Slots

| Slot    | Description |
| ------- | ----------- |
| icon    | —           |
| default | —           |


## MenuOptionLabel Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
<!-- api-tables:end -->
