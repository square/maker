# Progress Bar

Use Progress Bar to display progress.

## Examples

```vue
<template>
	<div class="demo">
		<div>
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
			class="sizes"
		>
			<m-text
				pattern="title"
				:size="2"
			>
				{{ shape }} shape
			</m-text>

			<div
				v-for="size in ['xsmall', 'small', 'medium', 'large']"
				:key="size"
			>
				<m-text
					pattern="title"
					:size="0"
				>
					{{ size }}
				</m-text>
				<m-progress-bar
					:shape="shape"
					:size="size"
					:progress="Number.parseInt(progress, 10)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { MProgressBar } from '@square/maker/components/ProgressBar';
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MProgressBar,
		MText,
	},

	data() {
		return {
			progress: 50,
		};
	},
};
</script>

<style scoped>
.demo {
	display: flex;
	flex-direction: column;
	gap: 32px;
	max-width: 500px;
}

.sizes {
	display: flex;
	flex-direction: column;
	gap: 12px;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

Themable props* can be configured via the [Theme](#/Theme) component using the key `progressbar`.

| Prop     | Type     | Default     | Possible values                              | Description                           |
| -------- | -------- | ----------- | -------------------------------------------- | ------------------------------------- |
| color*   | `string` | `'#000000'` | -                                            | Color of the progress bar             |
| pattern* | `string` | —           | any custom pattern defined within the theme  | pattern defined at theme level        |
| progress | `number` | `0`         | -                                            | Progress (width) of the bar (0 - 100) |
| shape*   | `string` | —           | `'squared'`, `'rounded'`, `'pill'`           | Shape of the progress bar             |
| size*    | `string` | `'medium'`  | `'xsmall'`, `'small'`, `'medium'`, `'large'` | Size (height) of the progress bar     |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
