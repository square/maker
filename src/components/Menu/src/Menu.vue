<template>
	<m-popover
		ref="popoverContainer"
		:min-width="minWidth"
		:placement="placement"
		v-on="$listeners"
	>
		<template #tether="popover">
			<slot v-bind="popover" />
		</template>

		<template #content>
			<m-popover-bubble
				:color="color"
				:bg-color="bgColor"
			>
				<div
					:class="$s.Menu"
					:style="computedStyles"
				>
					<slot name="items" />
				</div>
			</m-popover-bubble>
		</template>
	</m-popover>
</template>

<script>
import { MPopover, MPopoverBubble } from '@square/maker/components/Popover';
import chroma from 'chroma-js';
import { MenuKey } from './key';

const HOVER_COLOR_SCALE = 0.85;
const DISABLED_TEXT_COLOR_SCALE = 0.5;

export default {
	name: 'Menu',

	components: {
		MPopover,
		MPopoverBubble,
	},

	provide() {
		return {
			[MenuKey]: this.menuApi,
		};
	},

	props: {
		/**
		 * Toggles whether the popover should close when an item is clicked
		 */
		shouldCloseOnClick: {
			type: Boolean,
			default: true,
		},

		/**
		 * Text color for items
		 */
		color: {
			type: String,
			default: '#000',
			validator: (color) => chroma.valid(color),
		},

		/**
		 * Background color for items
		 */
		bgColor: {
			type: String,
			default: '#fff',
			validator: (color) => chroma.valid(color),
		},

		/**
		 * Placement of popover menu items
		 */
		placement: {
			type: String,
			default: 'bottom-start',
			validator: (placement) => [
				'auto', 'auto-start', 'auto-end',
				'top', 'top-start', 'top-end',
				'right', 'right-start', 'right-end',
				'bottom', 'bottom-start', 'bottom-end',
				'left', 'left-start', 'left-end',
			].includes(placement),
		},

		/**
		 * Minimum width of popover items
		 */
		minWidth: {
			type: Number,
			default: 200,
		},
	},

	data() {
		return {
			menuApi: {
				clickMenuItem: this.clickMenuItem,
			},
		};
	},

	computed: {
		/**
		 * Chroma scale to calculate colors between background and text
		 */
		colorScale() {
			return chroma.scale([this.color, this.bgColor]);
		},

		computedStyles() {
			return {
				'--menu-text': this.color,
				'--menu-text-disabled': this.colorScale(DISABLED_TEXT_COLOR_SCALE),
				'--menu-background': this.bgColor,
				'--menu-hover': this.colorScale(HOVER_COLOR_SCALE),
			};
		},
	},

	methods: {
		clickMenuItem(item) {
			/**
			 * Emitted when one of the menu items is clicked
			 */
			this.$emit('menu:click-item', item);

			if (this.shouldCloseOnClick) {
				this.$refs.popoverContainer.close();
			}
		},
	},
};
</script>

<style module="$s">
.Menu {
	display: flex;
	flex-direction: column;
}
</style>
