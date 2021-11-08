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
			<slot name="icon" />
		</div>

		<div :class="$s.MenuItemContent">
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
		item: {
			type: undefined,
			required: true,
		},

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
}
</style>
