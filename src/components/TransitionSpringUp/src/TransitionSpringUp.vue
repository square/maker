<template>
	<m-transition-spring
		v-bind="$attrs"
		:enter="enter"
		:leave="leave"
		v-on="$listeners"
	>
		<!-- @slot content to spring up -->
		<slot />
	</m-transition-spring>
</template>

<script>
import { MTransitionSpring } from '@square/maker/utils/TransitionSpring';

const stiffness = 600;
const damping = 60;

export default {
	components: {
		MTransitionSpring,
	},

	inheritAttrs: false,

	data() {
		return {
			enter: {
				from: {
					y: '100%',
				},
				to: {
					y: '0%',
				},
				stiffness,
				damping,
			},
			leave: {
				from: {
					y: '0%',
				},
				to: {
					y: '100%',
				},
				stiffness,
				damping,
			},
		};
	},
};
</script>
