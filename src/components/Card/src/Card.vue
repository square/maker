<template>
	<div
		:class="[
			$s.Card,
		]"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<!-- @slot card content -->
		<slot />
	</div>
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
.Card {
	padding: 16px 24px;
	background-color: white;
	border: 1px solid #eaeaea;
	border-radius: 8px;
}
</style>