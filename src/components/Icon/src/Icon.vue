<template>
	<component
		:is="iconComponent"
		:class="$s.Icon"
		v-bind="$attrs"
		v-on="$listeners"
	/>
</template>

<script>
import assert from '@square/maker/utils/assert';
import { MThemeKey, defaultTheme } from '@square/maker/components/Theme';

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
	},

	computed: {
		iconComponent() {
			const component = this.theme.icons[this.name];
			assert.error(component, `'${this.name}' icon not defined in theme`);
			return component;
		},
	},
};
</script>

<style module="$s">
.Icon {
	width: 16px;
	height: 16px;
	fill: currentColor;
}
</style>
