<template>
	<m-blade>
		<img
			class="cover-photo"
			src="https://picsum.photos/400/300"
		>
		<m-blade-content>
			<m-text pattern="title">
				Blade heading
			</m-text>
			<m-text>
				blade content
			</m-text>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					@click="bladeApi.close()"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
					@click="bladeApi.close()"
				>
					Confirm
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-blade-content>
	</m-blade>
</template>

<script>
import { MBlade, MBladeContent, bladeApi } from '@square/maker/components/Blade';
import { MText } from '@square/maker/components/Text';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';

export default {
	components: {
		MBlade,
		MBladeContent,
		MText,
		MInlineActionBar,
		MActionBarButton,
		XIcon,
	},

	inject: {
		bladeApi,
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 300px;
	object-fit: cover;
	object-position: center;
}

.icon {
	width: 24px;
	height: 24px;
}
</style>
