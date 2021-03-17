<template>
	<div :class="$s.BladeContent">
		<!-- @slot Blade Content content (gets correct padding) -->
		<slot />
	</div>
</template>

<style module="$s">
.BladeContent {
	padding: 24px;
}
</style>
