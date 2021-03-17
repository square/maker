<template>
	<div :class="$s.Container">
		<div :class="$s.Blade">
			<!-- @slot Blade content -->
			<slot />
		</div>
	</div>
</template>

<style module="$s">
.Container {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.Blade {
	height: 100%;
	overflow: scroll;
	background: #f5f6f7;
}

@media screen and (min-width: 840px) {
	.Container {
		width: 400px;
		box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
	}

	.Blade {
		width: 400px;
	}
}
</style>
