/*
 * Theme data passed in by application
 * This follow the Theme UI Specification: https://theme-ui.com/theme-spec/
 * Imagine a "Brand API" that stores / passes for framework-agnostic consumpion
 */
export const websiteTheme = {
	profiles: [
		{
			id: 'custom-profile',
			colors: {
				'neutral-0': '#ffffff',
				'neutral-10': '#f1f1f1',
				'neutral-20': '#d3d3d3',
				'neutral-80': '#707070',
				'neutral-90': '#1b1b1b',
				'neutral-100': '#000000',
				background: '#ffffff',
				primary: '#7bbd4b',
				heading: '#000000',
				text: '#000000',
				button: '#7bbd4b',
				textbutton: '#000000',
				'color-elevation': '#ffffff',
				'color-overlay': 'rgba(0, 0, 0, 0.32)',
			},
		},
		{
			id: 'primary-light-bold',
			colors: {
				'neutral-0': '#ffffff',
				'neutral-10': '#f1f1f1',
				'neutral-20': '#d3d3d3',
				'neutral-80': '#707070',
				'neutral-90': '#1b1b1b',
				'neutral-100': '#000000',
				background: '#ffffff',
				primary: '#7bbd4b',
				heading: '#000000',
				text: '#000000',
				button: '#7bbd4b',
				textbutton: '#000000',
				'color-elevation': '#ffffff',
				'color-overlay': 'rgba(0, 0, 0, 0.32)',
			},
		},
		{
			id: 'primary-light-neutral',
			colors: {
				'neutral-0': '#f8f7f7',
				'neutral-10': '#eae9e9',
				'neutral-20': '#cdcccc',
				'neutral-80': '#6d6d6d',
				'neutral-90': '#1b1b1b',
				'neutral-100': '#000000',
				background: '#f8f7f7',
				primary: '#7bbd4b',
				heading: '#000000',
				text: '#000000',
				button: '#7bbd4b',
				textbutton: '#000000',
				'color-elevation': '#ffffff',
				'color-overlay': 'rgba(0, 0, 0, 0.32)',
			},
		},
		{
			id: 'primary-muted-bold',
			colors: {
				'neutral-0': '#f2f5ef',
				'neutral-10': '#e4e7e2',
				'neutral-20': '#c8cbc6',
				'neutral-80': '#6b6c6a',
				'neutral-90': '#1b1b1a',
				'neutral-100': '#000000',
				background: '#f2f5ef',
				primary: '#7bbd4b',
				heading: '#3a641c',
				text: '#3a641c',
				button: '#7bbd4b',
				textbutton: '#3a641c',
				'color-elevation': '#ffffff',
				'color-overlay': 'rgba(0, 0, 0, 0.32)',
			},
		},
		{
			id: 'primary-bold',
			colors: {
				'neutral-0': '#7bbd4b',
				'neutral-10': '#75b348',
				'neutral-20': '#689d40',
				'neutral-80': '#3b5527',
				'neutral-90': '#13170d',
				'neutral-100': '#000000',
				background: '#7bbd4b',
				primary: '#000000',
				heading: '#000000',
				text: '#000000',
				button: '#000000',
				textbutton: '#000000',
				'color-elevation': '#ffffff',
				'color-overlay': 'rgba(0, 0, 0, 0.32)',
			},
		},
		{
			id: 'primary-dark-bold',
			colors: {
				'neutral-0': '#000000',
				'neutral-10': '#3c3c3c',
				'neutral-20': '#575757',
				'neutral-80': '#848484',
				'neutral-90': '#f1f1f1',
				'neutral-100': '#ffffff',
				background: '#000000',
				primary: '#7bbd4b',
				heading: '#ffffff',
				text: '#ffffff',
				button: '#7bbd4b',
				textbutton: '#7bbd4b',
				'color-elevation': '#575757',
				'color-overlay': 'rgba(255, 255, 255, 0.32)',
			},
		},
	],
	colors: {
		'neutral-0': '#ffffff',
		'neutral-10': '#f1f1f1',
		'neutral-20': '#d3d3d3',
		'neutral-80': '#707070',
		'neutral-90': '#1b1b1b',
		'neutral-100': '#000000',
		background: '#ffffff',
		heading: '#000000',
		text: '#000000',
		button: '#7bbd4b',
		textbutton: '#000000',
		'color-elevation': '#ffffff',
		'color-overlay': 'rgba(0, 0, 0, 0.32)',
	},
	fonts: {
		baseSize: 16,
		sizeScale: 1.17,
	},
	text: {
		color: '@colors.text',
		fontWeight: 400,
		fontFamily: 'Open Sans',
	},
	heading: {
		color: '@colors.heading',
		fontWeight: 600,
		fontFamily: 'Open Sans',
	},
	button: {
		color: '@colors.button',
		shape: 'pill',
	},
	textbutton: {
		color: '@colors.textbutton',
	},
	actionbarbutton: {
		color: '@colors.button',
		shape: 'pill',
	},
	stepper: {
		color: '@colors["neutral-10"]',
		textColor: '@colors["neutral-100"]',
		shape: 'pill',
	},
	notice: {
		color: '',
	},
	modal: {
		bgColor: '@colors.background',
		color: '@colors.text',
	},
	dialog: {
		bgColor: '@colors.background',
		color: '@colors.text',
	},
	container: {
		color: '@colors.text',
	},
};

