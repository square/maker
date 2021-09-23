# Progress Bar

```vue
<template>
	<div :class="$s.Container">
		<div :class="$s.Section">
			<label>
				Color picker
				<input
					v-model="color"
					type="color"
				>
			</label>
		</div>

		<div :class="$s.Section">
			<label>
				Progress ({{ progress }}%)
				<input
					v-model="progress"
					type="range"
					step="1"
					min="0"
					max="100"
				>
			</label>
		</div>

		<div
			v-for="shape in ['pill', 'rounded', 'squared']"
			:key="shape"
			:class="$s.Sizes"
		>
			<m-heading :size="2">
				{{ shape }} shape
			</m-heading>

			<div
				v-for="size in ['xsmall', 'small', 'medium', 'large']"
				:key="size"
			>
				<m-heading :size="0">
					{{ size }}
				</m-heading>
				<m-progress-bar
					:shape="shape"
					:size="size"
					:color="color"
					:progress="progress"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { MProgressBar } from '@square/maker/components/ProgressBar';
import { MHeading } from '@square/maker/components/Heading';

export default {
	components: {
		MProgressBar,
		MHeading,
	},

	data() {
		return {
			color: '#000',
			progress: 50,
		};
	},

	computed: {},

	methods: {},
};
</script>

<style module="$s">
.Container {
	display: flex;
	flex-direction: column;
	gap: 32px;
	max-width: 500px;
}

.Sizes {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

</style>

```

<!-- api-tables:start -->
## Props

| Prop     | Type     | Default     | Possible values                      | Description                                |
| -------- | -------- | ----------- | ------------------------------------ | ------------------------------------------ |
| size     | `string` | `'medium'`  | `xsmall`, `small`, `medium`, `large` | Size (height) of the progress bar          |
| shape    | `string` | `'rounded'` | `squared`, `rounded`, `pill`         | Shape of the progress bar                  |
| color    | `string` | `'#000'`    | —                                    | Color of the progress bar (not background) |
| progress | `number` | `0`         | —                                    | Progress/width of the bar (0-100)          |
<!-- api-tables:end -->
