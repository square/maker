<template>
	<component
		:is="iconComponent"
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

const ICON_SIZES = {
	medium: '16px',
	large: '24px',
};

/**
 * @inheritAttrs svg
 * @inheritListeners svg
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
		 * size of icon, medium = 16px, large = 24px
		 */
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['medium', 'large'].includes(size),
		},
		/**
		 * color of icon
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
	},

	computed: {
		...resolveThemeableProps('icon', [
			'pattern',
			'name',
			'color',
		]),
		iconComponent() {
			const component = this.theme.icons[this.resolvedName];
			assert.error(component, `'${this.resolvedName}' icon not defined in theme`, 'Icon');
			return component;
		},
		inlineStyles() {
			return {
				'--color': this.resolvedColor,
				'--icon-size': ICON_SIZES[this.size],
			};
		},
	},
};
</script>

<style module="$s">
.Icon {
	--icon-size: 16px;
	--color: inherit;

	width: var(--icon-size);
	height: var(--icon-size);
	color: var(--color);
	fill: currentColor;
}
</style>
