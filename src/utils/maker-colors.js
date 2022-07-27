import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import mixPlugin from 'colord/plugins/mix';
import { cloneDeep } from 'lodash';
import {
	WCAG_CONTRAST_TEXT,
	WCAG_CONTRAST_TITLE,
	DARK_COLOR_LUMINANCE_THRESHOLD,
	getContrast,
} from './get-contrast';

extend([a11yPlugin, mixPlugin]);

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

const PRIMARY_RATIOS = {
	light: {
		'fill': 0,
		'text': 0.05,
		// 'primarySubtle': 0.155,
		//'subtle': 0.527,
		// 'subtle': 0.9,
		// 'onFill': 1,
		'subtle': 0.8,
	},
	dark: {
		'fill': 0,
		'text': 0.255,
		// 'primarySubtle': 0.37,
		// 'primarySubtle': 0.55,
		// 'subtle': 0.95,
		// 'onFill': 1,
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

function isDark(hex) {
	return colord(hex).luminance() < DARK_COLOR_LUMINANCE_THRESHOLD;
}

function enoughContrastForFill(hex1, hex2) {
	return colord(hex1).contrast(hex2) >= WCAG_CONTRAST_TITLE;
}

function enoughContrastForText(hex1, hex2) {
	return colord(hex1).contrast(hex2) >= WCAG_CONTRAST_TEXT;
}

function generateContextualPrimaryColors(background = '#fff', primary = '#000', neutralColors) {
	const isDarkBg = isDark(background);
	const isDarkPrimary = isDark(primary);
	const backgroundContrast = getContrast(background);
	const primaryContrast = getContrast(primary);
	const primaryColors = {};
	if (enoughContrastForFill(primary, background)) {
		primaryColors.fill = primary;
		const DARKEN_PRIMARY_FOR_TEXT = 0.2;
		primaryColors.text = colord(primary)
			.mix(backgroundContrast, DARKEN_PRIMARY_FOR_TEXT)
			.toHex();
		primaryColors.onFill = getContrast(primaryColors.fill);
	} else {
		primaryColors.fill = backgroundContrast;
		primaryColors.text = backgroundContrast;
		// primaryColors.subtle = neutralColors['neutral-10'];
		primaryColors.onFill = primary;
	}
	if (isDarkBg) {
		primaryColors.subtle = neutralColors['neutral-10'];
	} else {
		const SUBTLE_SATURATION = 25;
		const SUBTLE_LIGHTNESS = 95;
		const primaryHsl = colord(primary).toHsl();
		primaryColors.subtle = colord({
			h: primaryHsl.h,
			s: SUBTLE_SATURATION,
			l: SUBTLE_LIGHTNESS,
		}).toHex();
	}
	return primaryColors;
}

/**
 * @param {String} background
 * @return {Object}
 */
export default function makerColors(background = '#fff', primary = '#000') {
	const isDarkBg = colord(background).luminance() < DARK_COLOR_LUMINANCE_THRESHOLD;
	const neutralRatios = isDarkBg ? NEUTRAL_RATIOS.dark : NEUTRAL_RATIOS.light;
	const neutralContrast = getContrast(background);
	const neutralColors = {};

	// derive neutral colors
	Object.entries(neutralRatios).forEach(([name, ratio]) => {
		neutralColors[name] = colord(background).mix(neutralContrast, ratio).toHex();
	});

	// derive contextual colors
	const contextualColors = isDarkBg
		? cloneDeep(CONTEXTUAL_COLORS.dark) : cloneDeep(CONTEXTUAL_COLORS.light);

	// derive contextual primary colors
	// const isDarkPrimary = colord(primary).luminance() < DARK_COLOR_LUMINANCE_THRESHOLD;
	// const primaryRatios = isDarkBg ? PRIMARY_RATIOS.dark : PRIMARY_RATIOS.light;
	// const primaryBlend = background;
	// const primaryContrast = getContrast(primary);
	// contextualColors.contextualPrimary = {};
	// Object.entries(primaryRatios).forEach(([name, ratio]) => {
	// 	contextualColors.contextualPrimary[name] = colord(primary).mix(primaryBlend, ratio).toHex();
	// });
	// contextualColors.contextualPrimary.onFill = getContrast(contextualColors.contextualPrimary.fill);
	// if (!contextualColors.contextualPrimary.subtle) {
	// 	contextualColors.contextualPrimary.subtle = neutralColors['neutral-10'];
	// }
	// if (colord(contextualColors.contextualPrimary.text).contrast(background) < WCAG_CONTRAST_TEXT) {
	// 	contextualColors.contextualPrimary.text = getContrast(background);
	// }

	contextualColors.contextualPrimary = generateContextualPrimaryColors(
		background,
		primary,
		neutralColors,
	);

	// derive contextual critical, warning, success colors
	['critical', 'warning', 'success'].forEach((name) => {
		if (colord(contextualColors[name].text).contrast(background) < WCAG_CONTRAST_TEXT) {
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
		// ...primaryColors,
		...neutralColors,
		...contextualColors,
		elevation: isDarkBg ? neutralColors['neutral-20'] : '#ffffff',
		overlay: isDarkBg ? 'rgba(255, 255, 255, 0.32)' : 'rgba(0, 0, 0, 0.32)',
	};
}
