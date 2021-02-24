<template>
	<div>
		<h1>root index</h1>
		<m-action-bar>
			<m-action-bar-button
				key="primary"
				align="center"
				full-width
				@click="openCart"
			>
				View Cart
				<template #information>
					3 items
				</template>
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
			this.modalApi.open(() => <CartModal />);
		},
	},
};
</script>
