<template>
	<button
		:class="[
			$s.Button,
			$s[`shape_${controlState.shapeInner}`],
			$s[`size_${controlState.sizeInner}`],
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
			return this.controlState.currentValue === this.value;
		},
	},
	methods: {
		selectSelf() {
			this.controlState.currentValue = this.value;
		},
	},
};
</script>

<style module="$s">
.Button {
	flex: 1 0 0;
	color: rgba(0, 0, 0, 0.6);
	font-weight: 500;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	background-color: transparent;
	border: none;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
}

.shape_pill {
	border-radius: 32px;
}

.shape_squared {
	border-radius: 0;
}

.selected {
	color: black;
	background-color: white;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
}
</style>
