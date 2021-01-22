<template>
	<div class="container">
		<side-nav />
		<router-view />
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
body {
	margin: 16px;
}
</style>

<style scoped>
.container {
	display: grid;
	grid-template-columns: 200px 1fr;
}
</style>

<style>
@import 'prismjs/themes/prism-coy.css';
@import 'vue-demo-collapse/dist/style.css';
</style>
