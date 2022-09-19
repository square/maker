<template>
	<!--
		PopoverContent is expected to render outside the Popover's Mtheme wrapper,
		due to the recommended placement of MPopoverLayer.
		Returning a new MTheme wrapper for PopoverContent allows us to ensure that
		the MTheme context of Popover and PopoverContent area always identical.
	-->
	<m-theme
		:class="$s.PopoverContent"
		:style="styles"
		:theme="theme"
	>
		<!-- @slot Popover container content -->
		<slot />
	</m-theme>
</template>

<script>
import { colord } from 'colord';
import { MTheme } from '@square/maker/components/Theme';
import { WCAG_CONTRAST_TEXT, getContrast } from '@square/maker/utils/get-contrast';
import makerColors from '@square/maker/utils/maker-colors';

export default {
	components: {
		MTheme,
	},

	props: {
		/**
		 * Text color within the popover
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
		},
		/**
		 * Background color of the popover
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: (color) => colord(color).isValid(),
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
		styles() {
			return {
				'--padding': this.padding,
			};
		},

		theme() {
			let colors = {};
			if (this.bgColor) {
				colors = makerColors(this.bgColor);
			}
			if (this.color) {
				colors.body = getContrast(colors.background, this.color, WCAG_CONTRAST_TEXT);
			}

			return {
				colors,
			};
		},
	},
};
</script>

<style module="$s">
.PopoverContent {
	padding: var(--padding);
	color: $maker-color-body;
	background-color: $maker-color-background;
	border: 1px solid $maker-color-neutral-10;
	border-radius: $maker-shape-default-border-radius;
	box-shadow: 0 0 18px 6px rgba(0, 0, 0, 0.2);
}
</style>
