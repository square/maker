/* eslint-disable no-console */
const logStyles = 'background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff';

const logPrefix = (componentName) => [`%c @square/maker/M${componentName}`, logStyles];
const errorPrefix = (componentName) => `[@square/maker/M${componentName}]`;

export const throwError = (message, componentName) => {
	console.error(...logPrefix(componentName), message);
	throw new Error(`${errorPrefix(componentName)} ${message}`);
};

export const showWarning = (message, componentName) => {
	console.warn(...logPrefix(componentName), message);
};
