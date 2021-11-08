<template>
	<div
		:class="{
			[$s.MenuItem]: true,
			[$s.isDisabled]: isDisabled
		}"
		@click="clickMenuItem"
	>
		<div
			v-if="$slots.icon"
			:class="$s.MenuItemIconContainer"
		>
			<!-- @slot 16x16 Square Maker Icon -->
			<slot name="icon" />
		</div>

		<div :class="$s.MenuItemContent">
			<!-- Content for item label, defaults to raw output of item prop -->
			<slot v-if="$slots.default" />
			<template v-else>
				{{ item }}
			</template>
		</div>
	</div>
</template>

<script>
import { MenuKey } from './key';

export default {
	name: 'MenuItem',

	inject: {
		menuApi: {
			from: MenuKey,
		},
	},

	props: {
		/**
		 * The value that is emitted on click
		 */
		value: {
			type: undefined,
			required: true,
		},

		/**
		 * Blocks clicking of the item
		 */
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},

	methods: {
		clickMenuItem() {
			if (!this.isDisabled) {
				this.menuApi.clickMenuItem(this.item);
			}
		},
	},
};
</script>

<style module="$s">
.MenuItem {
	display: flex;
	align-items: center;
	padding: 12px;
	background-color: var(--menu-background);
	cursor: pointer;
	transition: background-color 75ms linear;
}

.MenuItem.isDisabled {
	color: var(--menu-text-disabled);
	cursor: not-allowed;
}

.MenuItem:not(.isDisabled):hover {
	background-color: var(--menu-hover);
}

.MenuItemIconContainer {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	margin-right: 8px;
	padding: 4px;
}
</style>
