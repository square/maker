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
			<template
				v-if="openToast"
			>
				<m-text>
					open toast
				</m-text>
				<button @click="openToast('info', { actionbarOffset: true })">
					info
				</button>
				<button @click="openToast('success', { actionbarOffset: true })">
					success
				</button>
				<button @click="openToast('warning', { actionbarOffset: true })">
					warning
				</button>
				<button @click="openToast('error', { actionbarOffset: true })">
					error
				</button>
				<button @click="openToast('primary', { actionbarOffset: true })">
					primary
				</button>
				<m-text>
					note: resize viewport above & below 840px breakpoint to
					see mobile vs desktop behavior
				</m-text>
			</template>
			<m-text v-else>
				content content content
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

	props: {
		openToast: {
			type: Function,
			default: undefined,
		},
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
