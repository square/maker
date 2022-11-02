<template>
	<div
		:class="$s.Theme"
		:style="styles"
	>
		<slot />
	</div>
</template>

<script>
import { merge, mergeWith } from 'lodash';
import { showWarning } from '@square/maker/utils/debug';
import key from './key';
import defaultTheme from './default-theme';
import { resolve, getPath } from './utils';
import publicizeVars from './publicize-vars.cjs';

// naive check, just checks for presence of a render field,
// which is assumed to be a function, which is fine for now
function isVueComponent(value) {
	return value && value.render;
}

// returns true if value is an array
// of objects with id fields
// for the moment this is only for profiles
function isKeyedArray(value) {
	return value?.[0]?.id;
}

function keyedArrayIntoObject(arrayValue) {
	const objectValue = {};
	for (const item of arrayValue) {
		objectValue[item.id] = item;
	}
	return objectValue;
}

function objectIntoKeyedArray(objectValue) {
	const arrayValue = [];
	for (const [id, item] of Object.entries(objectValue)) {
		item.id = id;
		arrayValue.push(item);
	}
	return arrayValue;
}

function mergeKeyedArrays(value, mergeValue) {
	const valueObject = keyedArrayIntoObject(value);
	const mergeValueObject = keyedArrayIntoObject(mergeValue);
	const mergedObject = merge(valueObject, mergeValueObject);
	const mergedKeyedArray = objectIntoKeyedArray(mergedObject);
	return mergedKeyedArray;
}

// recursively merge all objects
// EXCEPT for Vue components
function mergeStrategy(value, mergeValue) {
	if (isVueComponent(mergeValue)) {
		return mergeValue;
	}

	if (isKeyedArray(value) && isKeyedArray(mergeValue)) {
		return mergeKeyedArrays(value, mergeValue);
	}

	// returning undefined means "merge values recursively"
	// https://lodash.com/docs/4.17.15#mergeWith
	return undefined;
}

function resolveTheme(data, parentTheme, theme, profileId) {
	mergeWith(data, parentTheme, theme, mergeStrategy);
	if (profileId) {
		const foundProfile = data.profiles[profileId];
		if (foundProfile) {
			mergeWith(data, foundProfile, mergeStrategy);
		} else {
			const validIds = Object.keys(data.profiles);
			showWarning(`profile ${profileId} doesn't exist within theme, only found: ${validIds}`, 'Theme');
		}
	}
	data.resolve = resolve;
	data.getPath = getPath;
}

export default {
	inject: {
		parentTheme: {
			default: defaultTheme(),
			from: key,
		},
	},
	provide() {
		return {
			// provided data needs to be reactive
			[key]: this.$data,
		};
	},
	inheritAttrs: false,
	props: {
		theme: {
			type: Object,
			default: () => ({}),
		},
		profile: {
			type: String,
			default: undefined,
		},
	},
	data() {
		const data = {};
		resolveTheme(data, this.parentTheme, this.theme, this.profile);
		return data;
	},
	computed: {
		styles() {
			return publicizeVars(this);
		},
	},
	watch: {
		parentTheme: {
			handler() {
				resolveTheme(this.$data, this.parentTheme, this.theme, this.profile);
			},
			deep: true,
			immediate: true,
		},
	},
	beforeUpdate() {
		// update theme on prop changes
		resolveTheme(this.$data, this.parentTheme, this.theme, this.profile);
	},
};
</script>

<style module="$s">
.Theme {
	color: $maker-color-body;
	font-weight: $maker-font-body-font-weight;
	font-family: $maker-font-body-font-family;
	background-color: $maker-color-background;
}
</style>
