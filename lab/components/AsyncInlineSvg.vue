<template>
	<!-- eslint-disable vue/no-v-html -->
	<!-- <html-fragment
		v-if="fragment"
		:class="classes"
		:html="svgText"
	/> -->
	<fragment
		v-html="svgText"
	/>

	<!-- v-if="fragment || true"
	:class="classes" -->

	<!-- <i
		v-else
		:class="classes"
		v-html="svgText"
	/> -->
</template>

<script>
import { Fragment } from 'vue-frag';
// import frag from 'vue-frag';
// import HtmlFragment from './HtmlFragment.vue';

/**
 * trims anything before the opening svg tag
 * and anything after the closing svg tag
 * @param {String} svgText
 * @return {String}
 */
function trimEnds(svgText) {
	const start = '<svg';
	const end = '</svg>';
	const endLength = end.length;
	const startIndex = svgText.indexOf(start);
	const endIndex = svgText.indexOf(end) + endLength;
	return svgText.slice(startIndex, endIndex);
}

/**
 * removes width & height attributes from svg
 * so it doesn't break out of container
 * @param {String} svgText
 * @return {String}
 */
function removeDims(svgText) {
	return svgText.replace(/(width|height)=".*"/gim, '');
}

/**
 * cleans svg text
 * @param {String} svgText
 * @return {String}
 */
function cleanText(svgText) {
	return removeDims(trimEnds(svgText));
}

/**
 * Vue component that asynchronously fetches an SVG
 * from a URL and renders it inline. Rendering the SVG
 * inline is important because then it can be targeted
 * by CSS for styling.
 */
export default {
	// components: {
	// 	// HtmlFragment,
	// 	Fragment,
	// },
	components: {
		Fragment,
	},
	// directives: {
	// 	frag,
	// },
	props: {
		src: {
			type: String,
			required: true,
		},
		noWrapper: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['medium', 'large'].includes(size),
		},
	},
	data() {
		return {
			svgText: '',
		};
	},
	computed: {
		classes() {
			return [
				this.$s.Icon,
				this.$s[`size_${this.size}`],
			];
		},
	},
	watch: {
		src: {
			immediate: true,
			handler() {
				// tried to put this call in various lifecycle
				// hook methods, but they weren't working for
				// whatever reason, hence this watcher
				this.loadSvg();
			},
		},
	},
	methods: {
		async loadSvg() {
			const response = await fetch(this.src, {
				mode: 'cors',
			});
			const fullText = await response.text();
			const cleanedText = cleanText(fullText);
			this.svgText = cleanedText;
			return this.svgText;
		},
	},
};
</script>

<style module="$s">
.Icon {
	display: inline-block;
}

.size_medium {
	width: 16px;
	height: 16px;
}

.size_large {
	width: 24px;
	height: 24px;
}
</style>
