<template>
	<div
		:class="$s.ImageWrapper"
		:style="imageWrapperStyles"
	>
		<m-skeleton-block
			v-if="!loaded"
			:class="[
				$s.Image,
				$s[`shape_${resolvedShape}`],
			]"
		/>
		<!-- Need to use a template. Using an actual element (e.g span)
		and needing to style it causes the performance issue in Safari. -->
		<template v-if="shouldDisableTransition">
			<img
				v-show="loaded"
				:class="{
					[$s.Image]: true,
					[$s[`shape_${resolvedShape}`]]: resolvedShape,
					[$s.thumbnail]: isThumbnail,
				}"
				:style="style"
				:srcset="calculatedSrcSet"
				:sizes="sizes"
				:src="calculatedSrc"
				v-bind="$attrs"
				@load="onLoaded"
				v-on="$listeners"
			>
		</template>
		<m-transition-fade-in
			v-else
			@after-enter="afterEnter"
		>
			<img
				v-show="loaded"
				:class="{
					[$s.Image]: true,
					[$s[`shape_${resolvedShape}`]]: resolvedShape,
					[$s.thumbnail]: isThumbnail,
				}"
				:style="style"
				:srcset="calculatedSrcSet"
				:sizes="sizes"
				:src="calculatedSrc"
				v-bind="$attrs"
				@load="onLoaded"
				v-on="$listeners"
			>
		</m-transition-fade-in>
		<pseudo-window
			@resize="throttledResizeHandler"
		/>
	</div>
</template>

<script>
import PseudoWindow from 'vue-pseudo-window';
import { throttle } from 'lodash';
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
import { MSkeletonBlock } from '@square/maker/components/Skeleton';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import cssValidator from '@square/maker/utils/css-validator';

const hexagon = 'polygon(50% 0, 93.3012701892219% 25%, 93.3012701892219% 75%, 50% 100%, 6.69872981077807% 75%, 6.69872981077807% 25%)';

/** @constructor */
function SharedIntersectionObserver() {
	const callbacks = new WeakMap();
	const o = new IntersectionObserver((entries) => {
		entries.forEach((entry) => callbacks.get(entry.target)?.(entry));
	});

	return {
		watch(element, callback) {
			callbacks.set(element, callback);
			o.observe(element);
		},
		unwatch(element) {
			o.unobserve(element);
			callbacks.delete(element);
		},
	};
}

const THUMBNAIL_MAX_WIDTH = '150';
const THROTTLE_DELAY = 200;

/** @type {SharedIntersectionObserver?} */
let observer;

/**
 * @inheritAttrs img
 * @inheritListeners img
 */
