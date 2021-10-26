<template>
	<div
		:class="{
			[$s.ImageSelectionContainer]: true,
			[$s.ImageSelectionContainerError]: isError
		}"
		role="img"
		:style="{
			'--progress-width': `${progress}%`,
		}"
	>
		<!-- Icon Background -->
		<div
			:class="$s.ImageIconContainer"
		>
			<image-icon :class="$s.ImageIcon" />
		</div>

		<!-- Actual Image (hidden if not displayable) -->
		<div
			:class="$s.ImageDisplay"
			:style="imageDisplayStyles"
		/>

		<!-- Filter (greyed if loading, gradient when loaded) -->
		<div
			:class="{
				[$s.ImageFilter]: true,
				[$s.IsLoading]: isUploading
			}"
		/>

		<div
			v-if="isUploading"
			:class="$s.ImageSelectionLoaderContainer"
		>
			<m-loading :class="$s.ImageSelectionLoader" />
		</div>

		<m-progress-bar
			:class="{
				[$s.ImageSelectionProgressContainer]: true,
				[$s.IsLoading]: isUploading,
			}"
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
import ImageIcon from '@square/maker-icons/Image';

export default {
	name: 'MImageSelection',

	components: {
		MLoading,
		MProgressBar,
		XIcon,
		ImageIcon,
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
		imageDisplayStyles() {
			return {
				backgroundImage: `url("${this.url}")`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
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
	border: 1px solid rgba(0, 0, 0, 0.15);
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

.ImageIconContainer,
.ImageDisplay,
.ImageFilter,
.ImageSelectionLoaderContainer {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.ImageIconContainer {
	display: flex;
	align-items: center;
	justify-content: center;
}

.ImageIcon {
	height: 65%;
	opacity: 0.95;
}

.ImageFilter {
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%);

	&.IsLoading {
		background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
	}
}

.ImageSelectionLoaderContainer {
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
	z-index: 3;
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
	z-index: 3;
	opacity: 0;
	transition: opacity 150ms linear;

	&.IsLoading {
		opacity: 1;
	}
}
</style>
