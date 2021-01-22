<template>
	<div
		:class="$s.Stepper"
	>
		<m-button
			size="large"
			variant="primary"
			shape="pill"
			:color="color"
			:text-color="textColor"
			:disabled="value === minVal"
			@click="decrement"
		>
			<minus-icon
				inline
				:class="$s.Icon"
			/>
		</m-button>
		<span :class="$s.Quantity">
			{{ value }}
		</span>
		<m-button
			size="large"
			variant="primary"
			shape="pill"
			:color="color"
			:text-color="textColor"
			:disabled="value === maxVal"
			@click="increment"
		>
			<plus-icon
				inline
				:class="$s.Icon"
			/>
		</m-button>
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { PlusIcon, MinusIcon } from '@square/orbit-icons';

export default {
	components: {
		MButton,
		PlusIcon,
		MinusIcon,
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
			/**
			 * updated stepper value
			 * @property {number}
			 */
			this.$emit('stepper:update', this.value + 1);
		},
		decrement() {
			if (!Number.isNaN(this.minVal) && this.value <= this.minVal) {
				return;
			}
			/**
			 * updated stepper value
			 * @property {number}
			 */
			this.$emit('stepper:update', this.value - 1);
		},
	},
};

</script>

<style module="$s">
.Stepper {
	--text-color: #4f2d52;

	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;
}

.Quantity {
	margin: 0 16px;
	color: var(--text-color);
	font-weight: 500;
	font-family: "Square Market", system-ui;
	font-feature-settings: "tnum";
	font-variant-numeric: tabular-nums;
}

.Icon {
	width: 16px;
	height: 16px;
}
</style>
