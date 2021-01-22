/* global COMPONENT_ROUTES */
import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Landing from './Landing.vue';

Vue.use(Router);
Vue.use(Meta);

// eslint-disable-next-line no-unused-vars
const importComponentDocument = (componentName) => () => import(`@square/maker/components/${componentName}/README.md`);

function createRouter() {
	return new Router({
		mode: 'hash',
		routes: [
			{
				name: 'landing',
				path: '/',
				component: Landing,
				navLabel: 'Styleguide',
			},
			...COMPONENT_ROUTES,
		],
	});
}

export default createRouter;
