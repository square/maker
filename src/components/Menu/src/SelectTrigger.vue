<template>
	<div
		:class="[
			$s.SelectContainer,
		]"
	>
		<span
			v-if="$slots.prefix"
			:class="$s.Prefix"
		>
			<!-- @slot Select icon -->
			<slot name="prefix" />
		</span>
		<div
			ref="select"
			:class="[
				$s.Select,
				{
					[$s.hasPrefix]: $slots.prefix,
				},
			]"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<span>
				<slot />
			</span>
		</div>
		<chevron-down-icon :class="$s.Icon" />
	</div>
</template>

<script>
import ChevronDownIcon from '@square/maker-icons/ChevronDown';

/**
 * @inheritAttrs select
 * @inheritListeners select
 */
export default {
	components: {
		ChevronDownIcon,
	},

	inheritAttrs: false,
};
</script>

<style module="$s">
.SelectContainer {
	--color-border: var(--neutral-20, rgba(0, 0, 0, 0.3));
	--color-placeholder: var(--neutral-80, rgba(0, 0, 0, 0.55));
	--color-foreground: var(--neutral-90, rgba(2, 1, 1, 0.9));
	--color-border-active: var(--neutral-80, #222);
	--color-error: rgba(206, 50, 23, 1);
	--border-radius: 8px;

	position: relative;
	box-sizing: border-box;
	min-width: 80px;
	font-size: 16px;
	font-family: inherit;
	font-family: var(--font-family);
	border-radius: var(--border-radius);
}

.Prefix {
	position: absolute;
	top: 50%;
	left: 16px;
	line-height: 0;
	transform: translateY(-50%);
	pointer-events: none;
}

.Select {
	display: flex;
	align-items: center;
	box-sizing: inherit;
	width: 100%;
	height: 48px;
	padding: 0 32px 0 16px;
	overflow: hidden;
	color: var(--color-foreground);
	font-size: inherit;
	font-family: inherit;
	white-space: nowrap;
	text-overflow: ellipsis;
	background-color: var(--color-background, #fff);
	border: 1px solid var(--color-border);
	border-radius: inherit;
	outline: none;
	cursor: pointer;
	transition: border-color 0.2s ease;
	appearance: none;

	&.hasPrefix {
		/* select left padding + icon width + icon right padding */
		padding-left: calc(16px + 16px + 8px);
	}
}

.Icon {
	position: absolute;
	top: 50%;
	right: 16px;
	width: 16px;
	height: 16px;
	color: var(--color-foreground);
	transform: translateY(-50%);
	pointer-events: none;
}
</style>
