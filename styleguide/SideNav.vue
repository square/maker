<template>
	<div>
		<nav class="nav">
			<template
				v-for="group in groups"
			>
				<a
					:key="group.name"
					class="link header-link"
				>
					{{ group.name }}
				</a>
				<router-link
					v-for="link in group.links"
					:key="link.path.name"
					:to="link.path"
					class="link"
					@click.native="$emit('route:click')"
				>
					{{ link.label }}
				</router-link>
			</template>
			<router-link
				to="/utils"
				class="header-link link"
				@click.native="$emit('route:click')"
			>
				utils
			</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	computed: {
		navLinks() {
			return this.$router.options.routes
				.filter((route) => route.navLabel)
				.map((route) => ({
					label: route.navLabel,
					path: {
						name: route.name,
					},
					category: route.category,
				}));
		},
		groups() {
			const defaultGroup = {
				name: 'general',
				links: [],
			};
			const groups = [
				{
					name: 'container',
					set: new Set([
						'accordion',
						'card',
						'container',
					]),
					links: [],
				},
				{
					name: 'form',
					set: new Set([
						'calendar',
						'checkbox',
						'choice',
						'imageuploader',
						'input',
						'pininput',
						'radio',
						'segmentedcontrol',
						'select',
						'starrating',
						'stepper',
						'textarea',
						'toggle',
					]),
					links: [],
				},
				{
					name: 'popout',
					set: new Set([
						'actionbar',
						'blade',
						'dialog',
						'modal',
						'popover',
						'menu',
						'toast',
					]),
					links: [],
				},
				{
					name: 'loading',
					set: new Set([
						'loading',
						'skeleton',
					]),
					links: [],
				},
				{
					name: 'layout',
					set: new Set([
						'blockformcontrollayout',
						'inlineformcontrollayout',
						'row',
					]),
					links: [],
				},
				{
					name: 'transition',
					set: new Set([
						'transition',
						'transitioncollapse',
						'transitionfadein',
						'transitionresize',
						'transitionresponsive',
						'transitionspringleft',
						'transitionspringup',
						'transitionstack',
						'transitionstaggered',
					]),
					links: [],
				},
				{
					name: 'functional',
					set: new Set([
						'touchcapture',
					]),
					links: [],
				},
			];
			for (const navLink of this.navLinks) {
				let hasGroup = false;
				for (const group of groups) {
					if (group.set.has(navLink.label.toLowerCase())) {
						group.links.push(navLink);
						hasGroup = true;
						break;
					}
				}
				if (!hasGroup) {
					defaultGroup.links.push(navLink);
				}
			}
			groups.unshift(defaultGroup);
			return groups;
		},
	},
};
</script>

<style scoped>
.nav .link {
	display: block;
	color: var(--maker-color-neutral-90);
	font-size: 16px;
	line-height: 1.75;
	text-decoration: none;
}

.nav .link:hover {
	color: var(--maker-color-primary);
}

.nav .header-link {
	font-weight: 600;
	font-size: 14px;
	line-height: 3;
	letter-spacing: 2px;
	text-transform: uppercase;
}
</style>
