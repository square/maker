/**
 * Defines "browser" as having the `window` global
 * Checks if the browser supports them
 * @return {boolean}
 */
function isBrowser() {
	return (typeof window !== 'undefined');
}

/**
 * Is it apple safari browser
 * @return {boolean}
 */
export function isSafari() {
	return isBrowser() && window.navigator.userAgent.includes('Safari')
		&& !window.navigator.userAgent.includes('Chrome');
}
