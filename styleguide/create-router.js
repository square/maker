/* global COMPONENT_ROUTES */
import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import VuePortal from '@linusborg/vue-simple-portal';
import Readme from '../README.md';

Vue.use(Router);
Vue.use(Meta);
Vue.use(VuePortal);

// eslint-disable-next-line no-unused-vars
const importComponentDocument = (componentName) => () => import(`@square/maker/components/${componentName}/README.md`);

function createRouter() {
	return new Router({
		mode: 'hash',
		routes: [
			{
				name: 'home',
				path: '/',
				component: Readme,
			},
			// this "constant" is generated
			// at build time and replaced with
			// the actual routes as part of the build
			...COMPONENT_ROUTES,
		],
	});
}

export default createRouter;
