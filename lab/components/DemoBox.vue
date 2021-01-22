<template>
	<div :class="$s.DemoBox">
		<slot />
		<div ref="tooltip">
			<div
				v-for="(value, key) in tooltip"
				:key="key"
			>
				{{ key }}: {{ value }}
			</div>
			<div>
				Dimensions: {{ dimensions }}
			</div>
		</div>
	</div>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default {
	props: {
		tooltip: {
			type: undefined,
			required: true,
		},
	},

	data() {
		return {
			boundingClientRect: undefined,
		};
	},

	computed: {
		dimensions() {
			if (!this.boundingClientRect) {
				return '';
			}
			const options = {
				maximumFractionDigits: 1,
			};
			const width = this.boundingClientRect.width.toLocaleString(undefined, options);
			const height = this.boundingClientRect.height.toLocaleString(undefined, options);
			return `${width}px x ${height}px`;
		},
	},

	mounted() {
		tippy(this.$el, {
			content: this.$refs.tooltip,
		});

		this.boundingClientRect = this.$el.children[0].getBoundingClientRect();
	},
};
</script>

<style>
.tippy-box {
	font-family: system-ui;
	user-select: none;
}

</style>

<style module="$s">
.DemoBox {
	margin: 16px;
}

</style>
