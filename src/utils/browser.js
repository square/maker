/* eslint-env browser */
export function isMobileSafari() {
	const ua = window.navigator.userAgent;
	const iOS = !!ua.match(/ipad/i) || !!ua.match(/iphone/i);
	const webkit = !!ua.match(/webkit/i);
	return iOS && webkit && !ua.match(/crios/i);
}
