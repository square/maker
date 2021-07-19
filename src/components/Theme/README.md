# Theme

Add the Theme component _anywhere_ top-level to encapsulate all library components. In this example, the Theme component wraps the entire App.

```vue
<template>
	<m-theme v-bind="theme">
		<!-- <app /> -->
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';

export default {
	components: {
		MTheme,
	},

	data() {
		return {
			theme: {
				colors: {
					primary: '#a079a4',
					primaryText: '#ffffff',

					secondary: '#f5eff5',
					secondaryText: '#4f2d52',

					tertiary: '#ffffff',
					tertiaryText: '#4f2d52',
				},
			},
		};
	},
};
</script>
```
<!-- api-tables:start -->
## Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |
<!-- api-tables:end -->
