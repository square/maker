<template>
	<span
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
	</span>
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

	position: absolute;
	top: calc(50% - var(--arrow-size-half));
	cursor: pointer;

	&.position_left {
		transform: translateY(-50%) translateX(-100%);
	}

	&.position_right {
		transform: translateY(-50%);
	}
}

.ModalArrowIcon {
	width: var(--arrow-size);
	stroke: var(--arrow-color);
}
</style>
