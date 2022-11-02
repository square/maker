<template>
	<div
		:class="$s.OrderCard"
	>
		<m-text
			v-if="label"
			:class="$s.OrderCardLabel"
			:font-weight="'500'"
			:size="-1"
			:color="labelColor"
		>
			{{ label }}
		</m-text>
		<m-text
			v-if="title"
			:class="$s.OrderCardTitle"
			:font-weight="'500'"
			:size="0"
			:color="titleColor"
		>
			{{ title }}
		</m-text>
		<m-order-thumbnails
			v-if="hasThumbnails"
			:class="$s.OrderCardThumbnails"
			:thumbnails="thumbnails"
		/>
		<div
			:class="$s.OrderCardActions"
		>
			<div
				:class="$s.OrderCardButtons"
			>
				<m-button
					v-if="primaryActionText"
					pattern="primarySubtle"
					shape="rounded"
					size="small"
					@click="$emit('action:click-primary')"
				>
					{{ primaryActionText }}
				</m-button>
				<m-button
					v-if="secondaryActionText"
					:class="$s.OrderCardSecondaryAction"
					pattern="primarySubtle"
					shape="rounded"
					size="small"
					@click="$emit('action:click-secondary')"
				>
					{{ secondaryActionText }}
				</m-button>
			</div>
		</div>
	</div>
</template>

<script>
import { MText } from '@square/maker/components/Text';
import { MButton } from '@square/maker/components/Button';
import { MThemeKey, defaultTheme } from '@square/maker/components/Theme';
import MOrderThumbnails from './OrderThumbnails.vue';

export default {
	components: {
		MText,
		MButton,
		MOrderThumbnails,
	},

	inject: {
		theme: {
			default: defaultTheme(),
			from: MThemeKey,
		},
	},

	props: {
		label: {
			type: String,
			default: undefined,
		},
		title: {
			type: String,
			required: true,
		},
		thumbnails: {
			type: Array,
			default: () => ([]),
		},
		primaryActionText: {
			type: String,
			default: undefined,
		},
		secondaryActionText: {
			type: String,
			default: undefined,
		},
	},

	computed: {
		hasThumbnails() {
			return this.thumbnails.length > 0;
		},

		titleColor() {
			return this.theme.colors['neutral-90'];
		},

		labelColor() {
			return this.theme.colors['neutral-80'];
		},
	},
};
</script>

<style module="$s">
.OrderCard {
	display: block;
}

.OrderCardLabel,
.OrderCardTitle,
.OrderCardThumbnails {
	margin-bottom: 4px;
}

.OrderCardActions {
	display: flex;
	margin-top: 20px;
}

.OrderCardButtons {
	margin-right: 0;
	margin-left: auto;
}

.OrderCardSecondaryAction {
	margin-left: 8px;
}
</style>
