# Segmented Control

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

		{{ selected }}
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
