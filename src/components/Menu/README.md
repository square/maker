# Menu

Use the Menu to provide contextual actions to users. Requires a PopoverLayer at the root of your application.

## Basic Popover
```vue
<template>
	<div>
		<m-popover-layer />

		<m-menu>
			<template #default="menu">
				<m-button @click="menu.toggle()">
					Menu
				</m-button>
			</template>

			<template #items>
				<m-menu-item :value="1">
					Menu Item #1
				</m-menu-item>
				<m-menu-item :value="2">
					Menu Item #2
				</m-menu-item>
			</template>
		</m-menu>
	</div>
</template>

<script>
import { MPopoverLayer } from '@square/maker/components/Popover';
import { MMenu, MMenuItem } from '@square/maker/components/Menu';
import { MButton } from '@square/maker/components/Button';

export default {
	name: 'BasicDemo',

	components: {
		MPopoverLayer,
		MMenu,
		MMenuItem,
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

				<label>
					Placement
					<m-select
						v-model="placement"
						placeholder="Placeholder"
						:options="placementOptions"
					/>
				</label>
			</div>

			<div :class="$s.DemoMenu">
				<m-menu
					:color="color"
					:bg-color="bgColor"
					:should-close-on-click="shouldCloseOnClick"
					:placement="placement"
					@menu:click-item="setValue"
				>
					<template #default="menu">
						<m-button @click="menu.toggle()">
							Open Me
						</m-button>
					</template>

					<template #items>
						<m-menu-item
							v-for="item in options"
							:key="item"
							:value="item"
						/>
					</template>
				</m-menu>
				<div v-if="value">
					Last clicked item: {{ value }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MMenu, MMenuItem } from '@square/maker/components/Menu';
import { MPopoverLayer } from '@square/maker/components/Popover';
import { MToggle } from '@square/maker/components/Toggle';
import { MSelect } from '@square/maker/components/Select';

export default {
	name: 'DemoSetup',

	components: {
		MMenu,
		MPopoverLayer,
		MToggle,
		MButton,
		MMenuItem,
		MSelect,
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

	methods: {
		setValue(value) {
			this.value = value;
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

.DemoMenu {
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

## Icons

```vue
<template>
	<div>
		<div v-if="value">
			Last clicked item: {{ value }}
			<hr>
		</div>
		<m-menu
			:color="color"
			:bg-color="bgColor"
			:should-close-on-click="shouldCloseOnClick"
			@menu:click-item="setValue"
		>
			<template #default="menu">
				<m-button @click="menu.toggle()">
					Actions
				</m-button>
			</template>

			<template #items>
				<m-menu-item
					value="approve"
				>
					<template #icon>
						<check-icon />
					</template>

					Approve
				</m-menu-item>

				<m-menu-item
					value="reject"
				>
					<template #icon>
						<x-icon />
					</template>

					Reject
				</m-menu-item>

				<m-menu-item
					value="download"
				>
					<template #icon>
						<download-icon />
					</template>

					Download
				</m-menu-item>
			</template>
		</m-menu>
		<m-popover-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MMenu, MMenuItem } from '@square/maker/components/Menu';
import { MPopoverLayer } from '@square/maker/components/Popover';
import CheckIcon from '@square/maker-icons/Check';
import XIcon from '@square/maker-icons/X';
import DownloadIcon from '@square/maker-icons/Download';

