import chroma from 'chroma-js';

const isLightThreshold = 0.32;

const neutralRatios = {
	light: {
		10: 0.05,
		20: 0.155,
		80: 0.527,
		90: 0.9,
	},
	dark: {
		10: 0.255,
		20: 0.37,
		80: 0.55,
		90: 0.95,
	},
};

export const generateNeutralColors = (bgHex) => {
	const isLight = chroma(bgHex).luminance() > isLightThreshold;
	const contrastColor = isLight ? '#000000' : '#ffffff';
	const levels = isLight ? neutralRatios.light : neutralRatios.dark;
	const colors = {
		'neutral-0': isLight ? '#ffffff' : '#000000',
		'neutral-100': !isLight ? '#ffffff' : '#000000',
	};

	// if (isLight) {
	// 	colors['neutral-90'] = 'rgb(142, 142, 147)';
	// 	colors['neutral-80'] = 'rgb(174, 174, 178)';
	// 	colors['neutral-20'] = 'rgb(229, 229, 234)';
	// 	colors['neutral-10'] = 'rgb(242, 242, 247)';
	// } else {
	// 	colors['neutral-10'] = 'rgb(44, 44, 46)';
	// 	colors['neutral-20'] = 'rgb(58, 58, 60)';
	// 	colors['neutral-80'] = 'rgb(99, 99, 102)';
	// 	colors['neutral-90'] = 'rgb(142, 142, 147)';
	// }

	Object.entries(levels).forEach(([name, level]) => {
		colors[`neutral-${name}`] = chroma.mix(bgHex, contrastColor, level, 'lab').hex();
	});

	return {
		...colors,
		'color-elevation': isLight ? '#ffffff' : colors['neutral-20'],
		'color-overlay': isLight ? 'rgba(0, 0, 0, 0.32)' : 'rgba(255, 255, 255, 0.32)',
	};
};
