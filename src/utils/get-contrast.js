import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';

extend([a11yPlugin]);

export const DARK_COLOR_LUMINANCE_THRESHOLD = 0.32;
export const WCAG_CONTRAST_TEXT = 4.5;
export const WCAG_CONTRAST_TITLE = 3;

export function getContrast(background, foreground, contrastThreshold = WCAG_CONTRAST_TITLE) {
	let contrast = foreground;

	if (!foreground || colord(foreground).contrast(background) < contrastThreshold) {
		const isDarkColor = colord(background).luminance() < DARK_COLOR_LUMINANCE_THRESHOLD;
		contrast = isDarkColor ? '#ffffff' : '#000000';
	}

	return contrast;
}
