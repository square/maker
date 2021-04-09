<template>
	<div :class="$s.Container">
		<div :class="$s.Modal">
			<!-- @slot Modal content -->
			<slot />
		</div>
		<pseudo-window
			document
			@keyup.esc="$emit('window-esc')"
		/>
	</div>
</template>

<script>
import PseudoWindow from 'vue-pseudo-window';
import modalApi from './modal-api';

export default {
	components: {
		PseudoWindow,
	},

	inject: {
		modalApi,
	},
};
</script>

<style module="$s">
.Container {
	position: relative;
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
