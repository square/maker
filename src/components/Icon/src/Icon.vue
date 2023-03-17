<template>
	<render-fn
		:render-fn="iconRenderFn"
		:class="$s.Icon"
		:style="inlineStyles"
		v-bind="$attrs"
		v-on="$listeners"
	/>
</template>

<script>
import cssValidator from '@square/maker/utils/css-validator';
import assert from '@square/maker/utils/assert';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import RenderFn from '@square/maker/utils/RenderFn';

const ICON_SIZES = {
	small: '16px',
	medium: '24px',
	large: '32px',
	xlarge: '40px',
	xxlarge: '48px',
};

const widthValidator = cssValidator('width');

/**
 * @inheritAttrs svg
 * @inheritListeners svg
 */
export default {
	components: {
		RenderFn,
	},

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	props: {
		/**
		 * pattern defined in theme
		 */
		pattern: {
			type: String,
			default: undefined,
		},
		/**
		 * name of icon, defined in theme
		 */
		name: {
			type: String,
			default: undefined,
		},
		/**
		 * size of icon, can be named value or any valid CSS width/height
		 * @values small, medium, large, xlarge, xxlarge
		 */
		size: {
			type: String,
			default: 'small',
			validator: (size) => ICON_SIZES[size] || widthValidator(size),
		},
		/**
		 * color of icon
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * fill of icon
		 */
		fill: {
			type: String,
			default: undefined,
			validator: cssValidator('fill'),
		},
	},

	computed: {
		...resolveThemeableProps('icon', [
			'pattern',
			'name',
			'color',
			'fill',
		]),
		iconRenderFn() {
			let renderFn = this.theme.icons[this.resolvedName];
			assert.warn(renderFn, `'${this.resolvedName}' icon not defined in theme`, 'Icon');
			renderFn = renderFn || this.theme.icons.info; // fallback to info icon
			return renderFn;
		},
		inlineStyles() {
			return {
				'--color': this.resolvedColor,
				'--icon-size': ICON_SIZES[this.size] || this.size,
				'--fill': this.resolvedFill,
			};
		},
	},
};
</script>

<style module="$s">
.Icon {
	--icon-size: 16px;
	--color: inherit;
	--fill: currentColor;

	width: var(--icon-size);
	height: var(--icon-size);
	color: var(--color);
	fill: var(--fill);
}
</style>
