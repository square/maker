export const mobileMinWidth = 0;
export const tabletMinWidth = 840;
export const desktopMinWidth = 1200;

export const stiffness = 600;
export const damping = 60;

export const fadeIn = {
	from: {
		opacity: '0%',
	},
	to: {
		opacity: '100%',
	},
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
	stiffness,
	damping,
};

export default {
	fadeIn,
	fadeOut,
	springUp,
	springDown,
	stiffness,
	damping,
	mobileMinWidth,
	tabletMinWidth,
	desktopMinWidth,
};
