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
				{{ value }}
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
				this.menuApi.clickMenuItem(this.value);
			}
		},
	},
};
</script>

<style module="$s">
.MenuItem {
	display: flex;
	align-items: center;
	min-width: 200px;
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

.MenuItemContent {
	display: flex;
	height: 24px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.MenuItemIconContainer {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 16px;
	height: 16px;
	margin-right: 8px;
}
</style>
