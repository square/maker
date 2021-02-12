<template>
	<m-transition-spring-responsive :transitions="transitions">
		<!-- @slot content to animate -->
		<slot />
	</m-transition-spring-responsive>
</template>

<script>
import { MTransitionSpringResponsive } from '@square/maker/utils/TransitionSpringResponsive';
import { mobileMinWidth } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionSpringResponsive,
	},

	inheritAttrs: false,

	props: {
		enter: {
			type: Object,
			required: true,
		},
		leave: {
			type: Object,
			required: true,
		},
	},

	computed: {
		transitions() {
			return [{
				minWidth: mobileMinWidth,
				enter: this.enter,
				leave: this.leave,
			}];
		},
	},
};
</script>
