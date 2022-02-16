<template>
	<div class="page">
		<h1>Current Default</h1>
		<h1
			v-for="size in [7, 6, 5, 4, 3, 2, 1, 0, -1, -2]"
			:key="`step-${size}`"
			:class="`step_${size} flush`"
		>
			Step {{ size }}
		</h1>
		<h1>Maker output</h1>
		<m-heading
			v-for="size in [7, 6, 5, 4, 3, 2, 1]"
			:key="`heading-${size}`"
			:size="size"
		>
			Heading {{ size }}
		</m-heading>
		<m-text
			v-for="size in [1, 0, -1, -2]"
			:key="`text-${size}`"
			:size="size"
		>
			Text {{ size }}
		</m-text>
	</div>
</template>

<script>
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MHeading,
		MText,
	},
};
</script>

<style>
:root {
	--font-size-scale: 1.17;
	--font-size: 16px;
	--line-height: 1.5em;
	--line-height-scale: 0.95;
}

@media (min-width: 600px) {
	:root {
		--font-size-scale: 1.28;
		--font-size: 16px;
	}
}

/* stylelint-disable-next-line no-duplicate-selectors */
:root {
	--font-step-minus-2-size: 12px;
	--font-step-minus-2-line-height: var(--line-height);
	--font-step-minus-1-size: 14px;
	--font-step-minus-1-line-height: var(--line-height);
	--font-step-0-size: var(--font-size);
	--font-step-0-line-height: var(--line-height);
	--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));
	--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));
	--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));
	--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));
	--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));
	--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));
	--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));
	--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));
	--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));
	--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));
	--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));
	--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));
	--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));
	--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));
	--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */
}
</style>
<style scoped>
.page {
	padding: 16px;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
}

.flush {
	margin: 0;
}

.step_-2 {
	font-size: var(--font-step-minus-2-size);
	line-height: var(--font-step-minus-2-line-height);
}

.step_-1 {
	font-size: var(--font-step-minus-1-size);
	line-height: var(--font-step-minus-1-line-height);
}

.step_0 {
	font-size: var(--font-step-0-size);
	line-height: var(--font-step-0-line-height);
}

.step_1 {
	font-size: var(--font-step-1-size);
	line-height: var(--font-step-1-line-height);
}

.step_2 {
	font-size: var(--font-step-2-size);
	line-height: var(--font-step-2-line-height);
}

.step_3 {
	font-size: var(--font-step-3-size);
	line-height: var(--font-step-3-line-height);
}

.step_4 {
	font-size: var(--font-step-4-size);
	line-height: var(--font-step-4-line-height);
}

.step_5 {
	font-size: var(--font-step-5-size);
	line-height: var(--font-step-5-line-height);
}

.step_6 {
	font-size: var(--font-step-6-size);
	line-height: var(--font-step-6-line-height);
}

.step_7 {
	font-size: var(--font-step-7-size);
	line-height: var(--font-step-7-line-height);
}
</style>
