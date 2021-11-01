<template>
	<div
		:class="$s.Menu"
		:style="computedStyles"
	>
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
import chroma from 'chroma-js';
import { isEqual } from 'lodash';
import MMenuOption from './MenuOption.vue';
import MMenuOptionLabel from './MenuOptionLabel.vue';
import MenuKey from './key';

const HOVER_COLOR_SCALE = 0.95;

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

		textColor: {
			type: String,
			default: '#000',
			validator: (color) => chroma.valid(color),
		},

		backgroundColor: {
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
		colorScale() {
			return chroma.scale([this.textColor, this.backgroundColor]);
		},

		computedStyles() {
			return {
				'--menu-text': this.textColor,
				'--menu-background': this.backgroundColor,
				'--menu-hover': this.colorScale(HOVER_COLOR_SCALE),
			};
		},
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

<style module="$s">
.Menu {
	display: flex;
	flex-direction: column;
}
</style>
