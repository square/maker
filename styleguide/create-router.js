/* global COMPONENT_ROUTES */
import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import PortalVue from 'portal-vue';
import Readme from '../README.md';

Vue.use(Router);
Vue.use(Meta);
Vue.use(PortalVue);

// eslint-disable-next-line no-unused-vars
const importComponentDocument = (componentName) => () => import(`@square/maker/components/${componentName}/README.md`);

function createRouter() {
	return new Router({
		mode: 'hash',
		routes: [
			{
				name: 'readme',
				path: '/',
				component: Readme,
			},
			...COMPONENT_ROUTES,
		],
	});
}

export default createRouter;
