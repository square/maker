# Icon

Use Icon to render icons defined in the Theme.

## Examples

### Built-in default icons

Maker provides several built-in icons (listed below). The icons `error`, `warning`, `success` and `info` are used within [Notice](#/Notice). `chevronLeft` and `chevronRight` are used within [Calendar](#/Calendar). `chevronDown` is used within [Select](#/Select). `plus` and `arrowUp` are used within [ImageUploader](#/ImageUploader). `close` is used within [Toast](#/Toast) and [ImageUploader](#/ImageUploader). `check` is used within [Menu](#/Menu). `plus` and `minus` are used within [Stepper](#/Stepper). `spinner` is used within [Loading](#/Loading). Any of these can be customized via the [Theme](#/Theme) component.

```vue
<template>
	<ul class="icon-list">
		<li
			v-for="iconName in iconNames"
			:key="iconName"
		>
			<m-icon :name="iconName" /> {{ iconName }}
		</li>
	</ul>
</template>

<script>
import { MIcon } from '@square/maker/components/Icon';
import { defaultTheme } from '@square/maker/components/Theme';

export default {
	components: {
		MIcon,
	},
	data() {
		return {
			iconNames: Object.keys(defaultTheme().icons),
		};
	},
};
</script>

<style scoped>
.icon-list {
	margin: 0 !important;
	padding: 0 !important;
	list-style: none;
}

.icon-list li {
	display: flex;
	gap: 4px;
	align-items: center;
}
</style>
```

### Built-in default patterns

Patterns bundle an icon name along with a contextual color. Existing patterns can be customized, or new patterns can be added, via the [Theme](#/Theme) component.

```vue
<template>
	<ul class="icon-list">
		<li
			v-for="iconPattern in iconPatterns"
			:key="iconPattern"
		>
			<m-icon :pattern="iconPattern" /> {{ iconPattern }}
		</li>
	</ul>
</template>

<script>
import { MIcon } from '@square/maker/components/Icon';
import { defaultTheme } from '@square/maker/components/Theme';

export default {
	components: {
		MIcon,
	},
	data() {
		return {
			iconPatterns: Object.keys(defaultTheme().icon.patterns),
		};
	},
};
</script>

<style scoped>
.icon-list {
	margin: 0 !important;
	padding: 0 !important;
	list-style: none;
}

.icon-list li {
	display: flex;
	gap: 4px;
	align-items: center;
}
</style>
```

### Sizes

MIcon supports a few named sizes, but also supports any valid CSS width or height value passed to its `size` prop.

```vue
<template>
	<ul class="icon-list">
		<li
			v-for="size in sizes"
			:key="size"
		>
			<m-icon
				:size="size"
				name="info"
			/>
			{{ size }}
		</li>
	</ul>
</template>

<script>
import { MIcon } from '@square/maker/components/Icon';

export default {
	components: {
		MIcon,
	},
	data() {
		return {
			sizes: [
				// named sizes
				'small',
				'medium',
				'large',
				'xlarge',
				'xxlarge',
				// custom sizes
				'56px',
				'64px',
			],
		};
	},
};
</script>

<style scoped>
.icon-list {
	margin: 0 !important;
	padding: 0 !important;
	list-style: none;
}

.icon-list li {
	display: flex;
	gap: 4px;
	align-items: center;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg).

Themable props* can be configured via the [Theme](#/Theme) component using the key `icon`.

| Prop     | Type     | Default          | Possible values                                                                                         | Description                                                    |
| -------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| pattern* | `string` | —                | `'info'`, `'warning'`, `'error'`, `'success'`, `'primary'`, any custom pattern defined within the theme | pattern defined in theme                                       |
| name*    | `string` | `'info'`         | -                                                                                                       | name of icon, defined in theme                                 |
| size     | `string` | `'small'`        | `'small'`, `'medium'`, `'large'`, `'xlarge'`, `'xxlarge'`                                               | size of icon, can be named value or any valid CSS width/height |
| color*   | `string` | `'currentColor'` | -                                                                                                       | color of icon                                                  |
| fill*    | `string` | `'currentColor'` | -                                                                                                       | fill of icon                                                   |


## Events

Supports events from [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg).
<!-- api-tables:end -->
