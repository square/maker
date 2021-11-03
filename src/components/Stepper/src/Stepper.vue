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
		<span :class="$s.Quantity">
			{{ value }}
		</span>
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
			default: 'pill',
			validator: (shape) => ['squared', 'rounded', 'pill'].includes(shape),
		},
	},

	computed: {
		...resolveThemeableProps('stepper', ['color', 'textColor', 'shape']),

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
	color: var(--color-900, inherit);
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
