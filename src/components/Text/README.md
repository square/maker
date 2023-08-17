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

## Letter spacing alignment
CSS applies letter spacing to the right side of the letter. This is problematic when the text is centered because it adds more space to the right side. To counter act this, we add a left-padding to the text that is equal to the letter spacing. This ensures that the text is centered correctly.

```vue
<template>
	<div>
		<div class="container">
			<div class="line" />
			<m-text
				class="text"
				letter-spacing="2em"
			>
				Text
			</m-text>
		</div>
		<div class="container">
			<div class="line" />
			<m-text
				class="text"
				letter-spacing="1.5em"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
			</m-text>
		</div>
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

<style scoped>
.container {
	position: relative;
	width: 600px;
	margin: 0 auto;
	background-color: #eee;
	overflow: hidden;
	padding: 16px;
	text-align: center;
}

.line {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 1px;
	left: 50%;
	background-color: #000;
}

.text {
	border: 1px solid #000;
}
</style>
```

<!-- api-tables:start -->
## Props

Themable props* can be configured via the [Theme](#/Theme) component using the key `text`.

| Prop             | Type     | Default       | Possible values                                                                                                 | Description                                                                                                                         |
| ---------------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| pattern*         | `string` | `'paragraph'` | `'headline'`, `'title'`, `'paragraph'`, `'label'`, `'buttonLabel'`, any custom pattern defined within the theme | patterns are defined at the theme level                                                                                             |
| element*         | `string` | `'p'`         | `'h1'`, `'h2'`, `'h3'`, `'h4'`, `'h5'`, `'h6'`, `'p'`, `'span'`, `'div'`, `'li'`                                | [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)                                                        |
| size*            | `number` | `0`           | -                                                                                                               | Size of text as step in fluid scale (-2 to 7)                                                                                       |
| font-family*     | `string` | `'inherit'`   | -                                                                                                               | [Font family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)                                                         |
| font-weight*     | `string` | `'400'`       | -                                                                                                               | [Font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)                                                         |
| font-size*       | `string` | —             | -                                                                                                               | [Font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size). Overrides the `size` prop, and disables type scaling.      |
| line-height      | `string` | —             | -                                                                                                               | [Line height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height). Overrides the internally calculated line height.       |
| letter-spacing   | `string` | —             | -                                                                                                               | [Letter spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing). Overrides the internally calculated line height. |
| color*           | `string` | `'#000000'`   | -                                                                                                               | [Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)                                                                     |
| font-style*      | `string` | `'inherit'`   | -                                                                                                               | [Font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)                                                           |
| text-transform*  | `string` | `'inherit'`   | -                                                                                                               | [Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)                                                   |
| text-decoration* | `string` | —             | -                                                                                                               | [Text decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)                                                 |
| text-align*      | `string` | `'inherit'`   | -                                                                                                               | [Text align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)                                                           |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | text content |
<!-- api-tables:end -->
