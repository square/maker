import defaultIcons from './default-icons';
import { resolve, getPath } from './utils';
import defaultColors from './default-colors';
import defaultFonts from './default-fonts';
import defaultShapes from './default-shapes';

export default function defaultTheme() {
	return {
		colors: defaultColors(),
		fonts: defaultFonts(),
		icons: defaultIcons(),
		shapes: defaultShapes(),
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
					color: '@colors.contextualPrimary.fill',
				},
				tertiary: {
					variant: 'tertiary',
					color: '@colors.contextualPrimary.fill',
				},
				// filled patterns
				primaryFilled: {
					color: '@colors.contextualPrimary.fill',
					textColor: '@colors.contextualPrimary.onFill',
				},
				errorFilled: {
					color: '@colors.critical.fill',
					textColor: '@colors.critical.onFill',
				},
				successFilled: {
					color: '@colors.success.fill',
					textColor: '@colors.success.onFill',
				},
				warningFilled: {
					color: '@colors.warning.fill',
					textColor: '@colors.warning.onFill',
				},
				infoFilled: {
					color: '@colors["neutral-90"]',
					textColor: '@colors["neutral-10"]',
				},
				// outline patterns
				primaryOutline: {
					variant: 'secondary',
					color: '@colors.contextualPrimary.text',
				},
				errorOutline: {
					variant: 'secondary',
					color: '@colors.critical.text',
				},
				successOutline: {
					variant: 'secondary',
					color: '@colors.success.text',
				},
				warningOutline: {
					variant: 'secondary',
					color: '@colors.warning.text',
				},
				infoOutline: {
					variant: 'secondary',
					color: '@colors["neutral-90"]',
				},
				// subtle patterns
				primarySubtle: {
					textColor: '@colors.contextualPrimary.text',
					color: '@colors.contextualPrimary.subtle',
				},
				errorSubtle: {
					textColor: '@colors.critical.text',
					color: '@colors.critical.subtle',
				},
				successSubtle: {
					textColor: '@colors.success.text',
					color: '@colors.success.subtle',
				},
				warningSubtle: {
					textColor: '@colors.warning.text',
					color: '@colors.warning.subtle',
				},
				infoSubtle: {
					textColor: '@colors["neutral-90"]',
					color: '@colors["neutral-10"]',
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
		toast: {
			persistent: false,
			dismissAfter: 5000,
			iconName: 'info',
			bgColor: '@colors.background',
			color: '@colors["neutral-100"]',
			iconColor: '@colors.contextualPrimary.fill',
			patterns: {
				info: {}, // component default
				success: {
					iconName: 'success',
					iconColor: '@colors.success.fill',
				},
				warning: {
					iconName: 'warning',
					iconColor: '@colors.warning.fill',
				},
				error: {
					iconName: 'critical',
					iconColor: '@colors.critical.fill',
				},
			},

		},
		starrating: {
			color: '@colors.warning.fill',
		},
		progresscircle: {
			color: '@colors["neutral-100"]',
			iconColor: '@colors["neutral-100"]',
			iconName: undefined,
		},
		progressbar: {
			color: '@colors["neutral-100"]',
			size: 'medium',
			shape: undefined,
		},
		modal: {
			color: '@colors.body',
			bgColor: '@colors.background',
		},
		dialog: {
			color: '@colors.body',
			bgColor: '@colors.background',
		},
		blade: {
			color: '@colors.body',
			bgColor: '@colors.background',
		},
		container: {
			color: undefined,
			bgColor: undefined,
		},
		resolve,
		getPath,
	};
}
