<template>
	<div
		:class="$s.Dialog"
		:style="style"
	>
		<!-- @slot Dialog content -->
		<slot />
	</div>
</template>

<style module="$s">
.Dialog {
	overflow: auto;
	color: var(--color, inherit);
	background: var(--bg-color, #f5f6f7);
}

@media screen and (--for-tablet-landscape-up) {
	.Dialog {
		width: 400px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}
}
</style>
