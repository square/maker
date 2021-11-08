<template>
	<m-popover
		ref="popoverContainer"
		:min-width="200"
		v-on="$listeners"
	>
		<template #tether="popover">
			<m-button
				@click="popover.toggle()"
			>
				<slot />
			</m-button>
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
					<slot
						v-for="(item, idx) in items"
						v-bind="{ item, clickItem, index: idx }"
						name="item"
					>
						<m-menu-item
							:key="idx"
							:item="item"
							@menu-item:click="clickItem(item)"
						/>
					</slot>
				</div>
			</m-popover-bubble>
		</template>
	</m-popover>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MPopover, MPopoverBubble } from '@square/maker/components/Popover';
import chroma from 'chroma-js';
import MMenuItem from './MenuItem.vue';

const HOVER_COLOR_SCALE = 0.85;
const DISABLED_TEXT_COLOR_SCALE = 0.5;

export default {
	name: 'Menu',

	components: {
		MPopover,
		MPopoverBubble,
		MButton,
		MMenuItem,
	},

	props: {
		/**
		 * Component value
		 */
		value: {
			type: undefined,
			default: undefined,
		},

		/**
		 * List of available items for menu
		 */
		items: {
			type: Array,
			required: true,
		},

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
		clickItem(item) {
			/**
			 * Emitted when one of the menu items is clicked
			 */
			this.$emit('menu:click', item);

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
