<template>
	<component
		:is="tag"
		:class="[
			$s.Button,
			$s[`variant_${resolvedVariant}`],
			$s[`size_${adjustedSize}`],
			$s[`shape_${resolvedShape}`],
			$s[`align_${resolvedAlign}`],
			{
				[$s.fullWidth]: resolvedFullWidth,
				[$s.iconButton]: isSingleChild() && !resolvedFullWidth,
				[$s.loading]: loading,
			},
		]"
		:type="type"
		:disabled="isDisabled"
		:style="style"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<m-loading
			v-if="loading"
			:class="$s.Loading"
		/>
		<span
			:class="[
				$s.MainText,
				{
					[$s.TruncateText]: !isSingleChild(),
				}
			]"
		>
			<!-- @slot Button label -->
			<slot />
		</span>

		<span
			v-if="$scopedSlots.information"
			:class="[$s.InformationText, $s.TruncateText]"
		>
			<!-- @slot Information label -->
			<slot
				name="information"
			/>
		</span>
	</component>
</template>

<script>
import { kebabCase } from 'lodash';
import cssValidator from '@square/maker/utils/css-validator';
import { colord } from 'colord';
import { getContrast } from '@square/maker/utils/get-contrast';
import { BASE_TEN } from '@square/maker/utils/constants';
import { MLoading } from '@square/maker/components/Loading';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

function setColorVariables(tokens, variant) {
	const colorMain = colord(tokens.color);
	const colorMainHover = tokens.colorHover ? colord(tokens.colorHover) : colorMain;
	const colorContrast = tokens.textColor || getContrast(tokens.color, tokens.textColor);
	const colorContrastHover = !tokens.textColorHover && tokens.colorHover
		? getContrast(tokens.colorHover, tokens.textColor)
		: tokens.textColorHover;

	// Determine state adjustment type
	let stateAdjustment;
	if (variant === 'fill') {
		stateAdjustment = colorMainHover.isDark() ? 'lighten' : 'darken';
	} else {
		stateAdjustment = 'alpha';
	}
	// Define each state adjustment and generated color
	const hoverStateAdjust = 0.08;
	const activeStateAdjust = 0.16;
	const focusAlphaAdjust = 0.3;
	const colorHover = tokens.colorHover
		? tokens.colorHover : colorMainHover[stateAdjustment](hoverStateAdjust).toHex();
	const colorActive = colorMainHover[stateAdjustment](activeStateAdjust).toHex();
	const colorFocus = colorMainHover.alpha(focusAlphaAdjust).toHex();

	return {
		'--color-main': tokens.color,
		'--color-main-hover': tokens.colorHover,
		'--color-contrast': colorContrast,
		'--color-contrast-hover': colorContrastHover,
		'--color-hover': colorHover,
		'--color-active': colorActive,
		'--color-focus': colorFocus,
		'--border-radius': tokens.borderRadius,
		'--border-radius-hover': tokens.borderRadiusHover || tokens.borderRadius,
		'--border-width': tokens.borderWidth,
		'--border-width-hover': tokens.borderWidthHover || tokens.borderWidth,
		'--border-color': tokens.borderColor,
		'--border-color-hover': tokens.borderColorHover || tokens.borderColor,
		'--box-shadow': tokens.boxShadow,
		'--box-shadow-hover': tokens.boxShadowHover || tokens.boxShadow,
	};
}

const TEXT_STYLES = new Set([
	'fontFamily',
	'fontWeight',
	'fontSize',
	'fontStyle',
	'textTransform',
	'textDecoration',
]);

function isValidCss(style, value) {
	if (global.CSS) {
		return global.CSS.supports(style, value);
	}
	return true;
}

