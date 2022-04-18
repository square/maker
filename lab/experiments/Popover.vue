<template>
	<div
		:class="$s.Wrapper"
	>
		<m-theme
			:class="$s.Preview"
			:theme="theme(backgroundColor)"
		>
			<m-text
				pattern="title"
				:size="0"
			>
				Parent Site MTheme
			</m-text>
			<input
				v-model="backgroundColor"
				type="color"
			>
			<m-popover>
				<template #action="popover">
					<m-button
						:class="$s.Button"
						@click="popover.toggle()"
					>
						Popover Toggle
					</m-button>
				</template>
				<template #content>
					<m-popover-content
						:class="$s.Popover"
					>
						<m-text pattern="title">
							Popover content
						</m-text>
						<m-text>
							Content for a basic popover
						</m-text>
						<m-divider />
						<m-text>
							Content for a basic popover
						</m-text>
						<m-input
							variant="outline"
							placeholder="Delivery address"
						/>
					</m-popover-content>
				</template>
			</m-popover>
			<m-text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</m-text>
			<m-theme
				:class="$s.Block"
				:theme="theme(blockColor)"
			>
				<m-text
					pattern="title"
					:size="0"
				>
					Nested Block MTheme
				</m-text>
				<input
					v-model="blockColor"
					type="color"
				>
				<m-popover>
					<template #action="popover">
						<m-button
							:class="$s.Button"
							@click="popover.toggle()"
						>
							Popover Toggle
						</m-button>
					</template>
					<template #content>
						<m-popover-content
							:class="$s.Popover"
						>
							<m-text pattern="title">
								Popover content
							</m-text>
							<m-text>
								Content for a basic popover
							</m-text>
							<m-divider />
							<m-text>
								Content for a basic popover
							</m-text>
							<m-input
								variant="outline"
								placeholder="Delivery address"
							/>
						</m-popover-content>
					</template>
				</m-popover>
				<m-text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
					qui officia deserunt mollit anim id est laborum.
				</m-text>
			</m-theme>
			<m-popover-layer />
		</m-theme>
	</div>
</template>

<script>
import { MTheme } from '@square/maker/components/Theme';
import { MText } from '@square/maker/components/Text';
import { MInput } from '@square/maker/components/Input';
import { MButton } from '@square/maker/components/Button';
import { MDivider } from '@square/maker/components/Divider';
import { MPopoverLayer, MPopover, MPopoverContent } from '@square/maker/components/Popover';
import { generateNeutralColors } from './Themes/utils/colors';

export default {
	components: {
		MTheme,
		MText,
		MInput,
		MButton,
		MDivider,
		MPopoverLayer,
		MPopover,
		MPopoverContent,
	},

	mixins: [
		MPopoverLayer.popoverMixin,
	],

	data() {
		return {
			backgroundColor: '#000000',
			blockColor: '#fff',
		};
	},

	methods: {
		theme(background) {
			const colors = generateNeutralColors(background);
			return {
				colors: {
					background,
					heading: colors['neutral-90'],
					text: colors['neutral-90'],
					...colors,
				},
				button: {
					color: colors['neutral-100'],
				},
			};
		},
	},
};
</script>

<style module="$s">
.Wrapper {
	display: flex;
	gap: 32px;
	box-sizing: border-box;
	min-height: 100vh;
	padding: 32px;
	font-family: Helvetica, sans-serif;
	background: #e1e1e1;
}

.Button {
	width: 400px;
}

.Preview,
.Block,
.Popover {
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 16px;
	padding: 32px;
}

.Block {
	margin: 0 -32px;
}
</style>
