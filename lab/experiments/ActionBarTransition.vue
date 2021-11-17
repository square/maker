<template>
	<div>
		<m-action-bar-layer>
			<router-view />
		</m-action-bar-layer>
		<m-modal-layer />
	</div>
</template>

<script>
import { MActionBarLayer } from '@square/maker/components/ActionBar';
import { MModalLayer } from '@square/maker/components/Modal';

export default {
	components: {
		MActionBarLayer,
		MModalLayer,
	},

	mixins: [
		MModalLayer.apiMixin,
	],
};
</script>

<style>
html,
body {
	font-family: "Square Market", system-ui;
}
</style>
