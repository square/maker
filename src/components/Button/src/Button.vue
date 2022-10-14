<template>
	<button
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
			}
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
		<m-text
			:class="[
				$s.MainText,
				{
					[$s.TruncateText]: !isSingleChild(),
				}
			]"
			:pattern="resolvedTextPattern"
			element="span"
			color="inherit"
		>
			<!-- @slot Button label -->
			<slot />
		</m-text>

		<m-text
			v-if="$scopedSlots.information"
			:class="[$s.InformationText, $s.TruncateText]"
			:pattern="resolvedTextPattern"
			element="span"
			color="inherit"
		>
			<!-- @slot Information label -->
			<slot
				name="information"
			/>
		</m-text>
	</button>
</template>

<script>
import cssValidator from '@square/maker/utils/css-validator';
import { colord } from 'colord';
import { getContrast } from '@square/maker/utils/get-contrast';
import { BASE_TEN } from '@square/maker/utils/constants';
import { MLoading } from '@square/maker/components/Loading';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import { MText } from '@square/maker/components/Text';

function setColorVariables(tokens, variant) {
	const colorMain = colord(tokens.color);
	const colorMainHover = tokens.colorHover ? colord(tokens.colorHover) : colorMain;
	const colorContrast = tokens.textColor || getContrast(tokens.color, tokens.textColor);
	const colorContrastHover = tokens.textColorHover || getContrast(colorMainHover, tokens.textColor);

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
	const colorHover = colorMainHover[stateAdjustment](hoverStateAdjust).toHex();
	const colorActive = colorMainHover[stateAdjustment](activeStateAdjust).toHex();
	const colorFocus = colorMainHover.alpha(focusAlphaAdjust).toHex();

	return {
		'--color-main': tokens.color,
		'--color-main-hover': tokens.colorHover || tokens.color,
		'--color-contrast': colorContrast,
		'--color-contrast-hover': colorContrastHover,
		'--color-hover': colorHover,
		'--color-active': colorActive,
		'--color-focus': colorFocus,
		'--border-radius': tokens.borderRadius,
		'--border-radius-hover': tokens.borderRadiusHover || tokens.borderRadius,
		'--border-width': tokens.borderWidth || '1px',
		'--border-width-hover': tokens.borderWidthHover || tokens.borderWidth || '1px',
		'--border-color': tokens.borderColor,
		'--border-color-hover': tokens.borderColorHover || tokens.borderColor,
		'--box-shadow': tokens.boxShadow,
		'--box-shadow-hover': tokens.boxShadowHover || tokens.boxShadow,
	};
}

/**
 * Button component
 * @inheritAttrs button
 * @inheritListeners button
 */
export default {
	components: {
		MLoading,
		MText,
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
		 * MText pattern in button label
		 */
		textPattern: {
			type: String,
			default: 'buttonLabel',
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
		 * Main hover color of button
		 */
		colorHover: {
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
		 * Text hover color of button (only applied on fill buttons)
		 */
		textColorHover: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Variant
		 * @values fill, outline, ghost
		 */
		variant: {
			type: String,
			default: undefined,
			validator: (variant) => ['fill', 'outline', 'ghost'].includes(variant),
		},
		/**
		 * Shape of preset button (overridden by borderRadius prop)
		 * @values squared, rounded, pill
		 */
		shape: {
			type: String,
			default: undefined,
			validator: (shape) => ['squared', 'rounded', 'pill'].includes(shape),
		},
		/**
		 * Shape of button
		 * @values 'Npx', 'N%'
		 */
		borderRadius: {
			type: String,
			default: undefined,
			validator: cssValidator('border-radius'),
		},
		/**
		 * Shape of button
		 * @values 'Npx', 'N%'
		 */
		borderRadiusHover: {
			type: String,
			default: undefined,
			validator: cssValidator('border-radius'),
		},
		/**
		 * Border width of button (e.g. '3px')
		 */
		borderWidth: {
			type: String,
			default: undefined,
			validator: cssValidator('border-width'),
		},
		/**
		 * Border hover width of button (e.g. '3px')
		 */
		borderWidthHover: {
			type: String,
			default: undefined,
			validator: cssValidator('border-width'),
		},

		/**
		 * Border color of button (only applied on fill buttons)
		 */
		borderColor: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Border hover color of button (only applied on fill buttons)
		 */
		borderColorHover: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Box-shadow of button
		 */
		boxShadow: {
			type: String,
			default: undefined,
			validator: cssValidator('box-shadow'),
		},
		/**
		 * Box-shadow hover of button
		 */
		boxShadowHover: {
			type: String,
			default: undefined,
			validator: cssValidator('box-shadow'),
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
			'colorHover',
			'size',
			'textColor',
			'textColorHover',
			'textPattern',
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
			return {
				...setColorVariables(tokens, this.resolvedVariant),
			};
		},
		isDisabled() {
			return this.disabled || this.loading;
		},
		fontSize() {
			return this.theme.text.patterns[this.resolvedTextPattern]?.fontSize || 'inherit';
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

	position: relative;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	color: var(--color-contrast, #fff);
	font-weight: var(--maker-font-label-font-weight, 500);
	font-family: var(--maker-font-label-font-family, inherit);
	vertical-align: middle;
	background-color: var(--color-main, $maker-color-primary);
	border: none;
	border-radius: var(--border-radius, $maker-shape-button-border-radius);
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
		border-radius 0.2s ease-in;
	user-select: none;
	touch-action: manipulation;
	fill: currentColor;

	&.shape_squared {
		border-radius: 0;
	}

	&.shape_rounded {
		border-radius: var(--radius-rounded-button);
	}

	&.shape_pill {
		border-radius: var(--radius-pill-button);
	}

	&.iconButton {
		min-width: max-content;
	}

	&.size_small {
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

	&.size_medium {
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

	&.size_large {
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
		color: var(--color-contrast-hover);
		background-color: var(--color-hover);
		border-radius: var(--border-radius-hover, $maker-shape-button-border-radius);
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
	--border: inset 0 0 0 var(--border-width) var(--border-color);
	--border-hover: inset 0 0 0 var(--border-width-hover) var(--border-color-hover);
}

.Button.variant_outline {
	--border: inset 0 0 0 var(--border-width) var(--color-main);
	--border-hover: inset 0 0 0 var(--border-width-hover) var(--color-main-hover);
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
		color: var(--color-main-hover);
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
