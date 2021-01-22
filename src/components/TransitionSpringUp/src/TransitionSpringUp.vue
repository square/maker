<template>
	<transition
		:css="false"
		v-bind="$attrs"
		@enter="handleEnter"
		@leave="handleLeave"
		v-on="$listeners"
	>
		<!-- @slot content to spring up -->
		<slot />
	</transition>
</template>

<script>
import { spring, styler } from 'popmotion';

const enter = {
	from: {
		y: '100%',
	},
	to: {
		y: '0%',
	},
	stiffness: 600,
	damping: 60,
};

const leave = {
	from: {
		y: '0%',
	},
	to: {
		y: '100%',
	},
	stiffness: 600,
	damping: 60,
};

export default {
	inheritAttrs: false,

	methods: {
		handleEnter(element, complete) {
			const elementStyler = styler(element);
			spring(enter).start({
				update: (v) => elementStyler.set(v),
				complete,
			});
		},

		handleLeave(element, complete) {
			const elementStyler = styler(element);
			spring(leave).start({
				update: (v) => elementStyler.set(v),
				complete,
			});
		},
	},
};
</script>
