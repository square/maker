# Container

```vue
<template>
	<div style="background-color: #F8F7F7;">
		<m-container>
			container content
		</m-container>

		<h4>label + content</h4>
		<m-container label="container label">
			container content
		</m-container>

		<h4>label + sublabel + content</h4>
		<m-container
			label="container label"
			sublabel="container sublabel"
		>
			container content
		</m-container>

		<h4>label + sublabel + requirement label + content</h4>
		<m-container
			label="container label"
			sublabel="container sublabel"
		>
			container content
			<template #requirement-label>
				container requirement label
			</template>
		</m-container>

		<h4>size small</h4>
		<m-container
			label="container label"
			sublabel="container sublabel"
			size="small"
		>
			container content
			<template #requirement-label>
				container requirement label
			</template>
		</m-container>

		<h4>size large</h4>
		<m-container
			label="container label"
			sublabel="container sublabel"
			size="large"
		>
			container content
			<template #requirement-label>
				container requirement label
			</template>
		</m-container>
	</div>
</template>

<script>
import { MContainer } from '@square/maker/components/Container';

export default {
	components: {
		MContainer,
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).

| Prop     | Type     | Default    | Possible values            | Description                   |
| -------- | -------- | ---------- | -------------------------- | ----------------------------- |
| label    | `string` | —          | —                          | Container label               |
| sublabel | `string` | —          | —                          | Container sublabel            |
| size     | `string` | `'medium'` | `small`, `medium`, `large` | Container size                |
| bg-color | `string` | —          | —                          | Background color of container |
| color    | `string` | —          | —                          | Text color of container       |


## Slots

| Slot              | Description            |
| ----------------- | ---------------------- |
| requirement-label | requirement label slot |
| default           | container content      |


## Events

Supports events from [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).
<!-- api-tables:end -->
