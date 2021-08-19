<template>
	<div :class="$s.Theme">
		<slot />
	</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { theme } from './stitches.config';

// const darkTheme = theme('dark-theme', {
// 	colors: {
// 		hiContrast: 'hsl(206,2%,93%)',
// 		loContrast: 'hsl(206,8%,8%)',

// 		gray100: 'hsl(206,8%,12%)',
// 		gray200: 'hsl(206,7%,14%)',
// 		gray300: 'hsl(206,7%,15%)',
// 		gray400: 'hsl(206,7%,24%)',
// 		gray500: 'hsl(206,7%,30%)',
// 		gray600: 'hsl(206,5%,53%)',
// 	},
// 	space: {},
// 	fonts: {},
// });

// console.log(darkTheme);

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

	data() {
		return {
			defaultTheme: {},
			themeModes: [],
		};
	},

	mounted() {
		this.applyTheme();
		document.body.classList.add('dark-theme');
		// this.getModes();
		// console.log(this.themeModes);
	},

	methods: {
		applyTheme() {
			// const themeProps = toCSSVars(this.$attrs);
			// TODO: Target something else
			// This injects the styles on the root element,
			// but ideally we could target a specific :root style
			// at least until :host is available
			// const root = document.documentElement;
			// Object.entries(themeProps).forEach(([prop, value]) => {
			// 	root.style.setProperty(prop, value);
			// });
			// const { colors } = this.$attrs;
			// this.themeModes = colors.modes;
			// delete colors.modes;
			// const { createTheme } = createStitches({ theme: this.$attrs, prefix: 'maker' });
		},

		getModes() {
			// const myModes = [];

			// let modeStyles = '';
			// Object.entries(modes).forEach(([modeName, designTokens]) => {
			// 	modeStyles += `.${modeName} {\n${toCSSVars(designTokens, 'maker-color')}}\n`;
			// });
			// return modeStyles;

			// Object.entries(this.themeModes).forEach(([modeName, designTokens]) => {
			// 	const tokens = { colors: designTokens };
			// 	const newMode = this.defaultTheme.theme(modeName, tokens);
			// 	console.log(newMode);
			// 	myModes.push(newMode);
			// });
			// // console.log(myModes);
			// return myModes;
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
