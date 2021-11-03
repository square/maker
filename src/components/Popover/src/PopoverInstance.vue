<template>
	<div :class="$s.PopoverInstance">
		<slot />
	</div>
</template>

<script>
import { createPopper } from '@popperjs/core';

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
		this.popper = createPopper(this.tetherEl, this.$el, this.popperConfig);
		this.resizeObserver = this.followPopoverAction();
	},

	beforeDestroy() {
		this.resizeObserver.disconnect();
		this.popper.destroy();
		this.$emit('destroy');
	},

	updated() {
		this.popper.update();
	},

	methods: {
		followPopoverAction() {
			const resizeObserver = new ResizeObserver(() => {
				this.popper.update();
				this.$emit('resize');
			});

			resizeObserver.observe(this.tetherEl);
			resizeObserver.observe(document.body);

			return resizeObserver;
		},
	},
};
</script>

<style module="$s">
.PopoverInstance[data-popper-reference-hidden] {
	visibility: hidden;
	pointer-events: none;
}
</style>
