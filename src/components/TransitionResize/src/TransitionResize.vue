<template>
	<transition
		:css="false"
		mode="out-in"
		v-bind="$attrs"
		@before-enter="onBeforeEnter"
		@enter="onEnter"
		@after-enter="onAfterEnter"
		@enter-cancelled="onEnterCancelled"
		@before-leave="onBeforeLeave"
		@leave="onLeave"
		@after-leave="onAfterLeave"
		@leave-cancelled="onLeaveCancelled"
		v-on="$listeners"
	>
		<!-- @slot content to animate -->
		<slot />
	</transition>
</template>

<script>
import { spring, styler } from 'popmotion';
import {
 fadeIn, fadeOut, stiffness, damping,
} from '@square/maker/utils/transitions';

export default {
	name: 'TransitionResize',

	data() {
		return {
			leaveWidth: 0,
			leaveHeight: 0,
			enterWidth: 0,
			enterHeight: 0,
		};
	},

	methods: {
		onBeforeEnter(element) {
			// console.log('on before enter', element);
			element.style.opacity = '0';
			element.style.overflow = 'hidden';
		},
		onEnter(element, enterComplete) {
			// console.log('on enter', element);
			this.enterWidth = element.offsetWidth;
			this.enterHeight = element.offsetHeight;
			// console.log('enter w&h', this.enterWidth, this.enterHeight);

			element.style.width = `${this.leaveWidth}px`;
			element.style.height = `${this.leaveHeight}px`;

			const resize = {
				from: {
					width: `${this.leaveWidth}px`,
					height: `${this.leaveHeight}px`,
				},
				to: {
					width: `${this.enterWidth}px`,
					height: `${this.enterHeight}px`,
				},
				stiffness,
				damping,
			};

			const elementStyler = styler(element);
			spring(resize).start({
				update: (v) => elementStyler.set(v),
				complete: () => {
					element.style.removeProperty('overflow');
					spring(fadeIn).start({
						update: (v) => elementStyler.set(v),
						complete: enterComplete,
					});
				},
			});
		},
		onAfterEnter(element) {
			// console.log('on after enter', element);
		},
		onEnterCancelled(element) {
			// console.log('on enter cancelled', element);
		},
		onBeforeLeave(element) {
			// console.log('on before leave', element);
			this.leaveWidth = element.offsetWidth;
			this.leaveHeight = element.offsetHeight;
			// console.log('leave w&h', this.leaveWidth, this.leaveHeight);
		},
		onLeave(element, leaveComplete) {
			// console.log('on leave', element);

			const elementStyler = styler(element);
			spring(fadeOut).start({
				update: (v) => elementStyler.set(v),
				complete: leaveComplete,
			});
		},
		onAfterLeave(element) {
			// console.log('on after leave', element);
		},
		onLeaveCancelled(element) {
			// console.log('on leave cancelled', element);
		},
	},
};
</script>

<style module="$s">

</style>
