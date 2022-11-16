# Progress Circle

Use the MProgressCircle component to display progress.

## Examples

Amount of progress to show can be passed via the `progress` prop as a number between 0 - 100 (inclusive).

```vue
<template>
	<div>
		progress: {{ progress }}
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


An icon can be rendered inside the progress circle if you pass its name via the `icon-name` prop and set `show-icon` to true. Icons can be defined & named in the [Theme](#/Theme) component. The icons bundled with Maker by default are listed in the [Icon](#/Icon) component docs.

```vue
<template>
	<m-theme :theme="theme">
		example default built-in icon:
		<br>
		<m-progress-circle
			show-icon
			:progress="50"
		/>
		<br>
		example custom icon:
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

The colors of the progress circle and icon can be customized separately using the `color` and `icon-color` props respectively.

```vue
<template>
	<div>
		<label>
			progress color
			<input
				v-model="progressColor"
				type="color"
			>
		</label>
		<br>
		<label>
			icon color
			<input
				v-model="iconColor"
				type="color"
			>
		</label>
		<br>
		live example:
		<br>
		<m-progress-circle
			:color="progressColor"
			show-icon
			:icon-color="iconColor"
			:progress="50"
		/>
		<br>
		some other examples:
		<br>
		<m-progress-circle
			color="#cd2026"
			icon-name="error"
			show-icon
			icon-color="#cd2026"
			:progress="50"
		/>
		<m-progress-circle
			color="#008000"
			icon-name="success"
			show-icon
			icon-color="#008000"
			:progress="50"
		/>
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
			progressColor: '#000000',
			iconColor: '#000000',
		};
	},
};
</script>
```

While it's possible customize the `color`, `icon-name`, and `icon-color` props for every individual progress circle component it's better to define reusable patterns in the Theme.

```vue
<template>
	<m-theme :theme="theme">
		primary themed example:
		<br>
		<m-progress-circle
			pattern="primary"
			:progress="50"
		/>
		<br>
		examples of "error" and "success" patterns:
		<br>
		<m-progress-circle
			pattern="error"
			:progress="50"
		/>
		<m-progress-circle
			pattern="success"
			:progress="50"
		/>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MProgressCircle } from '@square/maker/components/ProgressCircle';

export default {
	components: {
		MProgressCircle,
		MTheme,
	},
	computed: {
		theme() {
			return {
				progresscircle: {
					patterns: {
						primary: {
							color: '@colors.contextualPrimary.fill',
							iconName: 'info',
							showIcon: true,
							iconColor: '@colors.contextualPrimary.fill',
						},
						error: {
							color: '@colors.error.fill',
							iconName: 'error',
							showIcon: true,
							iconColor: '@colors.error.fill',
						},
						success: {
							color: '@colors.success.fill',
							iconName: 'success',
							showIcon: true,
							iconColor: '@colors.success.fill',
						},
					},
				},
			};
		},
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

Themable props* can be configured via the [Theme](#/Theme) component using the key `progresscircle`.

| Prop        | Type      | Default     | Possible values                             | Description                     |
| ----------- | --------- | ----------- | ------------------------------------------- | ------------------------------- |
| pattern*    | `string`  | —           | any custom pattern defined within the theme | pattern defined at theme level  |
| color*      | `string`  | `'#000000'` | -                                           | color of the progress circle    |
| progress    | `number`  | `0`         | -                                           | progress of circle (0 - 100)    |
| icon-name*  | `string`  | `'info'`    | -                                           | name of icon (defined in theme) |
| show-icon*  | `boolean` | `false`     | -                                           | shows icon                      |
| icon-color* | `string`  | `'#000000'` | -                                           | color of icon                   |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
