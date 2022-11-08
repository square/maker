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


<!-- api-tables:start -->
## Props

Supports attributes from [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).

Themable props* can be configured via the [Theme](#/Theme) component using the key `pill`.

| Prop        | Type     | Default     | Possible values                                                                                                                                                                                                                                                                                  | Description                                  |
| ----------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| pattern*    | `string` | `'info'`    | `'primary'`, `'error'`, `'success'`, `'warning'`, `'info'`, `'primaryOutline'`, `'errorOutline'`, `'successOutline'`, `'warningOutline'`, `'infoOutline'`, `'primarySubtle'`, `'errorSubtle'`, `'successSubtle'`, `'warningSubtle'`, `'infoSubtle'`, any custom pattern defined within the theme | pattern defined at theme level               |
| text-color* | `string` | `'#ffffff'` | -                                                                                                                                                                                                                                                                                                | text color, also border color if no bg color |
| bg-color*   | `string` | `'#1b1b1b'` | -                                                                                                                                                                                                                                                                                                | bg & border color                            |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | pill content |


## Events

Supports events from [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).
<!-- api-tables:end -->
