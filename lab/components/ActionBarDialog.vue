<template>
	<m-dialog>
		<m-dialog-content>
			<m-text
				pattern="title"
				:size="3"
			>
				Whoa, hold on!
			</m-text>
			<m-text>
				Did you know that adult male polar bears can weight over 1,500 lbs?
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
					Now I do! Thanks!
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
	name: 'ActionBarDemoDialog',

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
