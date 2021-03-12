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
import styler from 'stylefire';
import { animate } from 'popmotion';

export default {
	methods: {
		enter(element, onComplete) {
			const elementStyler = styler(element);
			animate({
				from: {
					y: '100%',
				},
				to: {
					y: '0%',
				},
				type: "spring",
				stiffness: 300,
				damping: 40,
				mass: 1,
				onUpdate: (v) => elementStyler.set(v),
				onComplete,
			});
			/*
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
			*/
		},

		leave(element, onComplete) {
			const elementStyler = styler(element);
			animate({
				from: {
					y: '0%',
				},
				to: {
					y: '100%',
				},
				type: "spring",
				stiffness: 600,
				damping: 60,
				mass: 1,
				onUpdate: (v) => elementStyler.set(v),
				onComplete,
			});
			/*
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
			*/
		},
	},
};
</script>
