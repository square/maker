<template>
	<div :class="$s.Page">
		<m-text
			variant="title"
			:size="4"
		>
			Lab experiments
		</m-text>

		<nav :class="$s.Nav">
			<li
				v-for="experiment in experiments"
				:key="experiment.name"
			>
				<router-link
					:class="$s.NavLink"
					:to="{ name: experiment.name }"
				>
					{{ experiment.label }}
				</router-link>
			</li>
		</nav>
	</div>
</template>

<script>
import { MText } from '@square/maker/components/Text';

export default {
	components: {
		MText,
	},

	data() {
		return {
			experiments: this.getExperiments(),
		};
	},

	methods: {
		getExperiments() {
			const experiments = this.$router.options.routes
				.map((routerEntry) => {
					const entry = (
						routerEntry.name
							? routerEntry
							: routerEntry.children.find((route) => !route.path)
					);
					return {
						label: routerEntry.rawName.replace(/\.vue$/, ''),
						name: entry.name,
					};
				})
				.filter((routeName) => routeName.name !== 'index');
			return experiments;
		},
	},
};
</script>

<style module="$s">
.Page {
	padding: 32px;
}

.Nav {
	margin-top: 32px;
}

.NavLink {
	color: inherit;
	font-size: 20px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
}
</style>
