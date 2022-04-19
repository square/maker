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
			title: {
				fontFamily: 'inherit',
				fontWeight: '500',
			},
			paragraph: {
				fontFamily: 'inherit',
				fontWeight: '400',
			},
			label: {
				fontFamily: 'inherit',
				fontWeight: '500',
			},
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
			fontFamily: '@fonts.paragraph.fontFamily',
			color: '@colors.text',
			element: 'p',
			fontWeight: '@fonts.paragraph.fontWeight',
			fontStyle: 'inherit',
			textTransform: 'inherit',
			textAlign: 'inherit',
			patterns: {
				headline: {
					size: 7,
					fontFamily: '@fonts.title.fontFamily',
					fontWeight: '700',
					element: 'h1',
					color: '@colors.heading',
				},
				title: {
					size: 3,
					fontFamily: '@fonts.title.fontFamily',
					fontWeight: '@fonts.title.fontWeight',
					element: 'h2',
					color: '@colors.heading',
				},
				paragraph: {}, // component default
				label: {
					fontFamily: '@fonts.label.fontFamily',
					fontWeight: '@fonts.label.fontWeight',
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
