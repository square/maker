# Text

Use the Text component for regular body text. There are 10 text sizes: -2 to 7. The font family, font weight, and text color are customizable.

```vue
<template>
	<div>
		<m-text
			v-for="size in [7, 6, 5, 4, 3, 2, 1, 0, -1, -2]"
			:key="size"
			:size="size"
		>
			Text (Size {{ size }})
		</m-text>
	</div>
</template>

<script>
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MText,
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p).

| Prop           | Type     | Default            | Possible values                                               | Description                                                                                 |
| -------------- | -------- | ------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| element        | `string` | `DEFAULT_TAG_NAME` | `p`, `span`, `div`, `li`                                      | HTML Element wrapper                                                                        |
| size           | `number` | —                  | `7`, `6`, `5`, `4`, `3`, `2`, `1`, `0`, `-1`, `-2`            | Size of text                                                                                |
| font-family    | `string` | —                  | —                                                             | Font family                                                                                 |
| font-weight    | `number` | —                  | `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900` | Font weight with standard numeric keyword values                                            |
| font-size      | `string` | —                  | —                                                             | Font size, as a valid CSS value. This overrides the 'size' prop, and disables type scaling. |
| line-height    | `number` | —                  | —                                                             | Line Height, as a valid CSS value. This overrides the internally calculated line-height.    |
| color          | `string` | —                  | —                                                             | Color                                                                                       |
| font-style     | `string` | `'inherit'`        | `inherit`, `normal`, `italic`                                 | font style                                                                                  |
| text-transform | `string` | `'inherit'`        | `inherit`, `none`, `uppercase`                                | text transform                                                                              |
| text-align     | `string` | `'inherit'`        | `inherit`, `left`, `right`, `center`                          | text align                                                                                  |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | text content |
<!-- api-tables:end -->
