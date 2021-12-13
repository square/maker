import { showWarning, throwError } from './debug';

const assert = {
	warn(condition, message, componentName) {
		if (!condition) {
			showWarning(message, componentName); // eslint-disable-line no-console
		}
	},
	error(condition, message, componentName) {
		if (!condition) {
			throwError(message, componentName);
		}
	},
};

export default assert;
