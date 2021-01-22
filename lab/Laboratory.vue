<template>
	<m-theme
		v-bind="theme"
	>
		<div
			:class="$s.Page"
			:style="{
				backgroundColor: page.backgroundColor
			}"
		>
			<router-view />
		</div>

		<component
			:is="sidebarOpen ? 'x-icon' : 'menu-icon'"
			v-if="isSmallScreen"
			:class="$s.ToggleSidebar"
			inline
			@click="toggleSidebar"
		/>
		<div
			v-if="!isSmallScreen || sidebarOpen"
			:class="$s.Sidebar"
		>
			<control-panel label="Page background color">
				<input
					v-model="page.backgroundColor"
					type="color"
				>
				{{ page.backgroundColor }}
			</control-panel>
			<control-panel label="Main color">
				<input
					v-model="theme.color.main"
					type="color"
				>
				{{ theme.color.main }}
			</control-panel>
			<control-panel label="Contrast color">
				<input
					v-model="theme.color.contrast"
					type="color"
				>
				{{ theme.color.contrast }}
			</control-panel>
			<control-panel label="Hover color">
				<input
					v-model="theme.color.hover"
					type="color"
				>
				{{ theme.color.hover }}
			</control-panel>
			<control-panel label="Focus color">
				<input
					v-model="theme.color.focus"
					type="color"
				>
				{{ theme.color.focus }}
			</control-panel>
		</div>
	</m-theme>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { DragBarsIcon, XIcon } from '@square/orbit-icons';
import ControlPanel from '~/components/ControlPanel.vue';

export default {
	components: {
		MTheme,
		ControlPanel,
		DragBarsIcon,
		XIcon,
	},

	data() {
		return {
			isSmallScreen: false,
			sidebarOpen: false,
			page: {
				backgroundColor: '#ffffff',
			},
			theme: {
				color: {
					main: '#84b5b9',
					contrast: '#ffffff',
					focus: '#84b5b980',
					hover: '#000000',
				},
			},
		};
	},

	mounted() {
		this.watchScreenWidth();
	},

	methods: {
		watchScreenWidth() {
			const watchScreenWidth = window.matchMedia('(min-width: 640px)');

			this.isSmallScreen = !watchScreenWidth.matches;
			watchScreenWidth.addListener((event) => {
				this.isSmallScreen = !event.matches;
			});
		},
		toggleSidebar() {
			this.sidebarOpen = !this.sidebarOpen;
		},
	},
};
</script>

<style module="$s">

.Page {
	font-family: system-ui;

	@media (min-width: 640px) {
		padding-right: 500px;
	}
}

.ToggleSidebar {
	position: fixed;
	top: 16px;
	right: 16px;
	width: 16px;
	height: 16px;
}

.Sidebar {
	position: fixed;
	top: 40px;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 300px;
	padding: 32px;
}

</style>
