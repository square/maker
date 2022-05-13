<template>
	<div :class="$s.RadioContainer">
		<input
			ref="radio"
			v-model="checkVal"
			type="radio"
			:class="$s.Radio"
			:value="value"
			:checked="isChecked"
			:disabled="disabled"
			v-bind="$attrs"
			v-on="$listeners"
		>
	</div>
</template>

<script>
/**
 * Radio control
 * @inheritAttrs input[type="radio"]
 * @inheritListeners input[type="radio"]
 */
export default {
	inheritAttrs: false,

	model: {
		prop: 'selected',
		event: 'radio:update',
	},

	props: {
		/**
		 * Value to return from v-model
		 */
		value: {
			type: undefined,
			required: true,
		},
		/**
		 * Toggles radio's selected state
		 */
		selected: {
			type: undefined,
			default: undefined,
		},
		/**
		 * Toggles radio's invalid state
		 */
		invalid: {
			type: Boolean,
			default: false,
		},
		/**
		 * Toggles radio disabled state
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		isChecked() {
			return this.selected === this.value;
		},
		checkVal: {
			get() {
				return this.selected;
			},
			set(newValue) {
				this.$emit('radio:update', newValue);
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
			this.$refs.radio.setCustomValidity(this.invalid ? 'invalid' : '');
		},
	},
};
</script>

<style module="$s">
.RadioContainer {
	display: inline-block;
	line-height: 0;
	cursor: pointer;
	user-select: none;

	/* these should later be pulled from
	the ThemeProvider component */
	--color-border: var(--maker-color-neutral-20, rgba(0, 0, 0, 0.3));
	--color-border-focus: var(--maker-color-neutral-90, rgba(0, 0, 0, 0.9));
	--color-active: var(--maker-color-body, rgba(0, 0, 0, 0.9));
	--color-error: rgba(206, 50, 23, 1);
}

.Radio {
	box-sizing: border-box;
	width: 20px;
	height: 20px;
	margin: 0;
	padding: 0;
	vertical-align: middle;
	background-color: var(--maker-color-background, #fff);
	border: 1px solid var(--color-border);
	border-radius: 50%;
	outline: none;
	cursor: pointer;
	transition:
		border 0.2s ease,
		background-color 0.2s ease;
	appearance: none;
	user-select: none;

	&::after {
		display: block;
		width: 6px;
		height: 6px;
		margin: 6px;
		background-color: var(--maker-color-background, #fff);
		border-radius: 50%;
	}

	&:checked {
		background-color: var(--color-active);
		border-color: var(--color-active);

		&::after {
			content: "";
		}
	}

	&:invalid {
		border-color: var(--color-error);
	}

	&:checked:invalid {
		background-color: var(--color-error);
		border-color: var(--color-error);
	}

	&:hover:not(:disabled, :invalid),
	&:focus:not(:disabled, :invalid),
	&:active:not(:disabled, :invalid) {
		border-color: var(--color-border-focus);
	}
}
</style>
