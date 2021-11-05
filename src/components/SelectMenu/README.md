## SelectMenu

```vue
<template>
	<div>
		<div>
			{{ value }}

			<m-select-menu
				v-model="value"
				:options="options"
			>
				Test
			</m-select-menu>
		</div>

		<div>
			{{ multiValue }}

			<m-select-menu
				v-model="multiValue"
				:options="options"
				is-multiselect
			>
				Test
			</m-select-menu>
		</div>

		<m-popover-layer />
	</div>
</template>

<script>
import { MSelectMenu } from '@square/maker/components/SelectMenu';
import { MPopoverLayer } from '@square/maker/components/Popover';

export default {
	components: {
		MPopoverLayer,
		MSelectMenu,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],

	data() {
		return {
			value: undefined,
			multiValue: undefined,
			options: ['Option 1', 'Option 2', 'Option 3'],
		};
	},
};
</script>
```


<!-- api-tables:start -->
## Props

| Prop                    | Type        | Default          | Possible values | Description                                             |
| ----------------------- | ----------- | ---------------- | --------------- | ------------------------------------------------------- |
| value                   | `undefined` | —                | —               | Component value                                         |
| options*                | `array`     | —                | —               | List of available options for menu                      |
| is-multiselect          | `boolean`   | `false`          | —               | Toggles whether the value is a list of selected options |
| menu-color              | `string`    | `'#000'`         | —               | Text color for options                                  |
| menu-bg-color           | `string`    | `'#fff'`         | —               | Background color for options                            |
| popover-placement       | `string`    | `'bottom-start'` | —               | —                                                       |
| popover-distance-offset | `number`    | —                | —               | —                                                       |
| popover-skidding-offset | `number`    | —                | —               | —                                                       |
| popover-min-width       | `boolean`   | `true`           | —               | —                                                       |


## Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## Events

| Event         | Type | Description |
| ------------- | ---- | ----------- |
| select:update | -    | —           |
<!-- api-tables:end -->
