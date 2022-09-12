<template>
	<button
		:class="[
			$s.Segment,
			$s[`shape_${controlState.shapeInner}`],
			$s[`size_${controlState.sizeInner}`],
			{ [$s.selected]: isSelected },
		]"
		@click="selectSelf"
	>
		<slot />
	</button>
</template>

<script>
import key from './key';

export default {
	inject: {
		controlState: key,
	},
	props: {
		value: {
			type: undefined,
			required: true,
		},
	},
	computed: {
		isSelected() {
			return this.controlState.currentValue === this.value;
		},
	},
	methods: {
		selectSelf() {
			this.controlState.currentValue = this.value;
		},
	},
};
</script>

<style module="$s">
.Segment {
	--radius-rounded-button: 8px;
	--radius-pill-button: 32px;

	flex: 1 0 0;
	color: var(--maker-color-neutral-90, #1b1b1b);
	font-weight: inherit;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	background-color: transparent;
	border: none;
	border-radius: var(--maker-shape-button-border-radius, var(--radius-rounded-button));
	outline: none;
	cursor: pointer;
}

.shape_pill {
	border-radius: var(--radius-pill-button);
}

.shape_rounded {
	border-radius: var(--radius-rounded-button);
}

.shape_squared {
	border-radius: 0;
}

.selected {
	color: var(--maker-color-neutral-90, #1b1b1b);
	background-color: var(--maker-color-elevation, #fff);
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
}
</style>
