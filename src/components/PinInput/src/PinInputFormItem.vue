<template>
	<m-block-form-control-layout>
		<template #control>
			<pin-input-control-two
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
			</pin-input-control-two>
			<pin-input-control-old
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
			</pin-input-control-old>
		</template>
		<template #error>
			<!-- @slot slot for error messages -->
			<slot name="error" />
		</template>
	</m-block-form-control-layout>
</template>

<script>
import { MBlockFormControlLayout } from '@square/maker/utils/BlockFormControlLayout';
import PinInputControlTwo from './PinInputControl2.vue';
import PinInputControlOld from './PinInputControl.vue';

/**
 * @inheritAttrs ./PinInputControl.vue
 * @inheritListeners ./PinInputControl.vue
 */
export default {
	components: {
		MBlockFormControlLayout,
		PinInputControlTwo,
		PinInputControlOld,
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
