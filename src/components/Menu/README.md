# Menu

```vue
<template>
	<div class="wrapper">
		<m-popover-layer />
		<m-menu
			v-model="single"
		>
			<template #toggle-icon>
				<settings class="icon" />
			</template>
			<template #toggle>
				Single select menu
			</template>
			<template #menu>
				<m-menu-option
					value="one"
				>
					Option one
					<template #icon>
						<settings class="icon" />
					</template>
					<template #side>
						Side
					</template>
					<template #side-icon>
						<settings class="icon" />
					</template>
				</m-menu-option>
				<m-menu-option
					value="two"
				>
					Option two
					<template #icon>
						<settings class="icon" />
					</template>
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
					<template #icon>
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
			<template #toggle>
				Multi select menu
			</template>
			<template #menu>
				<m-menu-option
					value="one"
				>
					Option one
					<template #icon>
						<settings class="icon" />
					</template>
					<template #side>
						Side
					</template>
					<template #side-icon>
						<settings class="icon" />
					</template>
				</m-menu-option>
				<m-menu-option
					value="two"
				>
					Option two
					<template #icon>
						<settings class="icon" />
					</template>
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
					<template #icon>
						<settings class="icon" />
					</template>
				</m-menu-option>
			</template>
		</m-menu>
		{{ multi }}

		<m-menu
			toggle="button"
			type="action"
		>
			<template #toggle-icon>
				<settings class="icon" />
			</template>
			<template #toggle>
				Toggle
			</template>
			<template #menu>
				<m-menu-option
					v-for="index in 4"
					:key="index"
					:click-handler="clickHandler"
				>
					<template #icon>
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

| Prop    | Type        | Default           | Possible values                           | Description          |
| ------- | ----------- | ----------------- | ----------------------------------------- | -------------------- |
| v-model | `undefined` | —                 | —                                         | Selected menu option |
| toggle  | `string`    | `'select'`        | `select`, `button`                        | Menu's toggle style  |
| type    | `string`    | `'single-select'` | `multi-select`, `single-select`, `action` | —                    |


## Menu Slots

| Slot        | Description |
| ----------- | ----------- |
| toggle-icon | —           |
| toggle      | —           |
| menu        | —           |


## Menu Events

| Event       | Type | Description |
| ----------- | ---- | ----------- |
| menu:update | -    | —           |


## MenuOption Props

| Prop          | Type        | Default | Possible values | Description |
| ------------- | ----------- | ------- | --------------- | ----------- |
| value         | `undefined` | —       | —               | —           |
| click-handler | `func`      | —       | —               | —           |


## MenuOption Slots

| Slot           | Description |
| -------------- | ----------- |
| default        | —           |
| icon           | —           |
| secondary      | —           |
| side           | —           |
| side-secondary | —           |
| side-icon      | —           |
<!-- api-tables:end -->