export const modern = {
	colors: {
		background: '#ffffff',
		heading: '#333232',
		text: '#000000',
		primary: '#000000',
		'neutral-0': '#ffffff',
		'neutral-10': '#f1f1f1',
		'neutral-20': '#d3d3d3',
		'neutral-80': '#707070',
		'neutral-90': '#1b1b1b',
		'neutral-100': '#000000',
		'color-elevation': '#ffffff',
		'color-overlay': 'rgba(0, 0, 0, 0.32)',
	},
	text: {
		fontFamily: 'Open Sans',
		fontWeight: '400',
		variants: {
			title: {
				fontFamily: 'Open Sans',
				fontWeight: '600',
			},
		},
	},
	fonts: {
		baseSize: 16,
		sizeScale: 1.15,
	},
};

export const midnight = {
	colors: {
		background: '#31353f',
		heading: '#ffffff',
		text: '#ffffff',
		primary: '#d5e2fb',
		'neutral-0': '#000000',
		'neutral-10': '#60636b',
		'neutral-20': '#777981',
		'neutral-80': '#9c9ea3',
		'neutral-90': '#f4f4f4',
		'neutral-100': '#ffffff',
		'color-elevation': '#777981',
		'color-overlay': 'rgba(255, 255, 255, 0.32)',
	},
	text: {
		fontFamily: 'Karla',
		fontWeight: '400',
		variants: {
			title: {
				fontFamily: 'Domine',
				fontWeight: '400',
			},
		},
	},
	fonts: {
		baseSize: 19,
		sizeScale: 1.217,
	},
};

export const spaces = {
	colors: {
		background: '#fff9f2',
		heading: '#0b474b',
		text: '#0b474b',
		primary: '#0b474b',
		'neutral-0': '#ffffff',
		'neutral-10': '#f1ebe4',
		'neutral-20': '#d3cec8',
		'neutral-80': '#706e6b',
		'neutral-90': '#1b1b1b',
		'neutral-100': '#000000',
		'color-elevation': '#ffffff',
		'color-overlay': 'rgba(0, 0, 0, 0.32)',
	},
	text: {
		fontFamily: 'Libre Franklin',
		fontWeight: '400',
		variants: {
			title: {
				fontFamily: 'Libre Franklin',
				fontWeight: '700',
			},
		},
	},
	fonts: {
		baseSize: 18,
		sizeScale: 1.297,
	},
};

export const santa = {
	colors: {
		background: '#cb2a2a',
		heading: '#ffffff',
		text: '#fffeeb',
		primary: '#367010',
		'neutral-0': '#000000',
		'neutral-10': '#e1695b',
		'neutral-20': '#ea8173',
		'neutral-80': '#f4a599',
		'neutral-90': '#fff5f3',
		'neutral-100': '#ffffff',
		'color-elevation': '#ea8173',
		'color-overlay': 'rgba(255, 255, 255, 0.32)',
	},
	text: {
		fontFamily: 'Rubik',
		fontWeight: '400',
		variants: {
			title: {
				fontFamily: 'Comfortaa',
				fontWeight: '700',
			},
		},
	},
	fonts: {
		baseSize: 18,
		sizeScale: 1.407,
	},
};
