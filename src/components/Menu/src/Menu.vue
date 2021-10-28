<template>
	<div>
		<slot
			v-for="(option, idx) in options"
			v-bind="{ option, isSelected: false }"
		>
			<m-menu-option
				:key="idx"
				:is-selected="false"
				:value="option"
			>
				<m-menu-option-label>
					{{ option }}
				</m-menu-option-label>
			</m-menu-option>
		</slot>
	</div>
</template>

<script>
import MMenuOption from './MenuOption.vue';
import MMenuOptionLabel from './MenuOptionLabel.vue';

export default {
	name: 'Menu',

	components: {
		MMenuOption,
		MMenuOptionLabel,
	},

	props: {
		value: {
			type: undefined,
			required: true,
		},
		options: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style>
/* Keep */
</style>
