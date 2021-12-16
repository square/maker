<template>
	<label
		:class="[
			$s.LayoutContainer,
			{
				[$s.disabled]: disabled,
			}
		]"
	>
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

	props: {
		/**
		 * Toggles inline disabled styles
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	mounted() {
		assert.error(this.$slots.label, 'Missing "label" slot in inline form control');
	},
};
</script>

<style module="$s">
.LayoutContainer {
	display: inline-flex;
	font-weight: var(--font-weights-text, bold);
	font-size: var(--font-step-minus-1-size);
	font-family: var(--font-text, inherit);
	line-height: var(--font-step-minus-1-line-height);
	cursor: pointer;
}

.disabled {
	cursor: not-allowed;
	opacity: 0.5;
}

.ControlAligner {
	display: flex;
	align-items: center;
	height: 24px;
	margin-right: 8px;
}

.SubLabel {
	color: var(--neutral-80, inherit);
}
</style>
