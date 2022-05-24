/* eslint-disable no-console, unicorn/no-null */

const fse = require('fs-extra');

// put `node ./build/log-ci-info.js`
// into any workflow job's `run` step
// (assuming node.js is available)
// and then the env data for that workflow
// will be logged in the job output
// which can be found in the Actions tab
// of the github repo

const LOG_OPTIONS = { depth: null };

console.dir({ FULL_ENV: process.env }, LOG_OPTIONS);
if (process.env.GITHUB_EVENT_PATH) {
	const EVENT_PAYLOAD = fse.readJSONSync(process.env.GITHUB_EVENT_PATH);
	console.dir({ EVENT_PAYLOAD }, LOG_OPTIONS);
} else {
	console.log('NO GITHUB_EVENT_PATH / EVENT_PAYLOAD');
}
