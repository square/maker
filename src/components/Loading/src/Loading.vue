<template>
	<div :class="$s.Loading">
		<m-icon
			:class="[
				$s.Spinner,
				$s[`size_${size}`],
			]"
			name="spinner"
		/>
	</div>
</template>

<script>
import { MIcon } from '@square/maker/components/Icon';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		MIcon,
	},

	props: {
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['medium', 'large'].includes(size),
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

.size_medium {
	width: 16px;
	height: 16px;
}

.size_large {
	width: 64px;
	height: 64px;
}
</style>
