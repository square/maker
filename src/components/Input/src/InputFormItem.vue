<template>
	<m-block-form-control-layout>
		<template #control>
			<input-control
				ref="input"
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
			</input-control>
		</template>
		<template #error>
			<!-- @slot Input error slot -->
			<slot name="error" />
		</template>
	</m-block-form-control-layout>
</template>

<script>
import { MBlockFormControlLayout } from '@square/maker/components/BlockFormControlLayout';
import InputControl from './InputControl.vue';

/**
 * @inheritAttrs ./InputControl.vue
 * @inheritListeners ./InputControl.vue
 * @inheritSlots ./InputControl.vue
 */
export default {
	components: {
		InputControl,
		MBlockFormControlLayout,
	},

	inheritAttrs: false,

	model: {
		event: 'input:update',
	},

	computed: {
		isInvalid() {
			return this.$attrs.invalid === '' || this.$attrs.invalid || !!this.$slots.error;
		},
	},

	methods: {
		/**
		 * focuses input
		 * @public
		 */
		focus() {
			this.$refs.input.focus();
		},
		/**
		 * blurs input
		 * @public
		 */
		blur() {
			this.$refs.input.blur();
		},
	},
};
</script>
