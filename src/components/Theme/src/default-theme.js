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
			body: 'inherit',
			elevation: '#ffffff',
			overlay: 'rgba(0, 0, 0, 0.3)',
			primary: '#000000',
			critical: '#a82826',
			criticalBg: '#f6eceb',
			success: '#0a7a06',
			successBg: '#ebf1eb',
			warning: '#7e662a',
			warningBg: '#f9eecf',
		},
		fonts: {
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
		},
		shapes: {
			defaultBorderRadius: '4px',
			buttonBorderRadius: '4px',
			imageBorderRadius: '0px',
		},
		profiles: [
			{
				id: 'defaultProfile',
			},
		],
		button: {
			size: 'medium',
			variant: 'primary',
			shape: undefined,
			color: '@colors.primary',
			textColor: undefined,
			fullWidth: false,
			align: 'center',
			patterns: {
				primary: {
					variant: 'primary',
				},
				secondary: {
					variant: 'secondary',
				},
				tertiary: {
					variant: 'tertiary',
				},
			},
		},
		textbutton: {
			color: '@colors.primary',
			size: 'medium',
			patterns: {
				error: {
					color: '@colors.critical',
				},
				success: {
					color: '@colors.success',
				},
				warning: {
					color: '@colors.warning',
				},
				info: {
					color: '@colors["neutral-90"]',
				},
			},
		},
		actionbarbutton: {
			color: '@colors.primary',
			shape: undefined,
			textColor: undefined,
			fullWidth: false,
			align: 'center',
		},
		image: {
			shape: undefined,
		},
		card: {
			shape: undefined,
		},
		text: {
			size: 0,
			fontFamily: '@fonts.body.fontFamily',
			color: '@colors.body',
			element: 'p',
			fontWeight: '@fonts.body.fontWeight',
			fontStyle: 'inherit',
			textTransform: 'inherit',
			textAlign: 'inherit',
			patterns: {
				headline: {
					size: 7,
					fontFamily: '@fonts.heading.fontFamily',
					fontWeight: '@fonts.heading.fontFamily',
					element: 'h1',
					color: '@colors.heading',
				},
				title: {
					size: 3,
					fontFamily: '@fonts.heading.fontFamily',
					fontWeight: '@fonts.heading.fontWeight',
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
		},
		notice: {
			pattern: 'info', // default pattern
			patterns: {
				error: {
					type: 'error',
					color: '@colors.critical',
					bgColor: '@colors.criticalBg',
				},
				success: {
					type: 'success',
					color: '@colors.success',
					bgColor: '@colors.successBg',
				},
				warning: {
					type: 'warning',
					color: '@colors.warning',
					bgColor: '@colors.warningBg',
				},
				info: {
					type: 'info',
					color: '@colors["neutral-90"]',
					bgColor: '@colors["neutral-10"]',
				},
			},
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
