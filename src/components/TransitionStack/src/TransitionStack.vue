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

const arbitraryShortDelayMs = 50;

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	inheritAttrs: false,

	props: {
		/**
		 * how to animate the stack items before they enter
		 */
		beforeEnterClass: {
			type: String,
			default: undefined,
		},
	},

	methods: {
		beforeEnter(node) {
			if (this.beforeEnterClass) {
				node.classList.add(this.beforeEnterClass);
			} else {
				Object.assign(node.style, {
					opacity: '0',
				});
			}
		},
		enter(node) {
			// idk why but Vue consistently runs this
			// hook TOO EARLY, so we slow it down a little
			setTimeout(() => {
				if (this.beforeEnterClass) {
					node.classList.remove(this.beforeEnterClass);
				} else {
					Object.assign(node.style, {
						opacity: null,
					});
				}
			}, arbitraryShortDelayMs);
		},
		beforeLeave(node) {
			node.style.maxHeight = `${node.offsetHeight}px`;
			node.style.overflow = 'hidden';
		},
		leave(node) {
			// idk why but Vue consistently runs this
			// hook TOO EARLY, so we slow it down a little
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
