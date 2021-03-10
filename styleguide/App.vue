<template>
	<div>
		<h1>THE TEST SUCCEEDED! Also: do not actually merge this in. 2</h1>
		<div class="container">
			<side-nav />
			<router-view />
		</div>
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
:root {
	--nav-width: 200px;
	--demo-left-offset: 40px;
}

body {
	margin: 16px;
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
