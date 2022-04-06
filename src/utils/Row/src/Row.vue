<template>
	<div
		:class="$s.Row"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<div
			v-if="$slots.icon"
			:class="$s.Icon"
		>
			<slot name="icon" />
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
			v-if="$slots['side-icon']"
			:class="$s.SideIcon"
		>
			<slot name="side-icon" />
		</div>
	</div>
</template>

<script>

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	inheritAttrs: false,
};
</script>

<style module="$s">
.Row {
	--opacity-sublabel: 0.7;

	display: flex;
	gap: 12px;
	align-items: center;
	width: 100%;
}

.Label,
.Side {
	display: flex;
	flex: 1;
	flex-direction: column;
	font-size: 16px;
}

.Secondary {
	font-size: 14px;
	opacity: var(--opacity-sublabel);
}

.Icon,
.Label {
	text-align: left;
}

.Side,
.SideIcon {
	text-align: right;
}

.Icon,
.SideIcon {
	display: flex;
}
</style>
