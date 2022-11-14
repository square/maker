<template>
	<m-transition
		v-bind="$attrs"
		:enter="expandFn"
		:leave="collapseFn"
		v-on="$listeners"
	>
		<!-- @slot content to collapse & expand -->
		<slot />
	</m-transition>
</template>

<script>
import { MTransition } from '@square/maker/components/Transition';
import styler from 'stylefire';
import { animate } from 'popmotion';
import {
	animateUp, spring, styleFactory,
} from '@square/maker/utils/transitions';

function collapseFn({ element, onComplete }) {
	const startHeight = element.scrollHeight;
	const elementStyler = styler(element);
	const collapseHeightFn = styleFactory(startHeight, 0, 'height', 'px');
	// setup & render initial state
	elementStyler.set(collapseHeightFn(animateUp.from));
	elementStyler.render();
	// animate transition
	animate({
		...animateUp,
		...spring,
		onUpdate(progress) {
			elementStyler.set(collapseHeightFn(progress));
		},
		onComplete,
	});
}

function expandFn({ element, onComplete: onExpandComplete }) {
	const endHeight = element.scrollHeight;
	const elementStyler = styler(element);
	const expandHeightFn = styleFactory(0, endHeight, 'height', 'px');
	// setup & render initial state
	elementStyler.set(expandHeightFn(animateUp.from));
	elementStyler.render();
	// animate transition
	animate({
		...animateUp,
		...spring,
		onUpdate(progress) {
			elementStyler.set(expandHeightFn(progress));
		},
		onComplete() {
			// there's some weird Vue or Popmotion bug that causes the
			// onComplete handler to be called a frame or 2 too early,
			// so we perform a mini delay to make sure our onComplete
			// code only runs after the animation has fully completed
			const miniDelayMs = 50;
			setTimeout(() => {
				element.style.removeProperty('height');
				onExpandComplete();
			}, miniDelayMs);
		},
	});
}

export default {
	components: {
		MTransition,
	},

	inheritAttrs: false,

	data() {
		return {
			collapseFn,
			expandFn,
		};
	},
};
</script>
