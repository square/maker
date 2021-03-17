<template>
	<m-transition
		v-bind="$attrs"
		:enter="springLeftFn"
		:leave="springRightFn"
		v-on="$listeners"
	>
		<!-- @slot content to spring left -->
		<slot />
	</m-transition>
</template>

<script>
import { MTransition } from '@square/maker/utils/Transition';
import { springLeftFn, springRightFn } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransition,
	},

	inheritAttrs: false,

	data() {
		return {
			springLeftFn,
			springRightFn,
		};
	},
};
</script>
