<template>
	<div v-frag>
		<template v-if="loaded || children">
			<!-- @slot loaded text -->
			<slot />
		</template>
		<template v-else>
			<div
				v-for="idx in linesNum"
				:key="`skeleton-text-${idx}`"
				:class="$s.SkeletonText"
				v-bind="$attrs"
				v-on="$listeners"
			/>
		</template>
	</div>
</template>

<script>
import frag from 'vue-frag';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	directives: {
		frag,
	},

	inheritAttrs: false,

	props: {
		/**
		 * number of lines of skeleton text
		 */
		lines: {
			type: [String, Number],
			default: 1,
		},
		/**
		 * Toggled loaded state
		 */
		loaded: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		children() {
			return this.$slots.default && this.$slots.default.find((v) => v.tag || v.text.trim());
		},
		linesNum() {
			return Number.parseInt(this.lines, 10);
		},
	},
};
</script>

<style module="$s">
.SkeletonText {
	position: relative;

	&:last-child {
		width: 66%;
	}

	&::before {
		/* fill line-height */
		content: '\00a0';
	}

	&::after {
		position: absolute;
		top: 50%;
		width: 100%;
		height: 75%;
		border-radius: var(--maker-shape-default-border-radius, 8px);
		transform: translateY(-50%);
		animation: pulsing 0.5s ease-in-out infinite alternate;
		content: "";
	}
}

@keyframes pulsing {
	0% { background-color: var(--maker-color-neutral-10, #f1f1f1); }
	100% { background-color: var(--maker-color-neutral-20, #d3d3d3); }
}
</style>
