<template>
	<button
		:class="[
			$s.Button,
			{ [$s.selected]: isSelected },
		]"
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
	},

	computed: {
		isSelected() {
			if (this.controlState.isMultiSelect) {
				return this.controlState.currentValue.includes(this.value);
			}
			return this.controlState.currentValue === this.value;
		},
	},

	methods: {
		selectSelf() {
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
	--color-white: #fff;
	--normal-text-color: #222;
	--normal-disabled-text-color: rgba(0, 0, 0, 0.4);
	--normal-background-color: #f2f2f2;
	--color-focus: rgba(0, 0, 0, 0.3);
	--button-padding: 12px 24px;

	flex-shrink: 0;
	padding: var(--button-padding);
	color: var(--normal-text-color);
	font-weight: inherit;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	text-align: left;
	background-color: var(--normal-background-color);
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
			0 0 0 1px var(--color-white),
			0 0 0 3px var(--color-focus);
	}

	&:disabled {
		color: var(--normal-disabled-text-color);
		cursor: initial;
	}
}

.selected {
	color: var(--selected-text-color);
	background-color: var(--selected-background-color);

	&:disabled {
		color: var(--selected-disabled-text-color);
	}
}
</style>
