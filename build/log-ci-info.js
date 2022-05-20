/* eslint-disable no-console */

const fse = require('fs-extra');

// put `node ./build/log-ci-info.js`
// into any workflow job's `run` step
// (assuming node.js is available)
// and then the env data for that workflow
// will be logged in the job output
// which can be found in the Actions tab
// of the github repo

console.log({ FULL_ENV: process.env });
if (process.env.GITHUB_EVENT_PATH) {
	const EVENT_PAYLOAD = fse.readJSONSync(process.env.GITHUB_EVENT_PATH);
	console.log({ EVENT_PAYLOAD });
} else {
	console.log('NO GITHUB_EVENT_PATH / EVENT_PAYLOAD');
}
