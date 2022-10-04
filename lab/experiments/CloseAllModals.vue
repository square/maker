<template>
	<div>
		<button @click="openModal">
			open modal
		</button>
		<m-modal-layer />
	</div>
</template>

<script>
import { MModalLayer } from '@square/maker/components/Modal';
import ActionBarModal from '../components/ActionBarModal.vue';

export default {
	components: {
		MModalLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
	],

	data() {
		return {
			count: 0,
		};
	},

	methods: {
		openModal() {
			this.modalApi.open(() => <ActionBarModal />);
		},
	},
};
</script>
