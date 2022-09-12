<template>
	<div
		:class="[
			$s.SegmentedControl,
			$s[`shape_${shapeInner}`],
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
		 * Shape of Control & Segments
		 */
		shape: {
			type: String,
			default: undefined,
			validator: (shape) => ['squared', 'rounded', 'pill'].includes(shape),
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
			shapeInner: this.shape,
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
.SegmentedControl {
	--radius-rounded-button: 8px;
	--radius-pill-button: 32px;

	display: flex;
	box-sizing: border-box;
	height: 48px;
	padding: 4px;
	font-weight: var(--maker-font-label-font-weight, 500);
	font-size: 14px;
	font-family: var(--maker-font-label-font-family, inherit);
	line-height: 24px;
	background-color: var(--maker-color-neutral-10, #f1f1f1);
	border-radius: var(--maker-shape-button-border-radius, var(--radius-rounded-button));
}

.shape_pill {
	border-radius: var(--radius-pill-button);
}

.shape_rounded {
	border-radius: var(--radius-rounded-button);
}

.shape_squared {
	border-radius: 0;
}

.size_small {
	height: 32px;
	padding: 2px;
	font-size: 12px;
	line-height: 16px;
}
</style>
