<template>
	<div
		:class="$s.Loading"
		aria-hidden="true"
	>
		<m-icon
			:class="$s.Spinner"
			:size="size"
			name="spinner"
		/>
	</div>
</template>

<script>
import cssValidator from '@square/maker/utils/css-validator';
import { MIcon } from '@square/maker/components/Icon';

const ICON_SIZES = new Set([
	'small',
	'medium',
	'large',
	'xlarge',
	'xxlarge',
]);

// width & height css props accept same set of values
const sizeValidator = cssValidator('width');

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		MIcon,
	},

	props: {
		/**
		 * size of spinner icon, can be named value or any valid CSS width/height
		 * @values small, medium, large, xlarge, xxlarge
		 */
		size: {
			type: String,
			default: 'small',
			validator: (size) => ICON_SIZES.has(size) || sizeValidator(size),
		},
	},
};
</script>

<style module="$s">
.Loading {
	display: flex;
	justify-content: center;
}

@keyframes spin-one-turn {
	to {
		transform: rotate(1turn);
	}
}

.Spinner {
	animation: spin-one-turn 1s linear infinite;
}
</style>
