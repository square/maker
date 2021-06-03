import chroma from 'chroma-js';

// WIP
function mapAbstractToConcrete(abstractKey, abstractValue, abstractTheme) {
	// process other tokens here
	return {};
}

function defaultAbstractTheme() {
	return {
		color: '#000000',
	};
}

export default function createButtonTheme(abstractTheme) {
	abstractTheme = Object.assign(defaultAbstractTheme(), abstractTheme);
	const concreteTheme = {};
	for (const [abstractKey, abstractValue] of Object.entries(abstractTheme)) {
		Object.assign(concreteTheme, mapAbstractToConcrete(abstractKey, abstractValue, abstractTheme));
	}
	return concreteTheme;
}
