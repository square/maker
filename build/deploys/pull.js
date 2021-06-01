const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const ensureDeployDirectory = require('./ensure');

(async function pullDeploys() {
	const deployDirectory = await ensureDeployDirectory();
	process.chdir(deployDirectory);

	// pull
	await exec('git pull');
}());
