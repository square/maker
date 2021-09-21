<template>
	<div
		:class="{ [$s.ImageSelectionContainer]: true, [$s.ImageSelectionContainerError]: hasError }"
		role="img"
		:style="bgImageStyle"
	>
		<div
			v-if="isUploading"
			:class="$s.ImageSelectionLoaderContainer"
		>
			<m-loading :class="$s.ImageSelectionLoader" />
		</div>

		<div
			:class="$s.ImageSelectionProgressContainer"
			:style="progressContainerStyle"
		>
			<div
				:class="$s.ImageSelectionProgress"
				:style="progressStyle"
			/>
		</div>

		<button
			v-if="!isUploading"
			type="button"
			:class="$s.ImageSelectionRemoveButton"
			@click="$emit('removeImage', image.id)"
		>
			<!-- TODO: Icon -->
			<x-icon inline />
		</button>
	</div>
</template>

<script>
import { MLoading } from '@square/maker/components/Loading';
import XIcon from '@square-icons/vue/16/UI/X-Stroked';
import { IMAGE_SELECTOR_STATUSES } from './constants';

export default {
	name: 'MImageSelection',

	components: {
		MLoading,
		XIcon,
	},

	props: {
		image: {
			type: Object,
			required: true,
		},
	},

	computed: {
		bgImageStyle() {
			return {
				backgroundImage: `url("${this.image.url}")`,
			};
		},

		showProgressBar() {
			return this.image.progress < 100;
		},

		progressContainerStyle() {
			return {
				opacity: this.showProgressBar ? 1 : 0,
			};
		},

		progressStyle() {
			return {
				width: `${this.image.progress}%`,
			};
		},

		isUploading() {
			return this.image.status === IMAGE_SELECTOR_STATUSES.PENDING;
		},

		hasError() {
			return this.image.status === IMAGE_SELECTOR_STATUSES.ERROR;
		},
	},
};
</script>

<style module="$s">
.ImageSelectionContainer {
	position: relative;
	box-sizing: border-box;
	width: 96px;
	height: 96px;
	overflow: hidden;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 8px;
	transition: background-image linear 150ms;

	/* these should later be pulled from
	the ThemeProvider component */
	--color-border: rgba(0, 0, 0, 0.3);
	--color-border-active: rgba(0, 0, 0, 0.9);
	--color-background: rgba(0, 0, 0, 0.9);
	--color-foreground: rgba(255, 255, 255, 0.95);
	--color-disabled: rgba(0, 0, 0, 0.05);
	--color-disabled-checked: rgba(0, 0, 0, 0.15);
	--color-error: #ff3b30;
}

.ImageSelectionLoaderContainer {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
}

.ImageSelectionContainerError {
	border: 2px solid var(--color-error);
}

.ImageSelectionRemoveButton {
	position: absolute;
	top: 8px;
	right: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	background-color: #fff;
	border: 0;
	border-radius: 50%;
	cursor: pointer;
}

.ImageSelectionProgressContainer {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 4px;
	overflow: hidden;
	background-color: #f5f4f4;
	opacity: 1;
	transition: opacity 250ms ease;
}

.ImageSelectionProgress {
	height: 100%;
	background-color: #000;
	border-radius: 4px;
	transition: width 150ms linear;
}
</style>
