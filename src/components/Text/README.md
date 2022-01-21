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
			min="14"
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
			max="2"
			step="0.05"
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
		<m-text
			v-for="size in sizes"
			:key="size"
			:size="size"
		>
			Size {{ size }}
		</m-text>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MText,
		MTheme,
	},
	data() {
		return {
			sizes: ['small', 'medium', 'large'],
			baseFontSize: 14,
			fontSizeScale: 1.15,
			fontFamily: 'inherit',
			fontWeight: 300,
			textColor: '#000000',
		};
	},
	computed: {
		theme() {
			return {
				fonts: {
					baseSize: `${this.baseFontSize}px`,
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

Possible to use the Text component without a parent Theme component, however the base font size and font size scale factor are no longer customizable.

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
			v-for="size in sizes"
			:key="size"
			:size="size"
			:font-family="fontFamily"
			:text-color="textColor"
			:weight="fontWeight"
		>
			Size {{ size }}
		</m-text>
	</div>
</template>

<script>
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MText,
	},
	data() {
		return {
			sizes: ['small', 'medium', 'large'],
			fontFamily: 'inherit',
			fontWeight: 300,
			textColor: '#000000',
		};
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).

| Prop        | Type     | Default | Possible values            | Description                              |
| ----------- | -------- | ------- | -------------------------- | ---------------------------------------- |
| element     | `string` | `'p'`   | `p`, `span`                | which HTML element to wrap the text with |
| size        | `string` | —       | `small`, `medium`, `large` | size of text                             |
| font-family | `string` | —       | —                          | text font family                         |
| text-color  | `string` | —       | —                          | text color                               |
| weight      | `number` | —       | —                          | font weight                              |


## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | text content |


## Events

Supports events from [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).
<!-- api-tables:end -->
