import pluralize from 'pluralize';

export const tokens = [
	'colors',
	'borders',
	'borderWidths',
	'borderStyles',
	'fonts',
	'fontSizes',
	'fontWeights',
	'letterSpacings',
	'lineHeights',
	'radii',
	'space',
	'shadows',
	'sizes',
	'zIndices',
	'transition',
];

export function createThemeStylesheet() {
	return false;
}

export function toCSSVars(themeObject, prefix) {
	const customProperties = {};
	const propertyPrefix = prefix || 'maker';
	const pluralizeConfig = 1; // Makes singular
	const generateProperties = (object, previousKey) => {
		Object.entries(object).forEach(([key, value]) => {
			let formattedKey = pluralize(key, pluralizeConfig).toLowerCase();

			// Process these properties differently
			if (formattedKey.includes('mode')) {
				return false;
			}

			if (!previousKey) {
				formattedKey = `${propertyPrefix}-${formattedKey}`;
			}

			const newKey = previousKey ? `${previousKey }-${ formattedKey}` : formattedKey;

			if (Array.isArray(value)) {
				value.forEach((item, i) => {
					customProperties[`--${newKey}-${i}`] = item;
				});
			} else if (typeof value === 'object' && value !== null) {
				generateProperties(value, newKey);
			} else {
				customProperties[`--${newKey}`] = value;
			}
			return true;
		});
	};

	generateProperties(themeObject);

	return customProperties;
}
