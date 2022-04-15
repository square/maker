<template>
	<div
		:class="$s.Menu"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<m-popover
			placement="bottom-start"
		>
			<template #action="popover">
				<select-control
					v-if="$slots['toggle-select']"
					@click.stop="popover.toggle()"
				>
					<template
						#prefix
					>
						<!-- @slot Select toggle prefix -->
						<slot name="toggle-select-prefix" />
					</template>
					<!-- @slot Select toggle text -->
					<slot name="toggle-select" />
				</select-control>
				<div
					v-else
					:class="$s.CustomToggle"
					@click="popover.toggle()"
				>
					<!-- @slot Custom toggle slot (not rendered if toggle-select is used) -->
					<slot
						name="toggle"
					/>
				</div>
			</template>

			<template #content>
				<m-popover-content
					:class="$s.MenuContent"
					padding="16px 0"
				>
					<!-- @slot Menu options -->
					<slot name="menu" />
				</m-popover-content>
			</template>
		</m-popover>
	</div>
</template>

<script>

/**
 * @inheritAttrs div
 * @inheritListeners div
 */
import { MPopover, MPopoverContent } from '@square/maker/components/Popover';
import assert from '@square/maker/utils/assert';
import SelectControl from '../../Select/src/SelectControl.vue';
import key from './key';

export default {
	components: {
		MPopover,
		MPopoverContent,
		SelectControl,
	},

	provide() {
		return {
			[key]: this.$data,
		};
	},

	inheritAttrs: false,

	model: {
		prop: 'selected',
		event: 'menu:update',
	},

	props: {
		/**
		 * Selected menu option
		 */
		selected: {
			type: undefined,
			default: undefined,
		},

		type: {
			type: String,
			default: 'single-select',
			validator: (type) => ['multi-select', 'single-select', 'action'].includes(type),
		},
	},

	data() {
		return {
			currentValue: this.selected,
			isSingleSelect: this.type === 'single-select',
			isMultiSelect: this.type === 'multi-select',
			isActionSelect: this.type === 'action',
		};
	},

	watch: {
		selected() {
			this.validateProps();
			this.currentValue = this.selected;
		},

		currentValue(newValue) {
			this.$emit('menu:update', newValue);
		},
	},

	created() {
		this.validateProps();
	},

	methods: {
		validateProps() {
			if (this.isMultiSelect) {
				assert.error(Array.isArray(this.selected), 'The v-model value for a multi-select must be of type Array.');
			}
		},
	},
};
</script>

<style module="$s">
.MenuContent {
	display: flex;
	flex-direction: column;
	min-width: 200px;
}

.CustomToggle {
	display: inline-block;
}
</style>
