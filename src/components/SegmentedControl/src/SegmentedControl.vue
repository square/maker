<template>
	<div :class="$s.Container">
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
</style>
