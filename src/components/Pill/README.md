# Pill

Use Pill to notify users of things.

## Examples

Pill comes with the following pre-defined patterns:

```vue
<template>
	<div class="spaceout">
		<m-pill
			v-for="pattern in patterns"
			:key="pattern"
			:pattern="pattern"
		>
			{{ pattern }} pill
		</m-pill>
	</div>
</template>

<script>
import { MPill } from '@square/maker/components/Pill';
import { defaultTheme } from '@square/maker/components/Theme';

export default {
	components: {
		MPill,
	},
	data() {
		return {
			patterns: Object.keys(defaultTheme().pill.patterns),
		};
	},
};
</script>

<style scoped>
.spaceout > * {
	margin: 4px;
}
</style>
```

Pill can also take on a variety of shapes, optionally with a different shape on each endcap:

```vue
<template>
	<div class="spaceout">
		<m-pill
			v-for="shape in shapes"
			:key="shape.key"
			:shape="shape.shape"
			:pattern="shape.pattern || 'info'"
		>
			shape: {{ shape.key }}
		</m-pill>
	</div>
</template>

<script>
	import { MPill } from '@square/maker/components/Pill';

	export default {
		components: {
			MPill,
		},

		data() {
			return {
				shapes: [
					{ key: 'pill', shape: 'pill' },
					{ key: 'pill', shape: 'pill', pattern: 'infoOutline' },
					{ key: 'rounded', shape: 'rounded' },
					{ key: 'rounded', shape: 'rounded', pattern: 'infoOutline' },
					{ key: 'sharp', shape: 'sharp' },
					{ key: 'sharp', shape: 'sharp', pattern: 'infoOutline' },
					{ key: 'point', shape: 'point' },
					{ key: 'point', shape: 'point', pattern: 'infoOutline' },
					{ key: 'ribbon', shape: 'ribbon' },
					{ key: 'ribbon', shape: 'ribbon', pattern: 'infoOutline' },
					{ key: 'sharp, point', shape: ['sharp', 'point'] },
					{ key: 'rounded, ribbon', shape: ['rounded', 'ribbon'], pattern: 'infoOutline' },
				],
			};
		},
	};
</script>

<style scoped>
.spaceout {
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
}
</style>
```


<!-- api-tables:start -->
## Props

Supports attributes from [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).

Themable props* can be configured via the [Theme](#/Theme) component using the key `pill`.

| Prop        | Type           | Default     | Possible values                                                                                                                                                                                                                                                                                  | Description                                                           |
| ----------- | -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| pattern*    | `string`       | `'info'`    | `'primary'`, `'error'`, `'success'`, `'warning'`, `'info'`, `'primaryOutline'`, `'errorOutline'`, `'successOutline'`, `'warningOutline'`, `'infoOutline'`, `'primarySubtle'`, `'errorSubtle'`, `'successSubtle'`, `'warningSubtle'`, `'infoSubtle'`, any custom pattern defined within the theme | pattern defined at theme level                                        |
| text-color* | `string`       | `'#ffffff'` | -                                                                                                                                                                                                                                                                                                | text color, also border color if no bg color                          |
| bg-color*   | `string`       | `'#1b1b1b'` | -                                                                                                                                                                                                                                                                                                | bg & border color                                                     |
| shape       | `string|array` | `'pill'`    | `'pill'`, `'sharp'`, `'rounded'`, `'point'`, `'ribbon'`                                                                                                                                                                                                                                          | The shape the pill should take, or a tuple of shapes for each endcap. |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | pill content |


## Events

Supports events from [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).
<!-- api-tables:end -->
