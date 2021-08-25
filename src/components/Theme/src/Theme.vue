<script>
import { createStitches } from '@stitches/core';

export default {

	// provide() {
	// 	const theme = {};
	// 	Object.defineProperty(theme, 'defaultTheme', {
	// 		enumerable: true,
	// 		get: () => this.defaultTheme,
	// 	});
	// 	return { theme };
	// },

	provide() {
		return {
			theme: this.theme,
			surfaces: this.themeModes,
		};
	},

	inheritAttrs: false,

	props: {
		theme: {
			type: Object,
			default: () => undefined,
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
	},

	methods: {
		applyTheme() {
			const { colors } = this.theme;
			const { modes } = colors;
			const modeObjects = [];
			const modeStrings = [];
			delete colors.modes;

			const { theme, createTheme } = createStitches({ theme: this.theme, prefix: 'maker' });
			this.defaultTheme = theme;

			Object.entries(modes).forEach(([name, designTokens]) => {
				const tokens = { colors: designTokens };
				const newMode = createTheme(name, tokens);
				modeObjects.push(newMode);
				modeStrings.push(newMode.toString());
			});

			this.themeModes = modeObjects;
		},
	},

	render(h) {
		const { $s } = this;
		/**
		 * @slot text content
		 */
		const defaultSlot = this.$slots.default;
		return h('div', {
			class: [$s.Theme],
			attrs: this.$attrs,
			on: this.$listeners,
		}, defaultSlot);
	},
};
</script>
<style module="$s">
.Theme {
	color: var(--maker-colors-text);
	background-color: var(--maker-colors-background);
}
</style>
