const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const ensureDeployDirectory = require('./ensure');

(async function pullDeploys() {
	const deployDir = await ensureDeployDirectory();
	process.chdir(deployDir);

	// pull
	await exec('git pull');
}());
