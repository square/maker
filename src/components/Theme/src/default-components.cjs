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
			textPatternHover: undefined,
			color: '@colors.primary',
			textColor: undefined,
			fullWidth: false,
			align: 'center',
			colorHover: undefined,
			textColorHover: undefined,
			borderRadius: undefined,
			borderRadiusHover: undefined,
			borderWidth: undefined,
			borderWidthHover: undefined,
			borderColor: undefined,
			borderColorHover: undefined,
			boxShadow: undefined,
			boxShadowHover: undefined,
			pattern: undefined,
			patterns: {
				// fill contextual color patterns
				primaryFill: {
					color: '@colors.contextualPrimary.fill',
					textColor: '@colors.contextualPrimary.onFill',
				},
				errorFill: {
					color: '@colors.error.fill',
					textColor: '@colors.error.onFill',
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
					color: '@colors.error.text',
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
					textColor: '@colors.error.text',
					color: '@colors.error.subtle',
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
					color: '@colors.error.text',
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
			pattern: undefined,
			patterns: {
				primary: {
					color: '@colors.contextualPrimary.text',
				},
				error: {
					color: '@colors.error.text',
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
			pattern: 'paragraph',
			fontSize: undefined,
			textDecoration: undefined,
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
				},
			},
		},
		choice: {
			selectedColor: '@colors.primary',
		},
		stepper: {
			color: '@colors["neutral-10"]',
			textColor: '@colors["neutral-90"]',
			shape: undefined,
		},
		notice: {
			type: 'info',
			iconName: 'info',
			iconColor: '@colors["neutral-80"]',
			color: '@colors["neutral-90"]',
			bgColor: '@colors["neutral-10"]',
			pattern: 'info',
			patterns: {
				primary: {
					iconColor: '@colors.contextualPrimary.fill',
					color: '@colors.contextualPrimary.text',
					bgColor: '@colors.contextualPrimary.subtle',
				},
				error: {
					type: 'error',
					iconName: 'error',
					iconColor: '@colors.error.fill',
					color: '@colors.error.text',
					bgColor: '@colors.error.subtle',
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
				info: {}, // component default
			},
		},
		pill: {
			textColor: '@colors["neutral-0"]',
			bgColor: '@colors["neutral-90"]',
			pattern: 'info',
			patterns: {
				// filled patterns
				primary: {
					textColor: '@colors.contextualPrimary.onFill',
					bgColor: '@colors.contextualPrimary.fill',
				},
				error: {
					textColor: '@colors.error.onFill',
					bgColor: '@colors.error.fill',
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
					textColor: '@colors.error.text',
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
					textColor: '@colors.error.text',
					bgColor: '@colors.error.subtle',
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
			pattern: 'info',
			patterns: {
				primary: {
					textColor: '@colors.contextualPrimary.onFill',
					bgColor: '@colors.contextualPrimary.fill',
				},
				error: {
					textColor: '@colors.error.onFill',
					bgColor: '@colors.error.fill',
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
			pattern: 'info',
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
					iconName: 'error',
					showIcon: true,
					accentColor: '@colors.error.fill',
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
			pattern: undefined,
		},
		progressbar: {
			color: '@colors["neutral-100"]',
			size: 'medium',
			shape: undefined,
			pattern: undefined,
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
			pattern: undefined,
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
