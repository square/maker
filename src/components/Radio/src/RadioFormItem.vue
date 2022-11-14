<template>
	<m-inline-form-control-layout :disabled="disabled">
		<template #control>
			<radio-control
				v-bind="$attrs"
				:disabled="disabled"
				v-on="$listeners"
			/>
		</template>

		<template #label>
			<!-- @slot Radio label -->
			<slot />
		</template>

		<template #sublabel>
			<!-- @slot Radio sublabel -->
			<slot name="sublabel" />
		</template>
	</m-inline-form-control-layout>
</template>

<script>
import { MInlineFormControlLayout } from '@square/maker/components/InlineFormControlLayout';
import RadioControl from './RadioControl.vue';

/**
 * Radio component
 * @inheritAttrs ./RadioControl.vue
 * @inheritListeners ./RadioControl.vue
 */
export default {
	components: {
		RadioControl,
		MInlineFormControlLayout,
	},

	inheritAttrs: false,

	model: {
		prop: 'selected',
		event: 'radio:update',
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
