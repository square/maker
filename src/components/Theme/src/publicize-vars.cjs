// note: this is intentionally written as a cjs module
// so it can be used by build files, please do not
// refactor this into an es6 module

const BASE_TEN = 10;

function clamp(value, min, max) {
	return Math.min(Math.max(Number.parseInt(value, BASE_TEN), min), max);
}

module.exports = function publicizeVars(theme) {
	const { colors, fonts, shapes } = theme;
	const MAX_THUMBNAIL_RADIUS = 8;

	return {
		// neutral colors
		'--maker-color-neutral-0': colors['neutral-0'],
		'--maker-color-neutral-10': colors['neutral-10'],
		'--maker-color-neutral-20': colors['neutral-20'],
		'--maker-color-neutral-80': colors['neutral-80'],
		'--maker-color-neutral-90': colors['neutral-90'],
		'--maker-color-neutral-100': colors['neutral-100'],

		// general colors
		'--maker-color-primary': colors.primary,
		'--maker-color-background': colors.background,
		'--maker-color-heading': colors.heading,
		'--maker-color-body': colors.body,
		'--maker-color-elevation': colors.elevation,
		'--maker-color-overlay': colors.overlay,

		// contextual colors
		'--maker-color-error-fill': colors.error.fill,

		// typography
		'--maker-font-heading-font-family': fonts.heading.fontFamily,
		'--maker-font-heading-font-weight': fonts.heading.fontWeight,
		'--maker-font-body-font-family': fonts.body.fontFamily,
		'--maker-font-body-font-weight': fonts.body.fontWeight,
		'--maker-font-label-font-family': fonts.label.fontFamily,
		'--maker-font-label-font-weight': fonts.label.fontWeight,

		// shape
		'--maker-shape-default-border-radius': shapes.defaultBorderRadius,
		'--maker-shape-card-border-radius': shapes.cardBorderRadius,
		'--maker-shape-button-border-radius': shapes.buttonBorderRadius,
		'--maker-shape-image-border-radius': shapes.imageBorderRadius,
		'--maker-shape-thumbnail-border-radius': `${clamp(shapes.imageBorderRadius, 0, MAX_THUMBNAIL_RADIUS)}px`,
	};
};
