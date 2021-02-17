<template>
	<div
		:class="[
			$s.Container,
			$s[`shape_${shapeInner}`],
			$s[`size_${sizeInner}`],
		]"
	>
		<subslot
			element="@MSegment"
			@no-match="onNoSegments"
		/>
	</div>
</template>

<script>
import Subslot from 'vue-subslot';
import assert from '@square/maker/utils/assert';
import { MSegment } from '@square/maker/components/SegmentedControl';
import key from './key';

export default {
	components: {
		Subslot,
		// eslint-disable-next-line vue/no-unused-components
		MSegment,
	},
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
			default: 'rounded',
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
			shapeInner: this.shape,
			sizeInner: this.size,
		};
	},
	watch: {
		currentValue(newValue) {
			this.$emit('segmented-control:update', newValue);
		},
	},
	methods: {
		onNoSegments() {
			assert.error(false, "You must pass 2-4 MSegment components to MSegmentedControl's default slot.");
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

.shape_pill {
	border-radius: 32px;
}

.shape_squared {
	border-radius: 0;
}

.size_small {
	height: 40px;
}
</style>
