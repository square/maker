# Notice

```vue
<template>
	<div>
		<h4>error notice</h4>
		<m-notice type="error">
			I am an error notice
		</m-notice>

		<h4>long error notice</h4>
		<m-notice type="error">
			I am a long error notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<h4>long error block notice</h4>
		<m-notice
			type="error"
			variant="block"
		>
			I am a long error notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<h4>success notice</h4>
		<m-notice type="success">
			I am an success notice
		</m-notice>

		<h4>long success notice</h4>
		<m-notice type="success">
			I am a long success notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<h4>long success block notice</h4>
		<m-notice
			type="success"
			variant="block"
		>
			I am a long success notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<h4>warning notice</h4>
		<m-notice type="warning">
			I am an warning notice
		</m-notice>

		<h4>long warning notice</h4>
		<m-notice type="warning">
			I am a long warning notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<h4>long warning block notice</h4>
		<m-notice
			type="warning"
			variant="block"
		>
			I am a long warning notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<h4>info notice</h4>
		<m-notice type="info">
			I am an info notice
		</m-notice>

		<h4>long info notice</h4>
		<m-notice type="info">
			I am a long info notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>

		<h4>long info block notice</h4>
		<m-notice
			type="info"
			variant="block"
		>
			I am a long info notice text text text wrap wrap wrap
			see me wrap wrap wrap text text text text text text
		</m-notice>
	</div>
</template>

<script>
import { MNotice } from '@square/maker/components/Notice';

export default {
	components: {
		MNotice,
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop    | Type     | Default    | Possible values                       | Description    |
| ------- | -------- | ---------- | ------------------------------------- | -------------- |
| type    | `string` | `'info'`   | `error`, `success`, `warning`, `info` | type of notice |
| variant | `string` | `'inline'` | `inline`, `block`                     | notice variant |


## Slots

| Slot    | Description    |
| ------- | -------------- |
| default | notice content |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
