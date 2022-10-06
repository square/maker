<template>
	<div>
		<button @click="openModal">
			open modal
		</button>
		<button @click="openAndCloseModal">
			open & close modal
		</button>
		<m-modal-layer />
	</div>
</template>

<script>
import { MModalLayer } from '@square/maker/components/Modal';
import MultiModal from '../components/MultiModal.vue';

export default {
	components: {
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
