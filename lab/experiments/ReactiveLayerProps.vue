<template>
	<div class="reactive-layer-props-lab">
		<button @click="openBlade">
			open blade
		</button>
		<button @click="openModal">
			open modal
		</button>
		<button @click="openDialog">
			open dialog
		</button>
		<br>
		count is {{ count }}
		<m-blade-layer />
		<m-modal-layer />
		<m-dialog-layer />
	</div>
</template>

<script>
import { MBladeLayer } from '@square/maker/components/Blade';
import { MModalLayer } from '@square/maker/components/Modal';
import { MDialogLayer } from '@square/maker/components/Dialog';

import ActionBarBlade from '../components/ActionBarBlade.vue';
import ActionBarModal from '../components/ActionBarModal.vue';
import ActionBarDialog from '../components/ActionBarDialog.vue';

export default {
	components: {
		MBladeLayer,
		MDialogLayer,
		MModalLayer,
	},

	mixins: [
		MBladeLayer.apiMixin,
		MDialogLayer.apiMixin,
		MModalLayer.apiMixin,
	],

	data() {
		return {
			count: 0,
		};
	},

	mounted() {
		const INCREMENT_BY = 1;
		const ONE_SECOND = 1000;
		setInterval(() => {
			this.count += INCREMENT_BY;
		}, ONE_SECOND);
	},

	methods: {
		openModal() {
			this.modalApi.open(() => <ActionBarModal count={this.count} />);
		},
		openDialog() {
			this.dialogApi.open(() => <ActionBarDialog count={this.count} />);
		},
		openBlade() {
			this.bladeApi.open(() => <ActionBarBlade count={this.count} />);
		},
	},
};
</script>

<style scoped>
.reactive-layer-props-lab {
	font-family: -apple-system, 'Helvetica Neue', sans-serif;
}
</style>
