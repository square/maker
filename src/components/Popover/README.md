# Popover

Use the popover to provide the user with more context or options. The Popover Layer should be placed at the root of your application.

```vue
<template>
	<div>
		<m-popover-layer />

		<m-popover>
			<template #action="popover">
				<m-button
					size="small"
					pattern="primaryOutline"
					@click="popover.toggle()"
				>
					Toggle popover
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

## Examples

### Theming

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
					Profile
					<m-select
						v-model="profile"
						:options="profileOptions"
					/>
				</label>
				<label>
					Text color
					<input
						v-model="color"
						type="color"
					>
				</label>
				<label>
					Background color
					<input
						v-model="bgColor"
						type="color"
					>
				</label>
			</div>

			<m-theme
				:class="$s.DemoPopover"
				:theme="theme"
				:profile="profile"
			>
				<m-text
					pattern="title"
				>
					Theme title
				</m-text>
				<m-text>
					Theme text
				</m-text>
				<m-popover
					:placement="placement"
				>
					<template #action="popover">
						<m-button
							@click="popover.toggle()"
						>
							Toggle popover
						</m-button>
					</template>

					<template #content>
						<m-popover-content
							v-bind="popoverProps"
						>
							<demo-popover />
						</m-popover-content>
					</template>
				</m-popover>
			</m-theme>
		</div>
	</div>
</template>

<script>
import { MPopoverLayer, MPopover, MPopoverContent } from '@square/maker/components/Popover';
import { MButton } from '@square/maker/components/Button';
import { MSelect } from '@square/maker/components/Select';
import { MTheme } from '@square/maker/components/Theme';
import { MText } from '@square/maker/components/Text';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	components: {
		MPopoverLayer,
		MPopover,
		MPopoverContent,
		MButton,
		MSelect,
		MTheme,
		MText,
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
			color: '#ffffff',
			bgColor: '#484543',
			theme: {
				colors: {
					background: '#484543',
					body: '#ffffff',
					heading: '#e5d7cc',
					primary: '#e5d7cc',
				},
				profiles: {
					profile1: {
						colors: {
							background: '#002a57',
							body: '#fbf9c1',
							heading: '#e5d7cc',
							primary: '#e5d7cc',
						},
					},
					profile2: {
						colors: {
							background: '#e5d7cc',
							body: '#333333',
							heading: '#4d1cfd',
							primary: '#000000',
						},
					},
				},
			},
			profile: '',
			profileOptions: [
				{
					label: 'default',
					value: '',
				},
				{
					label: 'profile1',
					value: 'profile1',
				},
				{
					label: 'profile2',
					value: 'profile2',
				},
			],
		};
	},

	computed: {
		popoverProps() {
			const { themeColors } = this;
			const popover = {};
			if (themeColors.background !== this.bgColor) {
				popover.bgColor = this.bgColor;
			}
			if (themeColors.body !== this.color) {
				popover.color = this.color;
			}
			return popover;
		},

		themeColors() {
			return this.theme.profiles[this.profile]?.colors || this.theme.colors;
		},
	},

	watch: {
		profile() {
			this.color = this.themeColors.body;
			this.bgColor = this.themeColors.background;
		},
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
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
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

### External triggers

If you need to trigger a popover to be opened from outside the `Popover` component, you can access the `open`, `close`, and `trigger` methods via a `ref`.

```vue
<template>
	<div>
		<m-popover-layer />

		<m-button
			ref="externalTrigger"
			size="small"
			pattern="primaryOutline"
			@click="$refs.popover.toggle($refs.externalTrigger.$el)"
		>
			Toggle popover
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

## Usage within layer components

Layer components, such as Modal, Dialog, and Blade, share the root-level Popover layer. In order for Popovers to appear over Modals, Dialogs, and Blades, the `MPopoverLayer` component must be placed _after_ `MModalLayer`, `MDialogLayer`, and `MBladeLayer` components in your root app template.

```vue
<template>
	<div>
		<m-blade-layer />
		<m-modal-layer />
		<m-dialog-layer />
		<m-popover-layer />

		<m-button
			size="small"
			pattern="primaryOutline"
			@click="openModal"
		>
			Open modal
		</m-button>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="openDialog"
		>
			Open dialog
		</m-button>
		<m-button
			size="small"
			pattern="primaryOutline"
			@click="openBlade"
		>
			Open blade
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
import { MBladeLayer } from '@square/maker/components/Blade';
import DemoBlade from 'doc/DemoBlade.vue';

export default {
	components: {
		MPopoverLayer,
		MButton,
		MModalLayer,
		MDialogLayer,
		MBladeLayer,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
		MModalLayer.apiMixin,
		MDialogLayer.apiMixin,
		MBladeLayer.apiMixin,
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
		openBlade() {
			this.bladeApi.open(() => <DemoBlade />);
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
			src="https://picsum.photos/600/300"
		>
		<m-modal-content>
			<m-text pattern="title">
				Popover in a modal
			</m-text>

			<m-popover>
				<template #action="popover">
					<m-button
						size="small"
						pattern="primaryOutline"
						@click="popover.toggle()"
					>
						Toggle popover
					</m-button>
				</template>

				<template #content>
					<m-popover-content>
						<demo-popover>
							<m-button
								size="small"
								pattern="primaryOutline"
								@click="closeModal"
							>
								Close modal
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
import { MText } from '@square/maker/components/Text';
import { MModal, MModalContent, modalApi } from '@square/maker/components/Modal';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	components: {
		MPopover,
		MPopoverContent,
		MModal,
		MButton,
		MText,
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

<style scoped>
.cover-photo {
	width: 100%;
	height: 300px;
	object-fit: cover;
	object-position: center;
}
</style>
```

