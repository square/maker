<template>
	<div
		:class="{
			[$s.MenuOptionLabel]: true,
			[$s.isDisabled]: menuOption.disabled(),
		}"
	>
		<slot />
	</div>
</template>

<script>
import { MenuOptionKey } from './key';

export default {
	name: 'MenuOptionLabel',

	inject: {
		menuOption: MenuOptionKey,
	},
};
</script>

<style module="$s">
.MenuOptionLabel {
	color: var(--menu-text);
}

.isDisabled {
	color: var(--menu-text-disabled);
}
</style>
