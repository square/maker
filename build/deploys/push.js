const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const ensureDeployDirectory = require('./ensure');

(async function pushDeploys() {
	await ensureDeployDirectory();

	// add all changes
	await exec('git add --all');

	// commit
	await exec('git commit -m "docs: update deploys"');

	// push
	await exec('git push');
}());