_DemoDialog.vue_

```vue
<template>
	<m-dialog>
		<m-dialog-content>
			<m-text pattern="title">
				Popover in a dialog
			</m-text>

			<m-popover>
				<template #action="popover">
					<m-button
						size="small"
						pattern="primaryOutline"
						@click="popover.toggle()"
					>
						Toggle popover
					</m-button>
				</template>

				<template #content>
					<m-popover-content>
						<demo-popover>
							<m-button
								size="small"
								pattern="primaryOutline"
								@click="closeDialog"
							>
								Close dialog
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
import { MText } from '@square/maker/components/Text';
import { MDialog, MDialogContent, dialogApi } from '@square/maker/components/Dialog';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	components: {
		MPopover,
		MPopoverContent,
		MDialog,
		MButton,
		MText,
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

_DemoBlade.vue_

```vue
<template>
	<m-blade>
		<img
			class="cover-photo"
			src="https://picsum.photos/400/300"
		>
		<m-blade-content>
			<m-text pattern="title">
				Popover in a blade
			</m-text>
			<m-popover>
				<template #action="popover">
					<m-button
						size="small"
						pattern="primaryOutline"
						@click="popover.toggle()"
					>
						Toggle popover
					</m-button>
				</template>

				<template #content>
					<m-popover-content>
						<demo-popover>
							<m-button
								size="small"
								pattern="primaryOutline"
								@click="closeBlade"
							>
								Close blade
							</m-button>
						</demo-popover>
					</m-popover-content>
				</template>
			</m-popover>
		</m-blade-content>
	</m-blade>
</template>

<script>
import { MBlade, MBladeContent, bladeApi } from '@square/maker/components/Blade';
import { MButton } from '@square/maker/components/Button';
import { MText } from '@square/maker/components/Text';
import { MPopover, MPopoverContent } from '@square/maker/components/Popover';
import DemoPopover from 'doc/DemoPopoverContent.vue';

export default {
	components: {
		MBlade,
		MBladeContent,
		MButton,
		MText,
		MPopover,
		MPopoverContent,
		DemoPopover,
	},

	inject: {
		bladeApi,
	},

	methods: {
		closeBlade() {
			this.bladeApi.close();
		},
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 300px;
	object-fit: cover;
	object-position: center;
}
</style>
```


_DemoPopoverContent.vue_

```vue
<template>
	<div :class="$s.DemoPopoverContent">
		<m-text
			pattern="title"
			:class="$s.DemoPopoverHeader"
			:size="0"
		>
			Hello, I'm a popover
		</m-text>

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
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MText,
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

| Prop      | Type     | Default                   | Possible values                                                                                                                                                                                              | Description                                                                |
| --------- | -------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| placement | `string` | `'bottom-start'`          | `'auto'`, `'auto-start'`, `'auto-end'`, `'top'`, `'top-start'`, `'top-end'`, `'right'`, `'right-start'`, `'right-end'`, `'bottom'`, `'bottom-start'`, `'bottom-end'`, `'left'`, `'left-start'`, `'left-end'` | Starting position of the popover. Not guaranteed if too close to overflow. |
| modifiers | `array`  | `() => DEFAULT_MODIFIERS` | -                                                                                                                                                                                                            | Popper.js modifier list. Overrides default configuration if present.       |


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


## Popover Methods

| Method | Description                                |
| ------ | ------------------------------------------ |
| open   | opens popover, use from external element   |
| close  | closes popover                             |
| toggle | toggles popover, use from external element |


## PopoverContent Props

| Prop     | Type     | Default  | Possible values | Description                     |
| -------- | -------- | -------- | --------------- | ------------------------------- |
| color    | `string` | —        | -               | Text color within the popover   |
| bg-color | `string` | —        | -               | Background color of the popover |
| padding  | `string` | `'24px'` | -               | Popover padding                 |


## PopoverContent Slots

| Slot    | Description               |
| ------- | ------------------------- |
| default | Popover container content |



<!-- api-tables:end -->
