<template>
	<div :class="$s.Loading">
		<svg
			:class="[
				$s.Spinner,
				$s[`size_${size}`],
			]"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				:class="[
					$s.Circle,
					$s[`size_${size}`],
				]"
				fill="none"
				stroke-linecap="round"
				cx="8"
				cy="8"
				r="7"
			/>
		</svg>
	</div>
</template>

<script>
/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	props: {
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['medium', 'large'].includes(size),
		},
	},
};
</script>

<style module="$s">
:root {
	--spinner-diameter: 16px;
	--spinner-lg-diameter: 64px;
	--offset: calc(3.145 * var(--spinner-diameter));
	--duration: 1.5s;
}

.Loading {
	display: flex;
	justify-content: center;
}

.Spinner {
	animation: rotate var(--duration) linear infinite;

	&.size_medium {
		width: var(--spinner-diameter);
		height: var(--spinner-diameter);
	}

	&.size_large {
		width: var(--spinner-lg-diameter);
		height: var(--spinner-lg-diameter);
	}
}

.Circle {
	transform-origin: center;
	animation: circle-line var(--duration) ease-in-out infinite;
	stroke: currentColor;
	stroke-dasharray: var(--offset);

	&.size_medium {
		stroke-width: 2px;
	}

	&.size_large {
		stroke-width: 1px;
	}
}

@keyframes rotate {
	to { transform: rotate(270deg); }
}

@keyframes circle-line {
	0% {
		stroke-dashoffset: var(--offset);
	}

	50% {
		transform: rotate(135deg);
		stroke-dashoffset: calc(var(--offset) / 3);
	}

	100% {
		transform: rotate(450deg);
		stroke-dashoffset: var(--offset);
	}
}
</style>
