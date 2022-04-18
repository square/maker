<template>
	<button
		:class="[
			$s.Button,
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
</style>
