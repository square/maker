# Popover

Use the popover to provide the user with more context or options.

## Simple Usage
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
						placeholder="Placeholder"
						:options="placementOptions"
					/>
				</label>
			</div>

			<div :class="$s.DemoPopover">
				<m-popover
					:placement="placement"
				>
					<template #tether="popover">
						<m-button
							:variant="'primary'"
							@click="popover.toggle()"
						>
							Popover Toggle
						</m-button>
					</template>

					<template #content>
						<m-popover-container>
							<demo-popover />
						</m-popover-container>
					</template>
				</m-popover>
			</div>
		</div>
	</div>
</template>

<script>
import { MPopoverLayer, MPopover, MPopoverContainer } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MSelect } from '@square/maker/components/Select';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'SimpleDemo',

	components: {
		MPopoverLayer,
		MPopover,
		MPopoverContainer,
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
```vue
<template>
	<div style="padding: 24px;">
		<m-popover-layer />

		<m-button
			ref="externalTrigger"
			:variant="false ? 'primary' : 'secondary'"
			@click="$refs.popover.toggle($refs.externalTrigger.$el)"
		>
			Popover Toggle
		</m-button>
		<m-popover ref="popover">
			<template #tether>
				<span
					ref="tether"
					style="margin: 0 24px;"
				>
					It will open on me
				</span>
			</template>
			<template #content>
				<m-popover-container>
					<demo-popover />
				</m-popover-container>
			</template>
		</m-popover>
	</div>
</template>

<script>
import { MPopoverLayer, MPopover, MPopoverContainer } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'SimpleDemo',

	components: {
		MPopoverLayer,
		MPopover,
		MPopoverContainer,
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
	<div style="padding: 24px;">
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

## Custom 'Bubble'
```vue
<template>
	<div>
		<m-popover-layer />

		<div style="padding: 24px;">
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
					<div :class="$s.CustomBubble">
						<demo-popover />
					</div>
				</template>
			</m-popover>
		</div>
	</div>
</template>

<script>
import { MPopoverLayer, MPopover } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'SimpleDemo',

	components: {
		MPopoverLayer,
		MPopover,
		MButton,
		DemoPopover,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],
};
</script>

<style module="$s">
.CustomBubble {
  animation: bgColor 5s infinite linear;
	border-radius: 16px;
	padding: 24px;
}

@keyframes bgColor {
	0% { background-color: red; color: white; }
  14.29% { background-color: orange; color: white; }
  28.57% { background-color: yellow; color: black; }
  42.86% { background-color: green; color: black; }
  57.14% { background-color: blue; color: white; }
  71.43% { background-color: indigo; color: white; }
  85.71% { background-color: violet; color: white; }
  100% { background-color: red; color: white; }
}
</style>
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
					<m-popover-container>
						<demo-popover>
							<m-button @click="closeModal()">
								Close Modal
							</m-button>
						</demo-popover>
					</m-popover-container>
				</template>
			</m-popover>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MPopover, MPopoverContainer } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'DemoModal',

	components: {
		MPopover,
		MPopoverContainer,
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
					<m-popover-container>
						<demo-popover>
							<m-button @click="closeDialog()">
								Close Dialog
							</m-button>
						</demo-popover>
					</m-popover-container>
				</template>
			</m-popover>
		</m-dialog-content>
	</m-dialog>
</template>

<script>
import { MPopover, MPopoverContainer } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MHeading } from '@square/maker/components/Heading';
import { MDialog, MDialogContent, dialogApi } from '@square/maker/components/Dialog';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	name: 'DemoDialog',

	components: {
		MPopover,
		MPopoverContainer,
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

| Prop      | Type     | Default                   | Possible values                                                                                                                                                                | Description                                                                |
| --------- | -------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| placement | `string` | `'bottom-start'`          | `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end` | Starting position of the popover. Not guaranteed if too close to overflow. |
| modifiers | `array`  | `() => DEFAULT_MODIFIERS` | —                                                                                                                                                                              | Popper.js modifier list. Overrides default configuration if present.       |


## Popover Slots

| Slot    | Description |
| ------- | ----------- |
| tether  | —           |
| content | —           |


## Popover Events

| Event | Type | Description             |
| ----- | ---- | ----------------------- |
| open  | -    | Popover has been opened |
| close | -    | Popover has been closed |


## PopoverContainer Props

| Prop     | Type     | Default  | Possible values | Description                     |
| -------- | -------- | -------- | --------------- | ------------------------------- |
| color    | `string` | `'#000'` | —               | Text color within the popover   |
| bg-color | `string` | `'#fff'` | —               | Background color of the popover |


## PopoverContainer Slots

| Slot    | Description            |
| ------- | ---------------------- |
| default | Popover bubble content |



<!-- api-tables:end -->
