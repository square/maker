<template>
	<button :class="$s.Button">
		<!-- @slot button content -->
		<slot />
	</button>
</template>

<script>
/**
 * @inheritAttrs button
 * @inheritListeners button
 */
export default {};
</script>

<style module="$s">
.Button {
	font-weight: 600;
	border: none;
	background: none;
	color: inherit;
	cursor: pointer;
	padding: 0;
	font-size: inherit;
	line-height: inherit;
}
</style>
