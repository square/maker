<template>
	<div :class="$s.Layer">
		<m-transition-fade-in>
			<div
				v-if="dialogApi.state.vnode"
				:class="$s.Translucent"
			/>
		</m-transition-fade-in>
		<m-transition-responsive :transitions="transitions">
			<div
				v-if="dialogApi.state.vnode"
				:class="$s.DialogLayer"
				@click.capture="closeOnClickOutside"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<div
					ref="dialog"
					:class="$s.DialogContent"
				>
					<v :nodes="dialogApi.state.vnode" />
				</div>
			</div>
		</m-transition-responsive>
	</div>
</template>

<script>
import Vue from 'vue';
import V from 'vue-v';
import PseudoWindow from 'vue-pseudo-window';
import { MTransitionFadeIn } from '@square/maker/components/TransitionFadeIn';
import { MTransitionResponsive } from '@square/maker/utils/TransitionResponsive';
import {
	springUpFn,
	springDownFn,
	floatUpFn,
	floatDownFn,
	mobileMinWidth,
	tabletMinWidth,
} from '@square/maker/utils/transitions';
import dialogApi from './dialog-api';

const apiMixin = {
	provide() {
		const vm = this;
		const api = {
			state: Vue.observable({
				vnode: undefined,
				options: {},
			}),

			open(renderFn, options = {}) {
				const vnode = renderFn(vm.$createElement);
				this.state.vnode = vnode;
				this.state.options = {
					closeOnClickOutside: false,
					beforeCloseHook: async () => true,
					...options,
				};

				// function that only closes this specific Dialog
				return () => {
					if (this.state.vnode === vnode) {
						this.close();
					}
				};
			},

			async close() {
				// Close the open popover (if present) and then close the dialog in the next tick.
				// Closing at the same time will result in the popover content becoming inline and
				// causes a weird content shift as the dialog fades away.

				if (this.state.vnode && typeof this.state.options.beforeCloseHook === 'function') {
					if (!(await this.state.options.beforeCloseHook())) {
						return; // cancel
					}
				}

				vm.popoverApi?.closePopover();
				vm.$nextTick(() => {
					this.state.vnode = undefined;
				});
			},
		};

		if (!this.dialogApi) {
			this.dialogApi = api;
		}

		return {
			[dialogApi]: api,
		};
	},
};

export default {
	name: 'DialogLayer',

	components: {
		V,
		PseudoWindow,
		MTransitionFadeIn,
		MTransitionResponsive,
	},

	inject: {
		dialogApi,
	},

	inheritAttrs: false,

	apiMixin,

	data() {
		return {
			transitions: [{
				minWidth: mobileMinWidth,
				enter: springUpFn,
				leave: springDownFn,
			}, {
				minWidth: tabletMinWidth,
				enter: floatUpFn,
				leave: floatDownFn,
			}],
		};
	},

	methods: {
		closeOnClickOutside(event) {
			const { closeOnClickOutside } = this.dialogApi.state.options;
			const { dialog } = this.$refs;

			if (dialog && closeOnClickOutside && !dialog.contains(event.target)) {
				this.dialogApi.close();
			}
		},
	},
};
</script>

<style module="$s">
.Layer {
	position: relative;
	z-index: 1;
}

.DialogLayer {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: flex-end;
	justify-content: center;
}

@media screen and (--for-tablet-landscape-up) {
	.DialogLayer {
		align-items: center;
	}
}

.Translucent {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
}

.disableScroll {
	overflow: hidden;
}
</style>
