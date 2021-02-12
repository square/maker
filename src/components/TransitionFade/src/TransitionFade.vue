<template>
	<m-transition-spring
		v-bind="$attrs"
		:enter="enter"
		:leave="leave"
		v-on="$listeners"
	>
		<!-- @slot content to fade in & out -->
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
					opacity: '0%',
				},
				to: {
					opacity: '100%',
				},
				stiffness,
				damping,
			},
			leave: {
				from: {
					opacity: '100%',
				},
				to: {
					opacity: '0%',
				},
				stiffness,
				damping,
			},
		};
	},
};
</script>
