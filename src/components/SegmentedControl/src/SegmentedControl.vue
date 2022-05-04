<template>
	<div
		:class="[
			$s.Container,
			$s[`size_${sizeInner}`],
		]"
	>
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
		/**
		 * Selected Segment inside Control
		 */
		selected: {
			type: undefined,
			required: true,
		},
		/**
		 * Size of Control & Segments
		 */
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['small', 'medium'].includes(size),
		},
	},
	data() {
		return {
			currentValue: this.selected,
			sizeInner: this.size,
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
	box-sizing: border-box;
	height: 56px;
	padding: 4px;
	font-size: 14px;
	line-height: 24px;
	background-color: var(--neutral-10, #f6f7f9);
	border-radius: var(--maker-shape-button-border-radius, 8px);
}

.size_small {
	height: 40px;
	font-size: 12px;
	line-height: 16px;
}
</style>
