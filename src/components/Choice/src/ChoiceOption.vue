<template>
	<button
		:class="[
			$s.ChoiceOption,
			{ [$s.selected]: isSelected },
		]"
		:disabled="isDisabled"
		@click="selectSelf"
	>
		<slot />
	</button>
</template>

<script>
import key from './key';

export default {
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
			this.controlState.selectValue(this.value);
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
.ChoiceOption {
	--button-padding: 12px 24px;

	flex-shrink: 0;
	padding: var(--button-padding);
	color: $maker-color-neutral-90;
	font-weight: inherit;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	text-align: left;
	background-color: $maker-color-neutral-10;
	border: none;
	border-radius: $maker-shape-default-border-radius;
	outline: none;
	box-shadow: var(--focus-border, 0 0);
	cursor: pointer;

	&:focus {
		--focus-border:
			0 0 0 1px $maker-color-neutral-10,
			0 0 0 3px $maker-color-neutral-20;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
}

.selected {
	color: var(--selected-contrast-color, $maker-color-neutral-10);
	background-color: var(--selected-color, $maker-color-neutral-90);

	&:disabled {
		color: var(--selected-contrast-color, $maker-color-neutral-20);
	}
}
</style>
