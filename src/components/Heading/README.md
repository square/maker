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
		base line height
		<br>
		<input
			v-model="baseLineHeight"
			type="range"
			min="1"
			max="1.62"
			step="0.01"
		>
		{{ baseLineHeight }}
		<br>
		line height scale
		<br>
		<input
			v-model="lineHeightScale"
			type="range"
			min="0.95"
			max="1.05"
			step="0.01"
		>
		{{ lineHeightScale }}
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
			Size {{ size }} -
			<span
				class="showSize"
				:mobileSize="stepToMobilePx(size)"
				:desktopSize="stepToDesktopPx(size)"
			/>
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
			baseFontSize: Number.parseInt(defaults.fonts.baseSize, 10),
			fontSizeScale: Number.parseFloat(defaults.fonts.sizeScale),
			baseLineHeight: Number.parseFloat(defaults.fonts.baseLineHeight),
			lineHeightScale: Number.parseFloat(defaults.fonts.lineHeightScale),
			fontFamily: defaults.heading.fontFamily,
			fontWeight: defaults.heading.weight,
			textColor: defaults.resolve(defaults.heading.textColor),
			namedSizes: [
				{
					name: 'headline-1',
					size: 7,
				},
				{
					name: 'headline-2',
					size: 6,
				},
				{
					name: 'headline-3',
					size: 5,
				},
				{
					name: 'headline-4',
					size: 4,
				},
				{
					name: 'headline-5',
					size: 3,
				},
				{
					name: 'title-1',
					size: 4,
				},
				{
					name: 'title-2',
					size: 3,
				},
				{
					name: 'title-3',
					size: 2,
				},
				{
					name: 'title-4',
					size: 1,
				},
				{
					name: 'title-5',
					size: -1,
				},
				{
					name: 'title-6',
					size: -2,
				},
			],
		};
	},
	computed: {
		theme() {
			return {
				fonts: {
					baseSize: `${this.baseFontSize}px`,
					sizeScale: Number.parseFloat(this.fontSizeScale),
					baseLineHeight: Number.parseFloat(this.baseLineHeight),
					lineHeightScale: Number.parseFloat(this.lineHeightScale),
				},
				heading: {
					fontFamily: this.fontFamily,
					textColor: this.textColor,
					weight: Number.parseInt(this.fontWeight, 10),
				},
			};
		},
	},
	methods: {
		stepToMobilePx(step) {
			return this.adjustRawPx(
				Number.parseFloat(this.baseFontSize)
				* Number.parseFloat((this.fontSizeScale) ** step),
				step,
			);
		},
		stepToDesktopPx(step) {
			const DESKTOP_ADJUST = 0.13;
			return this.adjustRawPx(
				Number.parseFloat(this.baseFontSize)
				* ((Number.parseFloat(this.fontSizeScale) + DESKTOP_ADJUST) ** step),
				step,
			);
		},
		adjustRawPx(rawPx, step) {
			const MINUS_ONE_STEP = -1;
			const MINUS_TWO_STEP = -2;
			const MINUS_ONE_MIN_CLAMP = 14;
			const MINUS_TWO_MIN_CLAMP = 12;
			let adjustedPx = Math.round(rawPx);
			if (step === MINUS_ONE_STEP) {
				adjustedPx = Math.max(MINUS_ONE_MIN_CLAMP, adjustedPx);
			} else if (step === MINUS_TWO_STEP) {
				adjustedPx = Math.max(MINUS_TWO_MIN_CLAMP, adjustedPx);
			}
			return `${adjustedPx}px`;
		},
	},
};
</script>

<style scoped>
.showSize::before {
	content: attr(mobileSize);
}

@media (min-width: 600px) {
	.showSize::before {
		content: attr(desktopSize);
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
