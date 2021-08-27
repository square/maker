
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
		</label><br><br>

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
			color: '#222',
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

<!-- api-tables:start -->
## Choice Props

| Prop     | Type        | Default           | Possible values                 | Description                                             |
| -------- | ----------- | ----------------- | ------------------------------- | ------------------------------------------------------- |
| v-model  | `undefined` | —                 | —                               | Selected choice option                                  |
| disabled | `boolean`   | `false`           | —                               | Disables choice option                                  |
| mode     | `string`    | `'single-select'` | `single-select`, `multi-select` | Selects single choice option or multiple choice options |
| selected-color     | `string`    | `'#222'` | —                              | Color of selected option                                |


## Choice Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## Choice Events

| Event         | Type | Description |
| ------------- | ---- | ----------- |
| choice:update | -    | —           |


## ChoiceOption Props

| Prop   | Type        | Default | Possible values | Description |
| ------ | ----------- | ------- | --------------- | ----------- |
| value* | `undefined` | —       | —               | —           |


## ChoiceOption Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
<!-- api-tables:end -->
