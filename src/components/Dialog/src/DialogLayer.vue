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
				:style="styles"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<v :nodes="dialogApi.state.vnode" />
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
			}),

			open(renderFn) {
				const vnode = renderFn(vm.$createElement);
				this.state.vnode = vnode;
				// function that only closes this specific Dialog
				return () => {
					if (this.state.vnode === vnode) {
						this.close();
					}
				};
			},

			close() {
				// Close the open popover (if present) and then close the dialog in the next tick.
				// Closing at the same time will result in the popover content becoming inline and
				// causes a weird content shift as the dialog fades away.
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

	props: {
		styles: {
			type: Object,
			default: () => ({}),
		},
	},

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

@media screen and (min-width: 840px) {
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
