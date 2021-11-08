<template>
	<m-menu
		ref="menuContainer"
		:color="color"
		:bg-color="bgColor"
		:placement="placement"
		:min-width="minWidth"
		:should-close-on-click="!isMultiselect"
		@menu:click-item="selectOption"
	>
		<template #default="popover">
			<!-- @slot content that the menu popover will tether to -->
			<slot v-bind="popover" />
		</template>

		<template #items>
			<!-- @slot custom template for individual menu options -->
			<slot
				v-for="option in options"
				name="options"
				v-bind="option"
			>
				<m-menu-select-option :value="option">
					<template #select-icon>
						<!-- @slot custom 16x16 icon (use only if 'options' slot is not used) -->
						<slot name="select-icon" />
					</template>

					{{ option }}
				</m-menu-select-option>
			</slot>
		</template>
	</m-menu>
</template>

<script>
import chroma from 'chroma-js';
import { isEqual } from 'lodash';
import MMenu from './Menu.vue';
import MMenuSelectOption from './MenuSelectOption.vue';
import { MenuSelectKey } from './key';

export default {
	name: 'MenuSelect',

	components: {
		MMenu,
		MMenuSelectOption,
	},

	provide() {
		return {
			[MenuSelectKey]: {
				isOptionSelected: this.isOptionSelected,
			},
		};
	},

	model: {
		event: 'menu-select:update',
	},

	props: {
		/**
		 * Selected value (is array when isMultiselect is true)
		 */
		value: {
			type: undefined,
			default: undefined,
		},

		/**
		 * List of available options to select
		 */
		options: {
			type: Array,
			required: true,
		},

		/**
		 * Toggles selected value to array with multiple options. Menu will not autoclose if true.
		 */
		isMultiselect: {
			type: Boolean,
			default: false,
		},

		/**
		 * Text color for items
		 */
		color: {
			type: String,
			default: '#000',
			validator: (color) => chroma.valid(color),
		},

		/**
		 * Background color for items
		 */
		bgColor: {
			type: String,
			default: '#fff',
			validator: (color) => chroma.valid(color),
		},

		/**
		 * Placement of popover menu items
		 */
		placement: {
			type: String,
			default: 'bottom-start',
			validator: (placement) => [
				'auto', 'auto-start', 'auto-end',
				'top', 'top-start', 'top-end',
				'right', 'right-start', 'right-end',
				'bottom', 'bottom-start', 'bottom-end',
				'left', 'left-start', 'left-end',
			].includes(placement),
		},

		/**
		 * Minimum width of popover items
		 */
		minWidth: {
			type: Number,
			default: 200,
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
			this.$emit('menu-select:update', value);

			if (!this.isMultiselect) {
				this.$refs.menuContainer.close();
			}
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

<style>
/* keep */
</style>
