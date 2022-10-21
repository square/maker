<template>
	<div>
		<button @click="openModal">
			open modal
		</button>
		<button @click="openAndCloseModal">
			open & close modal in 5 secs
		</button>
		<m-modal :before-close="() => true">
			this is a layerless modal with a beforeClose hook,
			it should emit an error to the console
		</m-modal>
		<m-modal-layer />
	</div>
</template>

<script>
import { MModalLayer, MModal } from '@square/maker/components/Modal';
import MultiModal from '../components/MultiModal.vue';

export default {
	components: {
		MModal,
		MModalLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	methods: {
		openModal() {
			this.modalApi.open(() => <MultiModal />);
		},
		openAndCloseModal() {
			const close = this.modalApi.open(() => <MultiModal />);
			const CLOSE_TIMEOUT = 5000;
			setTimeout(close, CLOSE_TIMEOUT);
		},
	},
};
</script>
