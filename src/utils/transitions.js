import styler from 'stylefire';
import { animate } from 'popmotion';

export const mobileMinWidth = 0;
export const tabletMinWidth = 840;
export const desktopMinWidth = 1200;

export const type = "spring";
export const stiffness = 600;
export const damping = 60;
export const mass = 1;

const spring = {
	type,
	stiffness,
	damping,
	mass,
};
const animateUp = {
	from: 0,
	to: 100,
};
const animateDown = {
	from: 100,
	to: 0,
};

/**
 * Scales input domain to output range, and the input domain
 * is always assumed to be 0 - 100 and the output range is assumed
 * to be something from 0 to any other number, so calling this
 * function with args (50, -40) would return -20 because 50 is
 * the midpoint between 0 & 100 and -20 is the midpoint between 0 & -40
 * @param {Number} domain between 0 - 100
 * @param {Number} range between 0 - any other number
 */
function scaleToRange(domain, range) {
	let normalized = domain / 100;
	let scaled = normalized * range;
	return scaled;
}

function toOpacity(num) {
	return {
		opacity: `${num}%`,
	};
}

function toRelativeY(num) {
	return {
		y: `${num}%`,
	};
}

function toAbsoluteY(num) {
	return {
		y: `${num}px`,
	};
}

function toRelativeX(num) {
	return {
		x: `${num}%`,
	};
}

function toAbsoluteX(num) {
	return {
		x: `${num}px`,
	};
}

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
		...animateUp,
		...spring,
		//...defaultAnimationType,
		//duration: 3000,
		onUpdate(num) {
			elementStyler.set(toRelativeY(num));
		},
		onComplete,
	});
};

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
