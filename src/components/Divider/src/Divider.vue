<template>
	<div
		:class="$s.Divider"
		:style="styles"
		v-bind="$attrs"
		v-on="$listeners"
	/>
</template>

<script>
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import cssValidator from '@square/maker/utils/css-validator';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	props: {
		/**
		 * pattern defined at theme level
		 */
		pattern: {
			type: String,
			default: undefined,
		},
		/**
		 * Size (height) of the divider
		 */
		size: {
			type: String,
			default: undefined,
			validator: cssValidator('height'),
		},
		/**
		 * Color of the divider
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
	},

	computed: {
		...resolveThemeableProps('divider', [
			'pattern',
			'color',
			'size',
		]),
		styles() {
			return {
				'--divider-color': this.resolvedColor,
				'--divider-size': this.resolvedSize,
			};
		},
	},
};
</script>

<style module="$s">
.Divider {
	height: var(--divider-size);
	margin: 0;
	padding: 0;
	background-color: var(--divider-color);
	border: none;
	transition: height 0.5s;
}
</style>
