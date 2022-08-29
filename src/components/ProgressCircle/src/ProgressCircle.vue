<template>
	<div
		:class="$s.ProgressCircleContainer"
		:style="styles"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<svg
			:class="$s.ProgressCircle"
			viewBox="0 0 48 48"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				:class="$s.ProgressBackground"
				fill="none"
				stroke-linecap="round"
				cx="24"
				cy="24"
				r="22"
			/>
			<circle
				v-if="showProgress"
				:class="$s.Progress"
				fill="none"
				stroke-linecap="round"
				cx="24"
				cy="24"
				r="22"
			/>
		</svg>
		<div
			v-if="resolvedIconName"
			:class="$s.IconContainer"
		>
			<m-icon :name="resolvedIconName" />
		</div>
	</div>
</template>

<script>
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import { MIcon } from '@square/maker/components/Icon';
import cssValidator from '@square/maker/utils/css-validator';

const MIN_PROGRESS = 0;
const MAX_PROGRESS = 100;
const TWO = 2;
const RADIUS = 22;

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		MIcon,
	},

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	props: {
		/**
		 * pattern defined at theme level
		 */
		pattern: {
			type: String,
			default: undefined,
		},
		/**
		 * color of the progress circle
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
	 	 * progress of circle (0 - 100)
		 */
		progress: {
			type: Number,
			default: 0,
			validator: (progress) => progress >= MIN_PROGRESS && progress <= MAX_PROGRESS,
		},
		/**
		 * name of icon (defined in theme)
		 */
		iconName: {
			type: String,
			default: undefined,
		},
		/**
		 * color of icon
		 */
		iconColor: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
	},
	computed: {
		...resolveThemeableProps('progresscircle', [
			'pattern',
			'color',
			'iconName',
			'iconColor',
		]),
		styles() {
			return {
				'--stroke-color': this.resolvedColor,
				'--icon-color': this.resolvedIconColor,
				'--progress-length': this.progressLength,
			};
		},
		showProgress() {
			return this.progress > MIN_PROGRESS;
		},
		progressLength() {
			return (this.progress / MAX_PROGRESS) * (TWO * Math.PI * RADIUS);
		},
	},
};
</script>

<style module="$s">
.ProgressCircleContainer {
	--circle-size: 48px;
	--stroke-width: 4;

	position: relative;
	display: inline-flex;
	justify-content: center;
	width: var(--circle-size);
	height: var(--circle-size);
}

.ProgressCircle {
	width: var(--circle-size);
	height: var(--circle-size);
}

.ProgressBackground {
	transform-origin: center;
	stroke: var(--maker-color-neutral-10, #f1f1f1);
	stroke-width: var(--stroke-width);
}

.Progress {
	transform: rotate(-90deg);
	transform-origin: center;
	stroke: var(--stroke-color);
	stroke-dasharray: var(--progress-length), 1000;
	stroke-width: var(--stroke-width);
}

.IconContainer {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	color: var(--icon-color);
}
</style>
