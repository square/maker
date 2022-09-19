<template>
	<div
		:class="[
			$s.ProgressBarContainer,
			$s[`size_${resolvedSize}`],
			$s[`shape_${resolvedShape}`],
		]"
		role="progressbar"
		aria-valuemin="0"
		aria-valuemax="100"
		:aria-valuenow="progress"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div
			:class="[
				$s.ProgressBar,
				$s[`shape_${resolvedShape}`],
			]"
			:style="barStyles"
		/>
	</div>
</template>

<script>
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import cssValidator from '@square/maker/utils/css-validator';

const MIN_PROGRESS = 0;
const MAX_PROGRESS = 100;

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
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
		 * Size (height) of the progress bar
		 */
		size: {
			type: String,
			default: undefined,
			validator: (size) => ['xsmall', 'small', 'medium', 'large'].includes(size),
		},
		/**
		 * Shape of the progress bar
		 */
		shape: {
			type: String,
			default: undefined,
			validator: (shape) => ['squared', 'rounded', 'pill'].includes(shape),
		},
		/**
		 * Color of the progress bar
		 */
		color: {
			type: String,
			default: undefined,
			validator: cssValidator('color'),
		},
		/**
		 * Progress (width) of the bar (0 - 100)
		 */
		progress: {
			type: Number,
			default: 0,
			validator: (progress) => progress >= MIN_PROGRESS && progress <= MAX_PROGRESS,
		},
	},

	computed: {
		...resolveThemeableProps('progressbar', [
			'pattern',
			'color',
			'size',
			'shape',
		]),
		barStyles() {
			return {
				'--bar-color': this.resolvedColor,
				'--fill-percent': `${this.progress}%`,
			};
		},
	},
};
</script>

<style module="$s">
.ProgressBarContainer {
	width: 100%;
	overflow: hidden;
	background-color: $maker-color-neutral-10;
	border-radius: var(--maker-default-border-radius, 16px);

	&.shape_squared {
		border-radius: 0;
	}

	&.shape_rounded,
	&.shape_pill {
		border-radius: 16px;
	}
}

.ProgressBar {
	width: var(--fill-percent, 0);
	height: 100%;
	background-color: var(--bar-color);
	border-radius: var(--maker-default-border-radius, 16px);
	transition: width 100ms linear;

	&.shape_squared {
		border-radius: 0;
	}

	&.shape_rounded,
	&.shape_pill {
		border-radius: 16px;
	}
}

.ProgressBarContainer.size_xsmall {
	height: 4px;
}

.ProgressBarContainer.size_small {
	height: 8px;
}

.ProgressBarContainer.size_medium {
	height: 12px;
}

.ProgressBarContainer.size_large {
	height: 16px;
}
</style>
