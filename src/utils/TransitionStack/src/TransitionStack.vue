<template>
	<transition-group
		tag="div"
		v-bind="$attrs"
		v-on="$listeners"
		@before-enter="beforeEnter"
		@enter="enter"
		@before-leave="beforeLeave"
		@leave="leave"
	>
		<slot />
	</transition-group>
</template>

<script>
/* eslint-disable unicorn/no-null */

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	inheritAttrs: false,

	props: {
		/**
		 * items transition from direction
		 */
		transitionFrom: {
			type: String,
			default: 'bottom',
			validator: (from) => ['bottom', 'top', 'left', 'right'].includes(from),
		},
	},

	methods: {
		beforeEnter(node) {
			// defaults for bottom
			let translate = 'Y';
			let sign = '';
			if (this.transitionFrom === 'top') {
				sign = '-';
			} else if (this.transitionFrom === 'left') {
				translate = 'X';
				sign = '-';
			} else if (this.transitionFrom === 'right') {
				translate = 'X';
			}
			Object.assign(node.style, {
				transform: `translate${translate}(${sign}50%)`,
				opacity: '0',
			});
		},
		enter(node) {
			// idk why but Vue consistently runs this
			// hook TOO EARLY, so we slow it down by 50ms
			const arbitraryShortDelayMs = 50;
			setTimeout(() => {
				Object.assign(node.style, {
					transform: null,
					opacity: null,
				});
			}, arbitraryShortDelayMs);
		},
		beforeLeave(node) {
			node.style.maxHeight = `${node.offsetHeight}px`;
			node.style.overflow = 'hidden';
		},
		leave(node) {
			// idk why but Vue consistently runs this
			// hook TOO EARLY, so we slow it down by 50ms
			const arbitraryShortDelayMs = 50;
			setTimeout(() => {
				Object.assign(node.style, {
					maxHeight: '0',
					opacity: '0',
					marginTop: '0',
					marginBottom: '0',
					paddingTop: '0',
					paddingBottom: '0',
				});
			}, arbitraryShortDelayMs);
		},
	},
};
</script>
