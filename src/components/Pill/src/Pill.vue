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
import cssValidator from '@square/maker/utils/css-validator';
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
		 * text color, also border color if no bg color
		 */
		textColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * bg & border color
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
	},

	computed: {
		...resolveThemeableProps('pill', [
			'pattern',
			'textColor',
			'bgColor',
		]),
		style() {
			const textColor = this.resolvedTextColor || 'var(--maker-color-neutral-90, #1b1b1b)';
			const bgColor = this.resolvedBgColor || 'transparent';
			const borderColor = bgColor === 'transparent' ? textColor : bgColor;
			return {
				'--text-color': textColor,
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
	color: var(--text-color);
	font-weight: var(--maker-font-label-font-weight, 500);
	font-size: 12px;
	font-family: var(--maker-font-label-font-family, inherit);
	line-height: 16px;
	background-color: var(--bg-color);
	border: 1px solid var(--border-color);
	border-radius: 100px;
}
</style>
