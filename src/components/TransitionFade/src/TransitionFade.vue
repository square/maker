<template>
	<m-transition-spring
		v-bind="$attrs"
		:enter="fadeIn"
		:leave="fadeOut"
		v-on="$listeners"
	>
		<!-- @slot content to fade in & out -->
		<slot />
	</m-transition-spring>
</template>

<script>
import { MTransitionSpring } from '@square/maker/utils/TransitionSpring';
import { fadeIn, fadeOut } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionSpring,
	},

	inheritAttrs: false,

	data() {
		return {
			fadeIn,
			fadeOut,
		};
	},
};
</script>
