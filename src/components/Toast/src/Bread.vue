<template>
	<div
		:class="$s.Bread"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />
	</div>
</template>

<script>
import toastApi from './toast-api';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	inject: {
		toastApi,
	},

	inheritAttrs: false,

	props: {
		/**
		 * make bread persistent (no auto-dismiss)
		 */
		persistent: {
			type: Boolean,
			default: false,
		},
		/**
		 * auto-dismiss after x milliseconds (ignored if persistent)
		 */
		dismissAfter: {
			type: Number,
			default: 5000,
		},
	},

	mounted() {
		if (this.persistent) {
			return;
		}
		setTimeout(() => {
			this.toastApi.closeSelf();
		}, this.dismissAfter);
	},
};
</script>

<style module="$s">
.Bread {
	margin: 8px 0;
	padding: 8px;
	background-color: var(--maker-color-background, #fff);
	border-radius: var(--maker-shape-default-border-radius);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 4px 32px rgba(0, 0, 0, 0.1);
	transition: all 0.5s;
	pointer-events: auto;
}
</style>
