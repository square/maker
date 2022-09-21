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
				:src="src"
				:srcset="srcset"
				:sizes="sizes"
				v-bind="$attrs"
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
import { MTransitionFadeIn } from '@square/maker/utils/TransitionFadeIn';
import { MSkeletonBlock } from '@square/maker/components/Skeleton';
import { MThemeKey, defaultTheme, resolveThemeableProps } from '@square/maker/components/Theme';

function SharedIntersectionObserver() {
	const callbacks = new WeakMap();
	const o = new IntersectionObserver((entries) => {
		entries.forEach((entry) => callbacks.get(entry.target)(entry));
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

const imgCache = new Set();
const THUMBNAIL_MAX_WIDTH = '150';
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
		 * @values original, square, circle, arch
		 */
		shape: {
			type: String,
			default: undefined,
			validator: (shape) => ['original', 'square', 'circle', 'arch'].includes(shape),
		},
		lazyload: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		const throttleDelay = 200;

		return {
			loaded: imgCache.has(this.src + this.srcset),
			throttledResizeHandler: throttle(this.getImageDimensions, throttleDelay),
			height: 0,
			width: 0,
		};
	},

	computed: {
		...resolveThemeableProps('image', ['shape']),

		style() {
			return {
				'--image-height': `${this.height}px`,
			};
		},

		isThumbnail() {
			return this.width < THUMBNAIL_MAX_WIDTH;
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
		if (!this.lazyload) {
			this.load();
		} else {
			if (!observer) {
				observer = new SharedIntersectionObserver();
			}
			observer.watch(this.$el, ({ isIntersecting }) => {
				if (isIntersecting) {
					this.load();
				}
			});
		}
		this.getImageDimensions();
	},

	beforeDestroy() {
		if (observer) {
			observer.unwatch(this.$el);
		}
	},

	methods: {
		load() {
			if (this.loaded || (!this.src && !this.srcset)) {
				return;
			}

			const img = new Image();

			if (this.src) {
				img.src = this.src;
			}

			if (this.srcset) {
				img.srcset = this.srcset;
			}

			// Needed to not load the full size image
			// and match the size loaded in the UI
			if (this.sizes) {
				img.sizes = this.sizes;
			}

			img.addEventListener('load', () => {
				imgCache.add(this.src + this.srcset);
				this.loaded = true;
				this.getImageDimensions();
			});
		},

		getImageDimensions() {
			this.height = this.$el?.offsetHeight || '0';
			this.width = this.$el?.offsetWidth || '0';
		},

		afterEnter() {
			this.$emit('image:visible');
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
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
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
}
</style>
