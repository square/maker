# Loading

```vue
<template>
	<div>
		<h4>normal size</h4>
		<m-loading />

		<h4>large size</h4>
		<m-loading size="large" />
	</div>
</template>

<script>
import { MLoading } from '@square/maker/components/Loading';

export default {
	components: {
		MLoading,
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop | Type     | Default    | Possible values   | Description |
| ---- | -------- | ---------- | ----------------- | ----------- |
| size | `string` | `'normal'` | `normal`, `large` | —           |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
