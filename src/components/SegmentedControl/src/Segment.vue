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
	flex: 1 0 1%;
	color: black;
	font-weight: 500;
	font-size: 14px;
	font-family: "Square Market", system-ui;
	line-height: 24px;
	border: none;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
}

.selected {
	background-color: white;
}
</style>
