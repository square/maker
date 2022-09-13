// note: this is intentionally written as a cjs module
// so it can be used by build files, please do not
// refactor this into an es6 module
module.exports = function defaultColors() {
	return {
		'neutral-0': '#ffffff',
		'neutral-10': '#f1f1f1',
		'neutral-20': '#d3d3d3',
		'neutral-80': '#707070',
		'neutral-90': '#1b1b1b',
		'neutral-100': '#000000',
		background: '#ffffff',
		heading: 'inherit',
		body: 'inherit',
		elevation: '#ffffff',
		overlay: 'rgba(0, 0, 0, 0.3)',
		primary: '#000000',
		contextualPrimary: {
			fill: '#000000',
			onFill: '#ffffff',
			text: '#000000',
			subtle: '#f5efef',
		},
		critical: {
			fill: '#cd2026',
			onFill: '#ffffff',
			text: '#a82826',
			subtle: '#f6eceb',
		},
		warning: {
			fill: '#ffbf00',
			onFill: '#000000',
			text: '#7e662a',
			subtle: '#f9eecf',
		},
		success: {
			fill: '#008000',
			onFill: '#ffffff',
			text: '#0a7A06',
			subtle: '#ebf1eb',
		},
	};
};
