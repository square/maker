<template>
	<transition
		:css="false"
		mode="out-in"
		v-bind="$attrs"
		@before-enter="onBeforeEnter"
		@enter="onEnter"
		@after-enter="onAfterEnter"
		@before-leave="onBeforeLeave"
		@leave="onLeave"
		v-on="$listeners"
	>
		<!-- @slot content to animate -->
		<slot />
	</transition>
</template>

<script>
import styler from 'stylefire';
import { animate } from 'popmotion';
import {
	fadeIn, fadeOut, type, stiffness, damping,
} from '@square/maker/utils/transitions';

// default mass is 1
// lighter mass => faster transitions
const mass = 0.34;

const fastFadeIn = {
	...fadeIn,
	mass,
};

const fastFadeOut = {
	...fadeOut,
	mass,
};

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
				type,
				stiffness,
				damping,
				mass: mass * 2,
			};

			const elementStyler = styler(element);

			// skip resize animation if dimensions are the same
			if (this.leaveWidth === this.enterWidth && this.leaveHeight === this.enterHeight) {
				element.style.removeProperty('overflow');
				/*
				spring(fastFadeIn).start({
					update: (v) => elementStyler.set(v),
					complete: enterComplete,
				});
				*/
				animate({
					...fastFadeIn,
					onUpdate: (v) => elementStyler.set(v),
					onComplete: enterComplete,
				})
				return;
			}

			/*
			spring(resize).start({
				update: (v) => elementStyler.set(v),
				complete: () => {
					element.style.removeProperty('overflow');
					spring(fastFadeIn).start({
						update: (v) => elementStyler.set(v),
						complete: enterComplete,
					});
				},
			});
			*/
			animate({
				...resize,
				onUpdate: (v) => elementStyler.set(v),
				onComplete: () => {
					element.style.removeProperty('overflow');
					animate({
						...fastFadeIn,
						onUpdate: (v) => elementStyler.set(v),
						onComplete: enterComplete,
					});
				}
			});
		},
		onAfterEnter(element) {
			// console.log('on after enter', element);
			// lint suggests using "undefined" but it literally
			// does not work it in this scenario, it specifically
			// has to be "null"
			element.style.opacity = null; // eslint-disable-line unicorn/no-null
			element.style.width = null; // eslint-disable-line unicorn/no-null
			element.style.height = null; // eslint-disable-line unicorn/no-null
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
			/*
			spring(fastFadeOut).start({
				update: (v) => elementStyler.set(v),
				complete: leaveComplete,
			});
			*/
			animate({
				...fastFadeOut,
				onUpdate: (v) => elementStyler.set(v),
				onComplete: leaveComplete,
			});
		},
		/*
			handlers we may need to use later?

		onAfterLeave(_element) {
			// console.log('on after leave', element);
		},
		onLeaveCancelled(_element) {
			// console.log('on leave cancelled', element);
		},
		onEnterCancelled(_element) {
			// console.log('on enter cancelled', element);
		},
		*/
	},
};
</script>
