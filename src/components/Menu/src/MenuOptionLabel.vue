<template>
	<div :class="$s.MenuOptionLabel">
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
</style>
