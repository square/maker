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
import { colord } from 'colord';
import PseudoWindow from 'vue-pseudo-window';
import { MLoading } from '@square/maker/components/Loading';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import { getContrast } from '@square/maker/utils/get-contrast';

function setColorVariables(tokens) {
	const colorMainObject = colord(tokens.color);
	const colorContrast = getContrast(tokens.color, tokens.textColor);

	// Define each state adjustment and generated color
	const stateAdjustment = colorMainObject.isDark() ? 'lighten' : 'darken';
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
		...resolveThemeableProps('actionbarbutton', [
			'color',
			'shape',
			'textColor',
			'align',
			'fullWidth',
		]),
		style() {
			let tokens = {
				color: this.resolvedColor,
				textColor: this.resolvedTextColor,
			};
			/**
			 * Return different default theme colors for icon buttons
			 * This can be removed if the action bar icon button ever
			 * becomes its own component or if we add theming for patterns
			 */
			if (this.isSingleChild()) {
				tokens = {
					color: this.color || this.theme.colors.elevation || '#000',
					textColor: this.textColor || this.resolvedColor,
				};
			}
			return setColorVariables(tokens);
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
	--radius-rounded-button: 8px;
	--radius-pill-button: 32px;

	position: relative;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	height: var(--medium-height);
	padding: 0 var(--medium-padding);
	color: var(--text-color);
	font-weight: $maker-font-label-font-weight;
	font-size: var(--medium-font-size);
	font-family: $maker-font-label-font-family;
	vertical-align: middle;
	background-color: var(--color-main);
	border: none;
	border-radius: $maker-shape-button-border-radius;
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
		border-radius: var(--radius-rounded-button);
	}

	&.shape_pill {
		border-radius: var(--radius-pill-button);
	}

	&:disabled {
		cursor: initial;

		& > * {
			opacity: 0.5;
		}
	}

	&:focus {
		--focus-border:
			0 0 0 1px $maker-color-neutral-20,
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
