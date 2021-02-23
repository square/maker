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
			validator: (variant) => ['fill'].includes(variant),
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
	--font-family: inherit;
	--color-background: rgba(0, 0, 0, 0.05);
	--color-background-focus: rgba(255, 255, 255, 0.95);
	--color-foreground: rgba(0, 0, 0, 0.9);
	--color-placeholder: rgba(0, 0, 0, 0.55);
	--color-disabled: rgba(0, 0, 0, 0.3);
	--color-border: #222;
	--border-radius: 8px;
	--color-error: #ff3b30;
	--focus-shadow: 0 0 0 2px rgba(34, 34, 34, 0.3);
}

.Textarea {
	box-sizing: border-box;
	width: 100%;
	min-height: 120px;
	padding: 12px 16px;
	color: var(--color-foreground);
	font-size: 16px;
	font-family: var(--font-family);
	line-height: 24px;
	background-color: var(--color-background);
	border: 1px solid transparent;
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
		color: var(--color-disabled);
		cursor: not-allowed;

		&::placeholder {
			color: var(--color-disabled);
		}
	}

	&:invalid {
		border-color: var(--color-error);
	}

	&:hover:not(:disabled, :invalid) {
		border-color: var(--color-border);
	}

	&:active:not(:disabled, :invalid),
	&:focus:not(:disabled, :invalid) {
		background-color: var(--color-background-focus);
		border-color: var(--color-border);
		box-shadow: var(--focus-shadow);
	}

	&:active:not(:disabled),
	&:focus:not(:disabled) {
		background-color: var(--color-background-focus);
	}

	&.resizable {
		resize: vertical;
	}
}
</style>
