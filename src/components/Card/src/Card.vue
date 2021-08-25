<template>
	<div
		:class="[
			$s.Card,
		]"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<header>
			<div
				v-if="label"
				:class="$s.Label"
			>
				{{ label }}
			</div>
		</header>

		<div>
			<!-- @slot card content -->
			<slot />
		</div>
		<div
			v-if="showActions"
			:class="$s.ActionsWrapper"
		>
			<!-- @slot put card buttons here -->
			<slot name="actions" />
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

	props: {
		/**
		 * Card label
		 */
		label: {
			type: String,
			default: '',
		},
	},

	computed: {
		showActions() {
			return this.$slots.actions;
		},
	},
};
</script>

<style module="$s">
.Card {
	padding: 16px 24px;
	background-color: white;
	border: 1px solid #eaeaea;
	border-radius: 8px;
}

.Label {
	margin-bottom: 16px;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
}
</style>
