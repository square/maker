<template>
	<m-container>
		<pre>Selected Choice: {{ selectedChoice }}</pre>
		<m-choice v-model="selectedChoice">
			<m-choice-option
				v-for="choice in choices"
				:key="choice"
				:value="choice"
			>
				{{ choice }}
			</m-choice-option>
		</m-choice>
		<br>
		<m-button @click="setToVal(4)">
			Set to 4
		</m-button>
	</m-container>
</template>

<script>
import { MContainer } from '@square/maker/components/Container';
import { MChoice, MChoiceOption } from '@square/maker/components/Choice';
import { MButton } from '@square/maker/components/Button';

// eslint-disable-next-line no-magic-numbers
const choices = [1, 2, 3, 4, 5];

export default {
	components: {
		MContainer,
		MChoice,
		MChoiceOption,
		MButton,
	},
	data() {
		return {
			selectedChoice: undefined,
			choices,
		};
	},

	methods: {
		setToVal(number) {
			this.selectedChoice = number;
		},
	},
};
</script>
