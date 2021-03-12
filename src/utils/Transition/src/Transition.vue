<template>
	<m-transition-responsive :transitions="transitions">
		<!-- @slot content to animate -->
		<slot />
	</m-transition-responsive>
</template>

<script>
import { MTransitionResponsive } from '@square/maker/utils/TransitionResponsive';
import { mobileMinWidth } from '@square/maker/utils/transitions';

export default {
	components: {
		MTransitionResponsive,
	},

	inheritAttrs: false,

	props: {
		enter: {
			type: Function,
			required: true,
		},
		leave: {
			type: Function,
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
