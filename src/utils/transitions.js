import styler from 'stylefire';
import { animate } from 'popmotion';

export const mobileMinWidth = 0;
export const tabletMinWidth = 840;
export const desktopMinWidth = 1200;

export const type = "spring";
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

export const animateUp = {
	from: 0,
	to: 100,
};

export const animateDown = {
	from: 100,
	to: 0,
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
	let normalizedProgress = progress / 100;
	let scaleFactor = endRange - startRange;
	let scaledProgress = normalizedProgress * scaleFactor;
	let inRange = scaledProgress + startRange;
	return {
		[styleProp]: `${inRange}${unit}`,
	};
};

/**
 * @param {Number} startRange any number
 * @param {Number} endRange any number > startRange
 * @param {String} styleProp style property name
 * @param {String} unit 'px' or '%'
 * @returns {Function} takes progress, returns style object
 */
export function styleFactory(startRange, endRange, styleProp, unit) {
	return (progress) => {
		return toStyle(progress, startRange, endRange, styleProp, unit);
	};
};

const toOpacity = styleFactory(0, 100, 'opacity', '%');
const toRelativeY = styleFactory(0, 100, 'y', '%');
const toMiniSlideY = styleFactory(40, 0, 'y', 'px');
const toFloatyY = (progress) => ({
	...toOpacity(progress),
	...toMiniSlideY(progress),
});

export function fadeInFn({ element, onComplete }) {
	let elementStyler = styler(element);
	let styleFn = toOpacity;
	let animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		//duration: 3000,
		onUpdate(num) {
			elementStyler.set(styleFn(num));
		},
		onComplete,
	});
};

export function delayedFadeInFn({ element, onComplete }) {
	let elementStyler = styler(element);
	let styleFn = toOpacity;
	let animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	window.setTimeout(() => {
		animate({
			...animationDirection,
			...spring,
			//duration: 3000,
			onUpdate(num) {
				elementStyler.set(styleFn(num));
			},
			onComplete,
		});
	}, springDelay);
};

export function fadeOutFn({ element, onComplete }) {
	let elementStyler = styler(element);
	let styleFn = toOpacity;
	let animationDirection = animateDown;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animateDown,
		...spring,
		//duration: 3000,
		onUpdate(num) {
			elementStyler.set(styleFn(num));
		},
		onComplete,
	});
};

export function springUpFn({ element, onComplete }) {
	let elementStyler = styler(element);
	let styleFn = toRelativeY;
	let animationDirection = animateDown;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		//duration: 3000,
		onUpdate(num) {
			elementStyler.set(styleFn(num));
		},
		onComplete,
	});
};

export function springDownFn({ element, onComplete }) {
	let elementStyler = styler(element);
	let styleFn = toRelativeY;
	let animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		//duration: 3000,
		onUpdate(num) {
			elementStyler.set(styleFn(num));
		},
		onComplete,
	});
};

export function floatUpFn({ element, onComplete }) {
	let elementStyler = styler(element);
	let styleFn = toFloatyY;
	let animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		//duration: 3000,
		onUpdate(num) {
			elementStyler.set(styleFn(num));
		},
		onComplete,
	});
};

export function delayedFloatUpFn({ element, onComplete }) {
	let elementStyler = styler(element);
	let styleFn = toFloatyY;
	let animationDirection = animateUp;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	window.setTimeout(() => {
		animate({
			...animationDirection,
			...spring,
			//duration: 3000,
			onUpdate(num) {
				elementStyler.set(styleFn(num));
			},
			onComplete,
		});
	}, springDelay);
};

export function floatDownFn({ element, onComplete }) {
	let elementStyler = styler(element);
	let styleFn = toFloatyY;
	let animationDirection = animateDown;
	elementStyler.set(styleFn(animationDirection.from));
	elementStyler.render();
	animate({
		...animationDirection,
		...spring,
		//duration: 3000,
		onUpdate(num) {
			elementStyler.set(styleFn(num));
		},
		onComplete,
	});
};



/*
export function delayFn(animateFn) {
	return (...args) => {
		window.setTimeout(() => {
			animateFn(...args);
		}, 500);
	};
};
*/

/*
export const fadeIn = {
	from: {
		opacity: '0%',
	},
	to: {
		opacity: '100%',
	},
	type,
	stiffness,
	damping,
};

export const fadeOut = {
	from: {
		opacity: '100%',
	},
	to: {
		opacity: '0%',
	},
	type,
	stiffness,
	damping,
};

export const fadeInSlideLeft = {
	from: {
		opacity: '0%',
		x: '40px',
	},
	to: {
		opacity: '100%',
		x: '0px',
	},
	type,
	stiffness,
	damping,
};

export const fadeOutSlideLeft = {
	from: {
		opacity: '100%',
		x: '0px',
	},
	to: {
		opacity: '0%',
		x: '-40px',
	},
	type,
	stiffness,
	damping,
};

export const fadeInSlideRight = {
	from: {
		opacity: '0%',
		x: '-40px',
	},
	to: {
		opacity: '100%',
		x: '0px',
	},
	type,
	stiffness,
	damping,
};

export const fadeOutSlideRight = {
	from: {
		opacity: '100%',
		x: '0px',
	},
	to: {
		opacity: '0%',
		x: '40px',
	},
	type,
	stiffness,
	damping,
};

export const springUp = {
	from: {
		y: '100%',
	},
	to: {
		y: '0%',
	},
	type,
	stiffness,
	damping,
};

export const springDown = {
	from: {
		y: '0%',
	},
	to: {
		y: '100%',
	},
	type,
	stiffness,
	damping,
};

export default {
	fadeIn,
	fadeOut,
	fadeInSlideLeft,
	fadeOutSlideLeft,
	fadeInSlideRight,
	fadeOutSlideRight,
	springUp,
	springDown,
	type,
	stiffness,
	damping,
	mobileMinWidth,
	tabletMinWidth,
	desktopMinWidth,
};
*/
