<template>
	<div
		:class="{
			[$s.ImageSelectionContainer]: true,
			[$s.ImageSelectionContainerError]: isError
		}"
		role="img"
	>
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

		<!-- Loading spinner -->
		<div
			v-if="isUploading"
			:class="$s.ImageSelectionLoaderContainer"
		>
			<m-loading :class="$s.ImageSelectionLoader" />
		</div>

		<!-- Loading progress -->
		<m-progress-bar
			:class="{
				[$s.ImageSelectionProgressContainer]: true,
				[$s.IsLoading]: isUploading,
			}"
			:progress="progress"
			size="xsmall"
		/>

		<m-button
			v-if="!isUploading"
			size="small"
			color="#ffffff"
			:class="$s.TopRight"
			@click="$emit('removeImage')"
		>
			<m-icon
				:class="$s.ImageSelectionRemoveIcon"
				name="close"
			/>
		</m-button>
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MLoading } from '@square/maker/components/Loading';
import { MProgressBar } from '@square/maker/components/ProgressBar';
import { MIcon } from '@square/maker/components/Icon';

export default {
	components: {
		MButton,
		MLoading,
		MProgressBar,
		MIcon,
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
	border: 1px solid $maker-color-neutral-20;
	border-radius: $maker-shape-default-border-radius;
	transition: background-image linear 150ms;

	--color-error: rgba(206, 50, 23, 1);
}

.ImageDisplay,
.ImageFilter,
.ImageSelectionLoaderContainer {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
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

.TopRight {
	position: absolute;
	top: 8px;
	right: 8px;
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
	opacity: 0;
	transition: opacity 150ms linear;

	&.IsLoading {
		opacity: 1;
	}
}
</style>
