<template>
	<m-block-form-control-layout>
		<template #control>
			<textarea-control
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
import { MBlockFormControlLayout } from '@square/maker/components/BlockFormControlLayout';
import TextareaControl from './TextareaControl.vue';

/**
 * @inheritAttrs ./TextareaControl.vue
 * @inheritListeners ./TextareaControl.vue
 */
export default {
	components: {
		MBlockFormControlLayout,
		TextareaControl,
	},

	inheritAttrs: false,

	model: {
		prop: 'value',
		event: 'textarea:update',
	},

	computed: {
		isInvalid() {
			return this.$attrs.invalid === '' || this.$attrs.invalid || !!this.$slots.error;
		},
	},
};
</script>
