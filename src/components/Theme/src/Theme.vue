<template>
	<div>
		<slot />
	</div>
</template>

<script>
import key from './key';

export default {
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
		for (const [property, value] of Object.entries(this.theme)) {
			data[property] = value;
		}
		return data;
	},
	updated() {
		// update theme on prop changes
		this.updateTheme();
	},
	methods: {
		updateTheme() {
			for (const [property, value] of Object.entries(this.theme)) {
				this.$data[property] = value;
			}
		},
	},
};
</script>
