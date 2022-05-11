<template>
	<div :class="$s.CheckboxContainer">
		<input
			ref="checkbox"
			v-model="checkVal"
			:value="value"
			type="checkbox"
			:class="$s.Checkbox"
			:disabled="disabled"
			v-bind="$attrs"
			v-on="$listeners"
		>
		<svg :class="$s.Check">
			<path d="M1 4L5.5 8.5L13 1" />
		</svg>
	</div>
</template>

<script>
/**
 * Checkbox control
 * @inheritAttrs input[type="checkbox"]
 * @inheritListeners input[type="checkbox"]
 */
export default {
	inheritAttrs: false,

	model: {
		prop: 'checked',
		event: 'checkbox:update',
	},

	props: {
		/**
		 * Toggles checkbox checked state
		 */
		checked: {
			type: [Boolean, Array],
			default: undefined,
		},
		/**
		 * Value to return from v-model
		 */
		value: {
			type: undefined,
			default: undefined,
		},
		/**
		 * Toggles checkbox invalid state
		 */
		invalid: {
			type: Boolean,
			default: false,
		},
		/**
		 * Toggles checkbox disabled state
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		checkVal: {
			get() {
				return this.checked;
			},
			set(newValue) {
				this.$emit('checkbox:update', newValue);
			},
		},
	},

	watch: {
		invalid: 'setCustomValidity',
	},

	mounted() {
		this.setCustomValidity();
	},

	methods: {
		// sets element's internal :invalid flag
		setCustomValidity() {
			this.$refs.checkbox.setCustomValidity(this.invalid ? 'invalid' : '');
		},
	},
};
</script>

<style module="$s">
.CheckboxContainer {
	position: relative;
	display: inline-block;
	line-height: 0;
	cursor: pointer;
	user-select: none;

	/* these should later be pulled from
	the ThemeProvider component */
	--color-border: var(--neutral-20, rgba(0, 0, 0, 0.3));
	--color-border-focus: var(--neutral-90, rgba(0, 0, 0, 0.9));
	--color-active: var(--color-text, rgba(0, 0, 0, 0.9));
	--color-error: rgba(206, 50, 23, 1);
}

.Checkbox {
	box-sizing: border-box;
	width: 20px;
	height: 20px;
	margin: 0;
	padding: 0;
	background-color: var(--color-background, #fff);
	border: 1px solid var(--color-border);
	border-radius: 4px;
	outline: none;
	cursor: inherit;
	transition:
		border 0.2s ease,
		background-color 0.2s ease;
	appearance: none;

	&:invalid {
		border-color: var(--color-error);
	}

	&:checked {
		background-color: var(--color-active);
		border-color: var(--color-active);
	}

	&:hover:not(:disabled, :invalid) {
		border-color: var(--color-border-focus);
	}

	&:checked:invalid {
		background-color: var(--color-error);
		border-color: var(--color-error);
	}
}

.Check {
	position: absolute;
	top: 5px;
	left: 3px;
	width: 14px;
	height: 14px;
	opacity: 0;
	transition: opacity 0.2s ease;
	pointer-events: none;
	fill: none;
	stroke: var(--color-background, #fff);
	stroke-width: 2px;
	stroke-linecap: round;
	stroke-linejoin: round;
}

.Checkbox:checked + .Check {
	opacity: 1;
}
</style>
