# Popover

Use the popover to provide the user with more context or options. The Popover Layer should be placed at the root of your application.

## Basic Popover
```vue
<template>
	<div>
		<m-popover-layer />

		<m-popover>
			<template #action="popover">
				<m-button
					:variant="'primary'"
					@click="popover.toggle()"
				>
					Popover Toggle
				</m-button>
			</template>

			<template #content>
				<m-popover-content>
					Content for a basic popover
				</m-popover-content>
			</template>
		</m-popover>
	</div>
</template>

<script>
import { MPopoverLayer, MPopover, MPopoverContent } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';

export default {
	name: 'BasicDemo',

	components: {
		MPopoverLayer,
		MPopover,
		MPopoverContent,
		MButton,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],
};
</script>
```


## Other Configurations
```vue
<template>
	<div>
		<m-popover-layer />

		<div :class="$s.DemoGrid">
			<div :class="$s.DemoConfig">
				<label>
					Placement
					<m-select
						v-model="placement"
						:options="placementOptions"
					/>
				</label>
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
			</div>

			<div :class="$s.DemoPopover">
				<m-popover
					:placement="placement"
				>
					<template #action="popover">
						<m-button
							:variant="'primary'"
							@click="popover.toggle()"
						>
							Popover Toggle
						</m-button>
					</template>

					<template #content>
						<m-popover-content
							:color="color"
							:bg-color="bgColor"
						>
							<demo-popover />
						</m-popover-content>
					</template>
				</m-popover>
			</div>
		</div>
	</div>
</template>

<script>
import { MPopoverLayer, MPopover, MPopoverContent } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MSelect } from '@square/maker/components/Select';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'SimpleDemo',

	components: {
		MPopoverLayer,
		MPopover,
		MPopoverContent,
		MButton,
		MSelect,
		DemoPopover,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],

	data() {
		return {
			placement: 'bottom-start',
			placementOptions: [
				'auto', 'auto-start', 'auto-end',
				'top', 'top-start', 'top-end',
				'right', 'right-start', 'right-end',
				'bottom', 'bottom-start', 'bottom-end',
				'left', 'left-start', 'left-end',
			].map((p) => ({ label: p, value: p })),
			color: '#000000',
			bgColor: '#ffffff',
		};
	},
};
</script>

<style module="$s">
.DemoGrid {
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
}

.DemoPopover {
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 350px;
	padding: 100px 24px;
}

.DemoConfig {
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: 300px;
}
</style>
```

## External Trigger

If you need to trigger a popover to be opened from outside the `Popover` component, you can access the `open`, `close`, and `trigger` methods via a `ref`.

```vue
<template>
	<div>
		<m-popover-layer />

		<m-button
			ref="externalTrigger"
			@click="$refs.popover.toggle($refs.externalTrigger.$el)"
		>
			Popover Toggle
		</m-button>
		<m-popover ref="popover">
			<template #action>
				<span
					ref="action"
					style="margin: 0 24px;"
				>
					It will open on me
				</span>
			</template>
			<template #content>
				<m-popover-content>
					<demo-popover />
				</m-popover-content>
			</template>
		</m-popover>
	</div>
</template>

<script>
import { MPopoverLayer, MPopover, MPopoverContent } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'ExternalTriggerDemo',

	components: {
		MPopoverLayer,
		MPopover,
		MPopoverContent,
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

The Dialog and Modal layers share the root-level Popover layer. In order for popovers to appear on top of the Dialogs and Modals, make sure to include the `MPopoverLayer` component _after_ the `MDialogLayer`/`MModalLayer` components in your template. Otherwise, Popovers will work inside Dialogs and Modals without extra configuration.

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
				<template #action="popover">
					<m-button
						size="small"
						@click="popover.toggle()"
					>
						Toggle Popover
					</m-button>
				</template>

				<template #content>
					<m-popover-content>
						<demo-popover>
							<m-button @click="closeModal()">
								Close Modal
							</m-button>
						</demo-popover>
					</m-popover-content>
				</template>
			</m-popover>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MPopover, MPopoverContent } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'DemoModal',

	components: {
		MPopover,
		MPopoverContent,
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
		<m-dialog-content>
			<m-heading>
				Popover in a dialog
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
					<m-popover-content>
						<demo-popover>
							<m-button @click="closeDialog()">
								Close Dialog
							</m-button>
						</demo-popover>
					</m-popover-content>
				</template>
			</m-popover>
		</m-dialog-content>
	</m-dialog>
</template>

<script>
import { MPopover, MPopoverContent } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MDialog, MDialogContent, dialogApi } from '@square/maker/components/Dialog';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'DemoDialog',

	components: {
		MPopover,
		MPopoverContent,
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

| Prop      | Type     | Default                   | Possible values                                                                                                                                                                | Description                                                                |
| --------- | -------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| placement | `string` | `'bottom-start'`          | `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end` | Starting position of the popover. Not guaranteed if too close to overflow. |
| modifiers | `array`  | `() => DEFAULT_MODIFIERS` | —                                                                                                                                                                              | Popper.js modifier list. Overrides default configuration if present.       |


## Popover Slots

| Slot    | Description                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------ |
| action  | Element that the popover is tied to, usually the trigger for the popover. Must be a single node. |
| content | Content that will appear in the floating popover                                                 |


## Popover Events

| Event | Type | Description             |
| ----- | ---- | ----------------------- |
| open  | -    | Popover has been opened |
| close | -    | Popover has been closed |


## PopoverContent Props

| Prop     | Type     | Default  | Possible values | Description                     |
| -------- | -------- | -------- | --------------- | ------------------------------- |
| color    | `string` | `'#000'` | —               | Text color within the popover   |
| bg-color | `string` | `'#fff'` | —               | Background color of the popover |


## PopoverContent Slots

| Slot    | Description               |
| ------- | ------------------------- |
| default | Popover container content |



<!-- api-tables:end -->
