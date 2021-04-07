<template>
	<div :class="$s.Container">
		<div :class="$s.ModalContainer">
			<div :class="$s.Modal">
				<!-- @slot Modal content -->
				<slot />
			</div>
		</div>
	</div>
</template>

<style module="$s">
.Container {
	position: relative;
	width: 100%;
	height: 100%;
}

.ModalContainer {
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.Modal {
	height: 100%;
	overflow: scroll;
	background: #f5f6f7;
}

@media screen and (min-width: 840px) {
	.Container {
		display: inline-block;
		width: auto;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
	}

	.Modal {
		width: 600px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}
}
</style>
