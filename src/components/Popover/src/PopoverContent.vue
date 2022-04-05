<template>
	<div
		:class="$s.PopoverContent"
		:style="computedStyles"
	>
		<!-- @slot Popover container content -->
		<slot />
	</div>
</template>

<script>
import chroma from 'chroma-js';

export default {
	props: {
		/**
		 * Text color within the popover
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
		/**
		 * Background color of the popover
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
	},

	computed: {
		computedStyles() {
			return {
				'--popover-color': this.color,
				'--popover-bg-color': this.bgColor,
			};
		},
	},
};
</script>

<style module="$s">
.PopoverContent {
	padding: 24px;
	color: var(--popover-color, var(--neutral-90, black));
	background-color: var(--popover-bg-color, var(--color-elevation, white));
	border-radius: 8px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
}
</style>
