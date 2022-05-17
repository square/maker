# Pill

Use Pill to notify users of things.

## Examples

Pill has the following built-in patterns: error, warning, success, info.

```vue
<template>
	<div class="spaceout">
		<m-pill pattern="error">
			Error Filled Pill
		</m-pill>
		<m-pill pattern="success">
			Success Filled Pill
		</m-pill>
		<m-pill pattern="warning">
			Warning Filled Pill
		</m-pill>
		<m-pill pattern="info">
			Info Filled Pill
		</m-pill>

		<m-pill
			pattern="error"
			mode="outline"
		>
			Error Outline Pill
		</m-pill>
		<m-pill
			pattern="success"
			mode="outline"
		>
			Success Outline Pill
		</m-pill>
		<m-pill
			pattern="warning"
			mode="outline"
		>
			Warning Outline Pill
		</m-pill>
		<m-pill
			pattern="info"
			mode="outline"
		>
			Info Outline Pill
		</m-pill>
	</div>
</template>

<script>
import { MPill } from '@square/maker/components/Pill';

export default {
	components: {
		MPill,
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
