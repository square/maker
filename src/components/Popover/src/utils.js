import Popper from 'popper.js';

const MAX_OFFSET = 2;

export const popoverPlacements = Object.freeze([
	'auto',
	'auto-start',
	'auto-end',
	'top',
	'top-start',
	'top-end',
	'right',
	'right-start',
	'right-end',
	'bottom',
	'bottom-start',
	'bottom-end',
	'left',
	'left-start',
	'left-end',
]);

export const popoverOverflowElements = Object.freeze([
	'scrollParent',
	'scroll-parent',
	'window',
	'viewport',
]);

export function validatePlacement(placement) {
	return popoverPlacements.includes(placement);
}

export function validateOverflowElement(element) {
	return popoverOverflowElements.includes(element);
}

export function validateOffset(offset) {
	return !!offset && offset.split(',').length <= MAX_OFFSET;
}

export default Popper;
