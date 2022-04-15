<template>
	<m-row
		:class="$s.MenuOption"
		@click="selectSelf"
	>
		<slot />
		<template
			v-if="isSelectOption || $slots.prefix"
			#prefix
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
				name="prefix"
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
			v-if="$slots.suffix"
			#suffix
		>
			<slot name="suffix" />
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
			const { isMultiSelect, isActionSelect } = this.controlState;

			if (isActionSelect) {
				this.clickHandler();
			}

			let currentValue = this.value;

			if (isMultiSelect) {
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
.MenuOption {
	box-sizing: border-box;
	padding: 16px;
	cursor: pointer;

	&:hover {
		background-color: var(--neutral-10, #f1f1f1);
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
