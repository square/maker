<template>
	<button
		:class="[
			$s.Button,
			$s[`variant_${variant}`],
			$s[`size_${size}`],
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
import { getHighestContrast, getRGB } from '@square/maker/utils/color';
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
		 * Border radius of button
		 */
		borderRadius: {
			type: String,
			default: undefined,
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
			const color = this.color || this.theme?.colors?.primary;
			const radii = this.borderRadius || this.theme?.radii?.default;
			const styles = {
				'--color-rgb': getRGB(color),
				'--radii': radii,
			};

			switch (this.variant) {
			case 'primary':
				return Object.assign(styles, this.inlinePrimaryStyle);
			case 'secondary':
			case 'tertiary':
				return Object.assign(styles, this.inlineSecondaryStyle);
			default:
				return Object.assign(styles, this.inlinePrimaryStyle);
			}
		},
		inlinePrimaryStyle() {
			return (this.color ? {
				'--inline-background-color': this.color,
				'--inline-color': getHighestContrast(this.color),
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
	border-radius: var(--radii, 8px);
	outline: none;
	box-shadow:
		var(--color-rgb, 0 0),
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

.Button:disabled {
	cursor: initial;
	opacity: 0.4;
}

.Button:focus {
	--focus-border:
		0 0 0 1px #fff,
		0 0 0 3px rgba(var(--color-rgb), 0.3);
}

.variant_primary {
	color: var(--inline-color, var(--maker-colors-on-primary, #fff));
	background-color: var(--inline-background-color, var(--maker-colors-primary, #000));

	&:hover:not(:disabled) {
		background-color: rgba(var(--color-rgb), 0.8);
	}

	&:active:not(:disabled) {
		background-color: rgba(var(--color-rgb), 0.9);
	}
}

.variant_secondary {
	color: var(--inline-color, var(--maker-colors-secondary, var(--maker-colors-primary, #000)));
	background-color: transparent;
	border:
		1px solid
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

	&:hover:not(:disabled) {
		border-color: rgba(var(--color-rgb), 0.8);
	}

	&:active:not(:disabled) {
		border-color: rgba(var(--color-rgb), 0.9);
	}
}

.variant_tertiary {
	color: var(--inline-color, var(--maker-colors-primary, #000));
	background-color: transparent;
}

.iconButton {
	min-width: max-content;
}

.Button.size_small {
	padding: 12px 24px;
	font-size: 12px;

	& > * {
		line-height: 1.4;
	}

	&.iconButton {
		padding: 8px;
	}
}

.Button.size_large {
	padding: 20px 32px;
	font-size: 16px;

	& > * {
		line-height: 1.5;
	}

	&.iconButton {
		padding: 20px;
	}
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
