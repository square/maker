<template>
	<div
		:class="$s.ImageWrapper"
	>
		<m-skeleton-block
			v-if="!loaded"
			:class="[
				$s.Image,
				$s[`shape_${resolvedShape}`],
			]"
		/>
		<m-transition-fade-in @after-enter="afterEnter">
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
		<div
			:class="$s.ImageClipPaths"
		>
			<svg
				viewBox="0 0 456 456"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath
						id="mImageHexPath"
						clipPathUnits="objectBoundingBox"
						:transform="svgScale"
					>
						<path
							:d="SVG_PATH"
							fill="white"
						/>
					</clipPath>
				</defs>
			</svg>
		</div>
	</div>
</template>

<script>
import PseudoWindow from 'vue-pseudo-window';
import { throttle } from 'lodash';
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
import { MSkeletonBlock } from '@square/maker/components/Skeleton';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';
import cssValidator from '@square/maker/utils/css-validator';

const SVG_PATH = 'M 228.192 0 L 425.646 114 V 342 L 228.192 456 L 30.738586 342 V 114 L 228.192 0 Z';
// Calculate scale based on viewbox dimensions
// eslint-disable-next-line no-magic-numbers
const SVG_SCALE = 1 / 456;

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
	},

	data() {
		return {
			shouldLoad: false,
			loaded: false,
			throttledResizeHandler: throttle(this.getImageDimensions, THROTTLE_DELAY),
			height: 0,
			width: 0,
			SVG_PATH,
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

		style() {
			return {
				'--image-height': `${this.height}px`,
				'--image-object-fit': this.objectFit,
				'--image-object-position': this.objectPosition,
			};
		},

		isThumbnail() {
			return this.width < THUMBNAIL_MAX_WIDTH;
		},

		svgScale() {
			return `scale(${SVG_SCALE}, ${SVG_SCALE})`;
		},
	},

	watch: {
		src: 'load',
		srcset: 'load',
	},

	mounted() {
		// Emit image:visible right away if Image is cached,
		// since it will just render instead of transitioning in
		if (this.loaded) {
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

		this.getImageDimensions();
	},

	beforeDestroy() {
		observer?.unwatch(this.$el);
	},

	methods: {
		load() {
			this.shouldLoad = true;
		},

		getImageDimensions() {
			this.height = this.$el?.offsetHeight || '0';
			this.width = this.$el?.offsetWidth || '0';
		},

		afterEnter() {
			this.$emit('image:visible');
		},

		onLoaded() {
			this.loaded = true;
			this.getImageDimensions();
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
		-webkit-clip-path: url(#mImageHexPath);
		clip-path: url(#mImageHexPath);
	}
}

.ImageClipPaths {
	width: 0;
	height: 0;
}
</style>
