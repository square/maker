<script>
/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	inheritAttrs: false,

	props: {
		/**
		 * Toggled loaded state
		 */
		loaded: {
			type: Boolean,
			default: false,
		},
	},

	render(h) {
		/**
		 * @slot loading content
		 */
		if (this.$slots.default) {
			return this.$slots.default;
		}

		return h('div', {
			class: [this.$s.SkeletonBlock, {
				[this.$s.loading]: !this.loaded,
			}],
			on: this.$listeners,
			attrs: this.$attrs,
		});
	},
};
</script>

<style module="$s">
.SkeletonBlock {
	width: 100%;
	height: 100%;

	&.loading {
		animation: pulsing 0.5s ease-in-out infinite alternate;
	}
}

@keyframes pulsing {
	0% { background-color: var(--maker-color-neutral-10, #f1f1f1); }
	100% { background-color: var(--maker-color-neutral-20, #d3d3d3); }
}
</style>
