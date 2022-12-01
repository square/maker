<template>
	<m-transition
		v-bind="$attrs"
		:enter="springUpFn"
		:leave="springDownFn"
		v-on="$listeners"
	>
		<!-- @slot content to spring up -->
		<slot />
	</m-transition>
</template>

<script>
import { MTransition } from '@square/maker/components/Transition';
import { springUpFn, springDownFn } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransition,
	},

	inheritAttrs: false,

	data() {
		return {
			springUpFn,
			springDownFn,
		};
	},
};
</script>
