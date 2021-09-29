<template>
	<div
		:class="$s.Stepper"
	>
		<m-button
			shape="pill"
			variant="primary"
			:size="size"
			:color="color"
			:text-color="textColor"
			:disabled="value === minVal"
			@click="decrement"
		>
			<minus :class="$s.Icon" />
		</m-button>
		<span :class="$s.Quantity">
			{{ value }}
		</span>
		<m-button
			shape="pill"
			variant="primary"
			:size="size"
			:color="color"
			:text-color="textColor"
			:disabled="value === maxVal"
			@click="increment"
		>
			<plus :class="$s.Icon" />
		</m-button>
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import Plus from '@square/maker-icons/Plus';
import Minus from '@square/maker-icons/Minus';

export default {
	components: {
		MButton,
		Plus,
		Minus,
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
			default: '#cccccc',
		},
		/**
		 * stepper button text color
		 */
		textColor: {
			type: String,
			default: '#000000',
		},

		/**
		 * stepper button size
		 */
		size: {
			type: String,
			default: 'small',
			validator: (size) => ['small', 'medium', 'large'].includes(size),
		},
	},

	computed: {
		maxVal() {
			return Number.parseInt(this.max, 10);
		},

		minVal() {
			return Number.parseInt(this.min, 10);
		},
	},

	methods: {
		increment() {
			if (!Number.isNaN(this.maxVal) && this.value >= this.maxVal) {
				return;
			}
			const incrementBy = 1;
			/**
			 * updated stepper value
			 * @property {number}
			 */
			this.$emit('stepper:update', this.value + incrementBy);
		},
		decrement() {
			if (!Number.isNaN(this.minVal) && this.value <= this.minVal) {
				return;
			}
			const decrementBy = 1;
			/**
			 * updated stepper value
			 * @property {number}
			 */
			this.$emit('stepper:update', this.value - decrementBy);
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
	margin: 0 16px;
	color: inherit;
	font-weight: 500;
	font-family: inherit;
	font-feature-settings: "tnum";
	font-variant-numeric: tabular-nums;
}

.Icon {
	width: 16px;
	height: 16px;
}
</style>
