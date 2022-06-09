<template>
	<div
		:class="$s.Theme"
		:style="styles"
	>
		<slot />
	</div>
</template>

<script>
import { merge, mergeWith, find } from 'lodash';
import { BASE_TEN } from '@square/maker/utils/constants';
import { showWarning } from '@square/maker/utils/debug';
import key from './key';
import defaultTheme from './default-theme';
import { resolve, getPath } from './utils';

// naive check, just checks for presence of a render field,
// which is assumed to be a function, which is fine for now
function isVueComponent(value) {
	return value && value.render;
}

// returns true if value is an array
// of objects with id fields
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
		const foundProfile = find(data.profiles, { id: profileId });
		if (foundProfile) {
			mergeWith(data, foundProfile, mergeStrategy);
		} else {
			const validIds = data.profiles
				.map((profile) => profile.id)
				.filter((id) => id);
			showWarning(`profile ${profileId} doesn't exist within theme, only found: ${validIds}`, 'Theme');
		}
	}
	data.resolve = resolve;
	data.getPath = getPath;
}

function clamp(value, min, max) {
	return Math.min(Math.max(Number.parseInt(value, BASE_TEN), min), max);
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
			const { colors, fonts, shapes } = this;
			const MAX_THUMBNAIL_RADIUS = 8;

			return {
				'--maker-color-neutral-0': colors['neutral-0'],
				'--maker-color-neutral-10': colors['neutral-10'],
				'--maker-color-neutral-20': colors['neutral-20'],
				'--maker-color-neutral-80': colors['neutral-80'],
				'--maker-color-neutral-90': colors['neutral-90'],
				'--maker-color-neutral-100': colors['neutral-100'],
				'--maker-color-primary': colors.primary,
				'--maker-color-background': colors.background,
				'--maker-color-heading': colors.heading,
				'--maker-color-body': colors.body,
				'--maker-color-elevation': colors.elevation,
				'--maker-color-overlay': colors.overlay,
				'--maker-font-heading-font-family': fonts.heading.fontFamily,
				'--maker-font-heading-font-weight': fonts.heading.fontWeight,
				'--maker-font-body-font-family': fonts.body.fontFamily,
				'--maker-font-body-font-weight': fonts.body.fontWeight,
				'--maker-font-label-font-family': fonts.label.fontFamily,
				'--maker-font-label-font-weight': fonts.label.fontWeight,
				'--maker-shape-default-border-radius': shapes.defaultBorderRadius,
				'--maker-shape-card-border-radius': shapes.cardBorderRadius,
				'--maker-shape-button-border-radius': shapes.buttonBorderRadius,
				'--maker-shape-image-border-radius': shapes.imageBorderRadius,
				'--maker-shape-thumbnail-border-radius': `${clamp(shapes.imageBorderRadius, 0, MAX_THUMBNAIL_RADIUS)}px`,
			};
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
	color: var(--maker-color-body);
	font-weight: var(--maker-font-body-font-weight);
	font-family: var(--maker-font-body-font-family);
	background-color: var(--maker-color-background);
}
</style>
