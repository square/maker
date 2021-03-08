const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const ensureDeployDirectory = require('./ensure');

(async function pullDeploys() {
	await ensureDeployDirectory();

	// pull
	await exec('git pull');
}());
