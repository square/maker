<template>
	<m-row
		:class="$s.MenuOption"
		@click="selectSelf"
	>
		<slot />
		<template
			v-if="isSelectOption || $slots.icon"
			#icon
		>
			<span
				v-if="isSelectOption"
				:class="$s.Check"
			>
				<check-icon
					v-if="isSelected"
					:class="$s.Icon"
				/>
			</span>
			<slot
				v-else
				name="icon"
			/>
		</template>
		<template
			v-if="$slots.secondary"
			#secondary
		>
			<slot name="secondary" />
		</template>
		<template
			v-if="$slots.side"
			#side
		>
			<slot name="side" />
		</template>
		<template
			v-if="$slots['side-secondary']"
			#side-secondary
		>
			<slot name="side-secondary" />
		</template>
		<template
			v-if="$slots['side-secondary-icon']"
			#side-secondary-icon
		>
			<slot name="side-secondary-icon" />
		</template>
	</m-row>
</template>

<script>
import { MRow } from '@square/maker/utils/Row';
import CheckIcon from '@square/maker-icons/Check';
import key from './key';

export default {
	components: {
		MRow,
		CheckIcon,
	},

	inject: {
		controlState: key,
	},

	props: {
		value: {
			type: undefined,
			default: undefined,
		},

		clickHandler: {
			type: Function,
			default: undefined,
		},
	},

	computed: {
		isSelected() {
			const { isMultiSelect, isSingleSelect, currentValue } = this.controlState;

			if (isMultiSelect) {
				return currentValue.includes(this.value);
			}
			return isSingleSelect && currentValue === this.value;
		},

		isSelectOption() {
			const { isMultiSelect, isSingleSelect } = this.controlState;
			return isMultiSelect || isSingleSelect;
		},
	},

	methods: {
		selectSelf() {
			if (this.controlState.isActionSelect) {
				this.clickHandler();
			}

			let currentValue = this.value;

			if (this.controlState.isMultiSelect) {
				const currentValueArray = this.controlState.currentValue.slice();

				if (currentValueArray.includes(currentValue)) {
					const singleValue = 1;
					currentValueArray.splice(currentValueArray.indexOf(currentValue), singleValue);
				} else {
					currentValueArray.push(currentValue);
				}

				currentValue = currentValueArray;
			}

			this.controlState.currentValue = currentValue;
		},
	},
};
</script>

<style module="$s">
/*
	Defined in Choice component:
	--selected-background-color
	--selected-text-color
	--selected-disabled-text-color
*/
.Button {
	--border-radius: 8px;
	--button-padding: 12px 24px;

	flex-shrink: 0;
	padding: var(--button-padding);
	color: var(--neutral-90, #222);
	font-weight: inherit;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	text-align: left;
	background-color: var(--neutral-10, #f2f2f2);
	border: none;
	border-radius: var(--border-radius);
	outline: none;
	box-shadow: var(--focus-border, 0 0);
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 8px;
	}

	&:focus {
		--focus-border:
			0 0 0 1px var(--neutral-10, #fff),
			0 0 0 3px var(--neutral-20, rgba(0, 0, 0, 0.3));
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
}

.selected {
	color: var(--selected-text-color, var(--neutral-10, #f1f1f1));
	background-color: var(--selected-background-color, var(--neutral-90, #222));

	&:disabled {
		color: var(--selected-disabled-text-color, var(--neutral-20, #666));
	}
}

.MenuOption {
	cursor: pointer;

	&:hover {
		background-color: var(--neutral-10);
	}
}

.Check {
	display: block;
	opacity: 0.7;
}

.Check,
.Icon {
	width: 24px;
	height: 24px;
}
</style>
