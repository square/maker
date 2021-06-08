# Box

```vue
<template>
	<div>
		<h4>content</h4>
		<m-box>
			box content
		</m-box>

		<h4>label + content</h4>
		<m-box label="box label">
			box content
		</m-box>

		<h4>label + sublabel + content</h4>
		<m-box
			label="box label"
			sublabel="box sublabel"
		>
			box content
		</m-box>

		<h4>label + sublabel + requirement label + content</h4>
		<m-box
			label="box label"
			sublabel="box sublabel"
		>
			box content
			<template #requirement-label>
				box requirement label
			</template>
		</m-box>

		<h4>size small</h4>
		<m-box
			label="box label"
			sublabel="box sublabel"
			size="small"
		>
			box content
			<template #requirement-label>
				box requirement label
			</template>
		</m-box>

		<h4>size large</h4>
		<m-box
			label="box label"
			sublabel="box sublabel"
			size="large"
		>
			box content
			<template #requirement-label>
				box requirement label
			</template>
		</m-box>
	</div>
</template>

<script>
import { MBox } from '@square/maker/components/Box';

export default {
	components: {
		MBox,
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
