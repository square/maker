<template>
	<div
		:class="$s.Choice"
		:style="style"
	>
		<slot />
	</div>
</template>

<script>
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
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

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
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
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
	},

	data() {
		return {
			currentValue: this.selected,
			isMultiSelect: this.mode === 'multi-select',
		};
	},

	computed: {
		...resolveThemeableProps('choice', ['selectedColor']),
		contrastColor() {
			const color = this.resolvedSelectedColor;
			const chromaColor = chroma(color);
			const contrastColor = getContrast(chromaColor, '#fff');
			return contrastColor;
		},

		disabledContrastColor() {
			const alphaValue = 0.4;
			const disabledTextColor = chroma(this.contrastColor).alpha(alphaValue);
			return disabledTextColor;
		},

		style() {
			if (this.resolvedSelectedColor) {
				return {
					'--selected-background-color': this.resolvedSelectedColor,
					'--selected-text-color': this.contrastColor,
					'--selected-disabled-text-color': this.disabledContrastColor,
				};
			}
			return {};
		},
	},

	watch: {
		selected() {
			this.validateProps();
			this.currentValue = this.selected;
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
.Choice {
	--font-size: 14px;
	--line-height: 24px;

	display: flex;
	box-sizing: border-box;
	font-weight: var(--fontWeight-label, 500);
	font-size: var(--font-size);
	font-family: var(--font-label, inherit);
	line-height: var(--line-height);
}
</style>
