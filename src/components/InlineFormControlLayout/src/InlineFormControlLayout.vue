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
		assert.error(this.$slots.label, 'Missing "label" slot in inline form control', 'InlineFormControlLayout');
	},
};
</script>

<style module="$s">
.LayoutContainer {
	display: inline-flex;
	font-size: 14px;
	font-family: inherit;
	line-height: 24px;
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
</style>
