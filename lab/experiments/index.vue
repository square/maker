<template>
	<div :class="$s.Page">
		<m-heading :size="4">
			Lab experiments
		</m-heading>

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
import { MHeading } from '@square/maker/components/Heading';

export default {
	components: {
		MHeading,
	},

	data() {
		return {
			experiments: this.getExperiments(),
		};
	},

	methods: {
		getExperiments() {
			const routerEntries = this.$router.options.routes[0].children;
			const experiments = routerEntries
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
