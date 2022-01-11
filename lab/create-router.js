/* global LAB_EXPERIMENTS */
import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import VuePortal from '@linusborg/vue-simple-portal';

Vue.use(Router);
Vue.use(Meta);
Vue.use(VuePortal);

const isProduction = process.env.NODE_ENV === 'production';
const importExperiment = (experiment) => () => import(`./experiments/${experiment}`); // eslint-disable-line no-unused-vars

function createRouter() {
	return new Router({
		mode: isProduction ? 'hash' : 'history',
		routes: LAB_EXPERIMENTS,
	});
}

export default createRouter;
