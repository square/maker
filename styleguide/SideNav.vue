<template>
	<div>
		<ul>
			<li
				v-for="navLink in navLinks"
				:key="navLink.path.name"
			>
				<router-link :to="navLink.path">
					{{ navLink.label }}
				</router-link>
			</li>
		</ul>
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
