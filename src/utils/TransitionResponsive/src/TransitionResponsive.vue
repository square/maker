<template>
	<transition
		:css="false"
		v-bind="$attrs"
		@enter="handleEnter"
		@leave="handleLeave"
		v-on="$listeners"
	>
		<!-- @slot content to animate -->
		<slot />
	</transition>
</template>

<script>
export default {
	inheritAttrs: false,

	props: {
		transitions: {
			type: Array,
			required: true,
			validator: (transitions) => {
				// cannot be empty
				if (transitions.length === 0) {
					return false;
				}
				// must have default catch-all transition
				if (transitions[0].minWidth !== 0) {
					return false;
				}
				return transitions.every((transition) => (transition.minWidth || transition.minWidth === 0)
					&& transition.enter
					&& transition.leave);
			},
		},
	},

	methods: {
		handleEnter(element, onComplete) {
			const transition = this.getResponsiveTransition();
			transition.enter({ element, onComplete });
		},

		handleLeave(element, onComplete) {
			const transition = this.getResponsiveTransition();
			transition.leave({ element, onComplete });
		},

		getResponsiveTransition() {
			if (this.transitions.length === 1) {
				return this.transitions[0];
			}
			const viewportWidth = window.innerWidth;
			let responsiveTransition;
			this.transitions.forEach((transition) => {
				if (viewportWidth >= transition.minWidth) {
					responsiveTransition = transition;
				}
			});
			return responsiveTransition;
		},
	},
};
</script>
