<template>
	<span
		:class="$s.Pill"
		:style="style"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<!-- @slot pill content -->
		<slot />
	</span>
</template>

<script>
import chroma from 'chroma-js';
import cssValidator from '@square/maker/utils/css-validator';
import getContrast from '@square/maker/utils/get-contrast';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

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
		 * style of pill
		 */
		mode: {
			type: String,
			default: undefined,
			validator: (mode) => ['filled', 'outline'].includes(mode),
		},
		/**
		 * bg color for filled pills, text & border color for outline pills
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
		/**
		 * text color for filled pills, ignored for outline pills
		 */
		textColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
	},

	computed: {
		...resolveThemeableProps('pill', [
			'pattern',
			'mode',
			'color',
			'textColor',
		]),
		style() {
			const borderColor = this.resolvedColor;
			let bgColor;
			let color;
			if (this.resolvedMode === 'filled') {
				bgColor = this.resolvedColor;
				color = this.resolvedTextColor || getContrast(chroma(bgColor)).hex();
			} else { // outline
				bgColor = 'transparent';
				color = this.resolvedColor;
			}
			return {
				'--color': color,
				'--bg-color': bgColor,
				'--border-color': borderColor,
			};
		},
	},
};
</script>

<style module="$s">
.Pill {
	display: inline-block;
	padding: 4px 8px;
	color: var(--color);
	font-weight: var(--maker-font-label-font-weight, 500);
	font-size: 12px;
	font-family: var(--maker-font-label-font-family, inherit);
	line-height: 16px;
	background-color: var(--bg-color);
	border: 1px solid var(--border-color);
	border-radius: 100px;
}
</style>
