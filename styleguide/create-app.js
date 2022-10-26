import Vue from 'vue';
import createRouter from './create-router';

function createApp(App) {
	const router = createRouter();

	const app = new Vue({
		render: (h) => h(App),
		router,
		metaInfo: {
			title: 'Maker Styleguide',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover',
				},
			],
			link: [
				{
					rel: 'icon',
					href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎨</text></svg>',
				},
			],
		},
	});

	return { app, router };
}

export default createApp;
