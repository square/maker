<template>
	<textarea
		ref="textarea"
		v-model="textareaVal"
		:class="[
			$s.Textarea,
			$s[`variant_${variant}`],
			{
				[$s.resizable]: resizable,
				[$s.disabled]: disabled,
				[$s.invalid]: invalid,
			},
		]"
		:disabled="disabled"
		v-bind="$attrs"
		v-on="$listeners"
	/>
</template>

<script>
/**
 * Textarea Control
 * @inheritAttrs textarea
 * @inheritListeners textarea
 */
export default {
	model: {
		prop: 'value',
		event: 'textarea:update',
	},

	props: {
		/**
		 * textarea variant
		 */
		variant: {
			type: String,
			default: 'fill',
			validator: (variant) => ['fill', 'outline'].includes(variant),
		},
		/**
		 * textarea's current value
		 */
		value: {
			type: String,
			default: '',
		},
		/**
		 * Toggles textarea's disabled state
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Toggle textarea's invalid state
		 */
		invalid: {
			type: Boolean,
			default: false,
		},
		/**
		 * Toggles whether textarea is resizable
		 */
		resizable: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		textareaVal: {
			get() {
				return this.value;
			},
			set(value) {
				/**
				 * updated textarea value
				 * @property {string}
				 */
				this.$emit('textarea:update', value);
			},
		},
	},

	mounted() {
		this.setCustomValidity();
	},

	updated() {
		this.setCustomValidity();
	},

	methods: {
		setCustomValidity() {
			const customValidity = this.invalid ? 'invalid' : '';
			// sets element's internal :invalid flag
			this.$refs.textarea.setCustomValidity(customValidity);
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
	--color-background: $maker-color-neutral-10;
	--color-border: transparent;
}

.variant_outline {
	--color-background: $maker-color-background;
	--color-border: $maker-color-neutral-20;
}

.Textarea {
	--color-placeholder: $maker-color-neutral-80;
	--color-foreground: $maker-color-neutral-90;
	--color-border-active: $maker-color-neutral-80;
	--color-error: $maker-color-error-fill;

	box-sizing: border-box;
	width: 100%;

	/* top & bottom padding + 3 line-heights */
	min-height: calc(12px * 2 + 24px * 3);
	padding: 12px 16px;
	color: var(--color-foreground);
	font-weight: $maker-font-body-font-weight;
	font-size: 16px;
	font-family: $maker-font-body-font-family;
	line-height: 24px;
	background-color: var(--color-background, #fff);
	border: 1px solid var(--color-border);
	border-radius: $maker-shape-default-border-radius;
	outline: none;
	transition:
		border 0.2s ease,
		background-color 0.2s ease,
		color 0.2s ease;
	resize: none;

	&::placeholder {
		color: var(--color-placeholder);
	}

	&.disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	&.invalid {
		border-color: var(--color-error);
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		box-shadow: 0 0 0 9999px var(--color-foreground) inset, 0 0 0 9999px var(--color-foreground);
		-webkit-text-fill-color: var(--color-background);
	}

	&:hover:not(.disabled, .invalid) {
		border-color: var(--color-border-active);
	}

	&:active:not(.disabled, .invalid),
	&:focus:not(.disabled, .invalid) {
		border-color: var(--color-border-active);
	}

	&.resizable {
		resize: vertical;
	}
}
</style>
