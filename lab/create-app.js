import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import createRouter from './create-router';

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

function createApp(App) {
	const router = createRouter();

	const app = new Vue({
		render: (h) => h(App),
		router,
		pinia,
	});

	return { app, router };
}

export default createApp;
