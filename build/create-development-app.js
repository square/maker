import Vue from 'vue';
import Meta from 'vue-meta';
import VuePortal from '@linusborg/vue-simple-portal';

Vue.use(Meta);
Vue.use(VuePortal);

function createApp(RootComponent) {
	const app = new Vue({
		render: (h) => h(RootComponent),
		metaInfo: {
			title: 'Maker Local Doc Dev',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover',
				},
			],
			link: [
				{
					rel: 'icon',
					href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✏️</text></svg>',
				},
			],
		},
	});

	return { app };
}

export default createApp;
