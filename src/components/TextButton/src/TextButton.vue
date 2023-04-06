<template>
	<button
		:class="[
			$s.TextButton,
			$s[`size_${resolvedSize}`],
			{
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
					[$s.TruncateText]: truncateText,
				}]"
		>
			<!-- @slot Button label -->
			<slot />
		</span>
	</button>
</template>

<script>
import { colord } from 'colord';
import { MLoading } from '@square/maker/components/Loading';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import assert from '@square/maker/utils/assert';

/**
 * TextButton component
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
		 * pattern defined at theme level
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
		 * Size of the button label text
		 */
		size: {
			type: String,
			default: undefined,
			validator: (size) => ['medium', 'large'].includes(size),
		},
		/**
		 * Text color of button
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Toggles button disabled state
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Toggles button loading state
		 */
		loading: {
			type: Boolean,
			default: false,
		},
		/**
		 * Truncate text if it overflows container
		 */
		truncateText: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		...resolveThemeableProps('textbutton', [
			'pattern',
			'size',
			'color',
		]),
		style() {
			return {
				'--color': this.resolvedColor,
			};
		},
		isDisabled() {
			return this.disabled || this.loading;
		},
	},

	created() {
		assert.warn(this.$slots.default, 'TextButton should be used with a label', 'TextButton');
	},
};
</script>

<style module="$s">
/* stylelint-disable no-descending-specificity */

.TextButton {
	position: relative;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	padding: 0;
	color: var(--color, $maker-color-neutral-90);
	font-weight: $maker-font-label-font-weight;
	font-family: $maker-font-label-font-family;
	text-align: inherit;
	vertical-align: middle;
	background-color: transparent;
	border: none;
	border-radius: $maker-shape-default-border-radius;
	outline-color: currentColor;
	cursor: pointer;
	transition: box-shadow 0.2s ease-in, opacity 0.2s ease-in;
	user-select: none;
	touch-action: manipulation;
	fill: currentColor;

	&.iconButton {
		min-width: max-content;
	}

	&.size_medium {
		font-size: 14px;
	}

	&.size_large {
		font-size: 16px;
	}

	&:hover:not(:disabled) {
		opacity: 0.8;
	}

	&:focus-visible {
		box-shadow: 0 0 0 1px currentColor;
	}

	&:disabled {
		cursor: not-allowed;

		& > * {
			opacity: 0.5;
		}
	}

	& > .Loading {
		opacity: 1;
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
	color: var(--color, $maker-color-neutral-90);
	background-color: transparent;
}

.MainText {
	display: flex;
	gap: 8px;
	align-items: center;
	width: max-content;
	max-width: 100%;
	overflow: hidden;
	line-height: 1.5;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.TruncateText {
	/* -webkit-box is supported by all modern browsers */
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	width: fit-content;
	overflow: hidden;
	line-height: 1.1 !important;
	white-space: initial;
	text-align: inherit;
	text-overflow: ellipsis;
	overflow-wrap: anywhere;
}

</style>
