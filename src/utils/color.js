/**
 * Convert HEX to RGB
 * @param {string} hex
 * @author FelipeC
 * {@link https://stackoverflow.com/a/19765382/16708141}
 */
export function hexToRgb(hex) {
	const normal = hex.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
	// eslint-disable-next-line no-magic-numbers
	if (normal) return normal.slice(1).map((color) => Number.parseInt(color, 16));

	const shorthand = hex.match(/^#([\da-f])([\da-f])([\da-f])$/i);
	// eslint-disable-next-line no-magic-numbers
	if (shorthand) return shorthand.slice(1).map((color) => 0x11 * Number.parseInt(color, 16));

	return undefined;
}

/**
 * Return an array formatted with r, g, b values from a color
 * @param  {string} color hex or rgb
 */
export function getRgbArray(color) {
	if (color.startsWith('rgb')) {
		color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
		return color;
	}
	return hexToRgb(color);
}

/**
 * Returns if the color provided is light or dark
 * Based on the HSP formula from {@link http://alienryderflex.com/hsp.html}
 * HSP is calculated with an integer range 0-255, 0 = black, 255 = white
 * Threshold is an arbitrary value, but representative of luminance value we've found pleasing
 * @param {string} color
 * @returns {string} light or dark
 */
export function perceivedBrightness(color) {
	const [r, g, b] = getRgbArray(color);
	const HSPThreshold = 150; // 50% = 127.5
	const percRed = 0.299;
	const percGreen = 0.587;
	const percBlue = 0.114;
	const hsp = Math.sqrt(
		percRed * (r * r) + percGreen * (g * g) + percBlue * (b * b),
    );

	return (hsp > HSPThreshold) ? 'light' : 'dark';
}

/**
 * Return a contrasting color (white or black) from a provided color.
 * Supports RGB or HEX
 * @param {string} color
 */
export function contrastingColor(bg, textColor) {
	const bgLuminance = perceivedBrightness(bg); // light or dark
	const contrastColor = (bgLuminance === 'light') ? '#000' : '#fff';

	if (textColor) {
		return (perceivedBrightness(textColor) !== bgLuminance) ? textColor : contrastColor;
	}

	return contrastColor;
}
