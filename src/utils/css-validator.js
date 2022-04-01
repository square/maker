function cssValidator(cssProperty) {
	return function cssValidatorInstance(value) {
		// CSS not defined when rendering server-side
		if (global.CSS) {
			return global.CSS.supports(cssProperty, value);
		}
		return true;
	};
}

export default cssValidator;
