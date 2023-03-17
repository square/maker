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

### Sizes

MLoading supports a few named sizes, but also supports any valid CSS width or height value passed to its `size` prop.

```vue
<template>
	<ul class="loading-list">
		<li
			v-for="size in sizes"
			:key="size"
		>
			<m-loading
				:size="size"
			/>
			{{ size }}
		</li>
	</ul>
</template>

<script>
import { MLoading } from '@square/maker/components/Loading';

export default {
	components: {
		MLoading,
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
.loading-list {
	margin: 0 !important;
	padding: 0 !important;
	list-style: none;
}

.loading-list li {
	display: flex;
	gap: 4px;
	align-items: center;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop | Type     | Default   | Possible values                                           | Description                                                            |
| ---- | -------- | --------- | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| size | `string` | `'small'` | `'small'`, `'medium'`, `'large'`, `'xlarge'`, `'xxlarge'` | size of spinner icon, can be named value or any valid CSS width/height |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
