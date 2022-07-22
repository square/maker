<template>
	<m-inline-form-control-layout :disabled="disabled">
		<template #control>
			<checkbox-control
				v-bind="$attrs"
				:disabled="disabled"
				v-on="$listeners"
			/>
		</template>

		<template #label>
			<!-- @slot Checkbox label -->
			<slot />
		</template>

		<template #sublabel>
			<!-- @slot Checkbox sublabel -->
			<slot name="sublabel" />
		</template>
	</m-inline-form-control-layout>
</template>

<script>
import { MInlineFormControlLayout } from '@square/maker/utils/InlineFormControlLayout';
import CheckboxControl from './CheckboxControl.vue';

/**
 * Checkbox component
 * @inheritAttrs ./CheckboxControl.vue
 * @inheritListeners ./CheckboxControl.vue
 */
export default {
	components: {
		CheckboxControl,
		MInlineFormControlLayout,
	},

	inheritAttrs: false,

	model: {
		prop: 'checked',
		event: 'checkbox:update',
	},

	props: {
		/**
		 * Toggles radio disabled state
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
