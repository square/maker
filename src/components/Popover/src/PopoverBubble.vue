<template>
	<div
		:class="$s.PopoverBubble"
		:style="computedStyles"
	>
		<!-- @slot Popover bubble content -->
		<slot />
	</div>
</template>

<script>
import chroma from 'chroma-js';

export default {
	name: 'PopoverBubble',

	props: {
		/**
		 * Text color within the popover
		 */
		color: {
			type: String,
			default: '#000',
			validator: (color) => chroma.valid(color),
		},
		/**
		 * Background color of the popover
		 */
		bgColor: {
			type: String,
			default: '#fff',
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
.PopoverBubble {
	padding: 8px 0;
	color: var(--popover-color);
	background-color: var(--popover-bg-color);
	border-radius: 8px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
}
</style>
