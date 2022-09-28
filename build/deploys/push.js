/* eslint-disable no-console */

const path = require('path');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const EXIT_SUCCESS_CODE = 0;
const EXIT_ERROR_CODE = 1;

(async function pushDeploys() {
	const deployDirectory = path.resolve('./', '.dist');
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
		// it's okay to let this command fail
		// and we exit early successfully
		console.log('no files changed, nothing to push, exiting early');
		process.exit(EXIT_SUCCESS_CODE);
	}

	// push
	try {
		await exec('git push');
	} catch (error) {
		console.error('failed to push changes to remote');
		throw error;
	}
}()).catch((error) => {
	console.error(error.message);
	process.exit(EXIT_ERROR_CODE);
});
