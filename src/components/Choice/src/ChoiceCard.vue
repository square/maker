<template>
	<m-card
		:class="[
			$s.ChoiceCard,
			{
				[$s.selected]: isSelected,
				[$s.disabled]: isDisabled,
			},
		]"
		:disabled="isDisabled"
		@click="selectSelf"
	>
		<!-- @slot has `selected` prop -->
		<slot
			:selected="isSelected"
		/>
	</m-card>
</template>

<script>
import { MCard } from '@square/maker/components/Card';
import key from './key';

export default {
	components: {
		MCard,
	},

	inject: {
		controlState: key,
	},

	props: {
		value: {
			type: undefined,
			required: true,
		},

		disabled: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		isSelected() {
			return this.controlState.isSelected(this.value);
		},

		isDisabled() {
			return this.disabled || this.controlState.disabled;
		},
	},

	methods: {
		selectSelf() {
			if (!this.isDisabled) {
				this.controlState.selectValue(this.value);
			}
		},
	},
};
</script>

<style module="$s">
/*
	Defined in Choice component:
	--selected-color
	--selected-contrast-color
*/
.ChoiceCard {
	width: 100%;
	cursor: pointer;

	&.selected {
		border-color: var(--selected-color, $maker-color-neutral-90);
		box-shadow: 0 0 0 1px var(--selected-color, $maker-color-neutral-90) inset;
	}

	&.disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
}
</style>
