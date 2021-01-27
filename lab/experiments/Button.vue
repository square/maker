<template>
	<combinations
		:component="$options.components.MButton"
		:options="options"
	/>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import X from '@square/maker-icons/X';
import Combinations from '~/components/Combinations';

export default {
	components: {
		Combinations,
		MButton, // eslint-disable-line vue/no-unused-components
	},

	data() {
		return {
			options: {
				size: ['small', 'medium', 'large'],
				shape: ['squared', 'rounded', 'pill'],
				variant: ['primary', 'secondary', 'tertiary'],
				align: ['stack', 'center', 'space-between'],
				disabled: [false, true],
				fullWidth: [false, true],
				'$slots.default': [
					// '',
					// 'Primary label',
					`Really long text${' long'.repeat(30)}`,
					// (<XIcon inline />),
					[(<X class="icon" />), `Really long text${' long'.repeat(30)}`],
					// (<AddIcon />),
				],
				'$slots.information': [
					'',
					'Information label',
				],
			},
		};
	},
};
</script>

<style scoped>
.icon {
	width: 16px;
	height: 16px;
}
</style>
