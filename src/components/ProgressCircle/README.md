# ProgressCircle

Use ProgressCircle to display progress. If you'd like something more standard you can alternatively use [ProgressBar](#/ProgressBar).

## Examples

Amount of progress to show can be passed via the `progress` prop as a number between 0 - 100 (inclusive).

```vue
<template>
	<div>
		Progress: {{ progress }}%
		<br>
		<input
			v-model="progress"
			class="slider"
			type="range"
			min="0"
			max="100"
		>
		<br>
		<m-progress-circle :progress="Number.parseInt(progress, 10)" />
	</div>
</template>

<script>
import { MProgressCircle } from '@square/maker/components/ProgressCircle';

export default {
	components: {
		MProgressCircle,
	},
	data() {
		return {
			progress: 50,
		};
	},
};
</script>

<style scoped>
.slider {
	cursor: grab;
}
.slider:active {
	cursor: grabbing;
}
</style>
```

### Icons

An icon can be rendered inside the progress circle if you pass its name via the `icon-name` prop and set `show-icon` to true. Icons can be defined & named in the [Theme](#/Theme) component. The icons bundled with Maker by default are listed in the [Icon](#/Icon) component docs.

```vue
<template>
	<m-theme :theme="theme">
		Example default built-in icon:
		<br>
		<m-progress-circle
			show-icon
			:progress="50"
		/>
		<br>
		Example custom icon:
		<br>
		<m-progress-circle
			icon-name="zap"
			show-icon
			:progress="50"
		/>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MProgressCircle } from '@square/maker/components/ProgressCircle';
import Zap from '@square/maker-icons/Zap';

export default {
	components: {
		MProgressCircle,
		MTheme,
	},
	computed: {
		theme() {
			return {
				icons: {
					zap: Zap,
				},
			};
		},
	},
};
</script>
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
			v-for="pattern in progresscirclePatterns"
			:key="pattern"
		>
			<m-text
				pattern="title"
				:size="0"
			>
				{{ pattern }}
			</m-text>
			<m-progress-circle
				:pattern="pattern"
				:progress="Number.parseInt(progress, 10)"
			/>
		</div>
	</div>
</template>

<script>
import { MProgressCircle } from '@square/maker/components/ProgressCircle';
import { MText } from '@square/maker/components/Text';
import { defaultTheme } from '@square/maker/components/Theme';

export default {
	components: {
		MProgressCircle,
		MText,
	},

	data() {
		return {
			progress: 50,
			progresscirclePatterns: Object.keys(defaultTheme().progresscircle.patterns),
		};
	},
};
</script>

<style scoped>
.demo {
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-width: 500px;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

Themable props* can be configured via the [Theme](#/Theme) component using the key `progresscircle`.

| Prop        | Type      | Default     | Possible values                                                                                         | Description                     |
| ----------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------- | ------------------------------- |
| pattern*    | `string`  | —           | `'info'`, `'warning'`, `'error'`, `'success'`, `'primary'`, any custom pattern defined within the theme | pattern defined at theme level  |
| color*      | `string`  | `'#1b1b1b'` | -                                                                                                       | color of the progress circle    |
| progress    | `number`  | `0`         | -                                                                                                       | progress of circle (0 - 100)    |
| icon-name*  | `string`  | `'info'`    | -                                                                                                       | name of icon (defined in theme) |
| show-icon*  | `boolean` | `false`     | -                                                                                                       | shows icon                      |
| icon-color* | `string`  | `'#1b1b1b'` | -                                                                                                       | color of icon                   |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
