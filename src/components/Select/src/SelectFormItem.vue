<template>
	<m-block-form-control-layout>
		<template #control>
			<select-control
				:invalid="isInvalid"
				v-bind="$attrs"
				v-on="$listeners"
			/>
		</template>
		<template #error>
			<!-- @slot slot for error messages -->
			<slot name="error" />
		</template>
	</m-block-form-control-layout>
</template>

<script>
import { MBlockFormControlLayout } from '@square/maker/utils/BlockFormControlLayout';
import SelectControl from './SelectControl.vue';

/**
 * @inheritAttrs ./SelectControl.vue
 * @inheritListeners ./SelectControl.vue
 */
export default {
	components: {
		MBlockFormControlLayout,
		SelectControl,
	},

	inheritAttrs: false,

	model: {
		prop: 'value',
		event: 'select:update',
	},

	computed: {
		isInvalid() {
			return this.$attrs.invalid === '' || this.$attrs.invalid || !!this.$slots.error;
		},
	},
};
</script>
