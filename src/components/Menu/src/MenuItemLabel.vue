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
export default {
	name: 'MenuOptionLabel',
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
