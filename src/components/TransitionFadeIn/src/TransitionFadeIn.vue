<template>
	<m-transition
		v-bind="$attrs"
		:enter="fadeInFn"
		:leave="fadeOutFn"
		v-on="$listeners"
	>
		<!-- @slot content to fade in & out -->
		<slot />
	</m-transition>
</template>

<script>
import { MTransition } from '@square/maker/components/Transition';
import { fadeInFn, fadeOutFn } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransition,
	},

	inheritAttrs: false,

	data() {
		return {
			fadeInFn,
			fadeOutFn,
		};
	},
};
</script>
