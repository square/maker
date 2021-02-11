<template>
	<m-modal-container>
		<div :class="$s.Modal">
			<!-- @slot Modal content -->
			<slot />
		</div>
	</m-modal-container>
</template>

<script>
// import { MModalContainer } from '@square/maker/components/Modal';
import MModalContainer from './ModalContainer.vue';

export default {
	components: {
		MModalContainer,
	},
};
</script>

<style module="$s">
.Modal {
	width: 100%;
	height: 100%;
	background: #f5f6f7;
}

@media screen and (min-width: 1200px) {
	.Modal {
		display: inline-block;
		width: auto;
		height: auto;
		min-width: 600px;
		max-width: 50vw;
		overflow: scroll;
		border-radius: 16px;
		box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
	}
}
</style>
