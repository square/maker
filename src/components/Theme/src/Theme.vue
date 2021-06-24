<template>
	<div>
		<slot />
	</div>
</template>

<script>
import { merge } from 'lodash';
import key from './key';
import defaultTheme from './default-theme';
import { resolve, getPath } from './utils';

function resolveTheme(data, parentTheme, theme) {
	merge(data, parentTheme, theme);
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
			required: true,
		},
	},
	data() {
		const data = {};
		resolveTheme(data, this.parentTheme, this.theme);
		return data;
	},
	beforeUpdate() {
		// update theme on prop changes
		resolveTheme(this.$data, this.parentTheme, this.theme);
	},
};
</script>
