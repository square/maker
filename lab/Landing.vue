<template>
	<div class="container">
		<h2>indexed routes</h2>
		<ul>
			<li
				v-for="path in indexedPaths"
				:key="path"
			>
				<router-link :to="path">
					{{ path }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
function appendPath(basePath, leafPath) {
	return `${basePath}${basePath && leafPath ? '/' : ''}${leafPath}`;
}

function flattenRoute(basePath, route) {
	if (route.indexed === false) {
		return [];
	}
	const routePath = appendPath(basePath, route.path);
	if (!route.children || route.children.length === 0) {
		return [routePath];
	}
	let flattened = [];
	route.children.forEach((child) => {
		flattened = flattened.concat(flattenRoute(routePath, child));
	});
	return flattened;
}

function flattenRoutes(routes) {
	let flattened = [];
	routes.forEach((route) => {
		flattened = flattened.concat(flattenRoute('', route));
	});
	return flattened;
}

export default {
	computed: {
		indexedPaths() {
			const { routes } = this.$router.options;
			let paths = flattenRoutes(routes);
			paths = paths.filter((path) => !!path);
			paths.sort();
			return paths;
		},
	},
};
</script>

<style scoped>
.container {
	padding: 16px;
}
</style>
