# Popover

```vue
<template>
	<div id="a">
		<m-popover-layer />

		<div style="padding: 30rem 10rem;">
			<m-popover>
				<template #action="popover">
					<m-button
						:variant="popover.isOpen ? 'primary' : 'secondary'"
						@click="popover.toggle()"
					>
						Popover Toggle
					</m-button>
				</template>

				<template #content>
					<m-popover-bubble>
						Content 1
					</m-popover-bubble>
				</template>
			</m-popover>
		</div>
	</div>
</template>

<script>
import { MPopoverLayer, MPopover, MPopoverBubble } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';

export default {
	name: 'DemoA',

	components: {
		MPopoverLayer,
		MPopover,
		MPopoverBubble,
		MButton,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],
};
</script>
```

<!-- api-tables:start -->
## Popover Props

| Prop            | Type     | Default     | Possible values | Description |
| --------------- | -------- | ----------- | --------------- | ----------- |
| text-color      | `string` | `'#000'`    | —               | —           |
| bg-color        | `string` | `'#fff'`    | —               | —           |
| tether-element  | `object` | —           | —               | —           |
| placement       | `string` | `'top-end'` | —               | —           |
| distance-offset | `number` | `8`         | —               | —           |
| skidding-offset | `number` | `0`         | —               | —           |


## Popover Events

| Event | Type | Description |
| ----- | ---- | ----------- |
| open  | -    | —           |
| close | -    | —           |


## PopoverBubble Props

| Prop     | Type     | Default  | Possible values | Description |
| -------- | -------- | -------- | --------------- | ----------- |
| color    | `string` | `'#000'` | —               | —           |
| bg-color | `string` | `'#fff'` | —               | —           |


## PopoverBubble Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |



<!-- api-tables:end -->
