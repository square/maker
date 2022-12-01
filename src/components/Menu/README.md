# Menu

Use Menu when you'd like the user to select one (single-select mode) or many (multi-select mode) options from a dropdown list of options. If you want the user to select only one option, and Menu is more fancy than you need, then you should use [Select](#/Select). If you'd like all of the options to be inlined use [Radio](#/Radio), [SegmentedControl](#/SegmentedControl), or [Choice](#/Choice) (in single-select mode) for single-select use-cases and [Checkbox](#/Checkbox), or [Choice](#/Choice) (in multi-select mode) for multi-select use-cases.

## Examples

To use Menu you need to have a [PopoverLayer](#/Popover) somewhere in your app.

### Single select

This is the default mode. Allows user to only select a single option.

```vue
<template>
	<div class="wrapper">
		<m-popover-layer />
		<m-menu
			v-model="single"
		>
			<template #toggle-select-prefix>
				<settings class="icon" />
			</template>
			<template #toggle-select>
				Single select menu
			</template>
			<template #menu>
				<m-menu-option
					value="one"
				>
					Option one
					<template #side>
						Side
					</template>
					<template #suffix>
						<settings class="icon" />
					</template>
				</m-menu-option>
				<m-menu-option
					value="two"
				>
					Option two
					<template #secondary>
						Secondary
					</template>
					<template #side>
						Side
					</template>
					<template #side-secondary>
						Side secondary
					</template>
				</m-menu-option>
				<m-menu-option
					value="three"
				>
					Option three
					<template #suffix>
						<settings class="icon" />
					</template>
				</m-menu-option>
			</template>
		</m-menu>
		Selection: {{ single }}
	</div>
</template>

<script>
import { MMenu, MMenuOption } from '@square/maker/components/Menu';
import Settings from '@square/maker-icons/Settings';
import { MPopoverLayer } from '@square/maker/components/Popover';

export default {
	components: {
		MMenu,
		MMenuOption,
		MPopoverLayer,
		Settings,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],

	data() {
		return {
			single: 'one',
		};
	},
};
</script>

<style scoped>
.wrapper {
	width: 400px;
}

.icon {
	width: 16px;
	height: 16px;
}
</style>
```

### Multi select

Set `type` to `multi-select`. Allows user to select multiple options.

```vue
<template>
	<div class="wrapper">
		<m-popover-layer />
		<m-menu
			v-model="multi"
			type="multi-select"
		>
			<template #toggle-select>
				Multi select menu
			</template>
			<template #menu>
				<m-menu-option
					value="one"
				>
					Option one
					<template #side>
						Side
					</template>
					<template #suffix>
						<settings class="icon" />
					</template>
				</m-menu-option>
				<m-menu-option
					value="two"
				>
					Option two
					<template #secondary>
						Secondary
					</template>
					<template #side>
						Side
					</template>
					<template #side-secondary>
						Side secondary
					</template>
				</m-menu-option>
				<m-menu-option
					value="three"
				>
					Option three
					<template #suffix>
						<settings class="icon" />
					</template>
				</m-menu-option>
			</template>
		</m-menu>
		Selection: {{ multi }}
	</div>
</template>

<script>
import { MMenu, MMenuOption } from '@square/maker/components/Menu';
import Settings from '@square/maker-icons/Settings';
import { MPopoverLayer } from '@square/maker/components/Popover';

export default {
	components: {
		MMenu,
		MMenuOption,
		MPopoverLayer,
		Settings,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],

	data() {
		return {
			multi: [],
		};
	},
};
</script>

<style scoped>
.wrapper {
	width: 400px;
}

.icon {
	width: 16px;
	height: 16px;
}
</style>
```

### Action menu

Set `type` to `action` and bind a `@click` listener on each individual `<m-menu-option>`. This allows the user to select a single option and for an action to be invoked immediately.

```vue
<template>
	<div class="wrapper">
		<m-popover-layer />
		<m-menu
			type="action"
		>
			<template #toggle>
				<m-button
					pattern="primaryOutline"
				>
					<settings class="icon" />
					Toggle
				</m-button>
			</template>
			<template #menu>
				<m-menu-option
					v-for="index in 4"
					:key="index"
					@click="onOptionClick(index)"
				>
					<template #prefix>
						<settings class="icon" />
					</template>
					Action {{ index }}
					<template #side>
						Side
					</template>
				</m-menu-option>
			</template>
		</m-menu>
	</div>
</template>

<script>
import { MMenu, MMenuOption } from '@square/maker/components/Menu';
import { MButton } from '@square/maker/components/Button';
import Settings from '@square/maker-icons/Settings';
import { MPopoverLayer } from '@square/maker/components/Popover';

export default {
	components: {
		MMenu,
		MMenuOption,
		MPopoverLayer,
		Settings,
		MButton,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],

	data() {
		return {
			single: 'one',
			multi: [],
		};
	},

	methods: {
		onOptionClick(index) {
			// eslint-disable-next-line no-alert
			alert(`Action ${index} clicked!`);
		},
	},
};
</script>

<style scoped>
.wrapper {
	width: 400px;
}

.icon {
	width: 16px;
	height: 16px;
}
</style>
```

<!-- api-tables:start -->
## Menu Props

| Prop    | Type        | Default           | Possible values                                 | Description          |
| ------- | ----------- | ----------------- | ----------------------------------------------- | -------------------- |
| v-model | `undefined` | —                 | -                                               | Selected menu option |
| type    | `string`    | `'single-select'` | `'multi-select'`, `'single-select'`, `'action'` | -                    |


## Menu Slots

| Slot                 | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| toggle-select-prefix | Select toggle prefix                                       |
| toggle-select        | Select toggle text                                         |
| toggle               | Custom toggle slot (not rendered if toggle-select is used) |
| menu                 | —                                                          |


## Menu Events

| Event       | Type | Description |
| ----------- | ---- | ----------- |
| menu:open   | -    | —           |
| menu:close  | -    | —           |
| menu:update | -    | —           |


## Menu Methods

| Method | Description     |
| ------ | --------------- |
| close  | closes the menu |


## MenuOption Props

| Prop  | Type        | Default | Possible values | Description |
| ----- | ----------- | ------- | --------------- | ----------- |
| value | `undefined` | —       | -               | -           |


## MenuOption Slots

| Slot           | Description |
| -------------- | ----------- |
| prefix         | —           |
| default        | —           |
| secondary      | —           |
| side           | —           |
| side-secondary | —           |
| suffix         | —           |


## MenuOption Events

| Event        | Type | Description |
| ------------ | ---- | ----------- |
| option:click | -    | —           |
<!-- api-tables:end -->
