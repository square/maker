<template>
	<m-action-bar-layer>
		<m-action-bar>
			<m-button
				key="close"
				size="large"
				shape="pill"
			>
				<x class="icon" />
			</m-button>
			<m-button
				key="primary"
				size="large"
				shape="pill"
				full-width
			>
				Primary Action
				Really long long long long long long text
			</m-button>
		</m-action-bar>
	</m-action-bar-layer>
</template>

<script>
import { MActionBar, MActionBarLayer } from '@square/maker/components/ActionBar';
import { MButton } from '@square/maker/components/Button';
import { X } from '@square/maker-icons';

export default {
	components: {
		MActionBar,
		MActionBarLayer,
		MButton,
		X,
	},
};
</script>

<style scoped>
.icon {
	width: 16px;
	height: 16px;
}
</style>
