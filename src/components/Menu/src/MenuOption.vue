<template>
	<div
		:class="{
			[$s.MenuOption]: true,
			[$s.isDisabled]: disabled,
		}"
		@click.prevent="selectOption"
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
			<slot>
				<menu-option-label>
					{{ option }}
				</menu-option-label>
			</slot>
		</div>
	</div>
</template>

<script>
import CheckIcon from '@square/maker-icons/Check';
import { MenuKey, MenuOptionKey } from './key';
import MenuOptionLabel from './MenuOptionLabel.vue';

export default {
	name: 'MenuOption',

	components: {
		CheckIcon,
		MenuOptionLabel,
	},

	provide() {
		return {
			[MenuOptionKey]: {
				disabled: () => this.disabled,
			},
		};
	},

	inject: {
		menu: MenuKey,
	},

	props: {
		/**
		 * The value of this option. Default slot displays this.
		 */
		option: {
			type: undefined,
			required: true,
		},

		/**
		 * Blocks selection
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		isSelected() {
			return this.menu.isOptionSelected(this.option);
		},
	},

	methods: {
		selectOption() {
			if (this.disabled) {
				return;
			}

			this.menu.selectOption(this.option);
		},
	},
};
</script>

<style module="$s">
.MenuOption {
	display: flex;
	align-items: center;
	padding: 12px 24px 12px 12px;
	background-color: var(--menu-background);
	cursor: pointer;
	transition: background-color 75ms linear;
}

.MenuOption.isDisabled {
	cursor: not-allowed;
}

.MenuOption:not(.isDisabled):hover {
	background-color: var(--menu-hover);
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
	color: var(--menu-text);
	opacity: 0;
	transition: opacity 75ms linear;
}

.MenuOptionIcon.isShown {
	opacity: 1;
}
</style>
