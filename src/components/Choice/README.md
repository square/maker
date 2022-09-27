
# Choice

## Examples

### Default

```vue
<template>
	<div>
		<label>
			Color picker
			<input
				v-model="color"
				type="color"
			>
		</label>
		<br>
		<br>
		<m-choice
			v-model="selected"
			:selected-color="color"
		>
			<m-choice-option value="choice-1">
				Choice
			</m-choice-option>
			<m-choice-option value="choice-2">
				Choice
			</m-choice-option>
			<m-choice-option value="choice-3">
				Choice
			</m-choice-option>
			<m-choice-option
				:disabled="true"
				value="choice-4"
			>
				Choice
			</m-choice-option>
		</m-choice>
		<br>
		<p>Selected value: {{ selected }}</p>
	</div>
</template>

<script>
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';

export default {
	components: {
		MChoice,
		MChoiceOption,
	},
	data() {
		return {
			selected: 'choice-1',
			color: '#006aff',
		};
	},
};
</script>
```

### Multi select mode

```vue
<template>
	<div>
		<m-choice
			v-model="selected"
			mode="multi-select"
		>
			<m-choice-option value="choice-1">
				Choice
			</m-choice-option>
			<m-choice-option value="choice-2">
				Choice<br>second line
			</m-choice-option>
			<m-choice-option value="choice-3">
				Choice longer text
			</m-choice-option>
			<m-choice-option
				:disabled="true"
				value="choice-4"
			>
				Choice disabled
			</m-choice-option>
		</m-choice>
		<br>
		<p>Selected value: {{ selected }}</p>
	</div>
</template>

<script>
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';

export default {
	components: {
		MChoice,
		MChoiceOption,
	},
	data() {
		return {
			selected: ['choice-1', 'choice-4'],
		};
	},
};
</script>
```

### Fixed width

```vue
<template>
	<div>
		<m-choice v-model="selected">
			<m-choice-option
				value="choice-1"
				class="choice-option"
			>
				Choice
			</m-choice-option>
			<m-choice-option
				value="choice-2"
				class="choice-option"
			>
				Choice longer text
			</m-choice-option>
			<m-choice-option
				value="choice-3"
				class="choice-option"
			>
				Choice
			</m-choice-option>
		</m-choice>
		<br>
		<p>Selected value: {{ selected }}</p>
	</div>
</template>

<script>
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';

export default {
	components: {
		MChoice,
		MChoiceOption,
	},
	data() {
		return {
			selected: 'choice-1',
		};
	},
};
</script>

<style scoped>
.choice-option {
	width: 172px;
}
</style>
```

### Disabled state

```vue
<template>
	<div>
		<m-toggle
			v-model="disabled"
			:class="$s.Toggle"
		>
			Disabled
		</m-toggle>

		<m-choice
			v-model="selected"
			:disabled="disabled"
		>
			<m-choice-option value="choice-1">
				Choice
			</m-choice-option>
			<m-choice-option value="choice-2">
				Choice<br>second line
			</m-choice-option>
			<m-choice-option value="choice-3">
				Choice longer text
			</m-choice-option>
			<m-choice-option
				:disabled="true"
				value="choice-4"
			>
				Choice always disabled
			</m-choice-option>
		</m-choice>
		<br>
		<p>Selected value: {{ selected }}</p>
	</div>
</template>

<script>
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';
import { MToggle } from '@square/maker/components/Toggle';

export default {
	components: {
		MChoice,
		MChoiceOption,
		MToggle,
	},
	data() {
		return {
			selected: 'choice-1',
			disabled: false,
		};
	},
};
</script>
<style module="$s">
.Toggle {
	margin-bottom: 16px;
}
</style>
```

### Options as Cards

```vue
<template>
	<div class="wrapper">
		<m-choice
			v-model="selected"
			wrap-choices
		>
			<m-choice-card value="choice-1">
				Choice
				<m-select
					v-model="selectValue"
					placeholder="Placeholder"
					:options="selectOptions"
					variant="outline"
				/>
			</m-choice-card>
			<m-choice-card value="choice-2">
				Choice<br>second line
			</m-choice-card>
			<m-choice-card value="choice-3">
				Choice longer text
			</m-choice-card>
			<m-choice-card
				:disabled="true"
				value="choice-4"
			>
				Choice disabled
			</m-choice-card>
		</m-choice>
		<br>
		<p>Selected value: {{ selected }}</p>
	</div>
</template>

<script>
import { MChoice, MChoiceCard } from '@square/maker/components/Choice';
import { MSelect } from '@square/maker/components/Select';

export default {
	components: {
		MChoice,
		MChoiceCard,
		MSelect,
	},
	data() {
		return {
			selected: 'choice-1',
			selectValue: undefined,
			selectOptions: [
				{
					value: '1',
					label: 'Option 1',
				},
				{
					value: '2',
					label: 'Option 2',
				},
				{
					value: '3',
					label: 'Option 3',
				},
				{
					value: '4',
					disabled: true,
					label: 'Disabled Option 4',
				},
			],
		};
	},
};
</script>
<style scoped>
.wrapper {
	max-width: 600px;
}
</style>
```

<!-- api-tables:start -->
## Choice Props

| Prop           | Type        | Default           | Possible values                 | Description                                             |
| -------------- | ----------- | ----------------- | ------------------------------- | ------------------------------------------------------- |
| v-model        | `undefined` | —                 | —                               | Selected choice option                                  |
| disabled       | `boolean`   | `false`           | —                               | Disables choice option                                  |
| mode           | `string`    | `'single-select'` | `single-select`, `multi-select` | Selects single choice option or multiple choice options |
| selected-color | `string`    | —                 | —                               | Background color of a selected option                   |
| wrap-choices   | `boolean`   | `false`           | —                               | Wraps the choice options                                |


## Choice Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## Choice Events

| Event         | Type | Description |
| ------------- | ---- | ----------- |
| choice:update | -    | —           |


## ChoiceCard Props

| Prop     | Type        | Default | Possible values | Description |
| -------- | ----------- | ------- | --------------- | ----------- |
| value*   | `undefined` | —       | —               | —           |
| disabled | `boolean`   | `false` | —               | —           |


## ChoiceCard Slots

| Slot    | Description         |
| ------- | ------------------- |
| default | has `selected` prop |


## ChoiceOption Props

| Prop     | Type        | Default | Possible values | Description |
| -------- | ----------- | ------- | --------------- | ----------- |
| value*   | `undefined` | —       | —               | —           |
| disabled | `boolean`   | `false` | —               | —           |


## ChoiceOption Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
<!-- api-tables:end -->
