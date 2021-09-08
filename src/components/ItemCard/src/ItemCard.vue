<template>
	<m-card>
		<div
			v-bind="$attrs"
			v-on="$listeners"
		>
			<header>
				<div
					v-if="label"
					:class="[
						$s.Label,
						$s.TruncateLabel,
					]"
				>
					{{ label }}
				</div>
			</header>

			<div>
				<!-- @slot itemcard content -->
				<slot />
			</div>

			<footer
				:class="$s.Footer"
			>
				<div>
					<!-- @slot footer content -->
					<slot name="footer" />
				</div>
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
		 * Item Card label
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

.Footer {
	display: flex;
	justify-content: space-between;
	margin-top: 16px;
}

.ActionsWrapper > * {
	margin-right: 24px;
}

.ActionsWrapper > *:last-child {
	margin-right: 0;
}
</style>
