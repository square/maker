<template>
	<div
		:class="[
			$s.ModalArrow,
			$s[`position_${position}`],
		]"
		@click="$emit('click')"
	>
		<component
			:is="icon"
			:class="$s.ModalArrowIcon"
		/>
	</div>
</template>

<script>
import ChevronLeft from '@square/maker-icons/ChevronLeft';
import ChevronRight from '@square/maker-icons/ChevronRight';
import modalApi from './modal-api';

export default {
	components: {
		ChevronLeft,
		ChevronRight,
	},

	inject: {
		modalApi,
	},

	props: {
		position: {
			type: String,
			default: 'left',
			validator: (position) => ['left', 'right'].includes(position),
		},
	},

	computed: {
		icon() {
			return `chevron-${this.position}`;
		},
	},
};
</script>

<style module="$s">
.ModalArrow {
	--arrow-color: #fff;
	--arrow-size: 24px;
	--arrow-size-half: calc(var(--arrow-size) / 2);
	--modal-width-half: 300px;
	--arrow-horizontal-position: calc(50% - var(--arrow-size-half) - var(--modal-width-half) - 30px);

	position: absolute;
	top: calc(50% - var(--arrow-size-half));
	cursor: pointer;

	&.position_left {
		left: var(--arrow-horizontal-position);
	}

	&.position_right {
		right: var(--arrow-horizontal-position);
	}
}

.ModalArrowIcon {
	width: var(--arrow-size);
	stroke: var(--arrow-color);
}
</style>
