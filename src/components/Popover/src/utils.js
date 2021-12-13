/* eslint-disable no-magic-numbers */
let currentPopoverId = 0;

export const getPopoverId = () => {
	currentPopoverId += 1;

	return currentPopoverId;
};
