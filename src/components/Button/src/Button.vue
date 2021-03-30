<template>
	<button
		:class="[
			$s.Button,
			$s[`size_${size}`],
			$s[`shape_${shape}`],
			$s[`align_${align}`],
			{
				[$s.fullWidth]: fullWidth,
				[$s.iconButton]: isSingleChild(),
				[$s.loading]: loading,
			}
		]"
		:type="type"
		:disabled="disabled"
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

function getContrast(chromaBg, targetChromaFg) {
	if (!targetChromaFg || chroma.contrast(chromaBg, targetChromaFg) < 4.5) {
		const isLight = chromaBg.luminance() > 0.32;
		return chroma(isLight ? '#000' : '#fff');
	}
	return targetChromaFg;
}

function getFocus(chromaColor) {
	return chromaColor.alpha(0.3);
}

function getHover(chromaColor) {
	// mix color with 5% black
	return chroma.mix(chromaColor, '#000', 0.05);
}

function getActive(chromaColor) {
	// mix color with 10% black
	return chroma.mix(chromaColor, '#000', 0.1);
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
		'--small-padding': '8px 16px',
		'--medium-padding': '12px 24px',
		'--large-padding': '20px 32px',
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
		'--small-padding': '8px 16px',
		'--medium-padding': '12px 24px',
		'--large-padding': '20px 32px',
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
		'--small-padding': '8px',
		'--medium-padding': '12px',
		'--large-padding': '20px',
		'--color-main': 'transparent',
		'--color-main-hover': 'rgba(0, 0, 0, 0.05)',
		'--color-main-active': 'rgba(0, 0, 0, 0.1)',
		'--color-contrast': color.hex(),
		'--color-contrast-hover': colorHover.hex(),
		'--color-contrast-active': colorActive.hex(),
		'--color-focus': focusColor.hex(),
	};
}

function success(tokens) {
	const color = chroma('#1fad1f');
	const colorHover = getHover(color);
	const colorActive = getActive(color);
	const textColor = tokens.textColor ? 'rgba(255, 255, 255, 0.95)' : undefined;
	const contrastColor = getContrast(color, textColor);
	const contrastColorHover = getHover(contrastColor);
	const contrastColorActive = getActive(contrastColor);
	const focusColor = getFocus(color);
	return {
		'--small-padding': '8px 16px',
		'--medium-padding': '12px 24px',
		'--large-padding': '20px 32px',
		'--color-main': color.hex(),
		'--color-main-hover': colorHover.hex(),
		'--color-main-active': colorActive.hex(),
		'--color-contrast': contrastColor.hex(),
		'--color-contrast-hover': contrastColorHover.hex(),
		'--color-contrast-active': contrastColorActive.hex(),
		'--color-focus': focusColor.hex(),
	};
}
function error(tokens) {
	const color = chroma('#ce3217');
	const colorHover = getHover(color);
	const colorActive = getActive(color);
	const textColor = tokens.textColor ? 'rgba(255, 255, 255, 0.95)' : undefined;
	const contrastColor = getContrast(color, textColor);
	const contrastColorHover = getHover(contrastColor);
	const contrastColorActive = getActive(contrastColor);
	const focusColor = getFocus(color);
	return {
		'--small-padding': '8px 16px',
		'--medium-padding': '12px 24px',
		'--large-padding': '20px 32px',
		'--color-main': color.hex(),
		'--color-main-hover': colorHover.hex(),
		'--color-main-active': colorActive.hex(),
		'--color-contrast': contrastColor.hex(),
		'--color-contrast-hover': contrastColorHover.hex(),
		'--color-contrast-active': contrastColorActive.hex(),
		'--color-focus': focusColor.hex(),
	};
}

const VARIANTS = {
	primary: fill,
	secondary: outline,
	tertiary: ghost,
	success,
	error,
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

	inheritAttrs: false,

	props: {
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
			default: 'medium',
			validator: (size) => ['small', 'medium', 'large'].includes(size),
		},
		/**
		 * Whether to make the button full-width
		 */
		fullWidth: {
			type: Boolean,
			default: false,
		},
		/**
		 * Background color of button
		 */
		color: {
			type: String,
			default: '#000',
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
		 * Semantic variant
		 */
		variant: {
			type: String,
			default: 'primary',
			validator: (variant) => ['primary', 'secondary', 'tertiary', 'success', 'error'].includes(variant),
		},
		/**
		 * Shape of button
		 */
		shape: {
			type: String,
			default: 'rounded',
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
			default: 'center',
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
		style() {
			return VARIANTS[this.variant]({
				color: this.color,
				textColor: this.textColor,
			});
		},
	},

	methods: {
		isSingleChild() {
			if (this.$scopedSlots.information) {
				return false;
			}
			const children = (this.$slots.default || []).filter(
				(vnode) => vnode.tag || vnode.text.trim().length > 0,
			);
			return children.length === 1 && children[0].tag;
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
	font-weight: 500;
	font-family: inherit;
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
		padding: var(--small-padding);
		font-size: 12px;

		& > * {
			line-height: 1.4;
		}

		&.iconButton {
			padding: 8px;
		}
	}

	&.size_medium {
		padding: var(--medium-padding);
		font-size: 14px;

		& > * {
			line-height: 1.77;
		}

		&.iconButton {
			padding: 12px;
		}
	}

	&.size_large {
		padding: var(--large-padding);
		font-size: 16px;

		& > * {
			line-height: 1.5;
		}

		&.iconButton {
			padding: 20px;
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
		cursor: initial;

		& > * {
			opacity: 0.4;
		}
	}

	&:focus {
		--focus-border:
			0 0 0 1px #fff,
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
