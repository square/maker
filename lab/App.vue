<template>
	<router-view />
</template>

<script>
export default {
	metaInfo: {
		title: '🔬 Maker Lab',
		meta: [
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover',
			},
		],
	},
};
</script>

<style>
body {
	margin: 0;
	font-family: -apple-system, 'Helvetica Neue', sans-serif;
}
</style>
