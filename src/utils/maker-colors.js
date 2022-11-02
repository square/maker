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
import defaultColors from '../components/Theme/src/default-colors.cjs';

const DEFAULT_COLORS = defaultColors();

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

function generateContextualPrimaryColors(
	background = DEFAULT_COLORS.background,
	primary = DEFAULT_COLORS.primary,
	neutralColors,
) {
	const isDarkBg = isDark(background);
	const backgroundContrast = getContrast(background);
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
export default function makerColors(
	background = DEFAULT_COLORS.background,
	primary = DEFAULT_COLORS.primary,
) {
	const isDarkBg = isDark(background);
	const backgroundContrast = getContrast(background);
	const neutralRatios = isDarkBg ? NEUTRAL_RATIOS.dark : NEUTRAL_RATIOS.light;
	const neutralColors = {};

	// derive neutral colors
	Object.entries(neutralRatios).forEach(([name, ratio]) => {
		neutralColors[name] = colord(background).mix(backgroundContrast, ratio).toHex();
	});

	// derive contextual colors
	const contextualColors = isDarkBg
		? cloneDeep(CONTEXTUAL_COLORS.dark) : cloneDeep(CONTEXTUAL_COLORS.light);

	// derive contextual primary colors
	contextualColors.contextualPrimary = generateContextualPrimaryColors(
		background,
		primary,
		neutralColors,
	);

	// derive contextual critical, warning, success colors
	['critical', 'warning', 'success'].forEach((name) => {
		if (colord(contextualColors[name].text).contrast(background) < WCAG_CONTRAST_TEXT) {
			contextualColors[name].onFill = contextualColors[name].fill;
			contextualColors[name].text = backgroundContrast;
			contextualColors[name].fill = backgroundContrast;
		}

		if (!contextualColors[name].subtle) {
			contextualColors[name].subtle = neutralColors['neutral-10'];
		}

		if (!contextualColors[name].onFill) {
			contextualColors[name].onFill = getContrast(contextualColors[name].fill);
		}
	});

	return {
		primary,
		background,
		heading: getContrast(background),
		body: getContrast(background),
		...neutralColors,
		...contextualColors,
		elevation: isDarkBg ? neutralColors['neutral-20'] : '#ffffff',
		overlay: isDarkBg ? 'rgba(255, 255, 255, 0.32)' : 'rgba(0, 0, 0, 0.32)',
	};
}