export default {
	components: {
		PseudoWindow,
		MTransitionFadeIn,
		MSkeletonBlock,
	},

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	inheritAttrs: false,

	props: {
		src: {
			type: String,
			default: undefined,
		},
		srcset: {
			type: String,
			default: undefined,
		},
		sizes: {
			type: String,
			default: undefined,
		},
		/**
		 * Original applies theme's border radius, square applies border radius of 0
		 */
		shape: {
			type: String,
			default: undefined,
			validator: (shape) => ['original', 'square', 'circle', 'arch', 'hexagon'].includes(shape),
		},
		lazyload: {
			type: Boolean,
			default: false,
		},
		/**
		 * [Object fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
		 */
		objectFit: {
			type: String,
			validator: cssValidator('object-fit'),
			default: 'cover',
		},
		/**
		 * [Object position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
		 */
		objectPosition: {
			type: String,
			validator: cssValidator('object-position'),
			default: 'center',
		},
		shouldDisableTransition: {
			type: Boolean,
			default: false,
		},
		/* Should only be needed for Safari */
		shouldUseStaticSizeStyles: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			shouldLoad: false,
			loaded: false,
			throttledResizeHandler: throttle(this.getImageDimensions, THROTTLE_DELAY),
			height: 0,
			width: 0,
			getImageDimensionsFnAttemptsLeft: 20,
			getImageDimensionsTimeout: undefined,
		};
	},

	computed: {
		...resolveThemeableProps('image', [
			'shape',
		]),

		calculatedSrc() {
			return this.shouldLoad
				? this.src
				: '';
		},

		calculatedSrcSet() {
			return this.shouldLoad
				? this.srcset
				: '';
		},

		imageWrapperStyles() {
			return {
				'--maker-image-hexagon': hexagon,
			};
		},

		style() {
			const imageStyle = {
				'--image-height': `${this.height}px`,
				'--image-object-fit': this.objectFit,
				'--image-object-position': this.objectPosition,
			};
			/*
				Safari doesn't seem to like `inherit` or `100%` for height/width.
				By setting it static, the scrolling performance is vastly improved,
				and it does properly update on screen resize.
			*/
			if (this.shouldUseStaticSizeStyles && this.height && this.width) {
				imageStyle.height = `${this.height}px`;
				imageStyle.width = `${this.width}px`;
			}

			return imageStyle;
		},

		isThumbnail() {
			return this.width < THUMBNAIL_MAX_WIDTH;
		},

		shouldGetImageDimensions() {
			return this.shouldUseStaticSizeStyles || (this.shape !== 'square' && this.shape !== 'original');
		},
	},

	watch: {
		src: 'load',
		srcset: 'load',
		shape: {
			immediate: true,
			handler() {
				if (this.shouldGetImageDimensions && (!this.height || !this.width)) {
					this.$nextTick(() => this.getImageDimensions());
				}
			},
		},
	},

	mounted() {
		// Emit image:visible right away if Image is cached,
		// since it will just render instead of transitioning in
		// If it doesn't have a transition, so we'll just trigger it here
		if (this.loaded || this.shouldDisableTransition) {
			this.$emit('image:visible');
		}

		if (this.lazyload) {
			observer ??= new SharedIntersectionObserver();

			observer.watch(this.$el, ({ isIntersecting }) => {
				if (isIntersecting) {
					this.load();
				}
			});
		} else {
			this.load();
		}

		// Safari seems to really struggle with getImageDimensions, specifically calling
		// offsetHeight/offsetWidth which triggers a style recalculation. If you're
		// scrolling a list that has images, it just causes the main thread to get frozen.
		// Let's try and preload those values before the image is actually loaded.
		const timeoutValue = 100;
		const getImageDimensionsFn = () => {
			this.getImageDimensions();
			// Just to ensure we don't have an infinite loop
			this.getImageDimensionsFnAttemptsLeft -= 1;
			if (this.getImageDimensionsFnAttemptsLeft === 0) {
				return;
			}
			if (!this.height || !this.width) {
				this.getImageDimensionsTimeout = setTimeout(getImageDimensionsFn, timeoutValue);
			}
		};
		if (this.shouldGetImageDimensions) {
			this.$nextTick(getImageDimensionsFn);
		}
	},

	beforeDestroy() {
		observer?.unwatch(this.$el);
		clearTimeout(this.getImageDimensionsTimeout);
	},

	methods: {
		load() {
			this.shouldLoad = true;
			observer?.unwatch(this.$el);
		},

		getImageDimensions() {
			this.height = this.$el?.offsetHeight || 0;
			this.width = this.$el?.offsetWidth || 0;
		},

		afterEnter() {
			this.$emit('image:visible');
		},

		onLoaded() {
			this.loaded = true;
			if (this.shouldGetImageDimensions && (!this.height || !this.width)) {
				// We can't get the proper height of the image until after the DOM has been updated
				// The image will otherwise be hidden, and the offsetHeight will be 0
				this.$nextTick(() => this.getImageDimensions());
			}
		},
	},
};
</script>

<style module="$s">
.ImageWrapper {
	position: relative;
	width: 100%;
	height: 100%;
}

.Image {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: var(--image-object-fit);
	object-position: var(--image-object-position);
	border-radius: $maker-shape-image-border-radius;

	&.thumbnail {
		border-radius: $maker-shape-thumbnail-border-radius;
	}

	&.shape_square {
		border-radius: 0;
	}

	&.shape_circle {
		border-radius: var(--image-height, 100%);
	}

	&.shape_arch {
		border-top-left-radius: var(--image-height);
		border-top-right-radius: var(--image-height);
	}

	&.shape_hexagon {
		-webkit-clip-path: var(--maker-image-hexagon);
		clip-path: var(--maker-image-hexagon);
	}
}
</style>
