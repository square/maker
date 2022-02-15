# Heading

Use the Heading component for heading text. There are 9 heading sizes: -2 to 7. The font family, font weight, and text color are customizable.

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
		<m-heading
			v-for="size in [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]"
			:key="size"
			:size="size"
			:font-family="fontFamily"
			:weight="Number.parseInt(fontWeight, 10)"
			:text-color="textColor"
		>
			Size {{ size }}
		</m-heading>
	</div>
</template>

<script>
import { defaultTheme } from '@square/maker/components/Theme';
import { MHeading } from '@square/maker/components/Heading';

export default {
	components: {
		MHeading,
	},
	data() {
		const defaults = defaultTheme();
		return {
			fontFamily: defaults.heading.fontFamily,
			fontWeight: defaults.heading.weight,
			textColor: defaults.resolve(defaults.heading.textColor),
		};
	},
};
</script>
```

## Theming

The Heading component can be further customized via the Theme component, where the base font size and font size scale can be set to create a custom typographical hierarchy.

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
		<br>
		<m-heading
			v-for="size in [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]"
			:key="size"
			:size="size"
		>
			Size {{ size }}
		</m-heading>
		<br>
		named sizes
		<br>
		<br>
		<m-heading
			v-for="namedSize in namedSizes"
			:key="namedSize.name"
			:size="namedSize.size"
		>
			{{ namedSize.name }}
		</m-heading>
	</m-theme>
</template>

<script>
import { MTheme, defaultTheme } from '@square/maker/components/Theme';
import { MHeading } from '@square/maker/components/Heading';

export default {
	components: {
		MHeading,
		MTheme,
	},
	data() {
		const defaults = defaultTheme();
		return {
			baseFontSize: defaults.fonts.baseSize,
			fontSizeScale: defaults.fonts.sizeScale,
			fontFamily: defaults.heading.fontFamily,
			fontWeight: defaults.heading.weight,
			textColor: defaults.resolve(defaults.heading.textColor),
			namedSizes: [
				{
					name: 'Headline 1',
					size: 7,
				},
				{
					name: 'Headline 2',
					size: 6,
				},
				{
					name: 'Headline 3',
					size: 5,
				},
				{
					name: 'Headline 4',
					size: 4,
				},
				{
					name: 'Headline 5',
					size: 3,
				},
				{
					name: 'Title 1',
					size: 4,
				},
				{
					name: 'Title 2',
					size: 3,
				},
				{
					name: 'Title 3',
					size: 2,
				},
				{
					name: 'Title 4',
					size: 1,
				},
				{
					name: 'Title 5',
					size: -1,
				},
				{
					name: 'Title 6',
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
				heading: {
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



<!-- api-tables:start -->
## Props

Supports attributes from [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1).

| Prop        | Type     | Default | Possible values                           | Description                                                             |
| ----------- | -------- | ------- | ----------------------------------------- | ----------------------------------------------------------------------- |
| size        | `number` | —       | —                                         | Size of heading. Influences which element is used.                      |
| element     | `string` | —       | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div` | Override Heading element. By default, the element is derived from size. |
| font-family | `string` | —       | —                                         | Heading font family                                                     |
| text-color  | `string` | —       | —                                         | Heading text color                                                      |
| weight      | `number` | —       | —                                         | font weight                                                             |


## Slots

| Slot    | Description     |
| ------- | --------------- |
| default | heading content |


## Events

Supports events from [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1).
<!-- api-tables:end -->
