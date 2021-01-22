<template>
	<hr
		:class="$s.Divider"
		v-bind="$attrs"
		v-on="$listeners"
	>
</template>

<script>

/**
 * @inheritAttrs hr
 * @inheritListeners hr
 */
export default {
	inheritAttrs: false,
};
</script>

<style module="$s">
/*
	hr needed so selector has higher specificity
	than our markdown css style selectors
*/
hr.Divider {
	height: 1px;
	margin: 0;
	padding: 0;
	background-color: rgba(0, 0, 0, 0.08);
	border: none;
}
</style>