export default {
	name: 'DemoSetup',

	components: {
		MMenu,
		MPopoverLayer,
		MButton,
		MMenuItem,
		CheckIcon,
		XIcon,
		DownloadIcon,
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
```

## Enabled/Disabled Menu Items

```vue
<template>
	<div>
		<div v-if="value">
			Last clicked item: {{ value }}
			<hr>
		</div>
		<m-menu
			:color="color"
			:bg-color="bgColor"
			:should-close-on-click="shouldCloseOnClick"
			@menu:click-item="setValue"
		>
			<template #default="menu">
				<m-button @click="menu.toggle()">
					Actions
				</m-button>
			</template>

			<template #items>
				<m-menu-item
					value="enabled"
				>
					Enabled
				</m-menu-item>

				<m-menu-item
					value="disabled"
					is-disabled
				>
					Disabled
				</m-menu-item>
			</template>
		</m-menu>
		<m-popover-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MMenu, MMenuItem } from '@square/maker/components/Menu';
import { MPopoverLayer } from '@square/maker/components/Popover';

export default {
	name: 'DemoSetup',

	components: {
		MMenu,
		MPopoverLayer,
		MButton,
		MMenuItem,
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
```

# Menu Select

Menu-based `select` replacement that supports single- and multi-select.

## Basic Usage

If the data you are working are basic strings, you can use `MMenuSelect` with minimal overhead:

```vue
<template>
	<div>
		<div>
			Selected Value: {{ value }}
		</div>
		<m-menu-select
			v-model="value"
			:options="options"
		>
			<template #default="menu">
				<m-button @click="menu.toggle()">
					Select an Option
				</m-button>
			</template>
		</m-menu-select>

		<hr>

		<div>
			Selected Values: {{ multiValue }}
		</div>
		<m-menu-select
			v-model="multiValue"
			:options="options"
			is-multiselect
		>
			<template #default="menu">
				<m-button @click="menu.toggle()">
					Select Options
				</m-button>
			</template>
		</m-menu-select>
		<m-popover-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MMenuSelect } from '@square/maker/components/Menu';
import { MPopoverLayer } from '@square/maker/components/Popover';

export default {
	name: 'DemoSetup',

	components: {
		MMenuSelect,
		MPopoverLayer,
		MButton,
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

## Advanced Usage

If you are working with more complicated data structures, you can easily use the `option` slot on `MMenuSelect` to unlock more functionality and flexibility:

```vue
<template>
	<div>
		<div>
			Selected Value: {{ value }}
		</div>
		<m-menu-select
			v-model="value"
			:options="options"
		>
			<template #default="menu">
				<m-button @click="menu.toggle()">
					Make a Donation
				</m-button>
			</template>

			<template #options="option">
				<m-menu-select-option
					:value="option.value"
					:is-disabled="option.disabled"
				>
					{{ option.label }}
				</m-menu-select-option>
			</template>
		</m-menu-select>
		<m-popover-layer />
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MMenuSelect, MMenuSelectOption } from '@square/maker/components/Menu';
import { MPopoverLayer } from '@square/maker/components/Popover';

export default {
	name: 'DemoSetup',

	components: {
		MMenuSelect,
		MMenuSelectOption,
		MPopoverLayer,
		MButton,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],

	data() {
		return {
			value: undefined,
			options: [
				{ label: '$100', value: 100, disabled: false },
				{ label: '$200', value: 200, disabled: false },
				{ label: '$300 (Not Available)', value: 300, disabled: true },
			],
		};
	},
};
</script>
```


<!-- api-tables:start -->
## Menu Props

| Prop                  | Type      | Default           | Possible values                                                                                                                                                                | Description                                                      |
| --------------------- | --------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| should-close-on-click | `boolean` | `true`            | —                                                                                                                                                                              | Toggles whether the popover should close when an item is clicked |
| color                 | `string`  | `'#000'`          | —                                                                                                                                                                              | Text color for items                                             |
| bg-color              | `string`  | `'#fff'`          | —                                                                                                                                                                              | Background color for items                                       |
| placement             | `string`  | `'bottom-start'`  | `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end` | Placement of popover menu items                                  |
| popover-modifiers     | `array`   | `() => undefined` | —                                                                                                                                                                              | List of modifiers for the popover                                |


## Menu Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
| items   | —           |


## Menu Events

| Event           | Type | Description                                   |
| --------------- | ---- | --------------------------------------------- |
| menu:click-item | -    | Emitted when one of the menu items is clicked |


## MenuItem Props

| Prop        | Type        | Default | Possible values | Description                        |
| ----------- | ----------- | ------- | --------------- | ---------------------------------- |
| value*      | `undefined` | —       | —               | The value that is emitted on click |
| is-disabled | `boolean`   | `false` | —               | Blocks clicking of the item        |


## MenuItem Slots

| Slot    | Description             |
| ------- | ----------------------- |
| icon    | 16x16 Square Maker Icon |
| default | —                       |


## MenuSelect Props

| Prop              | Type        | Default           | Possible values                                                                                                                                                                | Description                                                                             |
| ----------------- | ----------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| value             | `undefined` | —                 | —                                                                                                                                                                              | Selected value (is array when isMultiselect is true)                                    |
| options*          | `array`     | —                 | —                                                                                                                                                                              | List of available options to select                                                     |
| is-multiselect    | `boolean`   | `false`           | —                                                                                                                                                                              | Toggles selected value to array with multiple options. Menu will not autoclose if true. |
| color             | `string`    | `'#000'`          | —                                                                                                                                                                              | Text color for items                                                                    |
| bg-color          | `string`    | `'#fff'`          | —                                                                                                                                                                              | Background color for items                                                              |
| placement         | `string`    | `'bottom-start'`  | `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end` | Placement of popover menu items                                                         |
| popover-modifiers | `array`     | `() => undefined` | —                                                                                                                                                                              | Minimum width of popover items                                                          |


## MenuSelect Slots

| Slot        | Description                                                |
| ----------- | ---------------------------------------------------------- |
| default     | content that the menu popover will tether to               |
| options     | custom template for individual menu options                |
| select-icon | custom 16x16 icon (use only if 'options' slot is not used) |


## MenuSelect Events

| Event              | Type | Description                         |
| ------------------ | ---- | ----------------------------------- |
| menu-select:update | -    | Value update for the menu selection |


## MenuSelectOption Props

| Prop        | Type        | Default | Possible values | Description |
| ----------- | ----------- | ------- | --------------- | ----------- |
| value*      | `undefined` | —       | —               | —           |
| is-disabled | `boolean`   | `false` | —               | —           |


## MenuSelectOption Slots

| Slot        | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| select-icon | custom 16x16 icon (use only if using custom 'options' slot in MMenuSelect) |
| default     | text label for option                                                      |
<!-- api-tables:end -->
