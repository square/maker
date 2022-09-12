<template>
	<div :class="$s.ToggleContainer">
		<input
			ref="checkbox"
			v-model="toggleValue"
			type="checkbox"
			:class="$s.Checkbox"
			v-bind="$attrs"
			v-on="$listeners"
		>
		<div :class="$s.Toggle">
			<div :class="$s.ToggleBall" />
		</div>
	</div>
</template>

<script>
/**
 * Toggle control
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

.ToggleContainer {
	position: relative;
	display: inline-block;
	line-height: 0;
	cursor: pointer;
	user-select: none;

	/* general vars */
	--color-error: rgba(206, 50, 23, 1);
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
	--tb-background-color: var(--color-black-05);
}

.Checkbox {
	position: relative;
	display: inline-block;
	box-sizing: border-box;
	width: var(--t-width);
	height: var(--t-height);
	margin: 0;
	padding: 0;
	vertical-align: middle;
	border: var(--t-border) solid;
	border-radius: calc(var(--t-width) / 2);
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

.Checkbox:focus {
	outline: 1px dotted #212121;
	outline: 5px auto -webkit-focus-ring-color;
}

.Checkbox:checked::after {
	left: var(--tb-left-checked);

	--tb-background-color: var(--maker-color-background, #fff);
}

.Checkbox:disabled {
	border-color: var(--maker-color-neutral-20, #d3d3d3);

	&:not(:checked) {
		background-color: var(--maker-color-neutral-10, #f1f1f1);

		--tb-background-color: var(--maker-color-neutral-20, #d3d3d3);
	}

	&:checked {
		background-color: var(--maker-color-neutral-20, #d3d3d3);
	}
}

.Checkbox:invalid {
	& + .Toggle {
		border-color: var(--color-error);
	}

	&:not(:checked) + .Toggle {
		background-color: var(--maker-color-background, #fff);

		--tb-background-color: var(--color-error);
	}

	&:checked + .Toggle {
		background-color: var(--color-error);
	}
}

.Checkbox:not(:disabled, :invalid) {
	border-color: var(--maker-color-neutral-20, #d3d3d3);

	&:not(:checked) {
		background-color: var(--maker-color-background, #fff);

		--tb-background-color: var(--maker-color-neutral-20, #d3d3d3);

		&:hover,
		&:active,
		&:focus {
			border-color: var(--maker-color-body, inherit);

			--tb-background-color: var(--maker-color-body, inherit);
		}
	}

	&:checked {
		background-color: var(--maker-color-body, inherit);
		border-color: var(--maker-color-body, inherit);
	}
}
</style>
