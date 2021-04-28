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
	padding: 0;
	color: inherit;
	font-weight: 600;
	font-size: inherit;
	line-height: inherit;
	background: none;
	border: none;
	cursor: pointer;
}
</style>
