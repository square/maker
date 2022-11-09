# Menu

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
		{{ single }}

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
		{{ multi }}

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
					:click-handler="clickHandler"
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
		clickHandler() {
			// eslint-disable-next-line no-alert
			alert('Action clicked');
		},
	},
};
</script>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: 16px;
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
| type    | `string`    | `'single-select'` | `'multi-select'`, `'single-select'`, `'action'` | -                    |
| v-model | `undefined` | —                 | -                                               | Selected menu option |


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
| menu:close  | -    | —           |
| menu:open   | -    | —           |
| menu:update | -    | —           |


## Menu Methods

| Method | Description     |
| ------ | --------------- |
| close  | closes the menu |


## MenuOption Props

| Prop          | Type        | Default | Possible values | Description |
| ------------- | ----------- | ------- | --------------- | ----------- |
| click-handler | `func`      | —       | -               | -           |
| value         | `undefined` | —       | -               | -           |


## MenuOption Slots

| Slot           | Description |
| -------------- | ----------- |
| default        | —           |
| prefix         | —           |
| secondary      | —           |
| side           | —           |
| side-secondary | —           |
| suffix         | —           |


## MenuOption Events

| Event        | Type | Description |
| ------------ | ---- | ----------- |
| option:click | -    | —           |
<!-- api-tables:end -->
