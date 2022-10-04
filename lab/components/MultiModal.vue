<template>
	<m-modal>
		<m-modal-content>
			<button @click="openNested">
				open nested modal with no beforeClose hook
			</button>
			<button @click="openNestedHook({sync: true, returns: true})">
				open nested modal with sync beforeClose hook that returns true
			</button>
			<button @click="openNestedHook({sync: true, returns: false})">
				open nested modal with sync beforeClose hook that returns false
			</button>
			<button @click="openNestedHook({sync: false, returns: true})">
				open nested modal with async beforeClose hook that returns true
			</button>
			<button @click="openNestedHook({sync: false, returns: false})">
				open nested modal with async beforeClose hook that returns false
			</button>
		</m-modal-content>
	</m-modal>
</template>

<script>
import { MText } from '@square/maker/components/Text';
import { MModal, modalApi, MModalContent } from '@square/maker/components/Modal';
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';
import NestedModal from './NestedModal.vue';

function returns(bool) {
	return () => {
		return bool;
	};
}

function asyncReturns(bool) {
	const TIMEOUT_DURATION = 1000; // 1 second
	return new Promise((resolve, _reject) => {
		setTimeout(() => {
			resolve(bool);
		}, TIMEOUT_DURATION);
	});
}

export default {
	components: {
		MText,
		MModal,
		MActionBarButton,
		MInlineActionBar,
		MModalContent,
		XIcon,
	},

	inject: {
		modalApi,
	},

	methods: {
		openNested() {
			this.modalApi.open(() => <NestedModal />);
		},
		openNestedHook(options) {

		}
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
