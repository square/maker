<template>
	<m-theme
		:theme="theme"
		:class="$s.App"
	>
		<div :class="$s.Editor">
			<m-heading
				:size="1"
				style="margin-bottom: 20px;"
			>
				Maker Theme
			</m-heading>
			<m-heading
				:size="0"
			>
				Colors
			</m-heading>
			<div :class="$s.Profile">
				<div :class="$s.Profiles">
					<div
						v-for="(set, index) in profiles"
						:key="index"
						:class="[
							$s.ProfileSet,
							set,
						]"
						@click="changeMode(set)"
					>
						<div>
							<div
								:class="$s.previewTitle"
							>
								Aa
							</div> <div
								:class="$s.previewButton"
							/>
						</div>
					</div>
				</div>
				<label>
					<input
						v-model="backgroundColor"
						type="color"
					>
					Background
				</label>
				<label>
					<input
						v-model="primaryColor"
						type="color"
					>
					Primary
				</label>
				<label>
					<input
						v-model="headingColor"
						type="color"
					>
					Heading
				</label>
				<label>
					<input
						v-model="textColor"
						type="color"
					>
					Text
				</label>
				<div :class="$s.palette">
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-0)' }" /> Neutral 0
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-10)' }" /> Neutral 10
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-20)' }" /> Neutral 20
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-80)' }" /> Neutral 80
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-90)' }" /> Neutral 90
					</div>
					<div :class="$s.color">
						<span :style="{ backgroundColor : 'var(--neutral-100)' }" /> Neutral 100
					</div>
				</div>
			</div>
		</div>
		<preview />
	</m-theme>
</template>

<script>

import { MTheme } from '@square/maker/components/Theme';
import { MHeading } from '@square/maker/components/Heading';
import Preview from './preview.vue';
import { theme1 } from './themes'; // this should probably be a json request, but enough for testing

export default {
	components: {
		MTheme,
		Preview,
		MHeading,
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
			backgroundColor: '#ffffff',
			primaryColor: '#14433d',
			headingColor: '#000000',
			textColor: '#000000',
		};
	},

	// computed: {
	// 	theme() {
	// 		return {
	// 			colors: {
	// 				primary: this.primaryColor,
	// 				background: this.backgroundColor,
	// 				heading: this.headingColor,
	// 				text: this.textColor,
	// 			},
	// 		};
	// 	},
	// },

};
</script>
<style module="$s">
.App {
	display: grid;
	grid-template-columns: minmax(300px, 1fr) 4fr;
	height: 100vh;
	font-family: -apple-system, “Helvetica Neue”, sans-serif;
}

.Editor {
	padding: 20px;
	background-color: #fff;
}

.Profile {
	display: flex;
	flex-direction: column;

	& label {
		margin-bottom: 8px;
	}

	& input {
		margin-right: 16px;
	}
}

.Profiles {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 8px;
}

.ProfileSet {
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 100%;
	height: 44px;
	line-height: 1;
	text-align: center;
	border-radius: 4px;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 10%);
	cursor: pointer;
}

.previewTitle {
	margin-bottom: 6px;
	color: var(--preview-title, #000);
	font-weight: 700;
	font-size: 14px;
}

.previewButton {
	width: 24px;
	height: 8px;
	background: var(--preview-button, #000);
	border-radius: 8px;
}

.palette {
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-top: 16px;
}

.palette > .color {
	display: flex;
	align-items: center;
}

.palette > .color span {
	display: inline-block;
	width: 50px;
	height: 24px;
	margin-right: 16px;
	outline: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
