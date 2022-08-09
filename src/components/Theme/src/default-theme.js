import defaultIcons from './default-icons';
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
		icons: defaultIcons,
		shapes: {
			defaultBorderRadius: '4px',
			cardBorderRadius: '4px',
			buttonBorderRadius: '4px',
			imageBorderRadius: '0px',
		},
		profiles: {},
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
		link: {
			color: '@colors.primary',
		},
		textbutton: {
			color: '@colors.primary',
			size: 'medium',
			patterns: {
				error: {
					color: '@colors.critical.text',
				},
				success: {
					color: '@colors.success.text',
				},
				warning: {
					color: '@colors.warning.text',
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
					fontWeight: '@fonts.heading.fontWeight',
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
			selectedColor: '@colors.primary',
		},
		stepper: {
			color: '@colors["neutral-10"]',
			textColor: '@colors["neutral-90"]',
		},
		notice: {
			type: 'info',
			patterns: {
				error: {
					type: 'error',
					iconName: 'critical',
					iconColor: '@colors.critical.fill',
					color: '@colors.critical.text',
					bgColor: '@colors.critical.subtle',
				},
				success: {
					type: 'success',
					iconName: 'success',
					iconColor: '@colors.success.fill',
					color: '@colors.success.text',
					bgColor: '@colors.success.subtle',
				},
				warning: {
					type: 'warning',
					iconName: 'warning',
					iconColor: '@colors.warning.fill',
					color: '@colors.warning.text',
					bgColor: '@colors.warning.subtle',
				},
				info: {
					type: 'info',
					iconName: 'info',
					iconColor: '@colors["neutral-80"]',
					color: '@colors["neutral-90"]',
					bgColor: '@colors["neutral-10"]',
				},
			},
		},
		pill: {
			textColor: '@colors["neutral-0"]',
			bgColor: '@colors["neutral-90"]',
			patterns: {
				// filled patterns
				primary: {
					textColor: '@colors.contextualPrimary.onFill',
					bgColor: '@colors.contextualPrimary.fill',
				},
				error: {
					textColor: '@colors.critical.onFill',
					bgColor: '@colors.critical.fill',
				},
				success: {
					textColor: '@colors.success.onFill',
					bgColor: '@colors.success.fill',
				},
				warning: {
					textColor: '@colors.warning.onFill',
					bgColor: '@colors.warning.fill',
				},
				info: {}, // component default
				// outline patterns
				primaryOutline: {
					textColor: '@colors.contextualPrimary.text',
					bgColor: 'transparent',
				},
				errorOutline: {
					textColor: '@colors.critical.text',
					bgColor: 'transparent',
				},
				successOutline: {
					textColor: '@colors.success.text',
					bgColor: 'transparent',
				},
				warningOutline: {
					textColor: '@colors.warning.text',
					bgColor: 'transparent',
				},
				infoOutline: {
					textColor: '@colors["neutral-90"]',
					bgColor: 'transparent',
				},
				// subtle patterns
				primarySubtle: {
					textColor: '@colors.contextualPrimary.text',
					bgColor: '@colors.contextualPrimary.subtle',
				},
				errorSubtle: {
					textColor: '@colors.critical.text',
					bgColor: '@colors.critical.subtle',
				},
				successSubtle: {
					textColor: '@colors.success.text',
					bgColor: '@colors.success.subtle',
				},
				warningSubtle: {
					textColor: '@colors.warning.text',
					bgColor: '@colors.warning.subtle',
				},
				infoSubtle: {
					textColor: '@colors["neutral-90"]',
					bgColor: '@colors["neutral-10"]',
				},
			},
		},
		badge: {
			textColor: '@colors["neutral-0"]',
			bgColor: '@colors["neutral-90"]',
			patterns: {
				primary: {
					textColor: '@colors.contextualPrimary.onFill',
					bgColor: '@colors.contextualPrimary.fill',
				},
				error: {
					textColor: '@colors.critical.onFill',
					bgColor: '@colors.critical.fill',
				},
				success: {
					textColor: '@colors.success.onFill',
					bgColor: '@colors.success.fill',
				},
				warning: {
					textColor: '@colors.warning.onFill',
					bgColor: '@colors.warning.fill',
				},
				info: {}, // component default
			},
		},
		progresscircle: {
			color: '@colors.contextualPrimary.fill',
			iconColor: '@colors.contextualPrimary.fill',
			iconName: undefined,
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
