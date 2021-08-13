<template>
	<div :class="$s.Theme">
		<slot />
	</div>
</template>

<script>
import { toCSSVars } from './utils';

export default {
	inheritAttrs: false,

	props: {
		/**
		 * Set color mode for entire app
		 */
		colorMode: {
			type: String,
			default: '',
		},
	},

	mounted() {
		this.applyTheme();
	},

	methods: {
		applyTheme() {
			const themeProps = toCSSVars(this.$attrs);
			// TODO: Target something else
			// This injects the styles on the root element,
			// but ideally we could target a specific :root style
			// at least until :host is available
			const root = document.documentElement;
			Object.entries(themeProps).forEach(([prop, value]) => {
				root.style.setProperty(prop, value);
			});
		},

		getModes() {
			const { modes } = this.$attrs.colors;
			// const { initialColorMode } = modes;
			delete modes.initialColorMode;

			let modeStyles = '';
			Object.entries(modes).forEach(([modeName, designTokens]) => {
				modeStyles += `.${modeName} {\n${toCSSVars(designTokens, 'maker-color')}}\n`;
			});
			return modeStyles;
		},
	},
};
</script>
<style module="$s">
.Theme {
	color: var(--maker-color-text);
	background-color: var(--maker-color-background);
}
</style>
