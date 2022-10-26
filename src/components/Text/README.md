# Text

Use the Text component for text.

## Sizes

There are 10 text sizes: -2 to 7.

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

## Patterns

There are four text patterns by default: headline, title, paragraph, label. These can be customized via the [Theme](#/Theme).

```vue
<template>
	<div>
		<m-text
			v-for="pattern in ['headline', 'title', 'paragraph', 'label']"
			:key="pattern"
			:pattern="pattern"
		>
			Text (Pattern {{ pattern }})
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

| Prop            | Type     | Default | Possible values                                                       | Description                                                                                                                    |
| --------------- | -------- | ------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| pattern         | `string` | —       | `headline`, `title`, `paragraph`, `label`, `pattern defined in theme` | patterns are defined at the theme level                                                                                        |
| element         | `string` | —       | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `div`, `li`          | [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)                                                   |
| size            | `number` | —       | `7`, `6`, `5`, `4`, `3`, `2`, `1`, `0`, `-1`, `-2`                    | Size of text as step in fluid scale                                                                                            |
| font-family     | `string` | —       | —                                                                     | [Font family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)                                                    |
| font-weight     | `string` | —       | —                                                                     | [Font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)                                                    |
| font-size       | `string` | —       | —                                                                     | [Font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size). Overrides the `size` prop, and disables type scaling. |
| line-height     | `string` | —       | —                                                                     | [Line height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height). Overrides the internally calculated line height.  |
| color           | `string` | —       | —                                                                     | [Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)                                                                |
| font-style      | `string` | —       | `inherit`, `normal`, `italic`                                         | [Font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)                                                      |
| text-transform  | `string` | —       | `inherit`, `none`, `uppercase`, `lowercase`, `capitalize`             | [Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)                                              |
| text-decoration | `string` | —       | —                                                                     | [Text decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)                                            |
| text-align      | `string` | —       | `inherit`, `left`, `right`, `center`, `start`, `end`                  | [Text align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)                                                      |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | text content |
<!-- api-tables:end -->
