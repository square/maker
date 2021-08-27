<template>
	<button
		:class="[
			$s.Button,
			$s[`variant_${variant}`],
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
import { getHighestContrast } from '@square/maker/utils/color';
import { MLoading } from '@square/maker/components/Loading';

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
		theme: { default: '' },
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
		 * Semantic variant
		 */
		variant: {
			type: String,
			default: 'primary',
			validator: (variant) => ['primary', 'secondary', 'tertiary'].includes(variant),
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
			switch (this.variant) {
			case 'primary':
				return this.inlinePrimaryStyle;
			case 'secondary':
				return this.inlineSecondaryStyle;
			default:
				return this.inlinePrimaryStyle;
			}
		},
		inlinePrimaryStyle() {
			return (this.color ? {
				'--inline-background-color': this.color,
				'--inline-color': getHighestContrast(this.color, ['#fff', '#000']),
			} : false);
		},
		inlineSecondaryStyle() {
			return (this.color ? {
				'--inline-color': this.color,
			} : false);
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
	padding: 12px 24px;
	font-weight: 500;
	font-size: 14px;
	font-family: inherit;
	vertical-align: middle;
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

	& > * {
		line-height: 1.77;
	}

	&.iconButton {
		padding: 12px;
	}

	&.iconButton > * {
		line-height: 0;
	}
}

.Button.size_small {
	padding: var(--small-padding);
	font-size: 12px;

	& > * {
		line-height: 1.4;
	}

	&.iconButton {
		padding: 8px;
	}
}

.Button.size_large {
	padding: var(--large-padding);
	font-size: 16px;

	& > * {
		line-height: 1.5;
	}

	&.iconButton {
		padding: 20px;
	}
}

.Button:disabled {
	cursor: initial;

	& > * {
		opacity: 0.4;
	}
}

.Button:focus {
	--focus-border:
		0 0 0 1px #fff,
		0 0 0 3px var(--color-focus);
}

.Button:hover:not(:disabled) {
	color: var(--color-contrast-hover);
	background-color: var(--color-main-hover);
}

.Button:active:not(:disabled) {
	color: var(--color-contrast-active);
	background-color: var(--color-main-active);
}

.variant_primary {
	color: var(--inline-color, var(--maker-colors-on-primary, #fff));
	background-color: var(--inline-background-color, var(--maker-colors-primary, #000));
}

.variant_secondary {
	color: var(--inline-color, var(--maker-colors-secondary, var(--maker-colors-primary, #000)));
	background-color: transparent;
	border-color:
		var(
			--inline-color,
			var(
				--maker-colors-secondary,
				var(
					--maker-colors-primary,
					#000
				)
			)
		);
}

.variant_tertiary {
	color: var(--inline-color, var(--maker-colors-primary, #000));
	background-color: transparent;
}

.shape_pill {
	border-radius: 32px;
}

.shape_squared {
	border-radius: 0;
}

.iconButton {
	min-width: max-content;
}

.fullWidth {
	width: 100%;
}

.align_center {
	justify-content: center;
}

.align_stack {
	flex-direction: column;
}

.align_space-between {
	flex-direction: row-reverse;
	justify-content: space-between;
}

.Button.loading {
	/* don't inherit color in loading state on hover/active */
	color: transparent !important;
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
