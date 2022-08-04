/* global COMPONENTS_ROUTES, UTILS_ROUTES */
import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import VuePortal from '@linusborg/vue-simple-portal';
import IndexPage from './INDEX.md';
import ComponentsPage from './COMPONENTS.md';
import UtilsPage from './UTILS.md';

Vue.use(Router);
Vue.use(Meta);
Vue.use(VuePortal);

// eslint-disable-next-line no-unused-vars
const importComponentsDocument = (componentName) => () => import(`@square/maker/components/${componentName}/README.md`);
// eslint-disable-next-line no-unused-vars
const importUtilsDocument = (componentName) => () => import(`@square/maker/utils/${componentName}/README.md`);

function createRouter() {
	return new Router({
		mode: 'hash',
		routes: [
			{
				name: 'index',
				path: '/',
				component: IndexPage,
			},
			{
				name: 'components',
				path: '/components',
				component: ComponentsPage,
			},
			{
				name: 'utils',
				path: '/utils',
				component: UtilsPage,
			},
			// these "constants" are generated
			// at build time and replaced with
			// the actual routes as part of the build
			...COMPONENTS_ROUTES,
			...UTILS_ROUTES,
		],
	});
}

export default createRouter;
