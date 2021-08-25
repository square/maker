<template>
	<div>
		Hello
	</div>
</template>

<script>

export default {

	mounted() {
		this.$nextTick(() => {
			const style = getComputedStyle(this.$el);
			// eslint-disable-next-line no-console
			console.log(style);
		});
	},
};
</script>
