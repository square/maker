<template>
	<textarea
		ref="textarea"
		v-model="textareaVal"
		:class="[
			$s.Textarea,
			$s[`variant_${variant}`],
			{
				[$s.resizable]: resizable,
			},
		]"
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
	--color-background: var(--neutral-10, #f6f7f9);
	--color-border: transparent;
}

.variant_outline {
	--color-border: var(--neutral-20, rgba(0, 0, 0, 0.3));
}

.Textarea {
	--color-placeholder: var(--neutral-80, rgba(0, 0, 0, 0.55));
	--color-foreground: var(--neutral-90, rgba(0, 0, 0, 0.9));
	--color-border-active: var(--neutral-80, #222);
	--color-error: rgba(206, 50, 23, 1);
	--border-radius: 8px;

	box-sizing: border-box;
	width: 100%;

	/* top & bottom padding + 3 line-heights */
	min-height: calc(12px * 2 + 24px * 3);
	padding: 12px 16px;
	color: var(--color-foreground);
	font-weight: var(--font-weight-paragraph, inherit);
	font-size: 16px;
	font-family: var(--font-family-paragraph, inherit);
	line-height: 24px;
	background-color: var(--color-background, #fff);
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius);
	outline: none;
	transition:
		border 0.2s ease,
		background-color 0.2s ease,
		color 0.2s ease;
	resize: none;

	&::placeholder {
		color: var(--color-placeholder);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	&:invalid {
		border-color: var(--color-error);
	}

	&:hover:not(:disabled, :invalid) {
		border-color: var(--color-border-active);
	}

	&:active:not(:disabled, :invalid),
	&:focus:not(:disabled, :invalid) {
		border-color: var(--color-border-active);
	}

	&.resizable {
		resize: vertical;
	}
}
</style>
