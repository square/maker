<template>
	<div
		:class="$s.Stepper"
	>
		<m-button
			variant="primary"
			size="small"
			:color="resolvedColor"
			:text-color="resolvedTextColor"
			:shape="resolvedShape"
			:disabled="value === minVal"
			@click="decrement"
		>
			<minus :class="$s.Icon" />
		</m-button>
		<div
			:class="$s.Quantity"
		>
			<input
				v-if="isSettingManualValue"
				ref="manualInput"
				v-model="manualValue"
				:class="$s.QuantityManualInput"
				:min="min"
				:max="max"
				type="number"
				inputmode="numeric"
				align="center"
				@change="commitManualValue"
			>
			<span
				:class="[
					$s.QuantityReadonly,
					{ [$s.isManualInput]: isSettingManualValue }
				]"
				@click="triggerManualInput"
			>
				<!-- This allows us to auto-resize the input as users type -->
				{{ isSettingManualValue ? manualValue : value }}
			</span>
		</div>
		<m-button
			variant="primary"
			size="small"
			:color="resolvedColor"
			:text-color="resolvedTextColor"
			:shape="resolvedShape"
			:disabled="value === maxVal"
			@click="increment"
		>
			<plus :class="$s.Icon" />
		</m-button>
	</div>
</template>

<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import { MButton } from '@square/maker/components/Button';
import Plus from '@square/maker-icons/Plus';
import Minus from '@square/maker-icons/Minus';
import { BASE_TEN } from '@square/maker/utils/constants';

export default {
	components: {
		MButton,
		Plus,
		Minus,
	},

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	model: {
		prop: 'value',
		event: 'stepper:update',
	},

	props: {
		/**
		 * stepper's current value
		 */
		value: {
			type: Number,
			required: true,
		},
		/**
		 * stepper min value
		 */
		min: {
			type: [Number, String],
			default: undefined,
		},
		/**
		 * stepper max value
		 */
		max: {
			type: [Number, String],
			default: undefined,
		},
		/**
		 * stepper button background color
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
		/**
		 * stepper button text color
		 */
		textColor: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
		/**
		 * stepper button shape
		 */
		shape: {
			type: String,
			default: undefined,
			validator: (shape) => ['squared', 'rounded', 'pill'].includes(shape),
		},
	},

	data() {
		return {
			manualValue: 0,
			isSettingManualValue: false,
		};
	},

	computed: {
		...resolveThemeableProps('stepper', ['color', 'textColor', 'shape']),

		maxVal() {
			return Number.parseInt(this.max, BASE_TEN);
		},

		minVal() {
			return Number.parseInt(this.min, BASE_TEN);
		},
	},

	methods: {
		increment() {
			if (!Number.isNaN(this.maxVal) && this.value >= this.maxVal) {
				return;
			}
			const incrementBy = 1;
			this.emitUpdate(this.value + incrementBy);
		},
		decrement() {
			if (!Number.isNaN(this.minVal) && this.value <= this.minVal) {
				return;
			}
			const decrementBy = 1;
			this.emitUpdate(this.value - decrementBy);
		},

		triggerManualInput() {
			this.manualValue = this.value;
			this.isSettingManualValue = true;
			this.$nextTick(() => {
				this.$refs.manualInput.focus();
				this.$refs.manualInput.select();
			});
		},

		commitManualValue(event) {
			event?.preventDefault?.();
			event?.stopPropagation?.();

			// eslint-disable-next-line no-magic-numbers
			const newValue = Math.round(Number.parseFloat(this.manualValue, BASE_TEN));
			this.isSettingManualValue = false;

			if (Number.isNaN(newValue) || newValue === null || newValue === undefined) {
				return;
			}

			this.emitUpdate(this.validateManualValueInRange(newValue));
		},

		validateManualValueInRange(newValue) {
			if (!Number.isNaN(this.minVal) && newValue < this.minVal) {
				return this.minVal;
			}

			if (!Number.isNaN(this.maxVal) && newValue > this.maxVal) {
				return this.maxVal;
			}

			return newValue;
		},

		emitUpdate(newValue) {
			/**
			 * updated stepper value
			 * @property {number}
			 */
			this.$emit('stepper:update', newValue);
		},
	},
};

</script>

<style module="$s">
.Stepper {
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;
}

.Quantity {
	position: relative;
	margin: 0 4px;
}

.QuantityReadonly {
	padding: 0 12px;
	cursor: pointer;

	&.isManualInput {
		color: transparent;
	}
}

.QuantityReadonly,
.QuantityManualInput {
	color: var(--neutral-90, inherit);
	font-weight: 500;
	font-size: 16px;
	font-family: inherit;
	font-feature-settings: "tnum";
	font-variant-numeric: tabular-nums;
}

.QuantityManualInput {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: 0;
	color: var(--neutral-90, inherit);
	text-align: center;
	background: transparent;
	border: 0;
	-moz-appearance: textfield;

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		margin: 0;
		-webkit-appearance: none;
	}

	&:focus {
		outline: none;
	}
}

.Icon {
	width: 16px;
	height: 16px;
}
</style>
