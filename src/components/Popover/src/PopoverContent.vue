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
import { MThemeKey, defaultTheme } from '@square/maker/components/Theme';

export default {
	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

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
			// PopoverContent can be rendered outside the current Mtheme wrapper
			// depending on placement of MPopoverLayer so we need to make sure
			// it receives the correct Mtheme color variables
			const themeColorVars = {};
			Object.entries(this.theme.colors).forEach(([color, hex]) => {
				const name = color.includes('neutral') ? `--${color}` : `--color-${color}`;
				themeColorVars[name] = hex;
			});

			return {
				'--popover-color': this.color,
				'--popover-bg-color': this.bgColor,
				'--padding': this.padding,
				...themeColorVars,
			};
		},
	},
};
</script>

<style module="$s">
.PopoverContent {
	padding: var(--padding);
	color: var(--popover-color, var(--color-text, black));
	background-color: var(--popover-bg-color, var(--color-background, white));
	border: 1px solid var(--neutral-10);
	border-radius: var(--maker-border-radius, 8px);
	box-shadow: 0 0 18px 6px rgba(0, 0, 0, 0.2);
}
</style>
