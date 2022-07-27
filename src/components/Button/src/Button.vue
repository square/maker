<template>
	<button
		:class="[
			$s.Button,
			$s[`variant_${resolvedVariant}`],
			$s[`size_${resolvedSize}`],
			$s[`shape_${resolvedShape}`],
			$s[`align_${resolvedAlign}`],
			{
				[$s.fullWidth]: resolvedFullWidth,
				[$s.iconButton]: isSingleChild() && !resolvedFullWidth,
				[$s.loading]: loading,
			},
			'm-button',
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
		<span :class="$s.MainText">
			<!-- @slot Button label -->
			<slot />
		</span>

		<span
			v-if="$scopedSlots.information"
			:class="$s.InformationText"
		>
			<!-- @slot Information label -->
			<slot
				name="information"
			/>
		</span>
	</button>
</template>

<script>
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
			validator: (variant) => ['center', 'stack', 'space-between'].includes(variant),
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
		style() {
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

	&.fullWidth {
		width: 100%;
	}

	&.align_center {
		justify-content: center;
	}

	&.align_stack {
		flex-direction: column;
		justify-content: center;
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
