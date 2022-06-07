import chroma from 'chroma-js';
import { cloneDeep } from 'lodash';
import { WCAG_CONTRAST_TEXT, DARK_COLOR_LUMINANCE_THRESHOLD, getContrast } from '@square/maker/utils/get-contrast';

const NEUTRAL_RATIOS = {
	light: {
		'neutral-0': 0,
		'neutral-10': 0.05,
		'neutral-20': 0.155,
		'neutral-80': 0.527,
		'neutral-90': 0.9,
		'neutral-100': 1,
	},
	dark: {
		'neutral-0': 0,
		'neutral-10': 0.255,
		'neutral-20': 0.37,
		'neutral-80': 0.55,
		'neutral-90': 0.95,
		'neutral-100': 1,
	},
};

const CONTEXTUAL_COLORS = {
	light: {
		critical: {
			fill: '#cd2026',
			text: '#a82826',
			subtle: '#f6eceb',
		},
		warning: {
			fill: '#ffbf00',
			text: '#7e662a',
			subtle: '#f9eecf',
		},
		success: {
			fill: '#008000',
			text: '#0a7A06',
			subtle: '#ebf1eb',
		},

	},
	dark: {
		critical: {
			fill: '#cd2026',
			text: '#ff7566',
		},
		warning: {
			fill: '#ffbf00',
			text: '#ffbf00',
		},
		success: {
			fill: '#008000',
			text: '#64cc52',
		},
	},
};

/**
 * @param {String} background
 * @return {Object}
 */
export default function makerColors(background = '#fff') {
	const isDarkBg = chroma(background).luminance() < DARK_COLOR_LUMINANCE_THRESHOLD;
	const neutralRatios = isDarkBg ? NEUTRAL_RATIOS.dark : NEUTRAL_RATIOS.light;
	const neutralContrast = getContrast(background);
	const neutralColors = {};

	Object.entries(neutralRatios).forEach(([name, ratio]) => {
		neutralColors[name] = chroma.mix(background, neutralContrast, ratio, 'lab').hex();
	});

	const contextualColors = isDarkBg
		? cloneDeep(CONTEXTUAL_COLORS.dark) : cloneDeep(CONTEXTUAL_COLORS.light);

	['critical', 'warning', 'success'].forEach((name) => {
		if (chroma.contrast(contextualColors[name].text, background) < WCAG_CONTRAST_TEXT) {
			contextualColors[name].onFill = contextualColors[name].fill;
			contextualColors[name].text = getContrast(background);
			contextualColors[name].fill = getContrast(background);
		}

		if (!contextualColors[name].subtle) {
			contextualColors[name].subtle = neutralColors['neutral-10'];
		}
	});

	return {
		background,
		heading: getContrast(background),
		body: getContrast(background),
		...neutralColors,
		...contextualColors,
		elevation: isDarkBg ? neutralColors['neutral-20'] : '#ffffff',
		overlay: isDarkBg ? 'rgba(255, 255, 255, 0.32)' : 'rgba(0, 0, 0, 0.32)',
	};
}
