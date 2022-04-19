import { resolve, getPath } from './utils';

export default function defaultTheme() {
	return {
		colors: {
			background: '#ffffff',
			heading: '#000000',
			text: '#000000',
			primary: '#000000',
			secondary: '#000000',
			'neutral-0': '#ffffff',
			'neutral-10': '#f1f1f1',
			'neutral-20': '#d3d3d3',
			'neutral-80': '#707070',
			'neutral-90': '#1b1b1b',
			'neutral-100': '#000000',
			elevation: '#ffffff',
			overlay: 'rgba(0, 0, 0, 0.3)',
		},
		fonts: {
			baseSize: 16,
			sizeScale: 1.17,
			body: 'inherit',
			heading: 'inherit',
			headline: 'inherit',
			label: 'inherit',
		},
		fontWeights: {
			body: 400,
			heading: 600,
			headline: 400,
			label: 500,
		},
		profiles: [
			{
				id: 'defaultProfile',
			},
		],
		button: {
			size: 'medium',
			variant: 'primary',
			shape: 'rounded',
			color: '@colors.primary',
			textColor: undefined,
			fullWidth: false,
			align: 'center',
			patterns: {
				primary: {
					variant: 'primary',
					color: '@colors.primary',
				},
				secondary: {
					variant: 'secondary',
					color: '@colors.secondary',
				},
				tertiary: {
					variant: 'tertiary',
				},
			},
		},
		textbutton: {
			color: '@colors.primary',
			size: 'medium',
		},
		actionbarbutton: {
			color: '@colors.primary',
			shape: 'pill',
			textColor: undefined,
			fullWidth: false,
			align: 'center',
		},
		text: {
			size: 0,
			fontFamily: '@fonts.body',
			color: '@colors.text',
			element: 'p',
			fontWeight: '@fontWeights.body',
			fontStyle: 'inherit',
			textTransform: 'inherit',
			textAlign: 'inherit',
			patterns: {
				headline: {
					size: 7,
					fontFamily: '@fonts.headline',
					fontWeight: '@fontWeights.headline',
					element: 'h1',
					color: '@colors.heading',
				},
				heading: {
					size: 3,
					fontFamily: '@fonts.heading',
					fontWeight: '@fontWeights.heading',
					element: 'h2',
					color: '@colors.heading',
				},
				text: {}, // component default
				label: {
					fontFamily: '@fonts.label',
					fontWeight: '@fontWeights.label',
				},
			},
		},
		choice: {
			selectedColor: undefined,
		},
		stepper: {
			color: '@colors["neutral-10"]',
			textColor: '@colors["neutral-90"]',
			shape: 'pill',
		},
		notice: {
			color: undefined,
		},
		modal: {
			color: undefined,
			bgColor: undefined,
		},
		dialog: {
			color: undefined,
			bgColor: undefined,
		},
		container: {
			color: undefined,
			bgColor: undefined,
		},
		resolve,
		getPath,
	};
}
