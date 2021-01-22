<template>
	<div>
		<slot />
	</div>
</template>

<script>
import { kebabCase } from 'lodash';

export default {
	inheritAttrs: false,

	/* TODO
	 * Declaring the top-level design-tokens as props will make them
	 * reactive and easier to watch & re-render
	 */
	mounted() {
		this.applyTheme();
	},

	updated() {
		this.applyTheme();
	},

	methods: {
		applyTheme() {
			const { $el } = this;

			// First level
			Object.entries(this.$attrs).forEach(([namespace, designTokens]) => {
				// Second level
				Object.entries(designTokens).forEach(([tokenName, tokenValue]) => {
					const hashedName = `--${this.hash(namespace, tokenName)}`;
					$el.style.setProperty(hashedName, tokenValue);
				});
			});
		},

		hash(namespace, tokenName) {
			// TODO: Update to use hash
			return `${kebabCase(namespace)}-${kebabCase(tokenName)}`;
			// return `maker-${kebabCase(namespace)}-${kebabCase(tokenName)}`;
		},
	},
};
</script>
