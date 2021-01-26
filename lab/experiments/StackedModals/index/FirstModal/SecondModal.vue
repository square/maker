<template>
	<m-modal>
		<div class="cover-photo">
			<m-image
				src="https://i.picsum.photos/id/508/900/900.jpg?hmac=u3iS7O2eQ5wVlV8-II98k9ARRFn1Yzb92XjCdSAxMOQ"
			/>
		</div>

		<div>
			Second modal
			<div
				v-for="i in 100"
				:key="i"
			>
				Long text {{ i }}
			</div>
		</div>

		<m-action-bar>
			<router-link
				key="close"
				:to="{ name: 'stacked-modals-index-first-modal' }"
			>
				<m-button
					size="large"
					shape="pill"
				>
					<x class="icon" />
				</m-button>
			</router-link>
			<m-button
				key="primary"
				size="large"
				shape="pill"
				align="center"
				full-width
			>
				Action B
			</m-button>
		</m-action-bar>
	</m-modal>
</template>

<script>
import { MModal } from '@square/maker/components/Modal';
import { MActionBar } from '@square/maker/components/ActionBar';
import { MButton } from '@square/maker/components/Button';
import { MImage } from '@square/maker/components/Image';
import { X } from '@square/maker-icons';

export default {
	components: {
		MModal,
		MActionBar,
		MButton,
		MImage,
		X,
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
