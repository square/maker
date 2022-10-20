<template>
	<m-theme
		class="container"
		:theme="theme"
	>
		<aside
			:class="[
				'theme-controls',
				{
					'open': themeControlsOpen,
				},
			]"
		>
			<h3 class="controls-header">
				Theme
			</h3>
			<h4 class="controls-header">
				Colors
			</h4>
			<label class="control-container">
				Background
				<br>
				<input
					v-model="bgColor"
					type="color"
				>
				{{ bgColor }}
			</label>
			<label class="control-container">
				Primary
				<br>
				<input
					v-model="primaryColor"
					type="color"
				>
				{{ primaryColor }}
			</label>
			<m-text-button @click="resetColors">
				Reset colors
			</m-text-button>
			<button
				class="toggle"
				@click="toggleThemeControls"
			>
				<chevron-left
					v-if="themeControlsOpen"
					class="toggle-icon"
				/>
				<chevron-right
					v-else
					class="toggle-icon"
				/>
			</button>
		</aside>
		<aside class="side-nav">
			<side-nav />
		</aside>
		<main class="page">
			<router-view />
		</main>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MTextButton } from '@square/maker/components/TextButton';
import makerColors from '@square/maker/utils/maker-colors';
import ChevronLeft from '@square/maker-icons/ChevronLeft';
import ChevronRight from '@square/maker-icons/ChevronRight';
import SideNav from './SideNav.vue';

const COLOR_DEFAULTS = {
	bgColor: '#ffffff',
	primaryColor: '#006aff',
};

export default {
	components: {
		MTheme,
		MTextButton,
		ChevronLeft,
		ChevronRight,
		SideNav,
	},
	data() {
		return {
			themeControlsOpen: false,
			bgColor: '#ffffff',
			primaryColor: '#006aff',
		};
	},
	computed: {
		theme() {
			return {
				colors: makerColors(this.bgColor, this.primaryColor),
			};
		},
	},
	methods: {
		toggleThemeControls() {
			this.themeControlsOpen = !this.themeControlsOpen;
		},
		resetColors() {
			Object.assign(this.$data, COLOR_DEFAULTS);
		},
	},
};
</script>

<!-- global styleguide styles-->
<style>
:root {
	--nav-width: 264px;
	--demo-left-offset: 40px;
	--sans-serif-stack:
		system-ui,
		-apple-system,
		"Segoe UI",
		"Roboto",
		"Helvetica Neue",
		"Noto Sans",
		"Liberation Sans",
		"Arial",
		sans-serif,
		"Apple Color Emoji",
		"Segoe UI Emoji",
		"Segoe UI Symbol",
		"Noto Color Emoji";
	--monospace-stack:
		"SFMono-Regular",
		"Menlo",
		"Monaco",
		"Consolas",
		"Liberation Mono",
		"Courier New",
		monospace;
	--container-padding: 40px;
}

html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
	font-family: var(--sans-serif-stack);
}

button {
	cursor: pointer;
}

.FixInlineActionBarLayerDemosInStyleguide {
	position: relative;
	left: calc(-1 * (var(--nav-width) + var(--demo-left-offset)));
	padding-bottom: 0 !important;
}

.FixInlineActionBarLayerDemosInStyleguide > * {
	position: relative;
	left: calc(var(--nav-width) + var(--demo-left-offset));
}
</style>

<!-- scoped styleguide styles -->
<style scoped>
.container {
	display: grid;
	grid-template-columns: var(--nav-width) calc(100% - var(--nav-width));
	min-height: 100vh;
}

.theme-controls {
	position: fixed;
	top: 0;
	left: 0;
	box-sizing: border-box;
	width: var(--nav-width);
	height: 100vh;
	padding: var(--container-padding);
	background-color: var(--maker-color-background);
	border-right: 1px solid var(--maker-color-neutral-10);
	transform: translateX(-100%);
	transition: transform 0.5s;
	fill: currentColor;
}

