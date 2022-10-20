<template>
	<div>
		<nav class="nav">
			<router-link
				to="/components"
				class="header-link link"
			>
				components
			</router-link>
			<router-link
				v-for="componentLink in componentsLinks"
				:key="componentLink.path.name"
				:to="componentLink.path"
				class="link"
			>
				{{ componentLink.label }}
			</router-link>
			<router-link
				to="/utils"
				class="header-link link"
			>
				utils
			</router-link>
			<router-link
				v-for="utilLink in utilsLinks"
				:key="utilLink.path.name"
				:to="utilLink.path"
				class="link"
			>
				{{ utilLink.label }}
			</router-link>
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
					category: route.category,
				}));
		},
		componentsLinks() {
			return this.navLinks
				.filter((link) => link.category === 'components');
		},
		utilsLinks() {
			return this.navLinks
				.filter((link) => link.category === 'utils');
		},
	},
};
</script>

<style scoped>
.nav .link {
	display: block;
	color: var(--maker-color-neutral-90);
	font-size: 16px;
	line-height: 1.75;
	text-decoration: none;
}

.nav .link:hover {
	color: var(--maker-color-primary);
}

.nav .header-link {
	font-weight: 600;
	font-size: 14px;
	line-height: 2.5;
	letter-spacing: 1px;
	text-transform: uppercase;
}
</style>
