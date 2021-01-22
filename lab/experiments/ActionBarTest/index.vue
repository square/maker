<template>
	<div>
		<h1>Welcome!</h1>

		<router-link :to="{ name: 'action-bar-test-index-modal' }">
			Open product
		</router-link>

		<m-action-bar>
			<m-button
				key="primary"
				size="large"
				shape="pill"
				align="center"
				full-width
			>
				View Cart
				<template #information>
					3 items
				</template>
			</m-button>
		</m-action-bar>

		<!--
		Indicates nested modal route and allows the underlying page
		to be visible when sliding the modal down
		-->
		<router-view />
	</div>
</template>

<script>
import { MActionBar } from '@square/maker/components/ActionBar';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MActionBar,
		MButton,
	},
};
</script>
