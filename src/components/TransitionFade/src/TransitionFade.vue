<template functional>
	<transition
		:enter-active-class="$s.fading"
		:leave-active-class="$s.fading"
		:enter-class="$s.transparent"
		:leave-to-class="$s.transparent"
		v-bind="data.attrs"
	>
		<!-- @slot content to fade -->
		<slot />
	</transition>
</template>

<style module="$s">
.fading {
	position: absolute;
	transition: opacity 0.2s ease-in;
}

.transparent {
	opacity: 0;
}
</style>
