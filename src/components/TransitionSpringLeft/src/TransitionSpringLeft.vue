<template>
	<m-transition-spring
		v-bind="$attrs"
		:enter="springLeft"
		:leave="springRight"
		v-on="$listeners"
	>
		<!-- @slot content to spring left -->
		<slot />
	</m-transition-spring>
</template>

<script>
import { MTransitionSpring } from '@square/maker/utils/TransitionSpring';
import { springLeft, springRight } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionSpring,
	},

	inheritAttrs: false,

	data() {
		return {
			springLeft,
			springRight,
		};
	},
};
</script>
