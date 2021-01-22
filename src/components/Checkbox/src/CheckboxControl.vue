<template>
	<div :class="$s.CheckboxContainer">
		<input
			ref="checkbox"
			v-model="checkVal"
			:value="value"
			type="checkbox"
			:class="$s.Checkbox"
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
	--color-border: rgba(0, 0, 0, 0.3);
	--color-border-active: rgba(0, 0, 0, 0.9);
	--color-background: rgba(0, 0, 0, 0.9);
	--color-foreground: rgba(255, 255, 255, 0.95);
	--color-disabled: rgba(0, 0, 0, 0.05);
	--color-disabled-checked: rgba(0, 0, 0, 0.15);
	--color-error: #ff3b30;
}

.Checkbox {
	box-sizing: border-box;
	width: 20px;
	height: 20px;
	margin: 0;
	padding: 0;
	background-color: #fff;
	border: 1px solid var(--color-border);
	border-radius: 4px;
	outline: none;
	cursor: inherit;
	transition: background-color 0.2s ease;
	appearance: none;

	&:invalid {
		border-color: var(--color-error);
	}

	&:disabled {
		background-color: var(--color-disabled);
		border-color: var(--color-disabled);
		cursor: not-allowed;
	}

	&:checked {
		background-color: var(--color-background);
		border-color: var(--color-border-active);
	}

	&:hover:not(:disabled, :invalid) {
		border-color: var(--color-border-active);
	}

	&:checked:disabled {
		background-color: var(--color-disabled-checked);
		border-color: var(--color-disabled);
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
	stroke: var(--color-foreground);
	stroke-width: 2px;
	stroke-linecap: round;
	stroke-linejoin: round;
}

.Checkbox:checked + .Check {
	opacity: 1;
}
</style>
