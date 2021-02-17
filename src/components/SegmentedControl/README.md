# Segmented Control

## Examples

### Default: Rounded style, Medium Size

```vue
<template>
	<div>
		<m-segmented-control v-model="selected">
			<m-segment value="short">
				Short button
			</m-segment>
			<m-segment value="medium">
				Mediuuuum button
			</m-segment>
			<m-segment value="long">
				Loooooooooong button
			</m-segment>
		</m-segmented-control>

		Selected value: {{ selected }}
	</div>
</template>

<script>
import { MSegmentedControl, MSegment } from '@square/maker/components/SegmentedControl';

export default {
	components: {
		MSegmentedControl,
		MSegment,
	},
	data() {
		return {
			selected: 'short',
		};
	},
};
</script>
```

### Squared style

```vue
<template>
	<div>
		<m-segmented-control
			v-model="selected"
			shape="squared"
		>
			<m-segment value="short">
				Short button
			</m-segment>
			<m-segment value="medium">
				Mediuuuum button
			</m-segment>
			<m-segment value="long">
				Loooooooooong button
			</m-segment>
		</m-segmented-control>

		Selected value: {{ selected }}
	</div>
</template>

<script>
import { MSegmentedControl, MSegment } from '@square/maker/components/SegmentedControl';

export default {
	components: {
		MSegmentedControl,
		MSegment,
	},
	data() {
		return {
			selected: 'short',
		};
	},
};
</script>
```

### Pill style

```vue
<template>
	<div>
		<m-segmented-control
			v-model="selected"
			shape="pill"
		>
			<m-segment value="short">
				Short button
			</m-segment>
			<m-segment value="medium">
				Mediuuuum button
			</m-segment>
			<m-segment value="long">
				Loooooooooong button
			</m-segment>
		</m-segmented-control>

		Selected value: {{ selected }}
	</div>
</template>

<script>
import { MSegmentedControl, MSegment } from '@square/maker/components/SegmentedControl';

export default {
	components: {
		MSegmentedControl,
		MSegment,
	},
	data() {
		return {
			selected: 'short',
		};
	},
};
</script>
```

### Small size

```vue
<template>
	<div>
		<m-segmented-control
			v-model="selected"
			size="small"
		>
			<m-segment value="short">
				Short button
			</m-segment>
			<m-segment value="medium">
				Mediuuuum button
			</m-segment>
			<m-segment value="long">
				Loooooooooong button
			</m-segment>
		</m-segmented-control>

		Selected value: {{ selected }}
	</div>
</template>

<script>
import { MSegmentedControl, MSegment } from '@square/maker/components/SegmentedControl';

export default {
	components: {
		MSegmentedControl,
		MSegment,
	},
	data() {
		return {
			selected: 'short',
		};
	},
};
</script>
```


<!-- api-tables:start -->
## Segment Props

| Prop   | Type        | Default | Possible values | Description |
| ------ | ----------- | ------- | --------------- | ----------- |
| value* | `undefined` | —       | —               | —           |


## Segment Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## SegmentedControl Props

| Prop     | Type        | Default     | Possible values              | Description                     |
| -------- | ----------- | ----------- | ---------------------------- | ------------------------------- |
| v-model* | `undefined` | —           | —                            | Selected Segment inside Control |
| shape    | `string`    | `'rounded'` | `squared`, `rounded`, `pill` | Shape of Control & Segments     |
| size     | `string`    | `'medium'`  | `small`, `medium`            | Size of Control & Segments      |


## SegmentedControl Events

| Event                    | Type | Description |
| ------------------------ | ---- | ----------- |
| segmented-control:update | -    | —           |
<!-- api-tables:end -->
