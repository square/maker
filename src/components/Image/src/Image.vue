<template>
	<div
		ref="image-wrapper"
		:class="$s.ImageWrapper"
	>
		<m-skeleton-block
			v-if="!loaded"
			:class="[
				$s.Image,
				$s[`shape_${resolvedShape}`],
			]"
		/>
		<m-transition-fade-in>
			<img
				v-if="loaded"
				:class="[
					$s.Image,
					$s[`shape_${resolvedShape}`],
				]"
				:style="style"
				:src="src"
				:srcset="srcset"
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
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
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
		shape: {
			type: String,
			default: undefined,
			validator: (shape) => ['square', 'circle', 'arch'].includes(shape),
		},
		lazyload: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		const throggleDelay = 200;

		return {
			loaded: imgCache.has(this.src + this.srcset),
			throttledResizeHandler: throttle(this.getImageHeight, throggleDelay),
			height: 0,
		};
	},

	computed: {
		...resolveThemeableProps('image', ['shape']),

		style() {
			return {
				'--image-height': `${this.height}px`,
			};
		},
	},

	watch: {
		src: 'load',
		srcset: 'load',
	},

	mounted() {
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
		this.getImageHeight();
	},

	beforeDestroy() {
		observer.unwatch(this.$el);
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

			img.addEventListener('load', () => {
				imgCache.add(this.src + this.srcset);
				this.loaded = true;
				this.getImageHeight();
			});
		},

		getImageHeight() {
			this.height = this.$refs['image-wrapper'].offsetHeight || '0';
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
	border-radius: var(--maker-shape-image-border-radius, 0);

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
