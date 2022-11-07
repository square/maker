# Icon

Use Icon to render icons defined in the Theme. Maker provides these built-in icons: critical, warning, success, info, chevronLeft, chevronRight, chevronUp, and chevronUp. The first 4 are used within [Notice](#/Notice). chevronLeft and chevronRight are used within [Calendar](#/Calendar). chevronDown is used within [Select](#/Select).

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

<!-- api-tables:start -->
## Props

Supports attributes from [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg).

| Prop | Type     | Default    | Possible values   | Description                               |
| ---- | -------- | ---------- | ----------------- | ----------------------------------------- |
| name | `string` | —          | -                 | name of icon, defined in theme            |
| size | `string` | `'medium'` | `medium`, `large` | size of icon, medium = 16px, large = 24px |


## Events

Supports events from [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg).
<!-- api-tables:end -->
