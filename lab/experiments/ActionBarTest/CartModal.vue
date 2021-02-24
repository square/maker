<template>
	<m-modal>
		<div class="cover-photo">
			<m-image
				src="https://i.picsum.photos/id/507/900/900.jpg?hmac=NDltE7xXtFlZjUoyDqGjehzY5ORPtj4-d42qbFgAFkk"
			/>
		</div>

		<div>
			<h1>Cart modal content</h1>
			<div
				v-for="i in 100"
				:key="i"
			>
				Long text {{ i }}
			</div>
		</div>

		<m-responsive-action-bar>
			<m-action-bar-button
				key="close"
				@click="modalApi.close()"
				color="#f6f6f6"
			>
				<x class="icon" />
			</m-action-bar-button>
			<m-action-bar-button
				key="primary"
				align="center"
				@click="modalApi.close()"
				full-width
			>
				Add to Cart
				<template #information>
					$10.00
				</template>
			</m-action-bar-button>
		</m-responsive-action-bar>
	</m-modal>
</template>

<script>
import { MModal, modalApi } from '@square/maker/components/Modal';
import { MResponsiveActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import { MImage } from '@square/maker/components/Image';
import X from '@square/maker-icons/X';

export default {
	components: {
		MModal,
		MResponsiveActionBar,
		MActionBarButton,
		MImage,
		X,
	},
	inject: {
		modalApi,
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 280px;
}

.image {
	width: 100%;
}

.icon {
	width: 16px;
	height: 16px;
}
</style>
