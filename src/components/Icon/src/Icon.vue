<template>
	<component
		:is="iconComponent"
		:key="iconComponent.__file"
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

	data() {
		return {
			rerender: 0,
		};
	},

	computed: {
		iconComponent() {
			const component = this.theme.icons[this.name];
			console.log({ __file: component.__file, rerender: this.rerender });
			assert.error(component, `'${this.name}' icon not defined in theme`);
			return component;
		},
	},

	watch: {
		'theme.icons': {
			handler(newVal, oldVal) {
				this.rerender += 1;
				// console.log(JSON.stringify({ newVal, oldVal, rerender: this.rerender }, null, 4));
			},
			deep: true,
			immediate: true,
		},
	},
};
</script>

<style module="$s">
.Icon {
	width: 16px;
	height: 16px;
}
</style>
