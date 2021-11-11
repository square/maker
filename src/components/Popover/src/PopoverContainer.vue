<template>
	<div
		:class="[
			$s.PopoverContainer,
			$s[`padding_${padding}`],
		]"
		:style="computedStyles"
	>
		<!-- @slot Popover container content -->
		<slot />
	</div>
</template>

<script>
import chroma from 'chroma-js';

export default {
	name: 'PopoverContainer',

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

		/**
		 * Padding of container
		 */
		padding: {
			type: String,
			default: 'medium',
			validator: (size) => ['minimal', 'small', 'medium', 'large'].includes(size),
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
.PopoverContainer {
	padding: 8px 0;
	color: var(--popover-color);
	background-color: var(--popover-bg-color);
	border-radius: 8px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
}

.PopoverContainer.padding_minimal {
	padding: 8px 0;
}

.PopoverContainer.padding_small {
	padding: 8px;
}

.PopoverContainer.padding_medium {
	padding: 16px;
}

.PopoverContainer.padding_large {
	padding: 24px;
}
</style>
