# Text

## Themed

```vue
<template>
	<m-theme :theme="theme">
		base font size
		<br>
		<input
			v-model="baseFontSize"
			type="range"
			min="16"
			max="24"
			step="1"
		>
		{{ baseFontSize }}px
		<br>
		font size scale
		<br>
		<input
			v-model="fontSizeScale"
			type="range"
			min="1"
			max="1.62"
			step="0.01"
		>
		{{ fontSizeScale }}
		<br>
		font family
		<br>
		<select v-model="fontFamily">
			<option value="inherit">
				inherit
			</option>
			<option value="arial">
				arial
			</option>
			<option value="serif">
				serif
			</option>
			<option value="sans-serif">
				sans-serif
			</option>
			<option value="monospace">
				monospace
			</option>
		</select>
		<br>
		font weight
		<br>
		<input
			v-model="fontWeight"
			type="range"
			min="100"
			max="900"
			step="100"
		>
		{{ fontWeight }}
		<br>
		text color
		<br>
		<input
			v-model="textColor"
			type="color"
		>
		<br>
		<br>
		type scale
		<br>
		<m-text
			v-for="size in [-2, -1, 0, 1]"
			:key="size"
			:size="size"
		>
			Size {{ size }}
		</m-text>
		named sizes
		<br>
		<m-text
			v-for="namedSize in namedSizes"
			:key="namedSize.name"
			:size="namedSize.size"
		>
			{{ namedSize.name }}
		</m-text>
	</m-theme>
</template>

<script>
import { MTheme, defaultTheme } from '@square/maker/components/Theme';
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MText,
		MTheme,
	},
	data() {
		const defaults = defaultTheme();
		return {
			baseFontSize: defaults.fonts.baseSize,
			fontSizeScale: defaults.fonts.sizeScale,
			fontFamily: defaults.text.fontFamily,
			fontWeight: defaults.text.weight,
			textColor: defaults.resolve(defaults.text.textColor),
			namedSizes: [
				{
					name: 'Paragraph 1 / Label 1',
					size: 1,
				},
				{
					name: 'Paragraph 2 / Label 2',
					size: 0,
				},
				{
					name: 'Paragraph 3 / Label 3',
					size: -1,
				},
				{
					name: 'Paragraph 4 / Label 4',
					size: -2,
				},
			],
		};
	},
	computed: {
		theme() {
			return {
				fonts: {
					baseSize: Number.parseInt(this.baseFontSize, 10),
					sizeScale: Number.parseFloat(this.fontSizeScale),
				},
				text: {
					fontFamily: this.fontFamily,
					textColor: this.textColor,
					weight: Number.parseInt(this.fontWeight, 10),
				},
			};
		},
	},
};
</script>
```

## Unthemed

It's possible to use the Text component without a parent Theme component, however the base font size and font size scale factor are no longer customizable.

```vue
<template>
	<div>
		font family
		<br>
		<select v-model="fontFamily">
			<option value="inherit">
				inherit
			</option>
			<option value="arial">
				arial
			</option>
			<option value="serif">
				serif
			</option>
			<option value="sans-serif">
				sans-serif
			</option>
			<option value="monospace">
				monospace
			</option>
		</select>
		<br>
		font weight
		<br>
		<input
			v-model="fontWeight"
			type="range"
			min="100"
			max="900"
			step="100"
		>
		{{ fontWeight }}
		<br>
		text color
		<br>
		<input
			v-model="textColor"
			type="color"
		>
		<br>
		<br>
		<m-text
			v-for="size in [-2, -1, 0, 1]"
			:key="size"
			:size="size"
			:font-family="fontFamily"
			:weight="Number.parseInt(fontWeight, 10)"
			:text-color="textColor"
		>
			Size {{ size }}
		</m-text>
	</div>
</template>

<script>
import { defaultTheme } from '@square/maker/components/Theme';
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MText,
	},
	data() {
		const defaults = defaultTheme();
		return {
			fontFamily: defaults.text.fontFamily,
			fontWeight: defaults.text.weight,
			textColor: defaults.resolve(defaults.text.textColor),
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).

| Prop        | Type     | Default | Possible values | Description                              |
| ----------- | -------- | ------- | --------------- | ---------------------------------------- |
| element     | `string` | `'p'`   | `p`, `span`     | which HTML element to wrap the text with |
| size        | `number` | —       | —               | size of text                             |
| font-family | `string` | —       | —               | text font family                         |
| text-color  | `string` | —       | —               | text color                               |
| weight      | `number` | —       | —               | font weight                              |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | text content |


## Events

Supports events from [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).
<!-- api-tables:end -->
