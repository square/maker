<template>
	<m-transition-stack
		:class="[
			$s.FullScreenFixed,
			{
				[$s.ActionbarOffset]: addActionbarOffset,
			}
		]"
		transition-from="bottom"
	>
		<render-fn
			v-for="toast in toastApi.state.toasts"
			:key="toast.key"
			:render-fn="toast.renderFn"
		/>
	</m-transition-stack>
</template>

<script>
import Vue from 'vue';
import { MTransitionStack } from '@square/maker/utils/TransitionStack';
import RenderFn from './RenderFn';
import toastApi from './toast-api';

function randomKey() {
	const HEXADECIMAL_RADIX = 36;
	const SLICE_START = 2;
	const SLICE_END = 12;
	return Math
		.random()
		.toString(HEXADECIMAL_RADIX)
		.slice(SLICE_START, SLICE_END);
}

function toastify(renderFn, options) {
	const key = randomKey();
	return {
		...options,
		key,
		renderFn,
	};
}

const apiMixin = {
	provide() {
		const api = {
			state: Vue.observable({
				toasts: [],
			}),

			open(renderFn, options = {}) {
				const toast = toastify(renderFn, options);
				this.state.toasts.push(toast);
				// method that only closes this specific toast
				return () => {
					const NOT_FOUND = -1;
					const foundIndex = this.state.toasts.indexOf(toast);
					if (foundIndex !== NOT_FOUND) {
						const REMOVE_ONE = 1;
						this.state.toasts.splice(foundIndex, REMOVE_ONE);
					}
				};
			},

			close(renderFn) {
				const foundToast = this.state.toasts.find((toast) => toast.renderFn === renderFn);
				if (!foundToast) {
					return;
				}
				const NOT_FOUND = -1;
				const foundIndex = this.state.toasts.indexOf(foundToast);
				if (foundIndex === NOT_FOUND) {
					return;
				}
				const REMOVE_ONE = 1;
				this.state.toasts.splice(foundIndex, REMOVE_ONE);
			},

			closeAll() {
				while (this.state.toasts.length) {
					this.state.toasts.pop();
				}
			},

			// closeSelf() is implemented in ./RenderFn.js
		};

		if (!this.toastApi) {
			this.toastApi = api;
		}

		return {
			[toastApi]: api,
		};
	},
};

export default {
	components: {
		MTransitionStack,
		RenderFn,
	},

	inject: {
		toastApi,
	},

	inheritAttrs: false,

	apiMixin,

	computed: {
		addActionbarOffset() {
			return !!this.toastApi.state.toasts.find((toast) => toast.actionbarOffset);
		},
	},
};
</script>

<style module="$s">
/* stylelint-disable length-zero-no-unit */
.FullScreenFixed {
	--initial-bottom-padding: 16px;

	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	padding-bottom: var(--initial-bottom-padding);
	transition: padding-bottom 0.5s;
	pointer-events: none;
}

/* calculations imported from ActionBarLayer */
.ActionbarOffset {
	--actionbar-top-padding: 24px;
	--actionbar-size: 48px;
	--actionbar-bottom-padding:
		calc(
			24px
			+ env(safe-area-inset-bottom, 24px)
			+ var(--chrome-bottom-offset, 0px)
		);

	padding-bottom:
		calc(
			var(--actionbar-top-padding)
			+ var(--actionbar-size)
			+ var(--actionbar-bottom-padding)
		);
}

/*
 * 1) global actionbar is hidden on desktop resolutions
 * 2) inline actionbars aren't fixed to the bottom of
 *    the screen on desktop resolutions
 */
@media screen and (--for-tablet-landscape-up) {
	.ActionbarOffset {
		padding-bottom: var(--initial-bottom-padding);
	}
}
</style>
