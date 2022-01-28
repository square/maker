# Heading

## Themed

```vue
<template>
	<m-theme :theme="theme">
		<div class="mobileControls">
			mobile base font size
			<br>
			<input
				v-model="mobileBaseFontSize"
				type="range"
				min="16"
				max="24"
				step="1"
			>
			{{ mobileBaseFontSize }}px
			<br>
			mobile font size scale
			<br>
			<input
				v-model="mobileFontSizeScale"
				type="range"
				min="1"
				max="2"
				step="0.05"
			>
			{{ mobileFontSizeScale }}
			<br>
			mobile base line height
			<br>
			<input
				v-model="mobileBaseLineHeight"
				type="range"
				min="1"
				max="2"
				step="0.05"
			>
			{{ mobileBaseLineHeight }}em
			<br>
			mobile line height scale
			<br>
			<input
				v-model="mobileLineHeightScale"
				type="range"
				min="0.95"
				max="1.05"
				step="0.05"
			>
			{{ mobileLineHeightScale }}
		</div>
		<div class="desktopControls">
			desktop base font size
			<br>
			<input
				v-model="desktopBaseFontSize"
				type="range"
				min="16"
				max="24"
				step="1"
			>
			{{ desktopBaseFontSize }}px
			<br>
			desktop font size scale
			<br>
			<input
				v-model="desktopFontSizeScale"
				type="range"
				min="1"
				max="2"
				step="0.05"
			>
			{{ desktopFontSizeScale }}
			<br>
			desktop base line height
			<br>
			<input
				v-model="desktopBaseLineHeight"
				type="range"
				min="1"
				max="2"
				step="0.05"
			>
			{{ desktopBaseLineHeight }}em
			<br>
			desktop line height scale
			<br>
			<input
				v-model="desktopLineHeightScale"
				type="range"
				min="0.95"
				max="1.05"
				step="0.05"
			>
			{{ desktopLineHeightScale }}
		</div>
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
			v-for="size in [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
			:key="size"
			:size="size"
		>
			Size {{ size }}
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
			mobileBaseFontSize: Number.parseInt(defaults.fonts.mobileBaseSize, 10),
			mobileFontSizeScale: defaults.fonts.mobileSizeScale,
			mobileBaseLineHeight: Number.parseFloat(defaults.fonts.mobileBaseLineHeight),
			mobileLineHeightScale: defaults.fonts.mobileLineHeightScale,
			desktopBaseFontSize: Number.parseInt(defaults.fonts.desktopBaseSize, 10),
			desktopFontSizeScale: defaults.fonts.desktopSizeScale,
			desktopBaseLineHeight: Number.parseFloat(defaults.fonts.desktopBaseLineHeight),
			desktopLineHeightScale: defaults.fonts.desktopLineHeightScale,
			fontFamily: defaults.heading.fontFamily,
			fontWeight: defaults.heading.weight,
			textColor: defaults.resolve(defaults.heading.textColor),
		};
	},
	computed: {
		theme() {
			return {
				fonts: {
					mobileBaseSize: `${this.mobileBaseFontSize}px`,
					mobileSizeScale: this.mobileFontSizeScale,
					mobileBaseLineHeight: `${this.mobileBaseLineHeight}em`,
					mobileLineHeightScale: this.mobileLineHeightScale,
					desktopBaseSize: `${this.desktopBaseFontSize}px`,
					desktopSizeScale: this.desktopFontSizeScale,
					desktopBaseLineHeight: `${this.desktopBaseLineHeight}em`,
					desktopLineHeightScale: this.desktopLineHeightScale,
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

<style scoped>
.mobileControls {
	display: block;
}

.desktopControls {
	display: none;
}

@media (min-width: 600px) {
	.mobileControls {
		display: none;
	}

	.desktopControls {
		display: block;
	}
}
</style>
```

## Unthemed

It's possible to use the Heading component without a parent Theme component, however the base font size, font size scale factor, base line height, and line height scale factor are no longer customizable.

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
			v-for="size in [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
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
