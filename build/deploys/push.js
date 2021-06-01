const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const ensureDeployDirectory = require('./ensure');

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
	}

	// push
	await exec('git push');
	// the above command suceeds regardless of
	// whether anything was actually pushed or not
}());
