<template>
	<!-- eslint-disable max-len -->
	<m-modal :before-close="beforeClose">
		<m-modal-content>
			depth: {{ depth }}
			<br>
			no beforeClose hooks
			<br>
			<button @click="openNested">
				no beforeClose hooks
			</button>
			<br>
			sync beforeClose hooks: true
			<br>
			<button @click="openNested({ propSync: true, propReturn: true })">
				sync prop: true
			</button>
			<br>
			<button @click="openNested({ optSync: true, optReturn: true })">
				sync option: true
			</button>
			<br>
			<button @click="openNested({ propSync: true, propReturn: true, optSync: true, optReturn: true })">
				sync prop & option: true
			</button>
			<br>
			sync beforeClose hooks: false
			<br>
			<button @click="openNested({ propSync: true, propReturn: false })">
				sync prop: false
			</button>
			<br>
			<button @click="openNested({ optSync: true, optReturn: false })">
				sync option: false
			</button>
			<br>
			<button @click="openNested({ propSync: true, propReturn: false, optSync: true, optReturn: false })">
				sync prop & option: false
			</button>
			<br>
			sync beforeClose hooks: mixed
			<br>
			<button @click="openNested({ propSync: true, propReturn: true, optSync: true, optReturn: false })">
				sync prop: true, sync option: false
			</button>
			<br>
			<button @click="openNested({ propSync: true, propReturn: false, optSync: true, optReturn: true })">
				sync prop: false, sync option: true
			</button>

			<br>
			async beforeClose hooks: true
			<br>
			<button @click="openNested({ propSync: false, propReturn: true })">
				async prop: true
			</button>
			<br>
			<button @click="openNested({ optSync: false, optReturn: true })">
				async option: true
			</button>
			<br>
			<button @click="openNested({ propSync: false, propReturn: true, optSync: false, optReturn: true })">
				async prop & option: true
			</button>
			<br>
			async beforeClose hooks: false
			<br>
			<button @click="openNested({ propSync: false, propReturn: false })">
				async prop: false
			</button>
			<br>
			<button @click="openNested({ optSync: false, optReturn: false })">
				async option: false
			</button>
			<br>
			<button @click="openNested({ propSync: false, propReturn: false, optSync: false, optReturn: false })">
				async prop & option: false
			</button>
			<br>
			async beforeClose hooks: mixed
			<br>
			<button @click="openNested({ propSync: false, propReturn: true, optSync: false, optReturn: false })">
				async prop: true, sync option: false
			</button>
			<br>
			<button @click="openNested({ propSync: false, propReturn: false, optSync: false, optReturn: true })">
				async prop: false, sync option: true
			</button>
			<br>
			mixed a/sync beforeClose hooks: mixed
			<br>
			<!-- todo implement this part -->

			<br>
			closing via popover
			<br>
			<m-popover>
				<template #action="popover">
					<button
						@click="popover.toggle()"
					>
						open popover
					</button>
				</template>
				<template #content>
					<m-popover-content>
						<button @click="modalApi.close()">
							close this modal
						</button>
						<button @click="modalApi.closeAll()">
							close all modals
						</button>
					</m-popover-content>
				</template>
			</m-popover>
			<br>
			closing
			<br>
			<button @click="modalApi.close()">
				close this modal
			</button>
			<button @click="modalApi.closeAll()">
				close all modals
			</button>
			<m-popover-layer />
		</m-modal-content>
	</m-modal>
</template>

<script>
/* eslint-disable no-console,no-debugger,import/no-self-import,max-len */
import { MModal, modalApi, MModalContent } from '@square/maker/components/Modal';
import { MPopoverLayer, MPopover, MPopoverContent } from '@square/maker/components/Popover';

const TIMEOUT_DURATION = 1000; // 1 second

function returns(setter, bool) {
	return () => {
		console.log(`in sync beforeClose set by ${setter}, returning ${bool}`);
		return bool;
	};
}

function asyncReturns(setter, bool) {
	return () => new Promise((resolve) => {
		setTimeout(() => {
			console.log(`in async beforeClose set by ${setter}, returning ${bool}`);
			resolve(bool);
		}, TIMEOUT_DURATION);
	});
}

const DEFAULT_DEPTH = 1;
const INC_DEPTH = 1;

export default {
	components: {
		MModal,
		MModalContent,
		MPopoverLayer,
		MPopover,
		MPopoverContent,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],

	inject: {
		modalApi,
	},

	props: {
		depth: {
			type: Number,
			default: DEFAULT_DEPTH,
		},
		beforeClose: {
			type: Function,
			default: undefined,
		},
	},

	data() {
		return {
			NestedModal: undefined,
		};
	},

	async mounted() {
		// the module has to import itself
		// because the "import" causes it to be
		// built by vue-loader, which is necessary
		// in order to use it in the JSX below
		this.NestedModal = (await import('./MultiModal.vue')).default;
	},

	methods: {
		openNested(options = {}) {
			debugger;
			let beforeCloseProp;
			if (options.propSync !== undefined) {
				let beforeClosePropFactory;
				if (options.propSync) {
					beforeClosePropFactory = returns;
				} else {
					beforeClosePropFactory = asyncReturns;
				}
				beforeCloseProp = beforeClosePropFactory('prop', options.propReturn);
			}
			let beforeCloseOpt;
			if (options.optSync !== undefined) {
				let beforeCloseOptFactory;
				if (options.optSync) {
					beforeCloseOptFactory = returns;
				} else {
					beforeCloseOptFactory = asyncReturns;
				}
				beforeCloseOpt = beforeCloseOptFactory('options', options.optReturn);
			}
			debugger;
			const { NestedModal } = this;
			this.modalApi.open(() => <NestedModal
				depth={this.depth + INC_DEPTH}
				beforeClose={beforeCloseProp}
			/>, {
				beforeCloseHook: beforeCloseOpt,
			});
		},
	},
};
</script>
