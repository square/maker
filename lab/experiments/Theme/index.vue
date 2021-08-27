<template>
	<div class="page">
		<m-theme
			:theme="theme"
			class="theme"
		>
			<h1 class="heading">
				Default Heading
			</h1>
			<p class="text">
				Default text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Consequatur debitis excepturi quibusdam modi necessitatibus accusamus, pariatur ut
				aliquam nihil dolores assumenda quam non maxime voluptatum doloremque. Quaerat
				dolores fugit consequuntur!
			</p>

			<h1 class="heading">
				Profiles / Modes / Color Styles
			</h1>
			<div class="profiles">
				<div
					v-for="(set, index) in profiles"
					:key="index"
					:class="[
						'profile',
						set,
					]"
					@click="changeMode(set)"
				>
					<div class="profile-content">
						<div class="heading profile-title profile-subtitle">
							Subtitle
						</div>
						<div class="heading profile-title">
							Title
						</div>
						<p class="text profile-text">
							Example paragraph text
						</p>
						<div class="controls">
							<div class="button button--primary profile-button" />
							<div class="button button--secondary profile-button-secondary" />
						</div>
					</div>
				</div>
			</div>
			<h1>Attempting to simplify contrast checks</h1>
			<m-button>
				Default Button
			</m-button>
			<m-button color="#32a852">
				Green button
			</m-button>
		</m-theme>
	</div>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MButton } from '@square/maker/components/Button';
import { theme1 } from './themes'; // this should probably be a json request, but enough for testing

export default {
	components: {
		MTheme,
		MButton,
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
		changeMode(mode) {
			// very rudimentary "default profile switcher"
			// console.log(mode);
			document.body.className = '';
			document.body.classList.add(mode);
		},
	},
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Open+Sans&display=swap');
</style>

<style scoped>

.theme {
	height: 100%;
	margin: 0;
	padding: 60px;
	font-family: -apple-system, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* DEMO
 * Theme component is currently setting default background and text color
 * Color defaults with property fallbacks on what would be the component CSS
 */
.heading {
	color: var(--maker-colors-heading, var(--maker-colors-text, #000));
	font-family: var(--maker-fonts-heading);
}

.text {
	color: var(--maker-colors-text, #000);
	font-family: var(--maker-fonts-text);
}

.button--primary {
	color: #fff;
	background: var(--maker-colors-primary, #000);
	border: 1px solid var(--maker-colors-primary, #000);
}

.button--secondary {
	color: var(--maker-colors-secondary, var(--maker-colors-primary, #000));
	background: transparent;
	border: 1px solid var(--maker-colors-secondary, var(--maker-colors-primary, #000));
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
	color: var(--maker-colors-text, #000);
	text-align: left;
	background: var(--maker-colors-background, #fff);
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10px;
}

.profile-content {
	width: 100%;
}

.profile-title {
	margin: 0 0 0.6rem;
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

</style>
