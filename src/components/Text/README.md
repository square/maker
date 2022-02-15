# Text

Use the Text component for regular body text. There are 10 text sizes: -2 to 7. The font family, font weight, and text color are customizable.

```vue
<template>
	<div>
		<m-text
			v-for="size in [1, 0, -1, -2]"
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

Supports attributes from [`global attributes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes). The following props are provided for convenience.

| Prop        | Type     | Default | Possible values | Description                              |
| ----------- | -------- | ------- | --------------- | ---------------------------------------- |
| element     | `string` | `'p'`   | `p`, `span`     | which HTML element to wrap the text with |
| size        | `number` | `0`     | `-2`,`-1`,`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7` | size of text                             |
| font-family | `string` | —       | —               | [font family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)                         |
| color       | `string` | —       | —               | [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)                               |
| font-weight | `number` | —       | `100`,`...`,`900`| Font weight with standard numeric keyword values                              |

## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | text content |

<!-- api-tables:end -->
