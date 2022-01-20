# Heading

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
		<m-heading
			v-for="size in sizes"
			:key="size"
			:size="size"
		>
			Size {{ size }}
		</m-heading>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MHeading } from '@square/maker/components/Heading';

export default {
	components: {
		MTheme,
		MHeading,
	},
	data() {
		return {
			sizes: ['title-small', 'title-medium', 'title-large', 'title-xlarge', 'title-xxlarge', 'headline'],
			baseFontSize: 14,
			fontSizeScale: 1.15,
			fontFamily: 'inherit',
			fontWeight: 700,
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

## Unthemed

Possible to use the Heading component without a parent Theme component, however the base font size and font size scale factor are no longer customizable.

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
			v-for="size in sizes"
			:key="size"
			:size="size"
			:font-family="fontFamily"
			:weight="fontWeight"
			:text-color="textColor"
		>
			Size {{ size }}
		</m-heading>
	</div>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';

export default {
	components: {
		MHeading,
	},
	data() {
		return {
			sizes: ['title-small', 'title-medium', 'title-large', 'title-xlarge', 'title-xxlarge', 'headline'],
			fontFamily: 'inherit',
			fontWeight: 700,
			textColor: '#000000',
		};
	},
};
</script>
```


<!-- api-tables:start -->
## Props

Supports attributes from [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1).

| Prop        | Type     | Default | Possible values                                                                           | Description                                                             |
| ----------- | -------- | ------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| size        | `string` | —       | `title-small`, `title-medium`, `title-large`, `title-xlarge`, `title-xxlarge`, `headline` | Size of heading. Influences which element is used.                      |
| element     | `string` | —       | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`                                                 | Override Heading element. By default, the element is derived from size. |
| font-family | `string` | —       | —                                                                                         | Heading font family                                                     |
| text-color  | `string` | —       | —                                                                                         | Heading text color                                                      |
| weight      | `number` | —       | —                                                                                         | font weight                                                             |


## Slots

| Slot    | Description     |
| ------- | --------------- |
| default | heading content |


## Events

Supports events from [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1).
<!-- api-tables:end -->
