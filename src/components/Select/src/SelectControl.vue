<template>
	<div
		:class="[
			$s.SelectContainer,
			$s[`variant_${variant}`],
		]"
	>
		<span
			v-if="$slots.prefix"
			:class="$s.Prefix"
		>
			<!-- @slot Select prefix -->
			<slot name="prefix" />
		</span>
		<select
			ref="select"
			v-model="selected"
			:class="[
				$s.Select,
				{
					[$s.selected]: optionSelected,
					[$s.invalid]: invalid,
					[$s.hasPrefix]: $slots.prefix,
				},
			]"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<option
				v-if="placeholder"
				:value="placeholderValue"
				disabled
			>
				{{ placeholder }}
			</option>
			<option
				v-for="option in options"
				:key="option.value"
				:value="option.value"
				:disabled="option.disabled"
				:selected="option.value === value"
			>
				{{ option.label }}
			</option>
		</select>
		<chevron-down-icon :class="$s.Icon" />
	</div>
</template>

<script>
import ChevronDownIcon from '@square/maker-icons/ChevronDown';

/**
 * @inheritAttrs select
 * @inheritListeners select
 */
export default {
	components: {
		ChevronDownIcon,
	},

	inheritAttrs: false,

	model: {
		prop: 'value',
		event: 'select:update',
	},

	props: {
		/**
		 * Select variant
		 */
		variant: {
			type: String,
			default: 'fill',
			validator: (variant) => ['fill', 'outline'].includes(variant),
		},
		/**
		 * current selected value
		 */
		value: {
			type: String,
			default: undefined,
		},
		/**
		 * Select placeholder
		 */
		placeholder: {
			type: String,
			default: '',
		},
		/**
		 * Select options
		 */
		options: {
			type: Array,
			required: true,
		},
		/**
		 * Toggles select invalid state
		 */
		invalid: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		selected: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit('select:update', value);
				return value;
			},
		},

		optionSelected() {
			return this.options.find((opt) => opt.value === this.value);
		},

		placeholderValue() {
			// This will return the current value if its not a valid option
			return !this.optionSelected ? this.value : undefined;
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
			this.$refs.select.setCustomValidity(customValidity);
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

.SelectContainer {
	--color-placeholder: var(--neutral-80, rgba(0, 0, 0, 0.55));
	--color-foreground: var(--neutral-90, rgba(2, 1, 1, 0.9));
	--color-border-active: var(--neutral-80, #222);
	--color-error: rgba(206, 50, 23, 1);
	--border-radius: 8px;

	position: relative;
	box-sizing: border-box;
	min-width: 80px;
	font-size: 16px;
	font-family: var(--fonts-body);
	border-radius: var(--border-radius);
}

.Prefix {
	position: absolute;
	top: 50%;
	left: 16px;
	line-height: 0;
	transform: translateY(-50%);
	pointer-events: none;
}

.Select {
	box-sizing: inherit;
	width: 100%;
	height: 48px;
	padding: 0 32px 0 16px;
	overflow: hidden;
	color: var(--color-foreground);
	font-weight: inherit;
	font-size: inherit;
	white-space: nowrap;
	text-overflow: ellipsis;
	background-color: var(--color-background, #fff);
	border: 1px solid var(--color-border);
	border-radius: inherit;
	outline: none;
	cursor: pointer;
	transition: border-color 0.2s ease;
	appearance: none;

	&.hasPrefix {
		/* select left padding + icon width + icon right padding */
		padding-left: calc(16px + 16px + 8px);
	}

	&.selected {
		color: var(--color-foreground);
	}

	&:not(:disabled, :invalid):hover {
		border-color: var(--color-border-active);
	}

	&:not(:disabled, :invalid):focus,
	&:not(:disabled, :invalid):active {
		border-color: var(--color-border-active);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	&:invalid {
		border-color: var(--color-error);
	}

	&::-ms-expand {
		display: none;
	}
}

.Icon {
	position: absolute;
	top: 50%;
	right: 16px;
	width: 16px;
	height: 16px;
	color: var(--color-foreground);
	transform: translateY(-50%);
	pointer-events: none;
}
</style>
