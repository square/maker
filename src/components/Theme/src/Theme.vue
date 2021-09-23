<script>
import { createStitches } from '@stitches/core';
import { getHighestContrast } from '@square/maker/utils/color';

const contrastCheck = new Set(['primary', 'secondary', 'background']);

function addColorContrast(colorObject) {
	const colors = colorObject;
	Object.entries(colors).forEach(([key, value]) => {
		if (contrastCheck.has(key)) {
			colors[`on-${key}`] = getHighestContrast(value);
		}
	});
	return colors;
}

export default {

	provide() {
		return {
			theme: this.theme,
			surfaces: this.themeSurfaces,
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
			themeSurfaces: [],
		};
	},

	mounted() {
		this.generateColorContrast();
		this.applyTheme();
	},

	methods: {
		generateColorContrast() {
			let { colors } = this.theme;
			const { surfaces } = colors;

			colors = addColorContrast(colors);

			Object.entries(surfaces).forEach(([key, value]) => {
				surfaces[key] = addColorContrast(value);
			});
		},

		applyTheme() {
			const { colors } = this.theme;
			const { surfaces } = colors;
			const modeObjects = [];
			const surfaceStrings = [];
			delete colors.surfaces; // Removed so stitches doesn't try to generate property from an object

			const { theme, createTheme } = createStitches({ theme: this.theme, prefix: 'maker' });
			this.defaultTheme = theme;

			Object.entries(surfaces).forEach(([name, designTokens]) => {
				const tokens = { colors: designTokens };
				const newSurface = createTheme(name, tokens);
				modeObjects.push(newSurface);
				surfaceStrings.push(newSurface.toString());
			});

			this.themeSurfaces = modeObjects;
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
	color: var(--maker-colors-on-background);
	background-color: var(--maker-colors-background);
}
</style>
