# Icon

Use Icon to render icons defined in the Theme. Only built-in icons are: critical, warning, success, and info which are used within [Notice](#/Notice).

```vue
<template>
	<ul class="icon-list">
		<li
			v-for="name in ['critical', 'warning', 'success', 'info']"
			:key="name"
		>
			<m-icon :name="name" /> {{ name }}
		</li>
	</ul>
</template>

<script>
import { MIcon } from '@square/maker/components/Icon';

export default {
	components: {
		MIcon,
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

| Prop  | Type     | Default | Possible values | Description                    |
| ----- | -------- | ------- | --------------- | ------------------------------ |
| name* | `string` | —       | —               | name of icon, defined in theme |


## Events

Supports events from [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg).
<!-- api-tables:end -->
