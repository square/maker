<template>
	<div class="container">
		<m-theme :theme="resolvedTheme">
			icon style<br>
			<select
				v-model="iconStyle"
			>
				<option value="filled">
					filled
				</option>
				<option value="outline">
					outline
				</option>
			</select>
			{{ iconStyle }}

			<br><br>

			theme icons
			<pre>{{ JSON.stringify(resolvedTheme.icons, null, 4) }}</pre>

			<br>

			icons<br>
			<template
				v-for="name in iconNames"
			>
				<m-icon
					:key="name + 'icon'"
					:name="name"
				/>
				{{ name }}
				<br :key="name + 'br'">
			</template>

			<br>

			notices<br>
			<m-notice
				v-for="pattern in noticePatterns"
				:key="pattern + 'notice'"
				:pattern="pattern"
			>
				{{ pattern }}
			</m-notice>
		</m-theme>
	</div>
</template>

<script>
import { MIcon } from '@square/maker/components/Icon';
import { MNotice } from '@square/maker/components/Notice';
import { MTheme } from '@square/maker/components/Theme';

import AlertTriangleFilled from '@square/maker-icons/AlertTriangleFilled';
import AlertCircleFilled from '@square/maker-icons/AlertCircleFilled';
import CheckCircleFilled from '@square/maker-icons/CheckCircleFilled';
import InfoFilled from '@square/maker-icons/InfoFilled';
import AlertTriangle from '@square/maker-icons/AlertTriangle';
import AlertCircle from '@square/maker-icons/AlertCircle';
import CheckCircle from '@square/maker-icons/CheckCircle';
import Info from '@square/maker-icons/Info';

const filledIcons = {
	critical: AlertCircleFilled,
	warning: AlertTriangleFilled,
	success: CheckCircleFilled,
	info: InfoFilled,
};

const outlineIcons = {
	critical: AlertCircle,
	warning: AlertTriangle,
	success: CheckCircle,
	info: Info,
};

export default {
	components: {
		MTheme,
		MIcon,
		MNotice,
	},
	data() {
		return {
			iconNames: ['critical', 'warning', 'success', 'info'],
			noticePatterns: ['error', 'warning', 'success', 'info'],
			iconStyle: 'filled',
		};
	},
	computed: {
		resolvedTheme() {
			const icons = this.iconStyle === 'filled' ? filledIcons : outlineIcons;
			return { icons };
		},
	},
};
</script>

<style scoped>
.container {
	padding: 16px;
}
</style>
