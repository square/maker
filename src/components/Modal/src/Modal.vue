<template>
	<div :class="$s.Modal">
		<!-- @slot Modal content -->
		<slot />
	</div>
</template>

<script>
import modalApi from './modal-api';

export default {
	name: 'Modal',

	inject: {
		modalApi,
	},

	props: {
		/**
		 * Before close hook, can block closing
		 */
		beforeClose: {
			type: Function,
			required: false,
			default: undefined,
		},
	},

	watch: {
		beforeClose: {
			immediate: true,
			handler(hook) {
				this.modalApi.state.options.beforeCloseHook = hook;
			},
		},
	},
};
</script>

<style module="$s">
.Modal {
	height: 100%;
	overflow: scroll;
	background: #f5f6f7;
}

@media screen and (min-width: 840px) {
	.Modal {
		width: 600px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}
}
</style>
