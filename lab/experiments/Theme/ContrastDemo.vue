<template>
	<div
		:class="$s.demo"
		:style="style"
	>
		<slot />
	</div>
</template>

<script>
import { getHighestContrast } from '@square/maker/utils/color';

export default {

	inject: ['theme'],

	inheritAttrs: false,

	props: {
		color: {
			type: String,
			default: undefined,
		},
		backgroundColor: {
			type: String,
			default: '#000',
		},
	},

	data() {
		return {
			background: '#000',
		};
	},

	computed: {
		style() {
			return {
				// this will only work for initial render -- need to consider impact of profile changes
				'--color-contrast': this.color || getHighestContrast(this.background, ['#fff', '#000']),
			};
		},
		// currentBackground() {
		// 	// getComputedStyle might be too expensive as it forces a reflow
		// 	const style = getComputedStyle(this.$el);
		// 	return style.backgroundColor;
		// },
	},

	mounted() {
		this.$nextTick(() => {
			const style = getComputedStyle(this.$el);
			this.background = style.backgroundColor;
		});
	},
};
</script>
<style module="$s">
.demo {
	padding: 10px;
	color: var(--color-contrast, #fff);
	font-size: 16px;
	background: var(--maker-colors-primary, #000);
}
</style>
