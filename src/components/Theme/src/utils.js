import {
 isString, isNull, isUndefined, get,
} from 'lodash';

export function resolve(valueOrPointer) {
	if (!isString(valueOrPointer)) {
		throw new Error(`cannot resolve value ${valueOrPointer} it is not a string`);
	}
	if (valueOrPointer.startsWith('@')) {
		return this.getPath(valueOrPointer); // resolve pointer to value
	}
	return valueOrPointer; // not a pointer, already resolved value, return as-is
}

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
	if (isUndefined(result) || isNull(result)) {
		throw new Error(`invalid pointer ${pointer} does not point to a field that exists within the theme`);
	}
	return result;
}
