import {
	isString, isNil, get,
} from 'lodash';
import assert from '@square/maker/utils/assert';

/**
 * Check if passed in value is a pointer, if so resolve the pointer to its value,
 * otherwise return the value as-is.
 * @param {value} valueOrPointer
 * @return {*} resolvedValue
 */
export function resolve(valueOrPointer) {
	if (!isString(valueOrPointer)) {
		return valueOrPointer; // non-strings are always values
	}
	if (valueOrPointer.startsWith('@')) {
		return this.resolve(this.getPath(valueOrPointer)); // resolve pointer to value
	}
	return valueOrPointer; // not a pointer, already resolved value, return as-is
}

/**
 * validates pointer and returns _.get(this, pointer)
 * @param {*} pointer
 * @returns {*} _.get(this, pointer)
 */
export function getPath(pointer) {
	if (!isString(pointer)) {
		throw new Error(`cannot resolve pointer ${pointer} it is not a string`);
	}
	if (!pointer.startsWith('@')) {
		throw new Error(`cannot resolve pointer ${pointer} it is missed the @ prefix`);
	}
	const firstCharacterIndex = 1;
	const path = pointer.slice(firstCharacterIndex); // remove first character
	const result = get(this, path);
	if (isNil(result)) {
		throw new Error(`invalid pointer ${pointer} does not point to a field that exists within the theme`);
	}
	return result;
}

function capitalizeFirstLetter(string) {
	const secondLetterIndex = 1;
	return string[0].toUpperCase() + string.slice(secondLetterIndex);
}

/**
 * @param {string} componentKeyInTheme - the name of a key in the theme object
 * @param {string[]} propNames - Prop names in a Vue Component
 *
 * Assumes a Vue Component as the "this" value.
 * @returns {Array} an array of functions for computing the value of a given prop name.
 *
 * Each function does the following:
 * If the prop has a value in the Vue Component, return that value.
 * If not, find the value for that prop name in the `theme` object (under the given key).
 * If the value is a path, resolve that path in the `theme` object.
 * Validate the value using the Vue Component's validator for that prop name, if one is defined.
 * Return the value
*/
export function resolveThemeableProps(componentKeyInTheme, propNames) {
	const computedResolvedProps = {};
	for (const propName of propNames) {
		if (propName === 'pattern') {
			computedResolvedProps.resolvedPattern = function resolveThemeablePattern() {
				// local pattern set directly on component
				// overrides pattern set by theme
				if (!isNil(this.pattern)) {
					// if validator for this prop exists then
					// Vue would have already validated it by this point
					return this.pattern;
				}

				let patternOrPath;

				// default theme pattern for this component
				const patternFromTheme = this.theme[componentKeyInTheme].pattern;
				if (!isNil(patternFromTheme)) {
					patternOrPath = patternFromTheme;
				}

				if (isNil(patternOrPath)) {
					return undefined;
				}

				const resolvedPattern = this.theme.resolve(patternOrPath);
				const patternValidator = this.$vnode.componentOptions
					.Ctor.extendOptions.props.pattern.validator;

				// validate using pattern prop validator if exists
				if (patternValidator) {
					assert.error(patternValidator(resolvedPattern), `Invalid value "${resolvedPattern}" for prop "pattern" for component "${componentKeyInTheme}" in theme.`);

				// otherwise try validating by checking patterns config for component
				} else {
					const themePattern = this.theme[componentKeyInTheme].patterns?.[resolvedPattern];
					assert.error(themePattern, `Invalid pattern "${resolvedPattern}" for component "${componentKeyInTheme}" in theme.`);
				}
				return resolvedPattern;
			};
		} else {
			computedResolvedProps[`resolved${capitalizeFirstLetter(propName)}`] = function resolveThemeableProp() {
				// local value set directly on component
				// overrides value set by theme
				if (!isNil(this[propName])) {
					// if validator for this prop exists then
					// Vue would have already validated it by this point
					return this[propName];
				}

				let valueOrPath;

				// default theme value
				const valueFromTheme = this.theme[componentKeyInTheme][propName];
				if (!isNil(valueFromTheme)) {
					valueOrPath = valueFromTheme;
				}

				// pattern value, overrides default theme value
				if (!isNil(this.resolvedPattern)) {
					const valueFromThemePattern = this.theme[componentKeyInTheme]
						.patterns?.[this.resolvedPattern]?.[propName];
					if (!isNil(valueFromThemePattern)) {
						valueOrPath = valueFromThemePattern;
					}
				}

				if (isNil(valueOrPath)) {
					return undefined;
				}

				const resolvedValue = this.theme.resolve(valueOrPath);
				const propValidator = this.$vnode.componentOptions
					.Ctor.extendOptions.props[propName].validator;
				if (propValidator) {
					assert.error(propValidator(resolvedValue), `Invalid value "${resolvedValue}" for prop "${propName}" for component "${componentKeyInTheme}" in theme.`);
				}
				return resolvedValue;
			};
		}
	}
	return computedResolvedProps;
}
