<template>
	<label :class="$s.LayoutContainer">
		<div :class="$s.ControlAligner">
			<slot name="control" />
		</div>
		<div>
			<slot name="label" />
			<div
				v-if="$slots.sublabel"
				:class="$s.SubLabel"
			>
				<slot name="sublabel" />
			</div>
		</div>
	</label>
</template>

<script>
import assert from '@square/maker/utils/assert';

export default {
	mounted() {
		assert.error(this.$slots.label, 'Missing "label" slot in inline form control');
	},
};
</script>

<style module="$s">
.LayoutContainer {
	display: inline-flex;
	color: var(--color-900, inherit);
	font-size: 14px;
	font-family: inherit;
	line-height: 24px;
	cursor: pointer;
}

.ControlAligner {
	display: flex;
	align-items: center;
	height: 24px;
	margin-right: 8px;
}

.SubLabel {
	color: var(--color-800, inherit);
}
</style>
