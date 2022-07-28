<template>
	<div
		:class="[
			$s.InputContainer,
			$s[`variant_${variant}`],
			{
				[$s.disabled]: disabled,
				[$s.invalid]: invalid,
			},
			'm-input',
		]"
		@click="focus"
	>
		<input
			ref="input"
			:class="[
				$s.Input,
				$s[`align_${align}`],
			]"
			:disabled="disabled"
			v-bind="$attrs"
			v-on="$listeners"
			@input="$emit('input:update', $event.target.value)"
		>
		<!--
			Both affix slots need to come after the input, so we can target
			them with the sibling selector (~) to apply webkit autofill styles
			which are not otherwise targetable.
		-->
		<span
			v-if="$slots.prefix"
			:class="[
				$s.Affix,
				$s.Prefix,
			]"
		>
			<!-- @slot Input prefix -->
			<slot name="prefix" />
		</span>
		<span
			v-if="$slots.suffix"
			:class="[
				$s.Affix,
				$s.Suffix,
			]"
		>
			<!-- @slot Input suffix -->
			<slot name="suffix" />
		</span>
	</div>
</template>

<script>
/**
 * Input control
 * @inheritAttrs input[type="text"]
 * @inheritListeners input[type="text"]
 */
export default {
	inheritAttrs: false,

	model: {
		event: 'input:update',
	},

	props: {
		/**
		 * Input variant
		 */
		variant: {
			type: String,
			default: 'fill',
			validator: (variant) => ['fill', 'outline'].includes(variant),
		},
		/**
		 * Toggles input disabled state
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Toggles input invalid state
		 */
		invalid: {
			type: Boolean,
			default: false,
		},
		/**
		 * Aligns text within input
		 */
		align: {
			type: String,
			default: 'left',
			validator: (align) => ['left', 'right'].includes(align),
		},
	},

	mounted() {
		this.setCustomValidity();
	},

	updated() {
		this.setCustomValidity();
	},

	methods: {
		/**
		 * focuses input
		 * @public
		 */
		focus() {
			this.$refs.input.focus();
		},
		/**
		 * blurs input
		 * @public
		 */
		blur() {
			this.$refs.input.blur();
		},
		setCustomValidity() {
			const customValidity = this.invalid ? 'invalid' : '';
			// sets element's internal :invalid flag
			this.$refs.input.setCustomValidity(customValidity);
		},
	},
};
</script>

<style module="$s">
/*
	Most (if not all) of these should be provided
	by the Theme Context, but this is a placeholder
	until we get a Theme Context component
*/
.variant_fill {
	--color-background: var(--maker-color-neutral-10, #f6f7f9);
	--color-border: transparent;
}

.variant_outline {
	--color-background: var(--maker-color-background);
	--color-border: var(--maker-color-neutral-20, rgba(0, 0, 0, 0.3));
}

.Affix {
	z-index: 1;
	display: flex;
	align-items: center;
	box-sizing: inherit;
	color: var(--color-placeholder);
	font-size: inherit;
	background-color: transparent;
	border-radius: inherit;
	cursor: inherit;
	fill: currentColor;

	&.Prefix {
		order: 1;
		padding-right: 8px;
	}

	&.Suffix {
		order: 3;
		padding-left: 8px;
	}
}

.InputContainer {
	--color-placeholder: var(--maker-color-neutral-80, rgba(0, 0, 0, 0.55));
	--color-foreground: var(--maker-color-neutral-90, rgba(107, 107, 107, 0.9));
	--color-border-active: var(--maker-color-neutral-80, #222);
	--color-error: rgba(206, 50, 23, 1);

	display: flex;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	height: 48px;
	padding: 0 16px;
	overflow: hidden;
	color: var(--color-foreground);
	font-size: 16px;
	background-color: var(--color-background, #fff);
	border: 1px solid var(--color-border);
	border-radius: var(--maker-shape-default-border-radius, 8px);
	transition: border-color 0.2s ease;

	&:not(.disabled, .invalid):hover,
	&:not(.disabled, .invalid):focus-within {
		border-color: var(--color-border-active);
	}

	&.disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	&.invalid {
		border-color: var(--color-error);
	}
}

.Input {
	flex-grow: 1;
	order: 2;
	box-sizing: inherit;
	color: inherit;
	font-weight: inherit;
	font-size: inherit;
	font-family: inherit;
	text-overflow: ellipsis;
	background-color: transparent;
	border: none;
	outline: none;
	box-shadow: none;
	cursor: inherit;
	appearance: none;

	&::placeholder {
		color: var(--color-placeholder);
	}

	&.align_left {
		text-align: left;
	}

	&.align_right {
		text-align: right;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		box-shadow: 0 0 0 48px var(--color-foreground) inset, 0 0 0 9999px var(--color-foreground);
		-webkit-text-fill-color: var(--color-background);
	}

	&:-webkit-autofill ~ .Affix {
		color: var(--color-background);
	}
}
</style>
