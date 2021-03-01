<template>
	<div :class="$s.ModalContent">
		<!-- @slot Modal Content content (gets correct padding) -->
		<slot />
	</div>
</template>

<style module="$s">
.ModalContent {
	padding: 24px;
}
</style>
