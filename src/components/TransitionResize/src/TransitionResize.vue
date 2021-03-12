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
	fadeInFn, fadeOutFn, animateUp, spring, styleFactory
} from '@square/maker/utils/transitions';

function resizeFn({ element, startWidth, endWidth, startHeight, endHeight, onComplete }) {
	let elementStyler = styler(element);
	let resizeWidthFn = styleFactory(startWidth, endWidth, 'width', 'px');
	let resizeHeightFn = styleFactory(startHeight, endHeight, 'height', 'px');
	let styleFn = (progress) => {
		return {
			...resizeWidthFn(progress),
			...resizeHeightFn(progress),
		};
	};
	let animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		onUpdate(num) {
			elementStyler.set(styleFn(num));
		},
		onComplete,
	});
}

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
			element.style.setProperty('opacity', '0%');
			element.style.setProperty('overflow', 'hidden');
		},
		onEnter(element, enterComplete) {
			this.enterWidth = element.offsetWidth;
			this.enterHeight = element.offsetHeight;

			// skip resize animation if dimensions are the same
			if (this.leaveWidth === this.enterWidth && this.leaveHeight === this.enterHeight) {
				element.style.removeProperty('overflow');
				fadeInFn({ element, onComplete: enterComplete });
				return;
			}

			resizeFn({
				element,
				startWidth: this.leaveWidth,
				endWidth: this.enterWidth,
				startHeight: this.leaveHeight,
				endHeight: this.enterHeight,
				onComplete() {
					element.style.removeProperty('overflow');
					fadeInFn({ element, onComplete: enterComplete });
				},
			});
		},
		onAfterEnter(element) {
			// I don't know if this is a Vue bug or a Popmotion bug
			// but this handler is being called slightly too early
			// so we delay it by 50ms to make sure it gets executed
			// after the fadeIn transition completes
			window.setTimeout(() => {
				element.style.removeProperty('opacity');
				element.style.removeProperty('width');
				element.style.removeProperty('height');
			}, 50);
		},
		onBeforeLeave(element) {
			this.leaveWidth = element.offsetWidth;
			this.leaveHeight = element.offsetHeight;
		},
		onLeave(element, onComplete) {
			fadeOutFn({ element, onComplete });
		},
	},
};
</script>
