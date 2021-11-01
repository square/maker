<template>
	<div
		:class="$s.Menu"
		:style="computedStyles"
	>
		<!-- Content for each option -->
		<slot
			v-for="(option, idx) in options"
			v-bind="option"
		>
			<m-menu-option
				:key="idx"
				:is-selected="false"
				:option="option"
			/>
		</slot>
	</div>
</template>

<script>
import chroma from 'chroma-js';
import { isEqual } from 'lodash';
import MMenuOption from './MenuOption.vue';
import { MenuKey } from './key';

const HOVER_COLOR_SCALE = 0.85;
const DISABLED_TEXT_COLOR_SCALE = 0.5;

export default {
	name: 'Menu',

	components: {
		MMenuOption,
	},

	provide() {
		return {
			[MenuKey]: this.menuAPI,
		};
	},

	model: {
		event: 'menu:update',
	},

	props: {
		/**
		 * Component value
		 */
		value: {
			type: undefined,
			default: undefined,
		},

		/**
		 * List of available options for menu
		 */
		options: {
			type: Array,
			required: true,
		},

		/**
		 * Toggles whether the value is a list of selected options
		 */
		isMultiselect: {
			type: Boolean,
			default: false,
		},

		/**
		 * Text color for options
		 */
		color: {
			type: String,
			default: '#000',
			validator: (color) => chroma.valid(color),
		},

		/**
		 * Background color for options
		 */
		bgColor: {
			type: String,
			default: '#fff',
			validator: (color) => chroma.valid(color),
		},
	},

	data() {
		return {
			menuAPI: {
				selectOption: this.selectOption,
				isOptionSelected: this.isOptionSelected,
			},
		};
	},

	computed: {
		/**
		 * Chroma scale to calculate colors between background and text
		 */
		colorScale() {
			return chroma.scale([this.color, this.bgColor]);
		},

		computedStyles() {
			return {
				'--menu-text': this.color,
				'--menu-text-disabled': this.colorScale(DISABLED_TEXT_COLOR_SCALE),
				'--menu-background': this.bgColor,
				'--menu-hover': this.colorScale(HOVER_COLOR_SCALE),
			};
		},
	},

	watch: {
		isMultiselect: {
			immediate: true,
			handler(isMultiselect, previousValue) {
				if (previousValue === isMultiselect) {
					return;
				}

				if (isMultiselect && !Array.isArray(this.value)) {
					if (this.value === undefined) {
						this.updateValue([]);
					} else {
						this.updateValue([this.value]);
					}
				} else if (!isMultiselect && Array.isArray(this.value)) {
					const [newValue] = this.value;
					this.updateValue(newValue);
				}
			},
		},
	},

	methods: {
		updateValue(value) {
			/**
			 * Value update for the menu selection
			 */
			this.$emit('menu:update', value);
		},

		selectOption(option) {
			if (this.isMultiselect) {
				this.updateMultiselectValue(option);
			} else {
				this.updateValue(option);
			}
		},

		updateMultiselectValue(option) {
			const filteredValue = this.value.filter((innerValue) => !isEqual(option, innerValue));
			const newValue = filteredValue.length === this.value.length
				? [...this.value, option]
				: filteredValue;

			this.updateValue(newValue);
		},

		isOptionSelected(option) {
			return this.isMultiselect
				? this.value?.some?.((innerValue) => isEqual(option, innerValue))
				: isEqual(option, this.value);
		},
	},
};
</script>

<style module="$s">
.Menu {
	display: flex;
	flex-direction: column;
}
</style>
