import styler from 'stylefire';
import { animate } from 'popmotion';

export const mobileMinWidth = 0;
export const tabletMinWidth = 840;
export const desktopMinWidth = 1200;

export const type = 'spring';
export const stiffness = 600;
export const damping = 60;
export const mass = 1;

export const springDelay = 200;

export const spring = {
	type,
	stiffness,
	damping,
	mass,
};

export const springSubtle = {
	type,
	stiffness: 200,
	damping: 60,
	mass: 1,
};

export const springBounce = {
	type,
	stiffness: 400,
	damping: 30,
	mass: 2,
};

const START_VALUE = 0;
const END_VALUE = 100;
const MINI_END_VALUE = 40;
const MICRO_END_VALUE = 20;

export const animateUp = {
	from: START_VALUE,
	to: 100,
};

export const animateDown = {
	from: 100,
	to: START_VALUE,
};

/**
 * @param {Number} progress 0 - 100
 * @param {Number} startRange any number
 * @param {Number} endRange any number
 * @param {String} styleProp style property name
 * @param {String} unit 'px' or '%'
 * @returns {Object} style object
 */
export function toStyle(progress, startRange, endRange, styleProp, unit) {
	const hundred = 100;
	const normalizedProgress = progress / hundred;
	const scaleFactor = endRange - startRange;
	const scaledProgress = normalizedProgress * scaleFactor;
	const inRange = scaledProgress + startRange;
	return {
		[styleProp]: `${inRange}${unit}`,
	};
}

/**
 * @param {Number} startRange any number
 * @param {Number} endRange any number > startRange
 * @param {String} styleProp style property name
 * @param {String} unit 'px' or '%'
 * @returns {Function} takes progress, returns style object
 */
export function styleFactory(startRange, endRange, styleProp, unit) {
	return (progress) => toStyle(progress, startRange, endRange, styleProp, unit);
}

const toOpacity = styleFactory(START_VALUE, END_VALUE, 'opacity', '%');
const toRelativeY = styleFactory(START_VALUE, END_VALUE, 'y', '%');
const toRelativeX = styleFactory(START_VALUE, END_VALUE, 'x', '%');
const toMiniSlideY = styleFactory(MINI_END_VALUE, START_VALUE, 'y', 'px');
const toMicroSlideY = styleFactory(MICRO_END_VALUE, START_VALUE, 'y', 'px');
const toFloatyY = (progress) => ({
	...toOpacity(progress),
	...toMiniSlideY(progress),
});
const toSubtleFloatyY = (progress) => ({
	...toOpacity(progress),
	...toMicroSlideY(progress),
});

export function fadeInFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toOpacity;
	const animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		// duration: 3000,
		onUpdate(number) {
			elementStyler.set(styleFn(number));
		},
		onComplete,
	});
}

export function delayedFadeInFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toOpacity;
	const animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	setTimeout(() => {
		animate({
			...animationDirection,
			...spring,
			onUpdate(number) {
				elementStyler.set(styleFn(number));
			},
			onComplete,
		});
	}, springDelay);
}

export function fadeOutFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toOpacity;
	const animationDirection = animateDown;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animateDown,
		...spring,
		onUpdate(number) {
			elementStyler.set(styleFn(number));
		},
		onComplete,
	});
}

export function springUpFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toRelativeY;
	const animationDirection = animateDown;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		onUpdate(number) {
			elementStyler.set(styleFn(number));
		},
		onComplete,
	});
}

export function springDownFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toRelativeY;
	const animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		onUpdate(number) {
			elementStyler.set(styleFn(number));
		},
		onComplete,
	});
}

export function springLeftFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toRelativeX;
	const animationDirection = animateDown;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		onUpdate(number) {
			elementStyler.set(styleFn(number));
		},
		onComplete,
	});
}

export function springRightFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toRelativeX;
	const animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		onUpdate(number) {
			elementStyler.set(styleFn(number));
		},
		onComplete,
	});
}

export function floatUpFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toFloatyY;
	const animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		onUpdate(number) {
			elementStyler.set(styleFn(number));
		},
		onComplete,
	});
}

export function delayedFloatUpFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toFloatyY;
	const animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	setTimeout(() => {
		animate({
			...animationDirection,
			...spring,
			onUpdate(number) {
				elementStyler.set(styleFn(number));
			},
			onComplete,
		});
	}, springDelay);
}

export function staggeredFloatUpFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toSubtleFloatyY;
	const animationDirection = animateUp;
	const delay = 125;
	const staggerDelay = element.dataset.loadIndex * delay;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	setTimeout(() => {
		animate({
			...animationDirection,
			...springSubtle,
			onUpdate(number) {
				elementStyler.set(styleFn(number));
			},
			onComplete,
		});
	}, staggerDelay);
}

export function floatDownFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toFloatyY;
	const animationDirection = animateDown;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		onUpdate(number) {
			elementStyler.set(styleFn(number));
		},
		onComplete,
	});
}

export function springUpBounceFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toRelativeY;
	const animationDirection = animateDown;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...springBounce,
		onUpdate(number) {
			elementStyler.set(styleFn(number));
		},
		onComplete,
	});
}

export function springDownBounceFn({ element, onComplete }) {
	const elementStyler = styler(element);
	const styleFn = toRelativeY;
	const animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...springBounce,
		onUpdate(number) {
			elementStyler.set(styleFn(number));
		},
		onComplete,
	});
}
