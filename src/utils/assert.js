const logPrefix = ['%c @square/maker ', 'background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff'];

const assert = {
	warn(condition, message) {
		if (!condition) {
			console.warn(...logPrefix, message); // eslint-disable-line no-console
		}
	},
	error(condition, message) {
		if (!condition) {
			console.error(...logPrefix, message); // eslint-disable-line no-console
			throw new Error(`[@square/maker] ${message}`);
		}
	},
};

export default assert;
