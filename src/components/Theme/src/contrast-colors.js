import chroma from 'chroma-js';

const IS_LIGHT_THRESHOLD = 0.32;

const RATIOS = {
	light: {
		100: 0.05,
		300: 0.14,
		800: 0.58,
		900: 0.8,
	},
	dark: {
		100: 0.1,
		300: 0.3,
		800: 0.8,
		900: 0.95,
	},
};

export default function contrastColors(bgHex) {
	const isLight = chroma(bgHex).luminance() > IS_LIGHT_THRESHOLD;
	const contrastColor = isLight ? '#000000' : '#ffffff';
	const levels = isLight ? RATIOS.light : RATIOS.dark;
	const colors = {};

	Object.entries(levels).forEach(([name, level]) => {
		colors[`color-${name}`] = chroma.mix(bgHex, contrastColor, level, 'lab').hex();
	});

	return colors;
}
