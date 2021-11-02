# Popover

```vue
<template>
	<div id="a">
		<m-popover-layer />

		<div>
			<m-popover>
				<template #action="popover">
					<m-button @click="popover.toggle()">
						Open 1 {{ popover || '[MISSING POPOVER]' }}
					</m-button>
				</template>

				<template #content>
					<m-popover-bubble>
						Content 1
					</m-popover-bubble>
				</template>
			</m-popover>
			<m-popover>
				<template #action="popover">
					<m-button @click="popover.toggle()">
						Open 2 {{ popover || '[MISSING POPOVER]' }}
					</m-button>
				</template>

				<template #content>
					<m-popover-bubble>
						Content 2
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

| Prop           | Type     | Default  | Possible values | Description |
| -------------- | -------- | -------- | --------------- | ----------- |
| text-color     | `string` | `'#000'` | —               | —           |
| bg-color       | `string` | `'#fff'` | —               | —           |
| tether-element | `object` | —        | —               | —           |


## Popover Events

| Event | Type | Description |
| ----- | ---- | ----------- |
| open  | -    | —           |
| close | -    | —           |


## PopoverBubble Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |



<!-- api-tables:end -->
