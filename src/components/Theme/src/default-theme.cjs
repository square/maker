const defaultIcons = require('./default-icons.cjs');
const { resolve, getPath } = require('./utils.cjs');
const defaultColors = require('./default-colors.cjs');
const defaultFonts = require('./default-fonts.cjs');
const defaultShapes = require('./default-shapes.cjs');
const defaultComponents = require('./default-components.cjs');

module.exports = function defaultTheme() {
	return {
		// util functions which enable pointer values
		resolve,
		getPath,
		// "global" theme settings
		colors: defaultColors(),
		fonts: defaultFonts(),
		icons: defaultIcons(),
		shapes: defaultShapes(),
		// default profiles is empty
		profiles: {},
		// "local" component settings
		...defaultComponents(),
	};
};
