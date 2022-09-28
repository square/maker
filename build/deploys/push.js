/* eslint-disable no-console */

const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const ensureDeployDirectory = require('./ensure');

const EXIT_SUCCESS_CODE = 0;
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
		// and we exit early successfully
		console.log('no files changed, nothing to push, exiting early');
		process.exit(EXIT_SUCCESS_CODE);
	}

	// pull
	try {
		// this command isn't strictly necessary, but it reduces
		// the failure rate of the next command which is necessary,
		// so it's worth running
		await exec('git pull --rebase');
		// if local is up-to-date with remote, or if remote's changes
		// can be auto-merged into local, then this command succeeds
	} catch (error) {
		// if this command fails then the next would certainly fail,
		// so we log the error and exit early unsuccessfully
		console.error('remote had changes we couldn\'t auto-merge locally');
		throw error;
	}

	// push
	try {
		await exec('git push');
	} catch (error) {
		// this command usually only fails if remote has
		// changes that we don't have locally, which usually
		// only occurs if multiple CI jobs which push changes
		// to the "deploys" branch are run within the same
		// few minutes of each other, there's no automatic
		// way to solve these failures, an engineer just has
		// to notice that the job failed and manually re-run it
		// from the github UI 🤷
		console.error('failed to push changes to remote');
		throw error;
	}
}()).catch((error) => {
	console.error(error.message);
	process.exit(EXIT_ERROR_CODE);
});
