<template>
	<m-theme
		v-bind="theme"
		:class="['app']"
	>
		<div class="profiles">
			<div
				v-for="(set, index) in profiles"
				:key="index"
				:class="[
					'profile',
					set,
				]"
				:style="set"
			>
				<div class="profile-content">
					<div class="profile-title profile-subtitle">
						Subtitle
					</div>
					<div class="profile-title">
						Title
					</div>
					<p class="profile-text">
						Example paragraph text
					</p>
					<div class="controls">
						<div class="profile-button" />
						<div class="profile-button-secondary" />
					</div>
				</div>
			</div>
		</div>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import theme1 from './theme1';

export default {
	name: 'App',
	components: {
		MTheme,
	},
	data() {
		return {
			theme: theme1,
			profiles: [
				'profile1',
				'profile2',
				'profile3',
				'profile4',
				'profile5',
				'profile6',
			],
		};
	},
	methods: {
		// setDefaultMode(mode) {
		// 	// console.log(mode);
		// },
	},
};

</script>

<style>
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

.app {
	height: 100%;
	margin: 0;
	padding: 60px;
	font-family: -apple-system, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.profiles {
	display: grid;
	grid-gap: 24px;
	grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
}

.profile {
	display: flex;
	justify-content: center;
	padding: 32px;
	color: var(--maker-color-text, #000);
	text-align: left;
	background: var(--maker-color-background, #fff);
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10px;
}

.profile-content {
	width: 100%;
}

.profile-title {
	margin: 0 0 0.6rem;
	color: var(--maker-color-heading, var(--maker-color-text, #000));
	font-weight: bold;
	font-size: 22px;
	line-height: 1;
}

.profile-subtitle {
	margin: 0;
	font-size: 16px;
	line-height: 1.3;
}

.profile-text {
	margin: 0.2rem 0 1rem;
	color: var(--maker-color-text, #000);
	font-weight: 500;
	font-size: 16px;
	line-height: 1;
}

.controls {
	display: flex;
	gap: 8px;
}

.profile-button,
.profile-button-secondary {
	width: 90px;
	height: 32px;
	border-radius: 24px;
}

.profile-button {
	background: var(--maker-color-primary, #000);
	border: 1px solid var(--maker-color-primary, #000);
}

.profile-button-secondary {
	border: 1px solid var(--maker-color-secondary, var(--maker-color-primary, #000));
}
</style>
