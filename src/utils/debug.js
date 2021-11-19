/* eslint-disable no-console */
const isProduction = (typeof process === 'object') && (typeof process.env === 'object') && (process.env.NODE_ENV === 'production');
const logStyles = 'background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff';

const logPrefix = (componentName) => [`%c @square/maker${componentName}`, logStyles];
const errorPrefix = (componentName) => `[@square/maker]${componentName}`;

export const throwError = (message, componentName) => {
	console.error(...logPrefix(componentName), message);
	throw new Error(`${errorPrefix(componentName)} ${message}`);
};

export const showWarning = (message, componentName) => {
	if (isProduction) {
		console.warn(...logPrefix(componentName), message);
	}
};
