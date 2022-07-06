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
import assert from '@square/maker/utils/assert';
import { MThemeKey, defaultTheme } from '@square/maker/components/Theme';

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
		 * name of icon, defined in theme
		 */
		name: {
			type: String,
			required: true,
		},

		/**
		 * size of icon
		 */
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['medium', 'large'].includes(size),
		},
	},

	computed: {
		iconComponent() {
			const component = this.theme.icons[this.name];
			assert.error(component, `'${this.name}' icon not defined in theme`);
			return component;
		},
		inlineStyles() {
			return {
				'--icon-size': ICON_SIZES[this.size],
			};
		},
	},
};
</script>

<style module="$s">
.Icon {
	--icon-size: 16px;

	width: var(--icon-size);
	height: var(--icon-size);
	fill: currentColor;
}
</style>
