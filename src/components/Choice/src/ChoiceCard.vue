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
.ChoiceCard {
	--color-border-active: $maker-color-neutral-80;
	--color-border-selected: $maker-color-neutral-90;

	width: 100%;
	cursor: pointer;
	transition: border-color 0.2s ease;

	&.selected {
		border-color: var(--color-border-selected);
		box-shadow: 0 0 0 1px var(--color-border-selected) inset;
	}

	&.disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	&:not(.disabled, .selected):hover {
		border-color: var(--color-border-active);
	}
}
</style>
