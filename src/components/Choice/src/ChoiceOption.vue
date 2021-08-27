<template>
	<button
		:class="[
			$s.Button,
			{ [$s.selected]: isSelected },
		]"
		:style="style"
		@click="selectSelf"
	>
		<slot />
	</button>
</template>

<script>
import chroma from 'chroma-js';
import key from './key';

function getContrast(chromaBg, targetChromaFg) {
	const contrastAccessibilityThreshold = 4.5;
	if (!targetChromaFg
		|| chroma.contrast(chromaBg, targetChromaFg) < contrastAccessibilityThreshold) {
		const isLightThreshold = 0.32;
		const isLight = chromaBg.luminance() > isLightThreshold;
		return chroma(isLight ? '#000' : '#fff');
	}
	return targetChromaFg;
}

export default {
	inject: {
		controlState: key,
	},

	props: {
		value: {
			type: undefined,
			required: true,
		},
		selectedColor: {
			type: String,
			default: '#222',
			validator: (color) => chroma.valid(color),
		},
	},

	computed: {
		isSelected() {
			if (this.controlState.isMultiSelect) {
				return this.controlState.currentValue.includes(this.value);
			}
			return this.controlState.currentValue === this.value;
		},

		style() {
			const color = chroma(this.selectedColor);
			const contrastColor = getContrast(color, '#fff');
			const alphaValue = 0.4;
			const disabledTextColor = chroma(contrastColor).alpha(alphaValue);
			return {
				'--selected-background-color': this.selectedColor,
				'--selected-text-color': contrastColor,
				'--selected-disabled-text-color': disabledTextColor,
			};
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
