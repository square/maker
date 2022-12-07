# ProgressBar

Use ProgressBar to display progress. If you're working in a horizontally constrained environment you can alternatively use [ProgressCircle](#/ProgressCircle).

## Examples

### Sizes

```vue
<template>
	<div class="demo">
		<div>
			<label>
				Progress {{ progress }}%
				<br>
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
				:size="size"
				:progress="Number.parseInt(progress, 10)"
			/>
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
	gap: 16px;
	max-width: 500px;
}
</style>
```

### Shapes

```vue
<template>
	<div class="demo">
		<div>
			<label>
				Progress {{ progress }}%
				<br>
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
			v-for="shape in ['squared', 'rounded', 'pill']"
			:key="shape"
		>
			<m-text
				pattern="title"
				:size="0"
			>
				{{ shape }}
			</m-text>
			<m-progress-bar
				:shape="shape"
				:progress="Number.parseInt(progress, 10)"
			/>
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
	gap: 16px;
	max-width: 500px;
}
</style>
```

### Patterns


```vue
<template>
	<div class="demo">
		<div>
			<label>
				Progress {{ progress }}%
				<br>
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
			v-for="pattern in progressbarPatterns"
			:key="pattern"
		>
			<m-text
				pattern="title"
				:size="0"
			>
				{{ pattern }}
			</m-text>
			<m-progress-bar
				:pattern="pattern"
				:progress="Number.parseInt(progress, 10)"
			/>
		</div>
	</div>
</template>

<script>
import { MProgressBar } from '@square/maker/components/ProgressBar';
import { MText } from '@square/maker/components/Text';
import { defaultTheme } from '@square/maker/components/Theme';

export default {
	components: {
		MProgressBar,
		MText,
	},

	data() {
		return {
			progress: 50,
			progressbarPatterns: Object.keys(defaultTheme().progressbar.patterns),
		};
	},
};
</script>

<style scoped>
.demo {
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-width: 500px;
}
</style>
```


<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

Themable props* can be configured via the [Theme](#/Theme) component using the key `progressbar`.

| Prop     | Type     | Default     | Possible values                                                                                         | Description                           |
| -------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| pattern* | `string` | `'info'`    | `'info'`, `'warning'`, `'error'`, `'success'`, `'primary'`, any custom pattern defined within the theme | pattern defined at theme level        |
| size*    | `string` | `'medium'`  | `'xsmall'`, `'small'`, `'medium'`, `'large'`                                                            | Size (height) of the progress bar     |
| shape*   | `string` | —           | `'squared'`, `'rounded'`, `'pill'`                                                                      | Shape of the progress bar             |
| color*   | `string` | `'#1b1b1b'` | -                                                                                                       | Color of the progress bar             |
| progress | `number` | `0`         | -                                                                                                       | Progress (width) of the bar (0 - 100) |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
