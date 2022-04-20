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
		<span :class="$s.MainText">
			<!-- @slot Button label -->
			<slot />
		</span>
	</button>
</template>

<script>
import chroma from 'chroma-js';
import { MLoading } from '@square/maker/components/Loading';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import assert from '@square/maker/utils/assert';

function textButton(tokens) {
	const textColor = tokens.color ? chroma(tokens.color) : undefined;
	return {
		color: textColor ? textColor.hex() : undefined,
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
		 * Toggles button loading state
		 */
		loading: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		...resolveThemeableProps('textbutton', ['size', 'color']),
		style() {
			return textButton({
				color: this.resolvedColor,
			});
		},
		isDisabled() {
			return this.disabled || this.loading;
		},
	},

	created() {
		assert.warn(this.$slots.default, 'TextButton should be used with a label');
	},

};
</script>

<style module="$s">
.TextButton {
	position: relative;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	color: var(--maker-color-neutral-90);
	font-weight: var(--maker-font-weight-label, 500);
	font-family: var(--maker-font-family-label, inherit);
	vertical-align: middle;
	background-color: transparent;
	border: none;
	border-radius: 4px;
	outline-color: currentColor;
	cursor: pointer;
	transition: box-shadow 0.2s ease-in;
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

	&:active,
	&:focus {
		box-shadow: 0 0 0 1px currentColor;
	}

	&:disabled {
		cursor: initial;

		& > * {
			opacity: 0.5;
		}
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
	color: var(--maker-color-neutral-90);
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
</style>
