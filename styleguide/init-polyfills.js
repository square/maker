import polyfills from '../src/utils/polyfills';

(() => {
	if (global.window) {
		polyfills.init();
	}
})();
