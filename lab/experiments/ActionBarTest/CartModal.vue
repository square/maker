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

		<m-inline-action-bar>
			<m-action-bar-button
				key="close"
				color="#f6f6f6"
				@click="modalApi.close()"
			>
				<x class="icon" />
			</m-action-bar-button>
			<m-action-bar-button
				key="primary"
				align="center"
				full-width
				@click="modalApi.close()"
			>
				Add to Cart
				<template #information>
					$10.00
				</template>
			</m-action-bar-button>
		</m-inline-action-bar>
	</m-modal>
</template>

<script>
import { MModal, modalApi } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import { MImage } from '@square/maker/components/Image';
import X from '@square/maker-icons/X';

export default {
	components: {
		MModal,
		MInlineActionBar,
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
