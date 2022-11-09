<template>
	<m-block-form-control-layout>
		<template #control>
			<pin-input-control
				ref="pinInputControl"
				:invalid="isInvalid"
				v-bind="$attrs"
				v-on="$listeners"
			>
				<template
					v-for="(_, slot) of $slots"
					#[slot]
				>
					<slot
						:name="slot"
					/>
				</template>
			</pin-input-control>
		</template>
		<template #error>
			<!-- @slot slot for error messages -->
			<slot name="error" />
		</template>
	</m-block-form-control-layout>
</template>

<script>
import { MBlockFormControlLayout } from '@square/maker/utils/BlockFormControlLayout';
import PinInputControl from './PinInputControl.vue';

/**
 * @inheritAttrs ./PinInputControl.vue
 * @inheritListeners ./PinInputControl.vue
 * @inheritSlots ./PinInputControl.vue
 */
export default {
	components: {
		MBlockFormControlLayout,
		PinInputControl,
	},

	inheritAttrs: false,

	computed: {
		isInvalid() {
			return this.$attrs.invalid === '' || this.$attrs.invalid || !!this.$slots.error;
		},
	},

	methods: {
		/**
		 * shakes and clears pininput
		 * @public
		 */
		shakeAndClearInputs() {
			this.$refs.pinInputControl.shakeAndClearInputs();
		},
	},
};
</script>
