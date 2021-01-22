<template>
	<div :class="$s.ControlPanel">
		<h4
			v-if="label"
			:class="$s.Label"
		>
			{{ label }}
		</h4>
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: undefined,
		},
	},
};
</script>

<style module="$s">
.ControlPanel {
	padding: 24px 32px;
	color: #fff;
	font-family: system-ui;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 16px;
	box-shadow: 0 8px 16px -8px #000;
}

.Label {
	margin: 0;
	margin-bottom: 16px;
	font-weight: 600;
	font-size: 10px;
	text-transform: uppercase;
}

</style>
