/* eslint-env browser */
export function isMobileSafari() {
	if (typeof window !== 'undefined') {
		const ua = window && window.navigator.userAgent;
		const iOS = !!ua.match(/ipad/i) || !!ua.match(/iphone/i);
		const webkit = !!ua.match(/webkit/i);
		return iOS && webkit && !ua.match(/crios/i);
	}
	return false;
}
