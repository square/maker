<template>
	<button
		:class="[
			// component internal styles
			buttonClass,
			// tagged classes for external
			// targeting & styling
			'm-button',
			'p-'+resolvedPattern,
			{
				's-loading': loading,
			},
		]"
		:type="type"
		:disabled="isDisabled"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<m-loading
			v-if="loading"
			:class="loadingClass"
		/>
		<span :class="mainTextClass">
			<!-- @slot Button label -->
			<slot />
		</span>

		<span
			v-if="$scopedSlots.information"
			:class="informationTextClass"
		>
			<!-- @slot Information label -->
			<slot
				name="information"
			/>
		</span>
	</button>
</template>

<script>
import { css } from '@emotion/css';
import { colord } from 'colord';
import { getContrast } from '@square/maker/utils/get-contrast';
import { MLoading } from '@square/maker/components/Loading';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

function setColorVariables(tokens, variant) {
	const colorMainObject = colord(tokens.color);
	const colorContrast = getContrast(tokens.color, tokens.textColor);
	// Determine state adjustment type
	let stateAdjustment;
	if (variant === 'primary') {
		stateAdjustment = colorMainObject.isDark() ? 'lighten' : 'darken';
	} else {
		stateAdjustment = 'alpha';
	}
	// Define each state adjustment and generated color
	const hoverStateAdjust = 0.08;
	const activeStateAdjust = 0.16;
	const focusAlphaAdjust = 0.3;
	const colorHover = colorMainObject[stateAdjustment](hoverStateAdjust).toHex();
	const colorActive = colorMainObject[stateAdjustment](activeStateAdjust).toHex();
	const colorFocus = colorMainObject.alpha(focusAlphaAdjust).toHex();

	return {
		'--color-main': tokens.color,
		'--color-contrast': colorContrast,
		'--color-hover': colorHover,
		'--color-active': colorActive,
		'--color-focus': colorFocus,
	};
}

const ButtonStyles = {
	'--radius-rounded-button': '8px',
	'--radius-pill-button': '32px',

	position: 'relative',
	display: 'inline-flex',
	alignItems: 'center',
	minWidth: '0',
	color: 'var(--color-contrast, #fff)',
	fontWeight: 'var(--maker-font-label-font-weight, 500)',
	fontFamily: 'var(--maker-font-label-font-family, inherit)',
	verticalAlign: 'middle',
	backgroundColor: 'var(--color-main, var(--maker-color-primary, #000))',
	border: 'none',
	borderRadius: 'var(--maker-shape-button-border-radius, var(--radius-rounded-button))',
	outline: 'none',
	boxShadow:
		`var(--outline-border, 0 0),
		var(--focus-border, 0 0)`,
	cursor: 'pointer',
	transition:
		`color 0.2s ease-in,
		background-color 0.2s ease-in,
		filter 0.2s ease-in,
		box-shadow 0.2s ease-in`,
	userSelect: 'none',
	touchAction: 'manipulation',
	fill: 'currentColor',

	'&:disabled': {
		cursor: 'not-allowed',
		opacity: '0.5',
	},

	'&:focus': {
		'--focus-border':
			`0 0 0 1px var(--maker-color-neutral-20, #fff),
			0 0 0 3px var(--color-focus)`,
	},

	'&:hover:not(:disabled)': {
		backgroundColor: 'var(--color-hover)',
	},

	'&:active:not(:disabled)': {
		backgroundColor: 'var(--color-active)',
	},
};

const IconButtonStyles = {
	justifyContent: 'center',
	minWidth: 'max-content',
	'& > *': {
		lineHeight: '0',
	},
};

const ButtonLoadingStyles = {
	color: 'transparent !important',
	opacity: '1',
};

const ShapeStyles = {
	squared: {
		borderRadius: '0',
	},
	rounded: {
		borderRadius: 'var(--radius-rounded-button)',
	},
	pill: {
		borderRadius: 'var(--radius-pill-button)',
	},
};

const ButtonAlignStyles = {
	center: {
		justifyContent: 'center',
	},
	stack: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	'space-between': {
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
	},
};

const FullWidthStyles = {
	width: '100%',
};

const MainTextStyles = {
	display: 'flex',
	gap: '8px',
	alignItems: 'center',
	width: 'max-content',
	maxWidth: '100%',
	overflow: 'hidden',
	lineHeight: '1',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
};

const InformationTextStyles = {
	width: 'min-content',
	maxWidth: '100%',
	overflow: 'hidden',
	lineHeight: '1',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	opacity: '0.6',
};

const InformationTextAlignStyles = {
	center: {
		marginLeft: '8px',
	},
	stack: {},
	'space-between': {
		marginRight: '8px',
	},
};