.theme-controls.open {
	transform: translateX(0);
}

.controls-header {
	margin-top: 0;
	margin-bottom: 1em;
}

.control-container {
	display: block;
	margin-bottom: 8px;
}

/* closed */
.theme-controls .toggle {
	position: absolute;
	top: 50%;
	right: 1px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 4px 8px 6px;
	color: inherit;
	font-size: inherit;
	font-family: inherit;
	background: inherit;
	border: 1px solid var(--maker-color-neutral-10);
	border-left: none;
	transform: translate(100%, -50%);
	transition: padding-left 0.5s;
	fill: inherit;
}

/* open */
.theme-controls.open .toggle {
	padding-left: 0;
}

.toggle-icon {
	width: 16px;
	height: 16px;
}

.side-nav {
	box-sizing: border-box;
	padding: var(--container-padding);
	border-right: 1px solid var(--maker-color-neutral-10);
}

.page {
	box-sizing: border-box;
	padding: var(--container-padding);
}
</style>

<!-- super hacky overrides for 3rd party css -->
<style>
/* stylelint-disable no-descending-specificity */

/*
@import 'prismjs/themes/prism.css';

unfortunately these styles only look
good on #fff backgrounds but because
the background color is customizable
these aren't good enough and we need
to consider making the syntax highlighting
become theme-aware
*/

/* import vue-demo-collapse */
@import 'vue-demo-collapse/dist/style.css';

/*
overrides for mdvue-loader css
& hashed vue-demo-collapse classes
*/
.markdown-body,
.markdown-body > p,
.markdown-body > h1,
.markdown-body > h2,
.markdown-body > h3,
.markdown-body > h4,
.markdown-body > h5,
.markdown-body > h6 {
	color: inherit !important;
	font-family: var(--sans-serif-stack) !important;
	border-color: var(--maker-color-neutral-10) !important;
}

.markdown-body > pre,
.markdown-body > code,
.markdown-body > a code,
.markdown-body > p code,
/* src code container container */
.vbrGe {
	color: var(--maker-color-body) !important;
	font-size: 13px !important;
	font-family: var(--monospace-stack) !important;
	tab-size: 4 !important;
	background-color: var(--maker-color-neutral-10) !important;
}

/* src code container container */
.vbrGe {
	background-color: var(--maker-color-background) !important;
}

.markdown-body > a,
.markdown-body > p a,
.markdown-body > a code,
.markdown-body > p a code {
	color: var(--maker-color-primary) !important;
}

.markdown-body > table code {
	background-color: var(--maker-color-neutral-10) !important;
}

.markdown-body > table,
.markdown-body > table thead,
.markdown-body > table tbody,
.markdown-body > table tr,
.markdown-body > table th,
.markdown-body > table td {
	border-color: var(--maker-color-neutral-20) !important;
}

.markdown-body > table,
.markdown-body > table thead,
.markdown-body > table tbody,
.markdown-body > table tr {
	background-color: var(--maker-color-background) !important;
}

.markdown-body > table tr:nth-child(2n) {
	background-color: var(--maker-color-neutral-10) !important;
}

/* rendered preview container */
._3UmoO {
	background-color: var(--maker-color-background) !important;
	border-color: var(--maker-color-neutral-20) !important;
}

/* demo container */
._3iYH_,
/* subcomponent header */
.muvMY {
	color: var(--maker-color-body) !important;
	background-color: var(--maker-color-neutral-10) !important;
}

/* demo container */
._3iYH_ {
	margin-bottom: 16px;
}

/* source code container container container */
._3vFwC {
	background-color: var(--maker-color-neutral-10) !important;
	border-color: var(--maker-color-neutral-20) !important;
}

/* src code container */
._1cQnY {
	padding: 0 !important;
	white-space: inherit !important;
	border: none !important;
}

/* "VIEW CODE" button */
.D5DiL {
	color: var(--maker-color-body) !important;
}
</style>
