/* eslint-disable no-console */

const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const ensureDeployDirectory = require('./ensure');

const EXIT_ERROR_CODE = 1;

(async function pullDeploys() {
	const deployDirectory = await ensureDeployDirectory();
	process.chdir(deployDirectory);

	// pull
	await exec('git pull --rebase');
}()).catch((error) => {
	console.error(error.message);
	process.exit(EXIT_ERROR_CODE);
});
