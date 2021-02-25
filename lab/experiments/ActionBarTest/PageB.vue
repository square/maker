<template>
	<div>
		<h1>Welcome to Page B</h1>
		<router-link to="/ActionBarTest/">
			Go to index
		</router-link>
		<m-action-bar>
			<m-action-bar-button
				key="primary"
				align="center"
				full-width
				@click="openCart"
			>
				Open modal from Page B
			</m-action-bar-button>
		</m-action-bar>
	</div>
</template>

<script>
import { modalApi } from '@square/maker/components/Modal';
import { MActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import CartModal from './CartModal.vue';

export default {
	components: {
		MActionBar,
		MActionBarButton,
	},

	inject: {
		modalApi,
	},

	methods: {
		openCart() {
			this.modalApi.open(() => <CartModal opened-by="page-b" />);
		},
	},
};
</script>
