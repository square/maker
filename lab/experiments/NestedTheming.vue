<template>
	<m-theme
		:theme="parentTheme"
		profile="whatever2"
	>
		<m-text>
			parent theme
		</m-text>
		<input
			v-model="parentTheme.colors.background"
			type="color"
		>
		<input
			v-model="parentTheme.colors.body"
			type="color"
		>
		<input
			v-model="parentTheme.profiles.whatever.colors.body"
			type="color"
		>
		<m-theme
			:theme="childTheme"
			profile="whatever"
		>
			<m-text>
				child theme
			</m-text>
			<input
				v-model="childTheme.colors.background"
				type="color"
			>
		</m-theme>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MTheme,
		MText,
	},
	data() {
		return {
			parentTheme: {
				profiles: {
					whatever: {
						colors: {
							background: '#ff0000',
							body: '#0000ff',
						},
					},
				},
				colors: {
					background: '#000000',
					body: '#ffffff',
				},
			},
			childTheme: {
				colors: {
					background: '#000000',
				},
			},
		};
	},
};
</script>

<style scoped>
.whatever {
	background: red;
}
</style>
