<template>
	<component
		:is="element"
		:class="$s.Row"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div
			v-if="$slots.prefix"
			:class="$s.Prefix"
		>
			<slot name="prefix" />
		</div>
		<div
			v-if="$slots.default"
			:class="$s.Label"
		>
			<div>
				<slot />
			</div>
			<div
				v-if="$slots.secondary"
				:class="$s.Secondary"
			>
				<slot name="secondary" />
			</div>
		</div>
		<div
			v-if="$slots.side"
			:class="$s.Side"
		>
			<div>
				<slot name="side" />
			</div>
			<div
				v-if="$slots['side-secondary']"
				:class="$s.Secondary"
			>
				<slot name="side-secondary" />
			</div>
		</div>
		<div
			v-if="$slots['suffix']"
			:class="$s.Suffix"
		>
			<slot name="suffix" />
		</div>
	</component>
</template>

<script>
export default {
	inheritAttrs: false,

	props: {
		/**
		 * topmost wrapper element around row content
		 */
		element: {
			type: String,
			default: 'div',
		},
	},
};
</script>

<style module="$s">
.Row {
	--opacity-sublabel: 0.7;

	display: flex;
	gap: 8px;
	align-items: center;
	width: 100%;
}

.Label,
.Side {
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 4px;
	font-size: 16px;
}

.Secondary {
	font-size: 14px;
	opacity: var(--opacity-sublabel);
}

.Prefix,
.Label {
	text-align: left;
}

.Side,
.Suffix {
	text-align: right;
}

.Prefix,
.Suffix {
	display: flex;
}
</style>
