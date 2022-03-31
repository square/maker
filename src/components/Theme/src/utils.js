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

export function resolveThemeableProps(componentKeyInTheme, propNames) {
	const computedResolvedProps = {};
	for (const propName of propNames) {
		if (propName === 'variant') {
			computedResolvedProps.resolvedVariant = function resolveThemeableVariant() {
				// local override directly set on component instance
				if (!isNil(this[propName])) {
					// if validator for this prop exists then
					// Vue would have already validated it by this point
					return this[propName];
				}

				let valueOrPath;

				// more specific theme override
				const themeValue = this.theme[componentKeyInTheme][propName];
				if (themeValue) {
					valueOrPath = themeValue;
				}

				if (!valueOrPath) {
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
		} else {
			computedResolvedProps[`resolved${capitalizeFirstLetter(propName)}`] = function resolveThemeableProp() {
				// local override directly set on component instance
				if (!isNil(this[propName])) {
					// if validator for this prop exists then
					// Vue would have already validated it by this point
					return this[propName];
				}

				let valueOrPath;

				// default theme value
				const themeValue = this.theme[componentKeyInTheme][propName];
				if (themeValue) {
					valueOrPath = themeValue;
				}

				// variant value
				const hasUserDefinedVariants = !this.$vnode.componentOptions
					.Ctor.extendOptions.props.variant?.validator;
				if (this.resolvedVariant && hasUserDefinedVariants) {
					const variantValues = this.theme[componentKeyInTheme].variants?.[this.resolvedVariant];
					assert.error(variantValues, `Invalid variant "${this.resolvedVariant}" for component "${componentKeyInTheme}" in theme.`);
					if (variantValues[propName]) {
						valueOrPath = variantValues[propName];
					}
				}

				if (!valueOrPath) {
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
