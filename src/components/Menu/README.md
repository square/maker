# Menu

```vue
<template>
	<m-container
		label="Simple Data (Single Select)"
		size="large"
	>
		<m-card>
			<div>
				Selected Value: {{ value }}
			</div>

			<m-menu
				v-model="value"
				:options="options"
			/>
		</m-card>
	</m-container>
</template>

<script>
import { MCard } from '@square/maker/components/Card';
import { MContainer } from '@square/maker/components/Container';
import { MMenu } from '@square/maker/components/Menu';

export default {
	name: 'DemoSetup',

	components: {
		MCard,
		MContainer,
		MMenu,
	},

	data() {
		return {
			value: undefined,
			options: ['Option 1', 'Option 2', 'Option 3'],
		};
	},
};
</script>
```

```vue
<template>
	<m-container
		label="Complex Data (Single Select)"
		size="large"
	>
		<m-card>
			<div>
				Selected Value: {{ value }}
			</div>

			<m-menu
				v-model="value"
				:options="options"
			>
				<template #default="{ option, isSelected }">
					<m-menu-option
						:option="option.value"
						:is-selected="isSelected"
					>
						<m-menu-option-label>
							{{ option.label }}
						</m-menu-option-label>
					</m-menu-option>
				</template>
			</m-menu>
		</m-card>
	</m-container>
</template>

<script>
import { MCard } from '@square/maker/components/Card';
import { MContainer } from '@square/maker/components/Container';
import { MMenu, MMenuOption, MMenuOptionLabel } from '@square/maker/components/Menu';

export default {
	name: 'DemoSetup',

	components: {
		MCard,
		MContainer,
		MMenu,
		MMenuOption,
		MMenuOptionLabel,
	},

	data() {
		return {
			value: undefined,
			options: [
				{ label: 'Option 1', value: 1 },
				{ label: 'Option 2', value: 2 },
				{ label: 'Option 3', value: 3 },
			],
		};
	},
};
</script>
```


<!-- api-tables:start -->







<!-- api-tables:end -->
