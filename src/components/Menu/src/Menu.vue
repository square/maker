<template>
	<div>
		<slot
			v-for="(option, idx) in options"
			v-bind="option"
		>
			<m-menu-option
				:key="idx"
				:is-selected="false"
				:option="option"
			>
				<m-menu-option-label>
					{{ option }}
				</m-menu-option-label>
			</m-menu-option>
		</slot>
	</div>
</template>

<script>
import { isEqual } from 'lodash';
import MMenuOption from './MenuOption.vue';
import MMenuOptionLabel from './MenuOptionLabel.vue';
import MenuKey from './key';

export default {
	name: 'Menu',

	components: {
		MMenuOption,
		MMenuOptionLabel,
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
		value: {
			type: undefined,
			default: undefined,
		},
		options: {
			type: Array,
			required: true,
		},

		isMultiselect: {
			type: Boolean,
			default: false,
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

	created() {
		if (this.isMultiselect && !Array.isArray(this.value)) {
			if (this.value === undefined) {
				this.updateValue([]);
			} else {
				this.updateValue([this.value]);
			}
		}
	},

	methods: {
		updateValue(value) {
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

<style>
/* Keep */
</style>
