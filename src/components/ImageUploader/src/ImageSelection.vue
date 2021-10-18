<template>
	<div
		:class="{
			[$s.ImageSelectionContainer]: true,
			[$s.ImageSelectionContainerError]: isError
		}"
		role="img"
		:style="bgImageStyle"
	>
		<div
			v-if="isUploading"
			:class="$s.ImageSelectionLoaderContainer"
		>
			<m-loading :class="$s.ImageSelectionLoader" />
		</div>

		<m-progress-bar
			:class="$s.ImageSelectionProgressContainer"
			:style="progressContainerStyle"
			:progress="progress"
			size="xsmall"
		/>

		<button
			v-if="!isUploading"
			type="button"
			:class="$s.ImageSelectionRemoveButton"
			@click="$emit('removeImage')"
		>
			<x-icon
				inline
				:class="$s.ImageSelectionRemoveIcon"
			/>
		</button>
	</div>
</template>

<script>
import { MLoading } from '@square/maker/components/Loading';
import { MProgressBar } from '@square/maker/components/ProgressBar';
import XIcon from '@square/maker-icons/X';

const PROGRESS_OPACITY = { shown: 1, hidden: 0 };

export default {
	name: 'MImageSelection',

	components: {
		MLoading,
		MProgressBar,
		XIcon,
	},

	props: {
		progress: {
			type: Number,
			default: 0,
		},
		url: {
			type: String,
			default: '',
		},
		isUploading: {
			type: Boolean,
			default: false,
		},
		isError: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		bgImageStyle() {
			const url = `url("${this.url}")`;
			const loadingGradient = 'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))';
			const loadedGradient = 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%)';

			return {
				backgroundImage: this.showProgressBar
					? `${loadingGradient}, ${url}`
					: `${loadedGradient}, ${url}`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			};
		},

		progressContainerStyle() {
			return {
				opacity: this.isUploading ? PROGRESS_OPACITY.shown : PROGRESS_OPACITY.hidden,
			};
		},

		progressStyle() {
			return {
				width: `${this.progress}%`,
			};
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
	background-position: center;
	background-size: cover;
	border: 1px solid var(--color-300, rgba(0, 0, 0, 0.15));
	border-radius: 8px;
	transition: background-image linear 150ms;

	--color-error: rgba(206, 50, 23, 1);
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
	background-position: center;
	background-size: cover;
}

.ImageSelectionContainerError {
	border: 1px solid var(--color-error);
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

.ImageSelectionRemoveIcon {
	width: 16px;
	height: 16px;
}

.ImageSelectionProgressContainer {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	transition: opacity 150ms linear;
}
</style>
