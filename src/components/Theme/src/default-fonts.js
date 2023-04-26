// note: this is intentionally written as a cjs module
// so it can be used by build files, please do not
// refactor this into an es6 module
export default function defaultFonts() {
	return {
		baseSize: 16,
		sizeScale: 1.17,
		heading: {
			fontFamily: 'inherit',
			fontWeight: '500',
		},
		body: {
			fontFamily: 'inherit',
			fontWeight: '400',
		},
		label: {
			fontFamily: 'inherit',
			fontWeight: '500',
		},
	};
}
