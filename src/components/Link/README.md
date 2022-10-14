# Link

Use Link for navigation links. Links have a `to` prop which can be passed anything that can be passed to a [RouterLink's `to` prop](https://v3.router.vuejs.org/api/#to).

```vue
<template>
	<p>
		Go to
		<m-link to="https://squareup.com">
			Squareup
		</m-link>.
		<br>
		Go to Styleguide
		<m-link :to="{ name: 'index' }">
			index page
		</m-link>.
	</p>
</template>

<script>
import { MLink } from '@square/maker/components/Link';

export default {
	components: {
		MLink,
	},
};
</script>
```


<!-- api-tables:start -->
## Props

Supports attributes from [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

| Prop  | Type            | Default | Possible values | Description   |
| ----- | --------------- | ------- | --------------- | ------------- |
| to*   | `string|object` | —       | —               | —             |
| color | `string`        | —       | —               | Color of link |


## Events

Supports events from [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
<!-- api-tables:end -->
