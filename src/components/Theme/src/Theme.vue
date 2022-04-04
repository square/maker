<script>
import { createStitches } from '@stitches/core';
import { merge, find } from 'lodash';
import key from './key';
import defaultTheme from './default-theme';
import { resolve, getPath } from './utils';

function resolveTheme(data, parentTheme, theme, profileId) {
	merge(data, parentTheme, theme);
	merge(data, find(data.profiles, { id: profileId }));
	data.colors = {
		...data.colors,
	};
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
			default: 'defaultProfile',
		},
	},
	data() {
		const data = {};
		resolveTheme(data, this.parentTheme, this.theme, this.profile);
		return data;
	},
	beforeUpdate() {
		resolveTheme(this.$data, this.parentTheme, this.theme, this.profile);
		this.applyTheme();
	},
	beforeMount() {
		this.applyTheme();
	},
	methods: {
		applyTheme() {
			createStitches({ theme: this.theme, prefix: 'maker' });
		},
	},

	render(h) {
		const { $s } = this;
		/**
		 * @slot theme content
		 */
		const defaultSlot = this.$slots.default;
		return h('div', {
			class: [$s.Theme],
			attrs: this.$attrs,
			on: this.$listeners,
		}, defaultSlot);
	},
};
</script>

<style module="$s">
:root {
	--theme-font-weight: var(--maker-text-fontWeight, normal);
	--theme-font-size: calc(var(--maker-fonts-baseSize, 16) * 1px);
	--theme-font-family: var(--maker-text-fontFamily, --system-font);
}

.Theme {
	color: var(--maker-colors-text, #000);
	font-weight: var(--theme-font-weight);
	font-size: var(--theme-font-size);
	font-family: var(--theme-font-family);
	background-color: var(--maker-colors-background, #fff);
}
</style>
