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
				<component
					:is="toggleComponent"
					@click="popover.toggle()"
				>
					<template
						v-if="isSelectToggle"
						#prefix
					>
						<slot name="toggle-icon" />
					</template>
					<template v-else>
						<slot name="toggle-icon" />
						<slot name="toggle" />
					</template>
					<slot name="toggle" />
				</component>
			</template>

			<template #content>
				<m-popover-content
					:class="$s.MenuContent"
					padding="16px 0"
				>
					<slot
						name="menu"
					/>
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
import { MButton } from '@square/maker/components/Button';
import assert from '@square/maker/utils/assert';
import SelectToggle from './SelectToggle.vue';
import key from './key';

export default {
	components: {
		MPopover,
		MPopoverContent,
		MButton,
		SelectToggle,
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

		/**
		 * Menu's toggle style
		 */
		toggle: {
			type: String,
			default: 'select',
			validator: (toggle) => ['select', 'button'].includes(toggle),
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
			isSelectToggle: this.toggle === 'select',
		};
	},

	computed: {
		toggleComponent() {
			return this.isSelectToggle ? SelectToggle : MButton;
		},
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
</style>
