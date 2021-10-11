<template>
	<div :class="$s.Container">
		<slot name="control" />
		<span
			v-if="$slots.error"
			:class="$s.Error"
		>
			<slot name="error" />
		</span>
	</div>
</template>

<style module="$s">
.Container {
	font-size: 14px;
	line-height: 24px;
	cursor: pointer;
}

.Error {
	/* provided by theme eventually */
	--color-error: rgba(206, 50, 23, 1);

	display: inline-block;
	margin-top: 8px;
	color: var(--color-error);
}
</style>
