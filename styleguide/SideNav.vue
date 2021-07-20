<template>
	<div>
		<nav class="nav">
			<template
				v-for="navLink in navLinks"
			>
				<router-link
					:key="navLink.path.name"
					:to="navLink.path"
					class="link"
				>
					{{ navLink.label }}
				</router-link>
			</template>
		</nav>
	</div>
</template>

<script>

export default {
	computed: {
		navLinks() {
			return this.$router.options.routes
				.filter((route) => route.navLabel)
				.map((route) => ({
					label: route.navLabel,
					path: {
						name: route.name,
					},
				}));
		},
	},
};
</script>

<style scoped>
.nav a {
	display: block;
	color: #5f666c;
	font-size: 14px;
	line-height: 1.75;
	text-decoration: none;
}

.nav a:hover {
	color: #006aff;
}
</style>
