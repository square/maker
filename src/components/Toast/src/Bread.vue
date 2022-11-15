<template>
	<div
		:class="$s.Bread"
		v-bind="$attrs"
		v-on="listeners"
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

	data() {
		return {
			mouseEnterAt: 0,
			mouseLeaveAt: 0,
			closeQueued: false,
		};
	},

	computed: {
		listeners() {
			const listeners = {
				// apply listeners set by parent
				...this.$listeners,
			};
			if (this.persistent) {
				return listeners;
			}
			// if this is an auto-dismiss bread then also
			// conditionally apply mouse event listeners
			listeners['&mouseenter'] = this.onMouseEnter;
			listeners['&mouseleave'] = this.onMouseLeave;
			// vue protip: prefixed the event name with
			// an & tells vue to apply the passive modifier
			return listeners;
		},
	},

	mounted() {
		if (this.persistent) {
			return;
		}
		this.closeSelfIn(this.dismissAfter);
	},

	methods: {
		onMouseEnter() {
			this.mouseEnterAt = Date.now();
		},
		onMouseLeave() {
			this.mouseLeaveAt = Date.now();
			// if toast is still within its open duration
			// window then don't do anything, let the
			// current timeout resolve the close action
			if (!this.closeQueued) {
				return;
			}
			const ONE_SECOND = 1000;
			this.closeSelfIn(ONE_SECOND);
		},
		closeSelfIn(durationMs) {
			this.closeQueued = false;
			setTimeout(() => {
				// if mouse never hovered over bread, or if it
				// hovered over bread but left already then
				// close immediately
				if (this.mouseLeaveAt >= this.mouseEnterAt) {
					this.toastApi.closeSelf();
					return;
				}
				// if mouse is currently hovering over bread
				// then queue up a close action which will
				// be resolved when the mouse leaves
				this.closeQueued = true;
			}, durationMs);
		},
	},
};
</script>

<style module="$s">
.Bread {
	margin: 8px 0;
	overflow: hidden;
	background-color: $maker-color-background;
	border-radius: $maker-shape-default-border-radius;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 4px 32px rgba(0, 0, 0, 0.1);
	transition:
		transform 0.5s,
		opacity 0.5s,
		max-height 0.5s,
		margin 0.5s,
		padding 0.5s;
	pointer-events: auto;
}
</style>
