<template>
	<div
		:class="$s.Modal"
		:style="style"
	>
		<!-- @slot Modal content -->
		<slot />
	</div>
</template>

<script>
import chroma from 'chroma-js';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

import modalApi from './modal-api';

export default {
	name: 'Modal',

	inject: {
		modalApi,
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	props: {
		/**
		 * Before close hook, can block closing
		 */
		beforeClose: {
			type: Function,
			required: false,
			default: undefined,
		},
		/**
		 * Background color of container
		 */
		bgColor: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
		/**
		 * Text color of container
		 */
		color: {
			type: String,
			default: undefined,
			validator: (color) => chroma.valid(color),
		},
	},

	computed: {
		...resolveThemeableProps('modal', ['bgColor', 'color']),

		style() {
			return {
				'--bg-color': this.resolvedBgColor,
				'--color': this.resolvedColor,
			};
		},
	},

	watch: {
		beforeClose: {
			immediate: true,
			handler(hook) {
				this.modalApi.state.options.beforeCloseHook = hook;
			},
		},
	},
};
</script>

<style module="$s">
.Modal {
	height: 100%;
	overflow: scroll;
	color: var(--color, inherit);
	background: var(--bg-color, #f5f6f7);
}

@media screen and (min-width: 840px) {
	.Modal {
		width: 600px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}
}
</style>
