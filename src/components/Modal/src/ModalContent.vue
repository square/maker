<template>
	<div :class="$s.ModalContent">
		<slot />
	</div>
</template>

<style module="$s">
.ModalContent {
	padding: 24px;
}
</style>
