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
	font-weight: 500;
	font-family: inherit;
	vertical-align: middle;
	background-color: var(--color-main);
	border: none;
	border-radius: var(--border-radius);
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
	padding: var(--padding);
	font-size: var(--font-size);

	& > * {
		line-height: var(--line-height);
	}

	&.iconButton {
		min-width: max-content;
		padding: var(--icon-padding);

		& > * {
			line-height: 0;
		}
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
		/* don't inherit color in loading state on hover or active */
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
