<template>
	<div>
		<h1>Base</h1>

		<router-link :to="{ name: 'stacked-modals-index-first-modal' }">
			Open first modal
		</router-link>

		<!--
		Indicates nested modal route and allows the underlying page
		to be visible when sliding the modal down
		-->
		<router-view />
	</div>
</template>
