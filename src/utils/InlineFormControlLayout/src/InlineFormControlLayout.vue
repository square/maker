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
	--color-foreground: rgba(0, 0, 0, 0.9);
	--color-sublabel: rgba(0, 0, 0, 0.55);

	display: inline-flex;
	color: var(--color-foreground);
	font-size: 14px;
	font-family: "Square Market", system-ui;
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
	color: var(--color-sublabel);
}
</style>
