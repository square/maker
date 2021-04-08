<template>
	<div :class="$s.ArrowsContainer">
		<chevron-left-icon
			v-if="hasLeftArrow"
			:class="[$s.Icon, $s.LeftArrow]"
			@click="clickLeft"
		/>
		<div :class="$s.Container">
			<div :class="$s.Modal">
				<!-- @slot Modal content -->
				<slot />
			</div>
		</div>
		<chevron-right-icon
			v-if="hasRightArrow"
			:class="[$s.Icon, $s.RightArrow]"
			@click="clickRight"
		/>
	</div>
</template>

<script>
import ChevronLeftIcon from '@square/maker-icons/ChevronLeft';
import ChevronRightIcon from '@square/maker-icons/ChevronRight';

export default {
	components: {
		ChevronLeftIcon,
		ChevronRightIcon,
	},

	props: {
		hasLeftArrow: {
			type: Boolean,
			default: false,
		},
		hasRightArrow: {
			type: Boolean,
			default: false,
		},
	},

	methods: {
		clickLeft() {
			this.$emit('go-left');
		},
		clickRight() {
			this.$emit('go-right');
		},
	},
};
</script>

<style module="$s">
.Container {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.Modal {
	height: 100%;
	overflow: scroll;
	background: #f5f6f7;
}

.Icon {
	display: none; /* hidden on mobile */
	width: 32px;
	height: 32px;
	color: white;
	cursor: pointer;
}

.LeftArrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%) translateX(-100%);
}

.RightArrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

@media screen and (min-width: 840px) {
	.Container {
		display: inline-block;
		width: auto;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);
	}

	.Modal {
		width: 600px;
		min-height: 180px;
		max-height: calc(100vh - 64px);
	}

	.Icon {
		display: initial; /* shown on tablet & desktop */
	}
}
</style>
