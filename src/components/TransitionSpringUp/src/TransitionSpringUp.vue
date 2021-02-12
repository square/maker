<template>
	<m-transition-spring
		v-bind="$attrs"
		:enter="springUp"
		:leave="springDown"
		v-on="$listeners"
	>
		<!-- @slot content to spring up -->
		<slot />
	</m-transition-spring>
</template>

<script>
import { MTransitionSpring } from '@square/maker/utils/TransitionSpring';
import { springUp, springDown } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionSpring,
	},

	inheritAttrs: false,

	data() {
		return {
			springUp,
			springDown,
		};
	},
};
</script>
