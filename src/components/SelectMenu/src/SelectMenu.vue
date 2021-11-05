<template>
	<div>
		<m-popover
			ref="popover"
			:distance-offset="popoverDistanceOffset"
			:skidding-offset="popoverSkiddingOffset"
			:tether-min-width="popoverTetherMinWidth"
			:min-width="popoverMinWidth"
		>
			<template #tether="popover">
				<m-button
					@click="popover.toggle()"
				>
					<slot />
				</m-button>
			</template>

			<template #content>
				<m-popover-bubble
					:color="menuColor"
					:bg-color="menuBgColor"
				>
					<m-menu
						:value="value"
						:options="options"
						:is-multiselect="isMultiselect"
						:color="menuColor"
						:bg-color="menuBgColor"
						@menu:update="updateValue"
					/>
				</m-popover-bubble>
			</template>
		</m-popover>
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MPopover, MPopoverBubble } from '@square/maker/components/Popover';
import { MMenu } from '@square/maker/components/Menu';

export default {
	name: 'SelectMenu',

	components: {
		MPopover,
		MPopoverBubble,
		MMenu,
		MButton,
	},

	model: {
		event: 'select:update',
	},

	props: {
		/**
		 * Component value
		 */
		value: {
			type: undefined,
			default: undefined,
		},

		/**
		 * List of available options for menu
		 */
		options: {
			type: Array,
			required: true,
		},

		/**
		 * Toggles whether the value is a list of selected options
		 */
		isMultiselect: {
			type: Boolean,
			default: false,
		},

		/**
		 * Text color for options
		 */
		menuColor: {
			type: String,
			default: '#000',
		},

		/**
		 * Background color for options
		 */
		menuBgColor: {
			type: String,
			default: '#fff',
		},

		popoverPlacement: {
			type: String,
			default: 'bottom-start',
		},

		popoverDistanceOffset: {
			type: Number,
			default: undefined,
		},

		popoverSkiddingOffset: {
			type: Number,
			default: undefined,
		},

		popoverMinWidth: {
			type: Number,
			default: 0,
		},

		popoverTetherMinWidth: {
			type: Boolean,
			default: true,
		},
	},

	watch: {
		isMultiselect: {
			immediate: true,
			handler(isMultiselect, previousValue) {
				if (previousValue === isMultiselect) {
					return;
				}

				if (isMultiselect && !Array.isArray(this.value)) {
					if (this.value === undefined) {
						this.updateValue([]);
					} else {
						this.updateValue([this.value]);
					}
				} else if (!isMultiselect && Array.isArray(this.value)) {
					const [newValue] = this.value;
					this.updateValue(newValue);
				}
			},
		},
	},

	methods: {
		updateValue(value) {
			this.$emit('select:update', value);

			if (!this.isMultiselect) {
				this.$refs.popover.close();
			}
		},
	},
};
</script>

<style module="$s">
/* Keep */
</style>