const LoadingStyles = {
	position: 'absolute',
	top: '4px',
	right: '4px',
	bottom: '4px',
	left: '4px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'transparent',
};

const ButtonSizeStyles = {
	small: {
		height: '32px',
		padding: 'var(--small-padding)',
		fontSize: '12px',
		'& > *': {
			lineHeight: '1.4',
		},
	},
	medium: {
		height: '48px',
		padding: 'var(--medium-padding)',
		fontSize: '14px',
		'& > *': {
			lineHeight: '1.77',
		},
	},
	large: {
		height: '64px',
		padding: 'var(--large-padding)',
		fontSize: '16px',
		'& > *': {
			lineHeight: '1.5',
		},
	},
};

const IconButtonSizeStyles = {
	small: {
		width: '32px',
		padding: '0',
	},
	medium: {
		width: '48px',
		padding: '0',
	},
	large: {
		width: '64px',
		padding: '0',
	},
};

const ButtonVariantStyles = {
	primary: {
		'--small-padding': '0 16px',
		'--medium-padding': '0 24px',
		'--large-padding': '0 32px',
	},
	secondary: {
		'--small-padding': '0 16px',
		'--medium-padding': '0 24px',
		'--large-padding': '0 32px',
		'--outline-border': 'inset 0 0 0 1px var(--color-main)',
		color: 'var(--color-main)',
		backgroundColor: 'transparent',
	},
	tertiary: {
		'--small-padding': '0 8px',
		'--medium-padding': '0 12px',
		'--large-padding': '0 20px',
		color: 'var(--color-main)',
		backgroundColor: 'transparent',
	},
};

const LoadingVariantStyles = {
	primary: {
		color: 'var(--color-contrast)',
	},
	secondary: {
		color: 'var(--color-main)',
	},
	tertiary: {
		color: 'var(--color-main)',
	},
};


/**
 * Button component
 * @inheritAttrs button
 * @inheritListeners button
 */
export default {
	components: {
		MLoading,
	},

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	props: {
		/**
		 * patterns are defined at the theme level
		 * @values pattern defined in theme
		 */
		pattern: {
			type: String,
			default: undefined,
		},
		/**
		 * Type of the button
		 */
		type: {
			type: String,
			default: 'button',
		},
		/**
		 * Size of the button
		 */
		size: {
			type: String,
			default: undefined,
			validator: (size) => ['small', 'medium', 'large'].includes(size),
		},
		/**
		 * Whether to make the button full-width
		 */
		fullWidth: {
			type: Boolean,
			default: undefined,
		},
		/**
		 * Background color of button
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Text color of button
		 */
		textColor: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Variant
		 * @values primary, secondary, tertiary
		 */
		variant: {
			type: String,
			default: undefined,
			validator: (variant) => ['primary', 'secondary', 'tertiary'].includes(variant),
		},
		/**
		 * Shape of button
		 */
		shape: {
			type: String,
			default: undefined,
			validator: (shape) => ['squared', 'rounded', 'pill'].includes(shape),
		},
		/**
		 * Toggles button disabled state
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * How to align button's contents
		 */
		align: {
			type: String,
			default: undefined,
			validator: (align) => ['center', 'stack', 'space-between'].includes(align),
		},
		/**
		 * Toggles button loading state
		 */
		loading: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		...resolveThemeableProps('button', [
			'color',
			'size',
			'textColor',
			'variant',
			'shape',
			'align',
			'fullWidth',
			'pattern',
		]),
		buttonClass() {
			const classes = [];
			classes.push(ButtonStyles);
			if (this.isIconButton) {
				classes.push(IconButtonStyles);
			}
			if (this.loading) {
				classes.push(ButtonLoadingStyles);
			}
			classes.push(ShapeStyles[this.resolvedShape]);
			if (this.align) {
				classes.push(ButtonAlignStyles[this.resolvedAlign]);
			}
			if (this.fullWidth) {
				classes.push(FullWidthStyles);
			}
			if (this.resolvedSize) {
				classes.push(ButtonSizeStyles[this.resolvedSize]);
				if (this.isIconButton) {
					classes.push(IconButtonSizeStyles[this.resolvedSize]);
				}
			}
			classes.push(ButtonVariantStyles[this.resolvedVariant]);
			classes.push(this.buttonStyle);
			return css(classes);
		},
		mainTextClass() {
			return css(MainTextStyles);
		},
		informationTextClass() {
			const classes = [];
			classes.push(InformationTextStyles);
			if (this.resolvedAlign) {
				classes.push(InformationTextAlignStyles[this.resolvedAlign]);
			}
			return css(classes);
		},
		loadingClass() {
			return css([
				LoadingStyles,
				LoadingVariantStyles[this.resolvedVariant],
			]);
		},
		isIconButton() {
			return this.isSingleChild() && !this.resolvedFullWidth;
		},
		buttonStyle() {
			const tokens = {
				color: this.resolvedColor,
				textColor: this.resolvedTextColor,
			};
			return setColorVariables(tokens, this.resolvedVariant);
		},
		isDisabled() {
			return this.disabled || this.loading;
		},
	},

	methods: {
		isSingleChild() {
			if (this.$scopedSlots.information) {
				return false;
			}
			const empty = 0;
			const children = (this.$slots.default || []).filter(
				(vnode) => vnode.tag || vnode.text.trim().length > empty,
			);
			const firstChildIndex = 0;
			const singleChild = 1;
			return children.length === singleChild && children[firstChildIndex].tag;
		},
	},
};
</script>

