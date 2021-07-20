# Section

```vue
<template>
	<div style="background-color: #F8F7F7">
		<h4>content</h4>
		<m-section>
			section content
		</m-section>

		<h4>label + content</h4>
		<m-section label="section label">
			section content
		</m-section>

		<h4>label + sublabel + content</h4>
		<m-section
			label="section label"
			sublabel="section sublabel"
		>
			section content
		</m-section>

		<h4>label + sublabel + requirement label + content</h4>
		<m-section
			label="section label"
			sublabel="section sublabel"
		>
			section content
			<template #requirement-label>
				section requirement label
			</template>
		</m-section>

		<h4>size small</h4>
		<m-section
			label="section label"
			sublabel="section sublabel"
			size="small"
		>
			section content
			<template #requirement-label>
				section requirement label
			</template>
		</m-section>

		<h4>size large</h4>
		<m-section
			label="section label"
			sublabel="section sublabel"
			size="large"
		>
			section content
			<template #requirement-label>
				section requirement label
			</template>
		</m-section>
	</div>
</template>

<script>
import { MSection } from '@square/maker/components/Section';

export default {
	components: {
		MSection,
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).

| Prop     | Type     | Default    | Possible values            | Description      |
| -------- | -------- | ---------- | -------------------------- | ---------------- |
| label    | `string` | —          | —                          | Section label    |
| sublabel | `string` | —          | —                          | Section sublabel |
| size     | `string` | `'medium'` | `small`, `medium`, `large` | Section size     |


## Slots

| Slot              | Description            |
| ----------------- | ---------------------- |
| requirement-label | requirement label slot |
| default           | section content        |


## Events

Supports events from [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).
<!-- api-tables:end -->
