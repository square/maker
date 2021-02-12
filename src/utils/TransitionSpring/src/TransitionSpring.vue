<template>
	<transition
		:css="false"
		v-bind="$attrs"
		@enter="handleEnter"
		@leave="handleLeave"
		v-on="$listeners"
	>
		<!-- @slot content to fade in & out -->
		<slot />
	</transition>
</template>

<script>
import { spring, styler } from 'popmotion';

export default {
	inheritAttrs: false,

	props: {
		enter: {
			type: Object,
			required: true,
		},
		leave: {
			type: Object,
			required: true,
		},
	},

	methods: {
		handleEnter(element, complete) {
			const elementStyler = styler(element);
			spring(this.enter).start({
				update: (v) => elementStyler.set(v),
				complete,
			});
		},

		handleLeave(element, complete) {
			const elementStyler = styler(element);
			spring(this.leave).start({
				update: (v) => elementStyler.set(v),
				complete,
			});
		},
	},
};
</script>
