// note: this is intentionally written as a cjs module
// so it can be used by build files, please do not
// refactor this into an es6 module
module.exports = function defaultComponents() {
	return {
		// "local" component theme settings
		button: {
			size: 'medium',
			variant: 'fill',
			shape: undefined,
			textPattern: 'buttonLabel',
			color: '@colors.primary',
			textColor: undefined,
			fullWidth: false,
			align: 'center',
			patterns: {
				// fill contextual color patterns
				primaryFill: {
					color: '@colors.contextualPrimary.fill',
					textColor: '@colors.contextualPrimary.onFill',
				},
				errorFill: {
					color: '@colors.critical.fill',
					textColor: '@colors.critical.onFill',
				},
				successFill: {
					color: '@colors.success.fill',
					textColor: '@colors.success.onFill',
				},
				warningFill: {
					color: '@colors.warning.fill',
					textColor: '@colors.warning.onFill',
				},
				infoFill: {
					color: '@colors["neutral-90"]',
					textColor: '@colors["neutral-10"]',
				},
				// outline contextual color patterns
				primaryOutline: {
					variant: 'outline',
					color: '@colors.contextualPrimary.text',
				},
				errorOutline: {
					variant: 'outline',
					color: '@colors.critical.text',
				},
				successOutline: {
					variant: 'outline',
					color: '@colors.success.text',
				},
				warningOutline: {
					variant: 'outline',
					color: '@colors.warning.text',
				},
				infoOutline: {
					variant: 'outline',
					color: '@colors["neutral-90"]',
				},
				// subtle contextual color patterns
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
				// ghost contextual color patterns
				primaryGhost: {
					variant: 'ghost',
					color: '@colors.contextualPrimary.text',
				},
				errorGhost: {
					variant: 'ghost',
					color: '@colors.critical.text',
				},
				successGhost: {
					variant: 'ghost',
					color: '@colors.success.text',
				},
				warningGhost: {
					variant: 'ghost',
					color: '@colors.warning.text',
				},
				infoGhost: {
					variant: 'ghost',
					color: '@colors["neutral-90"]',
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
				primary: {
					color: '@colors.contextualPrimary.text',
				},
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
				buttonLabel: {
					fontFamily: '@fonts.label.fontFamily',
					fontWeight: '@fonts.label.fontWeight',
					fontSize: 'inherit',
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
				primary: {
					iconColor: '@colors.contextualPrimary.fill',
					color: '@colors.contextualPrimary.text',
					bgColor: '@colors.contextualPrimary.subtle',
				},
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
			showIcon: false,
			bgColor: '@colors.background',
			color: '@colors.body',
			accentColor: '@colors.body',
			patterns: {
				info: {}, // component default
				success: {
					iconName: 'success',
					showIcon: true,
					accentColor: '@colors.success.fill',
				},
				warning: {
					iconName: 'warning',
					showIcon: true,
					accentColor: '@colors.warning.fill',
				},
				error: {
					iconName: 'critical',
					showIcon: true,
					accentColor: '@colors.critical.fill',
				},
				primary: {
					accentColor: '@colors.contextualPrimary.fill',
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
		divider: {
			color: '@colors["neutral-20"]',
			size: '1px',
			patterns: {
				'gap-8': {
					color: '@colors["neutral-10"]',
					size: '8px',
				},
				'gap-16': {
					color: '@colors["neutral-10"]',
					size: '16px',
				},
			},
		},
	};
};
