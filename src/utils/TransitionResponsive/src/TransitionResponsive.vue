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
				const noTransitions = 0;
				// cannot be empty
				if (transitions.length === noTransitions) {
					return false;
				}
				const firstTransitionIndex = 0;
				const smallestMinWidth = 0;
				// must have default catch-all transition
				if (transitions[firstTransitionIndex].minWidth !== smallestMinWidth) {
					return false;
				}
				return transitions.every((transition) => (transition.minWidth
					|| transition.minWidth === smallestMinWidth)
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
			const singleTransition = 1;
			const firstTransitionIndex = 0;
			if (this.transitions.length === singleTransition) {
				return this.transitions[firstTransitionIndex];
			}
			const viewportWidth = window.innerWidth;
			let responsiveTransition;
			this.transitions.forEach((transition) => {
				if (viewportWidth >= transition.minWidth) {
					responsiveTransition = transition;
					responsiveTransition.maxHeight = window.visualViewport.height;
				}
			});
			return responsiveTransition;
		},
	},
};
</script>
