<template>
	<div
		style="display: flex;"
		@mousedown.prevent="selectOption"
	>
		<slot />
		<template v-if="isSelected">
			(Selected)
		</template>
	</div>
</template>

<script>
import MenuKey from './key';

export default {
	name: 'MenuOption',

	inject: {
		menu: MenuKey,
	},

	props: {
		option: {
			type: undefined,
			required: true,
		},
	},

	computed: {
		isSelected() {
			return this.menu.isOptionSelected(this.option);
		},
	},

	methods: {
		selectOption() {
			this.menu.selectOption(this.option);
		},
	},
};
</script>

<style>
/* Keep */
</style>
