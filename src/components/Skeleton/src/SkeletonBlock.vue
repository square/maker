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
			class: [
				this.$s.SkeletonBlock,
				{
					[this.$s.loading]: !this.loaded,
				},
			],
			on: this.$listeners,
			attrs: {
				...this.$attrs,
				'aria-hidden': !this.loaded ? 'true' : undefined,
			},
		});
	},
};
</script>

<style module="$s">
.SkeletonBlock {
	width: 100%;
	height: 100%;
	background-color: $maker-color-neutral-20;

	&.loading {
		animation: pulsing 0.5s ease-in-out infinite alternate;
	}
}

@keyframes pulsing {
	0% { opacity: 0.4; }
	100% { opacity: 1; }
}
</style>
