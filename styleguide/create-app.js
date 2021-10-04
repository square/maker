import Vue from 'vue';
import createRouter from './create-router';
import './init-polyfills';

function createApp(App) {
	const router = createRouter();

	const app = new Vue({
		render: (h) => h(App),
		router,
		metaInfo: {
			title: '📚 Maker Styleguide',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover',
				},
			],
		},
	});

	return { app, router };
}

export default createApp;
