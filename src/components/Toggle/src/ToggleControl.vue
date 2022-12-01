<template>
	<input
		ref="checkbox"
		v-model="toggleValue"
		type="checkbox"
		:class="$s.Checkbox"
		v-bind="$attrs"
		v-on="$listeners"
	>
</template>

<script>
/**
 * @inheritAttrs input[type="checkbox"]
 * @inheritListeners input[type="checkbox"]
 */
export default {
	inheritAttrs: false,

	model: {
		prop: 'toggled',
		event: 'toggle:update',
	},

	props: {
		/**
		 * Current toggled state
		 */
		toggled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Toggles Toggle invalid state
		 */
		invalid: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		toggleValue: {
			get() {
				return this.toggled;
			},
			set(newValue) {
				/**
				 * toggle's updated value
				 * @property {boolean}
				 */
				this.$emit('toggle:update', newValue);
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
/* stylelint-disable no-descending-specificity */

/* default unchecked state */
.Checkbox {
	/* general vars */
	--color-error: $maker-color-error-fill;
	--transition: 0.2s ease;

	/* toggle vars */
	--t-height: 20px;
	--t-width: calc(2 * var(--t-height));
	--t-border: 1px;

	/* toggle ball vars */
	--tb-dim: 14px;
	--tb-inset: 3px;
	--tb-top: calc(var(--tb-inset) - var(--t-border));
	--tb-left-unchecked: var(--tb-inset);
	--tb-left-checked: calc(var(--t-width) - var(--tb-dim) - var(--tb-inset) - 2 * var(--t-border));
	--tb-background-color: $maker-color-neutral-20;

	position: relative;
	display: inline-block;
	box-sizing: border-box;
	width: var(--t-width);
	height: var(--t-height);
	margin: 0;
	padding: 0;
	vertical-align: middle;
	border: var(--t-border) solid var(--tb-background-color);
	border-radius: calc(var(--t-width) / 2);
	cursor: pointer;
	transition:
		background-color var(--transition)
		border-color var(--transition);
	appearance: none;
	user-select: none;

	&::after {
		position: absolute;
		top: var(--tb-top);
		left: var(--tb-left-unchecked);
		display: block;
		box-sizing: border-box;
		width: var(--tb-dim);
		height: var(--tb-dim);
		background-color: var(--tb-background-color);
		border-radius: inherit;
		transition:
			left var(--transition),
			background-color var(--transition);
		content: "";
	}
}

/* move toggle ball to the left */
.Checkbox:checked::after {
	left: var(--tb-left-checked);
}

.Checkbox:disabled {
	background-color: $maker-color-neutral-10;
	border-color: $maker-color-neutral-20;

	--tb-background-color: $maker-color-neutral-20;

	&:checked {
		background-color: $maker-color-neutral-20;

		--tb-background-color: $maker-color-background;
	}
}

.Checkbox:invalid {
	background-color: $maker-color-background;
	border-color: var(--color-error);

	--tb-background-color: var(--color-error);

	&:checked {
		background-color: var(--color-error);

		--tb-background-color: $maker-color-background;
	}
}

.Checkbox:not(:disabled, :invalid) {
	background-color: $maker-color-background;
	border-color: $maker-color-neutral-20;

	--tb-background-color: $maker-color-neutral-20;

	&:hover,
	&:active,
	&:focus {
		border-color: $maker-color-body;

		--tb-background-color: $maker-color-body;
	}

	&:checked {
		background-color: $maker-color-body;
		border-color: $maker-color-body;

		--tb-background-color: $maker-color-background;
	}
}
</style>
