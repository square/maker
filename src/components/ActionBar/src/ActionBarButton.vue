<template>
	<button
		:class="[
			$s.Button,
			$s[`align_${resolvedAlign}`],
			$s[`shape_${resolvedShape}`],
			{
				[$s.fullWidth]: resolvedFullWidth,
				[$s.iconButton]: isSingleChild() && !resolvedFullWidth,
				[$s.hasMainAndLabelText]: hasMainAndLabelText(),
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
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import getContrast from '@square/maker/utils/get-contrast';

// TODO: refactor the code below so it's shared with Button component

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

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
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
		...resolveThemeableProps('actionbarbutton', ['color', 'shape', 'textColor', 'align', 'fullWidth']),
		style() {
			/**
			 * Return different default theme colors for icon buttons
			 * This can be removed if the action bar icon button ever
			 * becomes its own component or if we add theming for patterns
			 */
			if (this.isSingleChild()) {
				return fill({
					color: this.color || this.theme.colors['color-elevation'] || '#000',
					textColor: this.textColor || this.resolvedColor,
				});
			}
			return fill({
				color: this.resolvedColor,
				textColor: this.resolvedTextColor,
			});
		},

		isDisabled() {
			return this.disabled || this.loading;
		},
	},

	methods: {
		getVnodesWithContent(vnodes) {
			return (vnodes || []).filter(
				(vnode) => vnode.tag || vnode.text.trim().length > 0,
			);
		},

		isSingleChild() {
			if (this.$scopedSlots.information) {
				return false;
			}
			const children = this.getVnodesWithContent(this.$slots.default);
			const singleChild = 1;
			return children.length === singleChild && children[0].tag;
		},

		hasMainAndLabelText() {
			if (!this.$scopedSlots.information) {
				return false;
			}
			const main = this.getVnodesWithContent(this.$slots.default);
			const info = this.getVnodesWithContent(this.$scopedSlots.information());
			return main.length > 0 && info.length > 0;
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
	--medium-font-size: 14px;
	--medium-padding: 24px;
	--medium-line-height: 1.77;

	position: relative;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	height: var(--medium-height);
	padding: 0 var(--medium-padding);
	color: var(--text-color);
	font-weight: var(--maker-font-weight-label, 500);
	font-size: var(--medium-font-size);
	font-family: var(--maker-font-family-label, inherit);
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

	&.shape_squared {
		border-radius: 0;
	}

	&.shape_rounded {
		border-radius: 8px;
	}

	&.shape_pill {
		border-radius: 32px;
	}

	&:disabled {
		cursor: initial;

		& > * {
			opacity: 0.5;
		}
	}

	&:focus {
		--focus-border:
			0 0 0 1px var(--maker-color-neutral-20, #fff),
			0 0 0 3px var(--color-focus);
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
	width: max-content;
}

.hasMainAndLabelText {
	text-align: right;

	& .InformationText {
		text-align: left;
	}
}

.TruncateText {
	/* -webkit-box is supported by all modern browsers */
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	width: max-content;
	overflow: hidden;
	line-height: 1.1;
	text-overflow: ellipsis;
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
