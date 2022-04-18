/* eslint-disable max-len */
<template>
	<div class="container">
		<aside class="side-nav">
			<side-nav />
		</aside>
		<main class="page">
			<router-view />
		</main>
	</div>
</template>

<script>
import SideNav from './SideNav.vue';

export default {
	components: {
		SideNav,
	},
};
</script>

<style>
@import '@square/maker/styles/global.css';

:root {
	--nav-width: 264px;
	--demo-left-offset: 40px;
}

html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
	font-family: var(--system-font);
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

<style scoped>
.container {
	display: grid;
	grid-template-columns: var(--nav-width) 1fr;
	gap: 24px;
	height: 100%;
}

.side-nav {
	padding: 40px;
	border-right: 1px solid #e4e7eb;
}

.page {
	padding: 40px;
}
</style>

<style>
/*
While this import adds some syntax highlighting to the code
examples inside the styleguide it looks terrible because:

1. The styles clash with the default markdown styles,
	i.e. github-markdown-css/github-markdown.css
2. The styles contain weird z-index hacks which force
	the code blocks to appear above opened layer components
	like Modal & Blade which makes the demos for those components
	incredibly difficult to use

@import 'prismjs/themes/prism-coy.css';
*/

@import 'vue-demo-collapse/dist/style.css';

/* override weird ugly hashed class from vue-demo-collapse */
._1cQnY {
	padding: 0 !important;
	white-space: inherit !important;
	border: none !important;
}
</style>
