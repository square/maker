# Menu


```vue
<template>
	<m-container
		label="Simple Data"
		size="large"
	>
		<div :class="$s.ColorContainer">
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

		<div :class="$s.GridContainer">
			<m-card>
				<m-container
					label="Single Select"
					:sublabel="'Value: ' + value"
					size="medium"
				>
					<m-menu
						v-model="value"
						:options="options"
						:color="color"
						:bg-color="bgColor"
					/>
				</m-container>
			</m-card>

			<m-card>
				<m-container
					label="Multiple Select"
					:sublabel="'Value: ' + JSON.stringify(multiValue)"
					size="medium"
				>
					<m-menu
						v-model="multiValue"
						:options="options"
						is-multiselect
						:color="color"
						:bg-color="bgColor"
					/>
				</m-container>
			</m-card>
		</div>
	</m-container>
</template>

<script>
import { MCard } from '@square/maker/components/Card';
import { MContainer } from '@square/maker/components/Container';
import { MMenu } from '@square/maker/components/Menu';

export default {
	name: 'DemoSetup',

	components: {
		MCard,
		MContainer,
		MMenu,
	},

	data() {
		return {
			value: undefined,
			multiValue: undefined,
			options: ['Option 1', 'Option 2', 'Option 3'],
			color: '#000000',
			bgColor: '#ffffff',
		};
	},
};
</script>

<style module="$s">
.ColorContainer {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-bottom: 2rem;
}

.GridContainer {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
}
</style>
```

```vue
<template>
	<m-container
		label="Complex Data"
		size="large"
	>
		<div :class="$s.ColorContainer">
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

		<div :class="$s.GridContainer">
			<m-card>
				<m-container
					label="Single Select"
					:sublabel="'Value: ' + JSON.stringify(value)"
					size="medium"
				>
					<m-menu
						v-model="value"
						:options="options"
						:color="color"
						:bg-color="bgColor"
					>
						<template #default="option">
							<m-menu-option
								:option="option.value"
							>
								<m-menu-option-label>
									{{ option.label }}
								</m-menu-option-label>
							</m-menu-option>
						</template>
					</m-menu>
				</m-container>
			</m-card>

			<m-card>
				<m-container
					label="Multiple Select"
					:sublabel="'Value: ' + JSON.stringify(multiValue)"
					size="medium"
				>
					<m-menu
						v-model="multiValue"
						:options="options"
						is-multiselect
						:color="color"
						:bg-color="bgColor"
					>
						<template #default="option">
							<m-menu-option
								:option="option.value"
							>
								<m-menu-option-label>
									{{ option.label }}
								</m-menu-option-label>
							</m-menu-option>
						</template>
					</m-menu>
				</m-container>
			</m-card>
		</div>
	</m-container>
</template>

<script>
import { MCard } from '@square/maker/components/Card';
import { MContainer } from '@square/maker/components/Container';
import { MMenu, MMenuOption, MMenuOptionLabel } from '@square/maker/components/Menu';

export default {
	name: 'DemoSetup',

	components: {
		MCard,
		MContainer,
		MMenu,
		MMenuOption,
		MMenuOptionLabel,
	},

	data() {
		return {
			value: undefined,
			multiValue: undefined,
			options: [
				{ label: 'Option 1 (foo)', value: { data: 'foo' } },
				{ label: 'Option 2 (bar)', value: { data: 'bar' } },
				{ label: 'Option 3 (baz)', value: { data: 'baz' } },
			],
			color: '#000000',
			bgColor: '#ffffff',
		};
	},
};
</script>

<style module="$s">
.ColorContainer {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-bottom: 2rem;
}

.GridContainer {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
}
</style>
```


<!-- api-tables:start -->
## Menu Props

| Prop             | Type        | Default  | Possible values | Description |
| ---------------- | ----------- | -------- | --------------- | ----------- |
| value            | `undefined` | —        | —               | —           |
| options*         | `array`     | —        | —               | —           |
| is-multiselect   | `boolean`   | `false`  | —               | —           |
| text-color       | `string`    | `'#000'` | —               | —           |
| background-color | `string`    | `'#fff'` | —               | —           |


## Menu Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## Menu Events

| Event       | Type | Description |
| ----------- | ---- | ----------- |
| menu:update | -    | —           |


## MenuOption Props

| Prop    | Type        | Default | Possible values | Description |
| ------- | ----------- | ------- | --------------- | ----------- |
| option* | `undefined` | —       | —               | —           |


## MenuOption Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## MenuOptionLabel Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
<!-- api-tables:end -->