<style module="$s">
.Button {
	--radius-rounded-button: 8px;
	--radius-pill-button: 32px;

	position: relative;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	color: var(--color-contrast, #fff);
	font-weight: var(--maker-font-label-font-weight, 500);
	font-family: var(--maker-font-label-font-family, inherit);
	vertical-align: middle;
	background-color: var(--color-main, var(--maker-color-primary, #000));
	border: none;
	border-radius: var(--maker-shape-button-border-radius, var(--radius-rounded-button));
	outline: none;
	box-shadow:
		var(--outline-border, 0 0),
		var(--focus-border, 0 0);
	cursor: pointer;
	transition:
		color 0.2s ease-in,
		background-color 0.2s ease-in,
		filter 0.2s ease-in,
		box-shadow 0.2s ease-in;
	user-select: none;
	touch-action: manipulation;
	fill: currentColor;

	&.iconButton {
		min-width: max-content;
	}

	&.iconButton > * {
		line-height: 0;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	&:focus {
		--focus-border:
			0 0 0 1px var(--maker-color-neutral-20, #fff),
			0 0 0 3px var(--color-focus);
	}

	&:hover:not(:disabled) {
		background-color: var(--color-hover);
	}

	&:active:not(:disabled) {
		background-color: var(--color-active);
	}

	&.loading {
		/* don't inherit color in loading state on hover/active */
		color: transparent !important;
		opacity: 1;
	}
}

.align_center {
	justify-content: center;
}

.align_stack {
	flex-direction: column;
	justify-content: center;
}

.align_space-between {
	flex-direction: row-reverse;
	justify-content: space-between;
}

.fullWidth {
	width: 100%;
}

.shape_squared {
	border-radius: 0;
}

.shape_rounded {
	border-radius: var(--radius-rounded-button);
}

.shape_pill {
	border-radius: var(--radius-pill-button);
}

.size_small {
	height: 32px;
	padding: var(--small-padding);
	font-size: 12px;

	& > * {
		line-height: 1.4;
	}

	&.iconButton {
		width: 32px;
		padding: 0;
	}
}

.size_medium {
	height: 48px;
	padding: var(--medium-padding);
	font-size: 14px;

	& > * {
		line-height: 1.77;
	}

	&.iconButton {
		width: 48px;
		padding: 0;
	}
}

.size_large {
	height: 64px;
	padding: var(--large-padding);
	font-size: 16px;

	& > * {
		line-height: 1.5;
	}

	&.iconButton {
		width: 64px;
		padding: 0;
	}
}

.Loading {
	position: absolute;
	top: 4px;
	right: 4px;
	bottom: 4px;
	left: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
}

.variant_primary,
.variant_secondary {
	--small-padding: 0 16px;
	--medium-padding: 0 24px;
	--large-padding: 0 32px;
}

.variant_primary .Loading {
	color: var(--color-contrast);
}

.variant_secondary {
	--outline-border: inset 0 0 0 1px var(--color-main);
}

.variant_tertiary {
	--small-padding: 0 8px;
	--medium-padding: 0 12px;
	--large-padding: 0 20px;
}

.variant_secondary,
.variant_tertiary {
	color: var(--color-main);
	background-color: transparent;

	& .Loading {
		color: var(--color-main);
	}
}

.MainText {
	display: flex;
	gap: 8px;
	align-items: center;
	width: max-content;
	max-width: 100%;
	overflow: hidden;
	line-height: 1;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.InformationText {
	width: min-content;
	max-width: 100%;
	overflow: hidden;
	line-height: 1;
	white-space: nowrap;
	text-overflow: ellipsis;
	opacity: 0.6;
}

.align_center .InformationText {
	margin-left: 8px;
}

.align_space-between .InformationText {
	margin-right: 8px;
}
</style>