function formatCssStyles(theme, styles, suffix) {
	const formattedStyles = {};
	for (const [style, value] of Object.entries(styles)) {
		const cssStyle = kebabCase(style);
		if (TEXT_STYLES.has(style) && isValidCss(cssStyle, value)) {
			formattedStyles[`--${cssStyle}${suffix}`] = theme.resolve(value);
		}
	}
	return formattedStyles;
}

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
		 */
		pattern: {
			type: String,
			default: undefined,
		},
		/**
		 * Variant
		 */
		variant: {
			type: String,
			default: undefined,
			validator: (variant) => ['fill', 'outline', 'ghost'].includes(variant),
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
		 * Main color of button
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Text color of button (only applied on fill buttons)
		 */
		textColor: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Shape of preset button (overridden by borderRadius prop)
		 */
		shape: {
			type: String,
			default: undefined,
			validator: (shape) => ['squared', 'rounded', 'pill'].includes(shape),
		},
		/**
		 * Whether to make the button full-width
		 */
		fullWidth: {
			type: Boolean,
			default: undefined,
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
		 * Tag of button
		 */
		tag: {
			type: String,
			default: 'button',
			validator: (tag) => ['button', 'a'].includes(tag),
		},
		/**
		 * Type of the button
		 */
		type: {
			type: String,
			default: 'button',
		},
		/**
		 * Toggles button disabled state
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Toggles button loading state
		 */
		loading: {
			type: Boolean,
			default: false,
		},
		/**
		 * Text pattern in button label
		 * @advanced
		 */
		textPattern: {
			type: String,
			default: undefined,
		},
		/**
		 * Text hover pattern in button label
		 * @advanced
		 */
		textPatternHover: {
			type: String,
			default: undefined,
		},
		/**
		 * Main hover color of button
		 * @advanced
		 */
		colorHover: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Text hover color of button (only applied on fill buttons)
		 * @advanced
		 */
		textColorHover: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * button's border radius
		 * @advanced
		 */
		borderRadius: {
			type: String,
			default: undefined,
			validator: cssValidator('border-radius'),
		},
		/**
		 * button's border radius when hovered
		 * @advanced
		 */
		borderRadiusHover: {
			type: String,
			default: undefined,
			validator: cssValidator('border-radius'),
		},
		/**
		 * Border width of button (e.g. '3px')
		 * @advanced
		 */
		borderWidth: {
			type: String,
			default: undefined,
			validator: cssValidator('border-width'),
		},
		/**
		 * Border hover width of button (e.g. '3px')
		 * @advanced
		 */
		borderWidthHover: {
			type: String,
			default: undefined,
			validator: cssValidator('border-width'),
		},
		/**
		 * Border color of button (only applied on fill buttons)
		 * @advanced
		 */
		borderColor: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Border hover color of button (only applied on fill buttons)
		 * @advanced
		 */
		borderColorHover: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Box-shadow of button
		 * @advanced
		 */
		boxShadow: {
			type: String,
			default: undefined,
			validator: cssValidator('box-shadow'),
		},
		/**
		 * Box-shadow hover of button
		 * @advanced
		 */
		boxShadowHover: {
			type: String,
			default: undefined,
			validator: cssValidator('box-shadow'),
		},
	},

	computed: {
		...resolveThemeableProps('button', [
			'color',
			'colorHover',
			'size',
			'textColor',
			'textColorHover',
			'textPattern',
			'textPatternHover',
			'variant',
			'shape',
			'borderRadius',
			'borderRadiusHover',
			'align',
			'fullWidth',
			'pattern',
			'borderWidth',
			'borderWidthHover',
			'borderColor',
			'borderColorHover',
			'boxShadow',
			'boxShadowHover',
		]),
		style() {
			const tokens = {
				color: this.resolvedColor,
				colorHover: this.resolvedColorHover,
				textColor: this.resolvedTextColor,
				textColorHover: this.resolvedTextColorHover,
				borderRadius: this.resolvedBorderRadius,
				borderRadiusHover: this.resolvedBorderRadiusHover,
				borderWidth: this.resolvedBorderWidth,
				borderWidthHover: this.resolvedBorderWidthHover,
				borderColor: this.resolvedBorderColor,
				borderColorHover: this.resolvedBorderColorHover,
				boxShadow: this.resolvedBoxShadow,
				boxShadowHover: this.resolvedBoxShadowHover,
			};

			const { resolvedTextPattern, resolvedTextPatternHover, theme } = this;
			const textPattern = theme?.text?.patterns?.[resolvedTextPattern] || {};
			const textPatternHover = theme.text.patterns?.[resolvedTextPatternHover] || {};
			const textPatternStyles = formatCssStyles(theme, textPattern, '');
			const textPatternHoverStyles = formatCssStyles(theme, textPatternHover, '-hover');

			return {
				...setColorVariables(tokens, this.resolvedVariant),
				...textPatternStyles,
				...textPatternHoverStyles,
			};
		},
		isDisabled() {
			return this.disabled || this.loading;
		},
		fontSize() {
			return this.theme.text.patterns[this.resolvedTextPattern]?.fontSize;
		},
		adjustedSize() {
			// Scale button size to fontSize if one is set
			const fontSizeInt = Number.parseInt(this.fontSize, BASE_TEN);
			if (fontSizeInt) {
				const SMALL_MAX = 14;
				const MEDIUM_MAX = 24;
				if (fontSizeInt > MEDIUM_MAX) {
					return 'large';
				}
				if (fontSizeInt > SMALL_MAX) {
					return 'medium';
				}
				return 'small';
			}
			return this.resolvedSize;
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
	--border-radius: $maker-shape-button-border-radius;
	--color-main: $maker-color-primary;
	--font-family: $maker-font-label-font-family;
	--font-weight: $maker-font-label-font-weight;

	position: relative;
	display: inline-flex;
	align-items: center;
	box-sizing: border-box;
	min-width: 0;
	color: var(--color-contrast, #fff);
	font-weight: var(--font-weight);
	font-size: var(--font-size);
	font-family: var(--font-family);
	font-style: var(--font-style);
	text-transform: var(--text-transform);
	text-decoration: var(--text-decoration);
	vertical-align: middle;
	background-color: var(--color-main);
	border: none;
	border-radius: var(--border-radius);
	outline: none;
	box-shadow:
		var(--border, 0 0),
		var(--box-shadow, 0 0),
		var(--focus-border, 0 0);
	cursor: pointer;
	transition:
		color 0.2s ease-in,
		background-color 0.2s ease-in,
		filter 0.2s ease-in,
		box-shadow 0.2s ease-in,
		border-radius 0.2s ease-in,
		font-size 0.2s ease-in;
	user-select: none;
	touch-action: manipulation;
	fill: currentColor;

	&.shape_squared,
	&.shape_squared:hover:not(:disabled) {
		border-radius: 0;
	}

	&.shape_rounded,
	&.shape_rounded:hover:not(:disabled) {
		border-radius: var(--radius-rounded-button);
	}

	&.shape_pill,
	&.shape_pill:hover:not(:disabled) {
		border-radius: var(--radius-pill-button);
	}

	&.iconButton {
		min-width: max-content;
	}

	&.size_small {
		--font-size: 12px;

		height: 32px;
		padding: var(--small-padding);

		& > * {
			line-height: 1.4;
		}

		&.iconButton {
			width: 32px;
			padding: 0;
		}
	}

	&.size_medium {
		--font-size: 14px;

		height: 48px;
		padding: var(--medium-padding);

		& > * {
			line-height: 1.77;
		}

		&.iconButton {
			width: 48px;
			padding: 0;
		}
	}

	&.size_large {
		--font-size: 16px;

		height: 64px;
		padding: var(--large-padding);

		& > * {
			line-height: 1.5;
		}

		&.iconButton {
			width: 64px;
			padding: 0;
		}
	}

	&.iconButton > * {
		line-height: 0;
	}

	&.fullWidth {
		width: 100%;
	}

	&.align_center {
		justify-content: center;
	}

	&.align_stack {
		flex-direction: column;
		justify-content: center;

		& > * {
			line-height: 1.1;
		}
	}

	&.align_space-between {
		flex-direction: row-reverse;
		justify-content: space-between;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	&:focus {
		--focus-border:
			0 0 0 1px $maker-color-neutral-20,
			0 0 0 3px var(--color-focus);
	}

	&:hover:not(:disabled) {
		color: var(--color-contrast-hover, var(--color-contrast));
		font-weight: var(--font-weight-hover, var(--font-weight));
		font-size: var(--font-size-hover, var(--font-size));
		font-family: var(--font-family-hover, var(--font-family));
		font-style: var(--font-style-hover, var(--font-style));
		text-transform: var(--text-transform-hover, var(--text-transform));
		text-decoration: var(--text-decoration-hover, var(--text-decoration));
		background-color: var(--color-hover);
		border-radius: var(--border-radius-hover, var(--border-radius));
		box-shadow:
			var(--border-hover, 0 0),
			var(--box-shadow-hover, 0 0),
			var(--focus-border, 0 0);
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

/* Variants */
.Button.variant_fill,
.Button.variant_outline {
	--small-padding: 0 16px;
	--medium-padding: 0 24px;
	--large-padding: 0 32px;
}

.Button.variant_fill .Loading {
	color: var(--color-contrast);
}

.Button.variant_fill {
	--border: inset 0 0 0 var(--border-width, 1px) var(--border-color);
	--border-hover: inset 0 0 0 var(--border-width-hover, 1px) var(--border-color-hover);
}

.Button.variant_outline {
	--border: inset 0 0 0 var(--border-width, 1px) var(--color-main);
	--border-hover:
		inset 0 0 0 var(--border-width-hover, 1px)
		var(--color-main-hover, var(--color-main));
}

.Button.variant_ghost {
	--small-padding: 0 8px;
	--medium-padding: 0 12px;
	--large-padding: 0 20px;
	--box-shadow: 0 !important;
	--box-shadow-hover: 0 !important;
}

.Button.variant_outline,
.Button.variant_ghost {
	color: var(--color-main);
	background-color: transparent;

	& .Loading {
		color: var(--color-main);
	}

	&:hover:not(:disabled) {
		color: var(--color-main-hover, var(--color-main));
	}
}

.MainText {
	gap: 8px;
	width: max-content;
}

.iconButton .MainText {
	display: flex;
}

.InformationText {
	width: min-content;
	opacity: 0.6;
}

.TruncateText {
	/* -webkit-box is supported by all modern browsers */
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	width: fit-content;

	/* cancels out padding-bottom below */
	margin-bottom: -0.5em !important;

	/* https://stackoverflow.com/a/64039674/2766908 */
	padding-bottom: 0.5em !important;
	overflow: hidden;
	line-height: 1.1 !important;
	text-overflow: ellipsis;

	/* stylelint-disable-next-line no-descending-specificity */
	& > * {
		vertical-align: bottom;
	}
}

.align_stack .TruncateText {
	-webkit-line-clamp: 1;
}

.Button.align_center .InformationText {
	margin-left: 8px;
}

.Button.align_space-between .InformationText {
	margin-right: 8px;
}
</style>
