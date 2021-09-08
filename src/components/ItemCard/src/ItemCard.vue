<template>
	<m-card>
		<div
			v-bind="$attrs"
			v-on="$listeners"
		>
			<header>
				<div
					v-if="label"
					:class="[$s.Label, truncateLabel ? $s.TruncateLabel : '']"
				>
					{{ label }}
				</div>
			</header>

			<div>
				<!-- @slot card content -->
				<slot />
			</div>
			<footer>
				<div
					v-if="showActions"
					:class="$s.ActionsWrapper"
				>
					<!-- @slot put notice buttons here -->
					<slot name="actions" />
				</div>
			</footer>
		</div>
	</m-card>
</template>

<script>
import { MCard } from '@square/maker/components/Card';

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
export default {
	components: {
		MCard,
	},

	inheritAttrs: false,

	props: {
		/**
		 * Card label
		 */
		label: {
			type: String,
			default: '',
		},
		truncateLabel: {
			type: Boolean,
			default: false,
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
.Label {
	margin-bottom: 16px;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
}

.TruncateLabel {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.ActionsWrapper {
	display: flex;
	justify-content: flex-end;
	margin-top: 16px;
}
</style>
