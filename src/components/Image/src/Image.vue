<template>
	<div :class="$s.ImageWrapper">
		<template v-if="isIntersecting">
			<m-transition-fade-in>
				<m-skeleton-block
					v-if="!loaded"
				/>
				<img
					v-else
					:class="$s.Image"
					:src="src"
					:srcset="srcset"
					v-bind="$attrs"
					v-on="$listeners"
				>
			</m-transition-fade-in>
		</template>
	</div>
</template>

<script>
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
import { MSkeletonBlock } from '@square/maker/components/Skeleton';

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
		MTransitionFadeIn,
		MSkeletonBlock,
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
	},

	data() {
		return {
			isIntersecting: true,
			loaded: imgCache.has(this.src + this.srcset),
		};
	},

	watch: {
		src: 'load',
		srcset: 'load',
	},

	mounted() {
		if (!observer) {
			observer = new SharedIntersectionObserver();
		}

		observer.watch(this.$el, this.onIntersection);
	},

	beforeDestroy() {
		observer.unwatch(this.$el);
	},

	methods: {
		onIntersection({ isIntersecting }) {
			this.isIntersecting = isIntersecting;
			if (isIntersecting) {
				this.load();
			}
		},

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
			});
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
}
</style>
