<template>
	<div
		:class="$s.VerticalDivider"
		v-bind="$attrs"
		v-on="$listeners"
	/>
</template>

<script>

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	inheritAttrs: false,
};
</script>

<style module="$s">
.VerticalDivider {
	display: inline-flex;
	align-self: center;
	width: 1px;
	height: 0.5em;
	margin: 0;
	padding: 0;
	vertical-align: middle;
	background-color: $maker-color-neutral-20;
	border: none;
}
</style>
