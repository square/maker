<template>
	<m-dialog>
		<m-dialog-content>
			<m-text
				pattern="title"
				:size="3"
			>
				Dialog heading
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
			<m-text v-if="count">
				count is {{ count }}
			</m-text>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
					@click="dialogApi.close()"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
					@click="dialogApi.close()"
				>
					Confirm
				</m-action-bar-button>
			</m-inline-action-bar>
		</m-dialog-content>
	</m-dialog>
</template>

<script>
import { MText } from '@square/maker/components/Text';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import { MDialog, MDialogContent, dialogApi } from '@square/maker/components/Dialog';
import XIcon from '@square/maker-icons/X';

export default {
	components: {
		MDialog,
		MText,
		MDialogContent,
		MInlineActionBar,
		MActionBarButton,
		XIcon,
	},

	inject: {
		dialogApi,
	},

	props: {
		openToast: {
			type: Function,
			default: undefined,
		},
		count: {
			type: Number,
			default: 0,
		},
	},
};
</script>

<style scoped>
.icon {
	width: 24px;
	height: 24px;
}
</style>
