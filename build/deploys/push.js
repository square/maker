/* eslint-disable no-console */

const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const ensureDeployDirectory = require('./ensure');

const EXIT_ERROR_CODE = 1;

(async function pushDeploys() {
	const deployDirectory = await ensureDeployDirectory();
	process.chdir(deployDirectory);

	// add all changes
	await exec('git add --all');
	// the above command succeeds regardless of
	// whether anything was actually added or not

	// commit
	try {
		await exec('git commit -m "docs: update deploys"');
	} catch {
		// this would fail if the above command did not
		// add any files to the staging index, so
		// it's okay to let this command to fail as well
		console.log('no files changed, nothing to push');
		return;
	}

	// push
	try {
		await exec('git push');
	} catch {
		console.error('failed to push changes to remote');
		process.exit(EXIT_ERROR_CODE);
	}
}());
