# Notice

Use Notice to notify users of things.

## Examples

Notice has the following built-in patterns: error, warning, success, info.

```vue
<template>
	<div class="spaceout">
		<m-notice pattern="error">
			Error inline message
		</m-notice>
		<m-notice pattern="success">
			Success inline message
		</m-notice>
		<m-notice pattern="warning">
			Warning inline message
		</m-notice>
		<m-notice pattern="info">
			Info inline message
		</m-notice>

		<m-notice
			pattern="error"
			variant="block"
		>
			Error block message
			<template #actions>
				<m-text-button pattern="error">
					Button
				</m-text-button>
				<m-text-button pattern="error">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
		<m-notice
			pattern="success"
			variant="block"
		>
			Success block message
			<template #actions>
				<m-text-button pattern="success">
					Button
				</m-text-button>
				<m-text-button pattern="success">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
		<m-notice
			pattern="warning"
			variant="block"
		>
			Warning block message
			<template #actions>
				<m-text-button pattern="warning">
					Button
				</m-text-button>
				<m-text-button pattern="warning">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
		<m-notice
			pattern="info"
			variant="block"
		>
			Info block message
			<template #actions>
				<m-text-button pattern="info">
					Button
				</m-text-button>
				<m-text-button pattern="info">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
	</div>
</template>

<script>
import { MNotice } from '@square/maker/components/Notice';
import { MTextButton } from '@square/maker/components/TextButton';

export default {
	components: {
		MNotice,
		MTextButton,
	},
};
</script>

<style scoped>
.spaceout > * {
	margin-bottom: 16px;
}
.spaceout > *:last-child {
	margin-bottom: 0;
}
.spaceout {
	max-width: 400px;
	padding: 16px;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop       | Type     | Default    | Possible values                       | Description                        |
| ---------- | -------- | ---------- | ------------------------------------- | ---------------------------------- |
| pattern    | `string` | —          | —                                     | pattern defined at theme level     |
| type       | `string` | —          | `error`, `success`, `warning`, `info` | type of notice                     |
| variant    | `string` | `'inline'` | `inline`, `block`                     | notice variant                     |
| icon-name  | `string` | —          | —                                     | name of icon, defined in theme     |
| icon-color | `string` | —          | —                                     | icon color                         |
| color      | `string` | —          | —                                     | text color for inline notices      |
| bg-color   | `string` | —          | —                                     | background color for block notices |


## Slots

| Slot    | Description           |
| ------- | --------------------- |
| default | notice content        |
| actions | put text buttons here |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
