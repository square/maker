/* eslint-disable no-bitwise */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-magic-numbers */
import chroma from 'chroma-js';
import { maxBy } from 'lodash';

export const DARK_COLOR_LUMINANCE_THRESHOLD = 0.32;
export const LIGHT_COLOR_LUMINANCE_THRESHOLD = 0.65;

export const WCAG_CONTRAST_TEXT = 4.5;
export const WCAG_CONTRAST_TEXT_SHORT = 3; /* button labels, nav links, et al */
export const WCAG_CONTRAST_TITLE = 3;
export const WCAG_CONTRAST_BUTTON = 1;

export const APCA_CONTRAST_BUTTON = 15;
export const APCA_CONTRAST_TITLE = 45;
export const APCA_CONTRAST_TEXT_MIN = 60;
export const APCA_CONTRAST_TEXT_PREFERRED = 75;
export const APCA_CONTRAST_TEXT_THIN = 90;

export function isDarkColor(color) {
	return chroma(color).luminance() < DARK_COLOR_LUMINANCE_THRESHOLD;
}

export function isLightColor(color) {
	return chroma(color).luminance() > LIGHT_COLOR_LUMINANCE_THRESHOLD;
}

export function isNeutralColor(color) {
	const hsv = chroma(color).hsv();
	return hsv[1] < 0.5;
}

/**
 * @param {String} bg e.g. #0369bf
 * @param {Array} fg e.g."#ffffff", "#000000"
 * @return {Integer} contrast valculation
 */
export function APCAcontrast(bg, fg) {
	const background = chroma(bg).num();
	const text = chroma(fg).num();

	const Rbg = (background & 0xFF0000) >> 16;
	const Gbg = (background & 0x00FF00) >> 8;
	const Bbg = background & 0x0000FF;

	const Rtxt = (text & 0xFF0000) >> 16;
	const Gtxt = (text & 0x00FF00) >> 8;
	const Btxt = text & 0x0000FF;

  /// //  MAGICAL NUMBERS  ///////////////////////////////

  /// //  sRGB Conversion to Relative Luminance (Y)  /////

	const mainTRC = 2.4; // Transfer Curve (aka "Gamma") for sRGB linearization
  // Simple power curve vs piecewise described in docs
  // Essentially, 2.4 best models actual display
  // characteristics in combination with the total method

  // const mainTRCencode = 0.41666666666666666667; // = 1.0/mainTRC;

	const Rco = 0.2126729; // sRGB Red Coefficient (from matrix)
	const Gco = 0.7151522; // sRGB Green Coefficient (from matrix)
	const Bco = 0.072175; // sRGB Blue Coefficient (from matrix)

  /// //  For Finding Raw SAPC Contrast from Relative Luminance (Y)  /////

	const normBG = 0.55; // Constants for SAPC Power Curve Exponents
	const normTXT = 0.58; // One pair for normal text, and one for reverse
	const revTXT = 0.57; // These are the "beating heart" of SAPC
	const revBG = 0.62;

  /// //  For Clamping and Scaling Values  /////

	const blkThrs = 0.03; // Level that triggers the soft black clamp
	const blkClmp = 1.45; // Exponent for the soft black clamp curve
	const deltaYmin = 0.0005; // Lint trap
	const scaleBoW = 1.25; // Scaling for dark text on light
	const scaleWoB = 1.25; // Scaling for light text on dark
	const loConThresh = 0.078; // Threshold for new simple offset scale
	const loConFactor = 12.82051282051282; // = 1/0.078,
	const loConOffset = 0.06; // The simple offset
	const loClip = 0.001; // Output clip (lint trap #2)

  // We are only concerned with Y at this point
  // Ybg and Ytxt: divide sRGB to 0.0-1.0 range, linearize,
  // and then apply the standard coefficients and sum to Y.
  // Note that the Y we create here is unique and designed
  // exclusively for SAPC. Do not use Y from other methods.

	let Ybg = Math.pow(Rbg / 255, mainTRC) * Rco
    + Math.pow(Gbg / 255, mainTRC) * Gco
    + Math.pow(Bbg / 255, mainTRC) * Bco;

	let Ytxt = Math.pow(Rtxt / 255, mainTRC) * Rco
    + Math.pow(Gtxt / 255, mainTRC) * Gco
    + Math.pow(Btxt / 255, mainTRC) * Bco;

	let SAPC = 0; // For holding raw SAPC values
	let outputContrast = 0; // For weighted final values

  /// // TUTORIAL  /////

  // Take Y and soft clamp black, return 0 for very close luminances
  // determine polarity, and calculate SAPC raw contrast
  // Then apply the output scaling

  // Note that reverse contrast (white text on black)
  // intentionally returns a negative number
  // Proper polarity is important!

  /// ///////   BLACK SOFT CLAMP & INPUT CLIP  ////////////////////////////////

  // Soft clamp Y when near black.
  // Now clamping all colors to prevent crossover errors
	Ytxt = Ytxt > blkThrs ? Ytxt : Ytxt + Math.pow(blkThrs - Ytxt, blkClmp);

	Ybg = Ybg > blkThrs ? Ybg : Ybg + Math.pow(blkThrs - Ybg, blkClmp);

  /// //   Return 0 Early for extremely low ∆Y (lint trap #1) /////
	if (Math.abs(Ybg - Ytxt) < deltaYmin) {
		return 0;
	}

  /// ///////   SAPC CONTRAST   ///////////////////////////////////////////////

	if (Ybg > Ytxt) {
    // For normal polarity, black text on white

    /// // Calculate the SAPC contrast value and scale

		SAPC = (Math.pow(Ybg, normBG) - Math.pow(Ytxt, normTXT)) * scaleBoW;

    /// // NEW! SAPC SmoothScale™
    // Low Contrast Smooth Scale Rollout to prevent polarity reversal
    // and also a low clip for very low contrasts (lint trap #2)
    // much of this is for very low contrasts, less than 10
    // therefore for most reversing needs, only loConOffset is important
		outputContrast = SAPC < loClip
        ? 0
        : (SAPC < loConThresh
        ? SAPC - SAPC * loConFactor * loConOffset
        : SAPC - loConOffset);
	} else {
    // For reverse polarity, light text on dark
    // WoB should always return negative value.

		SAPC = (Math.pow(Ybg, revBG) - Math.pow(Ytxt, revTXT)) * scaleWoB;

		outputContrast = SAPC > -loClip
        ? 0
        : (SAPC > -loConThresh
        ? SAPC - SAPC * loConFactor * loConOffset
        : SAPC + loConOffset);
	}
  // ld: slight modification to get positive number
	return Math.abs(outputContrast * 100);
} // Close APCAcontrast()

/**
 * @param {String} bg e.g. #0369bf
 * @param {Array} options e.g."#ffffff", "#000000"
 * @return {String} hex value with highest constrast from options
 */
export function getHighestContrast(bg, options) {
	return maxBy(options, (x) => APCAcontrast(bg, x));
}

export function meetsTitleContrast(bg, titleColor) {
	return APCAcontrast(bg, titleColor) >= APCA_CONTRAST_TITLE;
}

export function meetsButtonContrast(bg, buttonColor) {
	return APCAcontrast(bg, buttonColor) >= APCA_CONTRAST_BUTTON;
}
