<template>
	<m-menu-item
		:value="value"
		:is-disabled="isDisabled"
	>
		<template #icon>
			<div v-if="!isOptionSelected" />
			<!-- @slot custom 16x16 icon (use only if using custom 'options' slot in MMenuSelect) -->
			<slot
				v-else
				name="select-icon"
			>
				<check-icon />
			</slot>
		</template>

		<!-- @slot text label for option -->
		<slot />
	</m-menu-item>
</template>

<script>
import CheckIcon from '@square/maker-icons/Check';
import { MenuSelectKey } from './key';
import MMenuItem from './MenuItem.vue';

export default {
	name: 'MenuSelectOption',

	components: {
		MMenuItem,
		CheckIcon,
	},

	inject: {
		menuSelect: {
			from: MenuSelectKey,
		},
	},

	props: {
		value: {
			type: undefined,
			required: true,
		},

		isDisabled: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		isOptionSelected() {
			return this.menuSelect.isOptionSelected(this.value);
		},
	},
};
</script>

<style>
/* keep */
</style>
