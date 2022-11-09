# Loading

Use the Loading component to communicate to users that something is happening.

```vue
<template>
	<m-loading />
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

It also comes in a `large` size.

```vue
<template>
	<m-loading size="large" />
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

| Prop | Type     | Default    | Possible values       | Description |
| ---- | -------- | ---------- | --------------------- | ----------- |
| size | `string` | `'medium'` | `'medium'`, `'large'` | -           |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
