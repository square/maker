<template>
	<m-inline-form-control-layout>
		<template #control>
			<toggle-control
				v-bind="$attrs"
				v-on="$listeners"
			/>
		</template>

		<template #label>
			<!-- @slot toggle label -->
			<slot />
		</template>

		<template #sublabel>
			<!-- @slot toggle sublabel -->
			<slot name="sublabel" />
		</template>
	</m-inline-form-control-layout>
</template>

<script>
import { MInlineFormControlLayout } from '@square/maker/components/InlineFormControlLayout';
import ToggleControl from './ToggleControl.vue';

/**
 * @inheritAttrs ./ToggleControl.vue
 * @inheritListeners ./ToggleControl.vue
 */
export default {
	components: {
		ToggleControl,
		MInlineFormControlLayout,
	},

	inheritAttrs: false,

	model: {
		prop: 'toggled',
		event: 'toggle:update',
	},
};
</script>
