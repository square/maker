<template>
	<div :class="$s.Layer">
		<m-transition-fade-in>
			<div
				v-if="dialogApi.state.renderFn"
				:class="$s.Translucent"
			/>
		</m-transition-fade-in>
		<m-transition-responsive :transitions="transitions">
			<div
				v-if="dialogApi.state.renderFn"
				:class="$s.DialogLayer"
				@click.capture="closeOnClickOutside"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<pseudo-window
					document
					@keyup.esc="closeOnEsc"
				/>
				<div
					ref="dialog"
					:class="$s.DialogContentWrapper"
				>
					<render-fn :render-fn="dialogApi.state.renderFn" />
				</div>
			</div>
		</m-transition-responsive>
	</div>
</template>

<script>
import Vue from 'vue';
import PseudoWindow from 'vue-pseudo-window';
import { MTransitionFadeIn } from '@square/maker/utils/TransitionFadeIn';
import { MTransitionResponsive } from '@square/maker/utils/TransitionResponsive';
import {
	springUpFn,
	springDownFn,
	floatUpFn,
	floatDownFn,
	mobileMinWidth,
	tabletMinWidth,
} from '@square/maker/utils/transitions';
import RenderFn from '@square/maker/utils/RenderFn';
import dialogApi from './dialog-api';

const apiMixin = {
	provide() {
		const api = {
			state: Vue.observable({
				renderFn: undefined,
				options: {},
			}),

			open(renderFn, options = {}) {
				this.state.renderFn = renderFn;
				this.state.options = options;

				// function that only closes this specific dialog
				return () => {
					// no dialog open, so closing trivially "succeeds"
					if (!this.state.renderFn) {
						return true;
					}
					// we can attempt to close this dialog
					if (this.state.renderFn === renderFn) {
						// BUT closing might still be blocked by
						// a beforeClose hook
						return this.close();
					}
					// dialog changed since we returned this function
					// hence we cannot close a dialog we did not open
					return false;
				};
			},

			async close(closeData) {
				// no dialog to close, so closing is "successful"
				if (!this.state.renderFn) {
					return true;
				}

				// check beforeClose hook, if present
				if (typeof this.state.options.beforeCloseHook === 'function') {
					if (!(await this.state.options.beforeCloseHook(closeData))) {
						return false; // closing failed
					}
				}

				this.state.renderFn = undefined;
				this.state.options.afterCloseHook?.(closeData);
				return true;
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
	components: {
		RenderFn,
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
		closeOnEsc() {
			const { closeOnEsc } = this.dialogApi.state.options;
			const { dialog } = this.$refs;

			if (dialog && closeOnEsc) {
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

.DialogContentWrapper {
	position: relative;
	width: 100%;
	max-height: calc(100% - 48px);
	overflow: hidden;
	border-radius:
		$maker-shape-default-border-radius
		$maker-shape-default-border-radius
		0 0;
}

@media screen and (--for-tablet-landscape-up) {
	.DialogLayer {
		align-items: center;
	}

	.DialogContentWrapper {
		display: inline-block;
		width: auto;
		height: auto;
		max-height: calc(100% - 64px);
		overflow: hidden;
		border-radius: 8px;
		box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
	}
}

.Translucent {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: $maker-color-overlay;
}

/**
 * Position fixed prevents unnecessary body scrolling and jumpiness on Dialogs
 * when using the PinInput component inside of them on iOS devices
 */
.disableScroll {
	position: fixed;
	overflow: hidden;
}

@media screen and (--for-tablet-landscape-up) {
	.disableScroll {
		position: initial;
	}
}
</style>
