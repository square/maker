<template>
	<div :class="$s.Container">
		<slot />
	</div>
</template>

<script>
import key from './key';

export default {
	provide() {
		return {
			[key]: this.$data,
		};
	},
	model: {
		prop: 'selected',
		event: 'segmented-control:update',
	},
	props: {
		selected: {
			type: undefined,
			required: true,
		},
	},
	data() {
		return {
			currentValue: this.selected,
		};
	},
	watch: {
		currentValue(newValue) {
			this.$emit('segmented-control:update', newValue);
		},
	},
};
</script>

<style module="$s">
.Container {
	display: flex;
	height: 56px;
	padding: 4px;
	background-color: rgba(0, 0, 0, 0.05);
	border-radius: 4px;
}
</style>
