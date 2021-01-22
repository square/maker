<template>
	<transition
		:css="false"
		@enter="enter"
		@leave="leave"
	>
		<slot />
	</transition>
</template>

<script>
import { spring, styler } from 'popmotion';

export default {
	methods: {
		enter(element, complete) {
			const elementStyler = styler(element);
			spring({
				from: {
					y: '100%',
				},
				to: {
					y: '0%',
				},
				stiffness: 300,
				damping: 40,
				mass: 1,
			}).start({
				update: (v) => {
					elementStyler.set(v);
				},
				complete,
			});
		},

		leave(element, complete) {
			const elementStyler = styler(element);
			spring({
				from: {
					y: '0%',
				},
				to: {
					y: '100%',
				},
				stiffness: 600,
				damping: 60,
				mass: 1,
			}).start({
				update: (v) => {
					elementStyler.set(v);
				},
				complete,
			});
		},
	},
};
</script>
