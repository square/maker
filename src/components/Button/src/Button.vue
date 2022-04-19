<template>
	<button
		:class="[
			$s.Button,
			$s[`size_${resolvedSize}`],
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
import chroma from 'chroma-js';
import { MLoading } from '@square/maker/components/Loading';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import getContrast from '@square/maker/utils/get-contrast';

function getFocus(chromaColor) {
	const arbitraryAlphaValue = 0.3;
	return chromaColor.alpha(arbitraryAlphaValue);
}

function getHover(chromaColor) {
	// mix color with 5% black
	const arbitraryValue = 0.05;
	return chroma.mix(chromaColor, '#000', arbitraryValue);
}

function getActive(chromaColor) {
	// mix color with 10% black
	const arbitraryValue = 0.1;
	return chroma.mix(chromaColor, '#000', arbitraryValue);
}

function fill(tokens) {
	const color = chroma(tokens.color);
	const colorHover = getHover(color);
	const colorActive = getActive(color);
	const textColor = tokens.textColor ? chroma(tokens.textColor) : undefined;
	const contrastColor = getContrast(color, textColor);
	const contrastColorHover = getHover(contrastColor);
	const contrastColorActive = getActive(contrastColor);
	const focusColor = getFocus(color);
	return {
		'--small-padding': '0 16px',
		'--medium-padding': '0 24px',
		'--large-padding': '0 32px',
		'--color-main': color.hex(),
		'--color-main-hover': colorHover.hex(),
		'--color-main-active': colorActive.hex(),
		'--color-contrast': contrastColor.hex(),
		'--color-contrast-hover': contrastColorHover.hex(),
		'--color-contrast-active': contrastColorActive.hex(),
		'--color-focus': focusColor.hex(),
	};
}

function outline(tokens) {
	const color = chroma(tokens.color);
	const colorHover = getHover(color);
	const colorActive = getActive(color);
	const focusColor = getFocus(color);
	return {
		'--small-padding': '0 16px',
		'--medium-padding': '0 24px',
		'--large-padding': '0 32px',
		'--color-main': 'transparent',
		'--color-main-hover': 'rgba(0, 0, 0, 0.05)',
		'--color-main-active': 'rgba(0, 0, 0, 0.1)',
		'--color-contrast': color.hex(),
		'--color-contrast-hover': colorHover.hex(),
		'--color-contrast-active': colorActive.hex(),
		'--color-focus': focusColor.hex(),
		'--outline-border': 'inset 0 0 0 1px var(--color-contrast)',
	};
}

function ghost(tokens) {
	const color = chroma(tokens.color);
	const colorHover = getHover(color);
	const colorActive = getActive(color);
	const focusColor = getFocus(color);
	return {
		'--small-padding': '0 8px',
		'--medium-padding': '0 12px',
		'--large-padding': '0 20px',
		'--color-main': 'transparent',
		'--color-main-hover': 'rgba(0, 0, 0, 0.05)',
		'--color-main-active': 'rgba(0, 0, 0, 0.1)',
		'--color-contrast': color.hex(),
		'--color-contrast-hover': colorHover.hex(),
		'--color-contrast-active': colorActive.hex(),
		'--color-focus': focusColor.hex(),
	};
}

const VARIANTS = {
	primary: fill,
	secondary: outline,
	tertiary: ghost,
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
			validator: (color) => chroma.valid(color),
		},
		/**
		 * Text color of button
		 */
		textColor: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
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
			return VARIANTS[this.resolvedVariant]({
				color: this.resolvedColor,
				textColor: this.resolvedTextColor,
			});
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
	position: relative;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	color: var(--color-contrast);
	font-weight: var(--fontWeight-label, 500);
	font-family: var(--font-label, inherit);
	vertical-align: middle;
	background-color: var(--color-main);
	border: none;
	border-radius: 8px;
	outline: none;
	box-shadow:
		var(--outline-border, 0 0),
		var(--focus-border, 0 0);
	cursor: pointer;
	transition:
		color 0.2s ease-in,
		background-color 0.2s ease-in,
		box-shadow 0.2s ease-in;
	user-select: none;
	touch-action: manipulation;
	fill: currentColor;

	&.shape_pill {
		border-radius: 32px;
	}

	&.shape_squared {
		border-radius: 0;
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
			0 0 0 1px var(--neutral-20, #fff),
			0 0 0 3px var(--color-focus);
	}

	&:hover:not(:disabled) {
		color: var(--color-contrast-hover);
		background-color: var(--color-main-hover);
	}

	&:active:not(:disabled) {
		color: var(--color-contrast-active);
		background-color: var(--color-main-active);
	}

	&.loading {
		/* don't inherit color in loading state on hover/active */
		color: transparent !important;
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
	color: var(--color-contrast);
	background-color: transparent;
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

.Button.align_center .InformationText {
	margin-left: 8px;
}

.Button.align_space-between .InformationText {
	margin-right: 8px;
}
</style>
