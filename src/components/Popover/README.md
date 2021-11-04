# Popover

## Simple Usage
```vue
<template>
	<div>
		<m-popover-layer />

		<div style="padding: 5rem;">
			<m-popover>
				<template #tether="popover">
					<m-button
						:variant="popover.isOpen ? 'primary' : 'secondary'"
						@click="popover.toggle()"
					>
						Popover Toggle
					</m-button>
				</template>

				<template #content>
					<m-popover-bubble>
						<demo-popover />
					</m-popover-bubble>
				</template>
			</m-popover>
		</div>
	</div>
</template>

<script>
import { MPopoverLayer, MPopover, MPopoverBubble } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'SimpleDemo',

	components: {
		MPopoverLayer,
		MPopover,
		MPopoverBubble,
		MButton,
		DemoPopover,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],
};
</script>
```

## External Trigger
```vue
<template>
	<div>
		<m-popover-layer />

		<m-button
			ref="externalTrigger"
			:variant="false ? 'primary' : 'secondary'"
			@click="$refs.popover.toggle($refs.externalTrigger.$el)"
		>
			Popover Toggle
		</m-button>

		<div style="padding: 5rem;">
			<m-popover ref="popover">
				<template #tether>
					<span ref="tether">
						It will open on me
					</span>
				</template>
				<template #content>
					<m-popover-bubble>
						<demo-popover />
					</m-popover-bubble>
				</template>
			</m-popover>
		</div>
	</div>
</template>

<script>
import { MPopoverLayer, MPopover, MPopoverBubble } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'SimpleDemo',

	components: {
		MPopoverLayer,
		MPopover,
		MPopoverBubble,
		MButton,
		DemoPopover,
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
		<m-dialog-layer />
		<m-popover-layer />

		<m-button
			@click="openModal()"
		>
			Open Modal
		</m-button>
		<m-button
			@click="openDialog()"
		>
			Open Dialog
		</m-button>
	</div>
</template>

<script>
import { MPopoverLayer } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MModalLayer } from '@square/maker/components/Modal';
import DemoModal from 'doc/DemoModal.vue';
import { MDialogLayer } from '@square/maker/components/Dialog';
import DemoDialog from 'doc/DemoDialog.vue';

export default {
	name: 'ModalDemo',

	components: {
		MPopoverLayer,
		MButton,
		MModalLayer,
		MDialogLayer,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
		MModalLayer.apiMixin,
		MDialogLayer.apiMixin,
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
		openDialog() {
			this.dialogApi.open(() => <DemoDialog />);
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
				<template #tether="popover">
					<m-button
						size="small"
						@click="popover.toggle()"
					>
						Toggle Popover
					</m-button>
				</template>

				<template #content>
					<m-popover-bubble>
						<demo-popover>
							<m-button @click="closeModal()">
								Close Modal
							</m-button>
						</demo-popover>
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
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'DemoModal',

	components: {
		MPopover,
		MPopoverBubble,
		MModal,
		MButton,
		MHeading,
		MModalContent,
		DemoPopover,
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

_DemoDialog.vue_

```vue
<template>
	<m-dialog>
		<img
			class="cover-photo"
			src="https://picsum.photos/800/300"
		>
		<m-dialog-content>
			<m-heading>
				Popover in a dialog
			</m-heading>

			<m-popover>
				<template #tether="popover">
					<m-button
						size="small"
						@click="popover.toggle()"
					>
						Toggle Popover
					</m-button>
				</template>

				<template #content>
					<m-popover-bubble>
						<demo-popover>
							<m-button @click="closeDialog()">
								Close Dialog
							</m-button>
						</demo-popover>
					</m-popover-bubble>
				</template>
			</m-popover>
		</m-dialog-content>
	</m-dialog>
</template>

<script>
import { MPopover, MPopoverBubble } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MDialog, MDialogContent, dialogApi } from '@square/maker/components/Dialog';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'DemoDialog',

	components: {
		MPopover,
		MPopoverBubble,
		MDialog,
		MButton,
		MHeading,
		MDialogContent,
		DemoPopover,
	},

	inject: {
		dialogApi,
	},

	methods: {
		closeDialog() {
			this.dialogApi.close();
		},
	},
};
</script>
```

_DemoPopoverContent.vue_

```vue
<template>
	<div :class="$s.DemoPopoverContent">
		<m-heading
			:class="$s.DemoPopoverHeader"
			:size="0"
		>
			Hello, I'm a popover
		</m-heading>

		<div :class="$s.DemoPopoverText">
			This is some popover content
		</div>

		<div
			v-if="$slots.default"
			:class="$s.DemoPopoverCustom"
		>
			<slot />
		</div>
	</div>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';

export default {
	name: 'DemoPopoverContent',

	components: {
		MHeading,
	},
};
</script>

<style module="$s">
.DemoPopoverContent {
	padding: 0 8px;
}

.DemoPopoverHeader + .DemoPopoverText {
	margin-top: 8px;
}

.DemoPopoverText + .DemoPopoverCustom {
	margin-top: 4px;
}
</style>
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
