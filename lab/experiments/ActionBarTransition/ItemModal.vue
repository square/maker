<template>
	<m-modal>
		<div class="cover-photo">
			<m-image
				src="https://i.picsum.photos/id/507/900/900.jpg?hmac=NDltE7xXtFlZjUoyDqGjehzY5ORPtj4-d42qbFgAFkk"
			/>
		</div>
		<m-container>
			<template #label>
				<h1>Modal with Inline Action Bar</h1>
			</template>
			<div
				v-for="i in 100"
				:key="i"
			>
				Long text {{ i }}
			</div>
		</m-container>

		<div :class="$s.ActionBarWrapper">
			<m-transition
				:enter="springUpFn"
				:leave="springDownFn"
			>
				<atomic-action-bar
					v-if="loaded"
					v-bind="$attrs"
					v-on="$listeners"
				>
					<m-action-bar-button
						key="close"
						color="#f6f6f6"
						@click="modalApi.close()"
					>
						<x class="icon" />
					</m-action-bar-button>
					<m-action-bar-button
						key="primary"
						align="center"
						full-width
						@click="modalApi.close()"
					>
						Add to Cart
						<template #information>
							$10.00
						</template>
					</m-action-bar-button>
				</atomic-action-bar>
			</m-transition>
		</div>
	</m-modal>
</template>

<script>
import { MModal, modalApi } from '@square/maker/components/Modal';
import { MActionBarButton } from '@square/maker/components/ActionBar';
import { MContainer } from '@square/maker/components/Container';
import { MImage } from '@square/maker/components/Image';
import { MTransition } from '@square/maker/utils/Transition';
import X from '@square/maker-icons/X';
import styler from 'stylefire';
import { animate } from 'popmotion';
import {
	styleFactory, animateUp, animateDown,
} from '@square/maker/utils/transitions';
import AtomicActionBar from '../../../src/components/ActionBar/src/AtomicActionBar.vue';

export default {
	components: {
		MModal,
		MActionBarButton,
		MImage,
		MContainer,
		X,
		MTransition,
		AtomicActionBar,
	},

	inject: {
		modalApi,
	},

	inheritAttrs: false,

	props: {
		enterDelay: {
			type: Number,
			default: undefined,
		},
		springStiffness: {
			type: Number,
			default: undefined,
		},
		springDamping: {
			type: Number,
			default: undefined,
		},
		springMass: {
			type: Number,
			default: undefined,
		},
	},

	data() {
		// eslint-disable-next-line no-magic-numbers
		const toRelativeY = styleFactory(0, 100, 'y', '%');

		return {
			springUpFn: ({ element, onComplete }) => {
				const elementStyler = styler(element);
				const styleFn = toRelativeY;
				const animationDirection = animateDown;
				elementStyler.set(styleFn(animationDirection.from));
				elementStyler.render();
				animate({
					...animationDirection,
					type: 'spring',
					stiffness: this.springStiffness,
					damping: this.springDamping,
					mass: this.springMass,
					onUpdate(number) {
						elementStyler.set(styleFn(number));
					},
					onComplete,
				});
			},
			springDownFn: ({ element, onComplete }) => {
				const elementStyler = styler(element);
				const styleFn = toRelativeY;
				const animationDirection = animateUp;
				elementStyler.set(styleFn(animationDirection.from));
				elementStyler.render();
				animate({
					...animationDirection,
					type: 'spring',
					stiffness: this.springStiffness,
					damping: this.springDamping,
					mass: this.springMass,
					onUpdate(number) {
						elementStyler.set(styleFn(number));
					},
					onComplete,
				});
			},
			loaded: false,
		};
	},

	mounted() {
		setTimeout(() => {
			this.loaded = true;
		}, this.enterDelay);
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	height: 280px;
}

.image {
	width: 100%;
}

.icon {
	width: 16px;
	height: 16px;
}
</style>

<style module="$s">
/* stylelint-disable length-zero-no-unit */
.ActionBarWrapper {
	--regular-bottom-padding: 32px;
	--extra-bottom-padding-for-deadclick: 32px;
	--safe-area-inset-padding: env(safe-area-inset-bottom, 0);
	--actionbar-bottom-padding:
		calc(
			var(--regular-bottom-padding)
			+ var(--extra-bottom-padding-for-deadclick)
			+ var(--safe-area-inset-padding)
			+ var(--chrome-bottom-offset, 0px)
		);
	--actionbar-size: 64px;
	--actionbar-top-padding: 32px;

	padding-bottom:
		calc(
			var(--actionbar-top-padding)
			+ var(--actionbar-size)
			+ var(--actionbar-bottom-padding)
		);
}

@media screen and (min-width: 840px) {
	.ActionBarWrapper {
		--actionbar-size: 48px;
		--actionbar-top-padding: 24px;

		/* no safe-area or deadclick issues on non-mobile resolutions */
		--actionbar-bottom-padding: var(--regular-bottom-padding);
	}
}
</style>
