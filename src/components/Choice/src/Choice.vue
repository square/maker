<template>
	<div
		:class="[
			$s.Container,
		]"
	>
		<slot />
	</div>
</template>

<script>
import assert from '@square/maker/utils/assert';
import key from './key';

export default {
	provide() {
		return {
			[key]: this.$data,
		};
	},

	model: {
		prop: 'selected',
		event: 'choice:update',
	},

	props: {
		/**
		 * Selected choice option
		 */
		selected: {
			type: undefined,
			default: undefined,
		},
		/**
		 * Disables choice option
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Selects single choice option or multiple choice options
		 */
		mode: {
			type: String,
			default: 'single-select',
			validator: (modeValue) => ['single-select', 'multi-select'].includes(modeValue),
		},
	},

	data() {
		return {
			currentValue: this.selected,
			isMultiSelect: this.mode === 'multi-select',
		};
	},

	watch: {
		selected() {
			this.validateProps();
		},

		currentValue(newValue) {
			this.$emit('choice:update', newValue);
		},
	},

	created() {
		this.validateProps();
	},

	methods: {
		validateProps() {
			if (this.isMultiSelect) {
				assert.error(Array.isArray(this.selected), 'The v-model value for a multi-select must be of type Array.');
			}
		},
	},
};
</script>

<style module="$s">
.Container {
	--font-size: 14px;
	--font-weight: 500;
	--line-height: 24px;

	display: flex;
	box-sizing: border-box;
	font-weight: var(--font-weight);
	font-size: var(--font-size);
	font-family: inherit;
	line-height: var(--line-height);
}
</style>
