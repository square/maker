# Popover

## Simple Usage
```vue
<template>
	<div>
		<m-popover-layer />

		<div style="padding: 5rem;">
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
	name: 'SimpleDemo',

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

## Detached Action
```vue
<template>
	<div>
		<m-popover-layer />

		<m-button
			ref="externalTrigger"
			:variant="false ? 'primary' : 'secondary'"
			@click="$refs.popover.toggle()"
		>
			Popover Toggle
		</m-button>

		<div style="padding: 5rem;">
			<div ref="tether">
				It will open on me
			</div>

			<m-popover
				ref="popover"
				:tether-element="$refs.tether"
				:ignore-elements="[$refs.externalTrigger]"
			>
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
	name: 'SimpleDemo',

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

## Modal/Dialog Usage
```vue
<template>
	<div>
		<m-modal-layer />
		<m-popover-layer />

		<m-button
			@click="openModal()"
		>
			Open Modal
		</m-button>
	</div>
</template>

<script>
import { MPopoverLayer } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import DemoModal from 'doc/DemoModal.vue';

export default {
	name: 'ModalDemo',

	components: {
		MPopoverLayer,
		MButton,
		MModalLayer,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
		MModalLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(
				() => <DemoModal />,
				{
					closeOnClickOutside: true,
				},
			);
		},
	},
};
</script>
```

_DemoModal.vue_

```vue
<template>
	<m-modal>
		<img
			class="cover-photo"
			src="https://picsum.photos/800/300"
		>
		<m-modal-content>
			<m-heading>
				Popover in a modal
			</m-heading>

			<m-popover>
				<template #action="popover">
					<m-button
						size="small"
						@click="popover.toggle()"
					>
						Toggle Popover
					</m-button>
				</template>

				<template #content>
					<m-popover-bubble>
						<div style="padding: 10rem 2rem;">
							<m-button @click="closeModal()">
								Close Modal
							</m-button>
						</div>
					</m-popover-bubble>
				</template>
			</m-popover>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MPopover, MPopoverBubble } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';

export default {
	name: 'DemoModal',

	components: {
		MPopover,
		MPopoverBubble,
		MModal,
		MButton,
		MHeading,
		MModalContent,
	},

	inject: {
		modalApi,
	},

	methods: {
		closeModal() {
			this.modalApi.close();
		},
	},
};
</script>
```

<!-- api-tables:start -->
## Popover Props

| Prop            | Type        | Default          | Possible values | Description |
| --------------- | ----------- | ---------------- | --------------- | ----------- |
| tether-element  | `undefined` | —                | —               | —           |
| ignore-elements | `array`     | `[]`             | —               | —           |
| placement       | `string`    | `'bottom-start'` | —               | —           |
| distance-offset | `number`    | `8`              | —               | —           |
| skidding-offset | `number`    | `0`              | —               | —           |
| min-width       | `boolean`   | `true`           | —               | —           |


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
