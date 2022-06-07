import chroma from 'chroma-js';

export const DARK_COLOR_LUMINANCE_THRESHOLD = 0.32;
export const WCAG_CONTRAST_TEXT = 4.5;
export const WCAG_CONTRAST_TITLE = 3;

export function getContrast(background, foreground, contrastThreshold = WCAG_CONTRAST_TITLE) {
	let contrast = foreground;

	if (!foreground || chroma.contrast(background, contrast) < contrastThreshold) {
		const isDarkColor = chroma(background).luminance() < DARK_COLOR_LUMINANCE_THRESHOLD;
		contrast = isDarkColor ? '#ffffff' : '#000000';
	}

	return contrast;
}
