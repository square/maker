<template>
	<div
		:class="$s.PopoverBubble"
		:style="computedStyles"
	>
		<slot />
	</div>
</template>

<script>
import chroma from 'chroma-js';

export default {
	name: 'PopoverBubble',

	props: {
		color: {
			type: String,
			default: '#000',
			validator: (color) => chroma.valid(color),
		},
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
