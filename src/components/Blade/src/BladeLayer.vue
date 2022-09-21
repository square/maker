<template>
	<div :class="$s.Layer">
		<m-transition-fade-in>
			<div
				v-if="bladeApi.state.renderFn"
				:class="$s.Translucent"
			/>
		</m-transition-fade-in>
		<m-transition-responsive :transitions="transitions">
			<div
				v-if="bladeApi.state.renderFn"
				:class="$s.BladeLayer"
			>
				<pseudo-window
					body
					:class="$s.disableScroll"
				/>
				<render-fn :render-fn="bladeApi.state.renderFn" />
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
	springLeftFn,
	springRightFn,
	mobileMinWidth,
	tabletMinWidth,
} from '@square/maker/utils/transitions';
import { bladeApi } from '@square/maker/components/Blade';
import RenderFn from '@square/maker/utils/RenderFn';

const apiMixin = {
	provide() {
		const api = {
			state: Vue.observable({
				renderFn: undefined,
			}),

			open(renderFn) {
				this.state.renderFn = renderFn;
				// function that only closes this specific blade
				return () => {
					if (this.state.renderFn === renderFn) {
						this.state.renderFn = undefined;
					}
				};
			},

			close() {
				this.state.renderFn = undefined;
			},
		};

		if (!this.bladeApi) {
			this.bladeApi = api;
		}

		return {
			[bladeApi]: api,
		};
	},
};

export default {
	components: {
		PseudoWindow,
		MTransitionFadeIn,
		MTransitionResponsive,
		RenderFn,
	},

	inject: {
		bladeApi,
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
				enter: springLeftFn,
				leave: springRightFn,
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

.BladeLayer {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: flex-end;
}

.Translucent {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
}

.disableScroll {
	overflow: hidden;
}
</style>
