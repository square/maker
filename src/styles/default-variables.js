const defaultColors = require('../components/Theme/src/default-colors');
const defaultFonts = require('../components/Theme/src/default-fonts');
const defaultShapes = require('../components/Theme/src/default-shapes');
const publicizeVars = require('../components/Theme/src/publicize-vars');

const defaultTheme = {
	colors: defaultColors(),
	fonts: defaultFonts(),
	shapes: defaultShapes(),
};

const defaultCssVars = publicizeVars(defaultTheme);

const defaultVars = {};
for (const [cssVarName, defaultFallbackValue] of Object.entries(defaultCssVars)) {
	// trim '--' from variable name
	const CSS_VAR_PREFIX_LENGTH = 2;
	const simpleVarName = cssVarName.slice(CSS_VAR_PREFIX_LENGTH);
	defaultVars[simpleVarName] = `var(${cssVarName}, ${defaultFallbackValue})`;
}

module.exports = defaultVars;
