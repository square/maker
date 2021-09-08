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
import getContrast from '@square/maker/utils/get-contrast';
import chroma from 'chroma-js';
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
		/**
		 * Background color of a selected option
		 */
		selectedColor: {
			type: String,
			default: '#222',
			validator: (color) => chroma.valid(color),
		},
	},

	data() {
		return {
			currentValue: this.selected,
			isMultiSelect: this.mode === 'multi-select',
			getSelectedStyle: () => ({
				color: this.selectedColor,
				selectedTextColor: this.contrastColor,
				selectedDisabledTextColor: this.disabledContrastColor,
			}),
		};
	},

	computed: {
		contrastColor() {
			const color = this.selectedColor;
			const chromaColor = chroma(color);
			const contrastColor = getContrast(chromaColor, '#fff');
			return contrastColor;
		},

		disabledContrastColor() {
			const alphaValue = 0.4;
			const disabledTextColor = chroma(this.contrastColor).alpha(alphaValue);
			return disabledTextColor;
		},
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
