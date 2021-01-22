<template>
	<transition-group
		v-bind="$attrs"

		:enter-active-class="$s.transitioning"
		:leave-active-class="$s.transitioning"

		@before-enter="zeroWidth"
		@enter="setContentWidth($event, 'enter')"
		@after-enter="removeWidth"

		@before-leave="setContentWidth($event, 'leave')"
		@leave="onLeave"
		@after-leave="removeWidth"
	>
		<slot />
	</transition-group>
</template>

<script>
/* eslint-disable unicorn/no-null */

function getElementRealWidth(element) {
	const elc = element.cloneNode(true);
	elc.removeAttribute('style');
	Object.assign(elc.style, {
		position: 'absolute',
		visibility: 'hidden',
	});
	element.parentNode.insertBefore(elc, element);
	const realWidth = elc.offsetWidth;
	elc.remove();
	return realWidth;
}

export default {
	inheritAttrs: false,

	methods: {
		zeroWidth(element) {
			Object.assign(element.style, {
				width: '0px',
				paddingRight: '0px',
				paddingLeft: '0px',
				marginRight: '0px',
				opacity: 0,
			});
		},

		removeWidth(element) {
			element.style.width = null;
		},

		setContentWidth(element, direction) {
			let newWidth = element.scrollWidth;

			if (direction === 'enter') {
				newWidth = getElementRealWidth(element);
			}

			Object.assign(element.style, {
				width: `${newWidth}px`,
				paddingRight: null,
				paddingLeft: null,
				marginRight: null,
				opacity: null,
			});
		},

		onLeave(element) {
			this.setContentWidth(element);
			this.zeroWidth(element);
		},
	},
};
</script>

<style module="$s">

.transitioning {
	transition:
		opacity 0.1s ease-in-out,
		width 0.1s ease-in-out,
		margin-right 0.1s ease-in-out,
		padding-right 0.1s ease-in-out,
		padding-left 0.1s ease-in-out !important;
}
</style>
