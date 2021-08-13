<template>
	<div
		:class="[
			$s.InputContainer,
			$s[`variant_${variant}`],
			{
				[$s.disabled]: disabled,
				[$s.invalid]: invalid,
			},
		]"
		@click="focus"
	>
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
		focus() {
			this.$refs.input.focus();
		},
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
	--color-background: #f6f7f9;
	--color-background-focus: rgb(255, 255, 255, 0.95);
	--color-placeholder: rgba(0, 0, 0, 0.55);
	--color-foreground: rgba(0, 0, 0, 0.9);
	--color-disabled: rgba(0, 0, 0, 0.3);
	--color-background-disabled: rgba(0, 0, 0, 0.05);
	--color-accent: #222;
	--color-error: rgba(206, 50, 23, 1);
	--focus-shadow: 0 0 0 2px rgba(34, 34, 34, 0.3);
	--border-radius: 8px;
	--border-color: transparent;
	--border-color-hover: #222;
}

.variant_outline {
	--color-background: #fff;
	--color-background-focus: #fff;
	--color-placeholder: rgba(0, 0, 0, 0.55);
	--color-foreground: rgba(0, 0, 0, 0.9);
	--color-disabled: rgba(0, 0, 0, 0.3);
	--color-background-disabled: rgba(0, 0, 0, 0.05);
	--color-accent: #222;
	--color-error: rgba(206, 50, 23, 1);
	--focus-shadow: none;
	--border-radius: 8px;
	--border-color: rgba(0, 0, 0, 0.15);
	--border-color-hover: rgba(0, 0, 0, 0.3);
}

.Affix {
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
		padding-right: 8px;
	}

	&.Suffix {
		padding-left: 8px;
	}
}

.InputContainer {
	display: flex;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	height: 48px;
	padding: 0 16px;
	color: var(--color-foreground);
	font-size: 16px;
	font-family: inherit;
	font-family: var(--font-family);
	background-color: var(--color-background);
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
	transition: border-color 0.2s ease;

	&:not(.disabled, .invalid):hover {
		border-color: var(--border-color-hover);
	}

	&.disabled {
		color: var(--color-disabled);
		background-color: var(--color-background-disabled);
		border-color: var(--border-color);
		cursor: not-allowed;

		& .Affix {
			color: var(--color-disabled);
		}
	}

	&:focus-within {
		background-color: var(--color-background-focus);
	}

	&:focus-within:not(.invalid, .disabled) {
		background-color: var(--color-background-focus);
		border-color: var(--border-color-hover);
		box-shadow: var(--focus-shadow);
	}

	&.invalid {
		border-color: var(--color-error);
	}
}

.Input {
	flex-grow: 1;
	box-sizing: inherit;
	color: inherit;
	font-size: inherit;
	font-family: inherit;
	text-overflow: ellipsis;
	background-color: transparent;
	border: none;
	border-radius: inherit;
	outline: none;
	box-shadow: none;
	cursor: inherit;
	appearance: none;

	&::placeholder {
		color: var(--color-placeholder);
	}

	&:disabled {
		&::placeholder {
			color: var(--color-disabled);
		}
	}

	&.align_left {
		text-align: left;
	}

	&.align_right {
		text-align: right;
	}
}
</style>
