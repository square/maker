/* global LAB_EXPERIMENTS */
import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import App from './App.vue';

Vue.use(Router);
Vue.use(Meta);

const isProduction = process.env.NODE_ENV === 'production';
const importExperiment = (experiment) => () => import(`./experiments/${experiment}`); // eslint-disable-line no-unused-vars

function createRouter() {
	return new Router({
		mode: isProduction ? 'hash' : 'history',
		routes: [
			{
				path: '',
				component: App,
				children: LAB_EXPERIMENTS,
			},
		],
	});
}

export default createRouter;
