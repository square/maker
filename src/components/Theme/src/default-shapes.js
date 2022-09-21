// note: this is intentionally written as a cjs module
// so it can be used by build files, please do not
// refactor this into an es6 module
module.exports = function defaultShapes() {
	return {
		defaultBorderRadius: '4px',
		cardBorderRadius: '4px',
		buttonBorderRadius: '4px',
		imageBorderRadius: '0px',
	};
};
