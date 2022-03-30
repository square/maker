import { resolve, getPath } from './utils';

export default function defaultTheme() {
	return {
		colors: {
			'neutral-0': '#ffffff',
			'neutral-10': '#f1f1f1',
			'neutral-20': '#d3d3d3',
			'neutral-80': '#707070',
			'neutral-90': '#1b1b1b',
			'neutral-100': '#000000',
			background: '#ffffff',
			heading: 'inherit',
			text: 'inherit',
			elevation: '#ffffff',
			overlay: 'rgba(0, 0, 0, 0.3)',
			primary: '#000000',
		},
		fonts: {
			baseSize: 16,
			sizeScale: 1.17,
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
			fontFamily: 'inherit',
			color: '@colors.text',
			element: 'p',
			fontWeight: 'inherit',
			fontStyle: 'inherit',
			textTransform: 'inherit',
			textAlign: 'inherit',
			variant: 'body',
			variants: {
				headline: {
					size: 4,
					fontWeight: '700',
					element: 'h1',
				},
				title: {
					size: 2,
					fontWeight: '500',
					element: 'h2',
				},
				body: {
					size: 0,
					fontWeight: '400',
					element: 'p',
				},
				label: {
					size: -1,
					fontWeight: '500',
					element: 'h6',
					textTransform: 'uppercase',
				},
			},
		},
		heading: {
			fontFamily: 'inherit',
			size: 2,
			color: '@colors.heading',
			fontWeight: 700,
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
