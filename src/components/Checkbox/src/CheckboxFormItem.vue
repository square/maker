<template>
	<m-inline-form-control-layout>
		<template #control>
			<checkbox-control
				v-bind="$attrs"
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
};
</script>
