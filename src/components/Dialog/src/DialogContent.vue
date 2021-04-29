<template>
	<div :class="$s.DialogContent">
		<!-- @slot Dialog Content content (gets correct padding) -->
		<slot />
	</div>
</template>

<style module="$s">
.DialogContent {
	padding: 24px;
}
</style>
