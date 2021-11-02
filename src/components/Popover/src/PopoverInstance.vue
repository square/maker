<template>
	<div><slot /></div>
</template>

<script>
import Popper from './utils';

export default {
	name: 'PopoverInstance',

	props: {
		tetherEl: {
			type: undefined,
			required: true,
		},
		popperConfig: {
			type: Object,
			default: undefined,
		},
	},

	mounted() {
		this.popper = new Popper(
			this.tetherEl,
			this.$el,
			this.popoverConfig,
		);

		this.resizeObserver = this.followPopoverAction();
	},

	beforeDestroy() {
		this.resizeObserver.disconnect();
		this.popper.destroy();
		this.$emit('destroy');
	},

	methods: {
		followPopoverAction() {
			const resizeObserver = new ResizeObserver(() => {
				this.popper.scheduleUpdate();
				this.$emit('resize');
			});

			resizeObserver.observe(this.tetherEl);
			resizeObserver.observe(document.body);

			return resizeObserver;
		},
	},
};
</script>

<style>
/* keep */
</style>
