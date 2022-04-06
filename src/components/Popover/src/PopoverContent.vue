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
		/**
		 * Popover padding
		 */
		padding: {
			type: String,
			default: '24px',
			validator: (padding) => {
				// CSS not defined when rendering server-side
				if (global.CSS) {
					return global.CSS.supports('padding', padding);
				}
				return true;
			},
		},
	},

	computed: {
		computedStyles() {
			return {
				'--popover-color': this.color,
				'--popover-bg-color': this.bgColor,
				'--padding': this.padding,
			};
		},
	},
};
</script>

<style module="$s">
.PopoverContent {
	padding: var(--padding);
	color: var(--popover-color, var(--neutral-90, black));
	background-color: var(--popover-bg-color, var(--color-elevation, white));
	border-radius: 8px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
}
</style>
