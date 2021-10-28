<template>
	<div
		:class="$s.MenuOption"
		@mousedown.prevent="selectOption"
	>
		<div :class="$s.MenuOptionIconContainer">
			<check-icon
				:class="{
					[$s.MenuOptionIcon]: true,
					[$s.isShown]: isSelected
				}"
			/>
		</div>
		<div :class="$s.MenuOptionIconContent">
			<slot />
		</div>
	</div>
</template>

<script>
import CheckIcon from '@square/maker-icons/Check';
import { MThemeKey, defaultTheme } from '@square/maker/components/Theme';
import MenuKey from './key';

export default {
	name: 'MenuOption',

	components: {
		CheckIcon,
	},

	inject: {
		menu: MenuKey,
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	props: {
		option: {
			type: undefined,
			required: true,
		},
	},

	computed: {
		isSelected() {
			return this.menu.isOptionSelected(this.option);
		},
	},

	methods: {
		selectOption() {
			this.menu.selectOption(this.option);
		},
	},
};
</script>

<style module="$s">
.MenuOption {
	display: flex;
	align-items: center;
	padding: 12px;
	cursor: pointer;
}

.MenuOptionIconContainer {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	margin-right: 8px;
}

.MenuOptionIcon {
	width: 16px;
	height: 16px;
	opacity: 0;
	transition: opacity 75ms linear;

	&.isShown {
		opacity: 1;
	}
}
</style>
