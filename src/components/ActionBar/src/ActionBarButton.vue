<template>
	<button
		:class="[
			$s.Button,
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
		<span :class="[$s.MainText, $s.TruncateText]">
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
		<pseudo-window
			document
			@keyup.esc="handleEscKey"
		/>
	</button>
</template>

<script>
import chroma from 'chroma-js';
import PseudoWindow from 'vue-pseudo-window';
import { MLoading } from '@square/maker/components/Loading';

// TODO: refactor the code below so it's shared with Button component

function getContrast(chromaBg, targetChromaFg) {
	const contrastAccessibilityThreshold = 4.5;
	const isLightColorThreshold = 0.32;
	if (!targetChromaFg
		|| chroma.contrast(chromaBg, targetChromaFg) < contrastAccessibilityThreshold) {
		const isLight = chromaBg.luminance() > isLightColorThreshold;
		return chroma(isLight ? '#000' : '#fff');
	}
	return targetChromaFg;
}

function getFocus(chromaColor) {
	const arbitraryAlphaValue = 0.8;
	return chromaColor.alpha(arbitraryAlphaValue);
}

function fill(tokens) {
	const color = chroma(tokens.color);
	const textColor = tokens.textColor ? chroma(tokens.textColor) : undefined;
	const contrastColor = getContrast(color, textColor);
	const focusColor = getFocus(color);
	return {
		'--color-main': color.hex(),
		'--color-contrast': contrastColor.hex(),
		'--color-focus': focusColor.hex(),
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
		PseudoWindow,
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
			return fill({
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
			const zero = 0;
			const children = (this.$slots.default || []).filter(
				(vnode) => vnode.tag || vnode.text.trim().length > zero,
			);
			const singleChild = 1;
			const firstChildIndex = 0;
			return children.length === singleChild && children[firstChildIndex].tag;
		},

		handleEscKey() {
			/**
			 * ESC keyup event on window
			 * @property {string}
			 */
			this.$emit('window-esc');
		},
	},
};
</script>

<style module="$s">
.Button {
	--medium-height: 48px;
	--medium-font-size: 16px;
	--medium-padding: 24px;
	--medium-line-height: 1.77;

	position: relative;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	height: var(--medium-height);
	padding: 0 var(--medium-padding);
	color: var(--text-color);
	font-weight: 500;
	font-size: var(--medium-font-size);
	font-family: inherit;
	vertical-align: middle;
	background-color: var(--color-main);
	border: none;
	border-radius: 32px;
	outline: none;
	box-shadow:
		var(--outline-border, 0 0),
		var(--focus-border, 0 0);
	cursor: pointer;
	transition:
		color 0.2s ease-in,
		background-color 0.2s ease-in;
	user-select: none;
	touch-action: manipulation;
	fill: currentColor;

	& > * {
		line-height: var(--medium-line-height);
	}

	&.iconButton {
		display: inline-flex;
		flex: 0 0 auto;
		align-items: center;
		width: var(--medium-height);
		height: var(--medium-height);
		padding: 0;
	}

	--text-color: var(--color-contrast, #000);

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
		justify-content: space-evenly;
		padding-top: 4px;
		padding-bottom: 4px;
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
			0 0 0 2px #fff,
			0 0 0 4px var(--color-focus);
	}

	&:active {
		background-color: var(--color-active, var(--color-main));
	}

	@media (hover: hover) {
		&:hover {
			background-color: var(--color-hover, var(--color-main));
		}
	}

	&.loading {
		color: transparent;
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
	color: var(--text-color);
	background-color: inherit;
	border-radius: 32px;
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

.align_stack .InformationText {
	font-size: 12px;
}

.TruncateText {
	max-width: 100%;
	overflow: hidden;
	line-height: 1;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.Button.align_center .InformationText {
	margin-left: 8px;
}

.Button.align_space-between .InformationText {
	margin-right: 8px;
}
</style>
