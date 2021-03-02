const path = require('path');
const fse = require('fs-extra');
const branch = require('git-branch');
const { version } = require('../../package.json');

const branchName = branch.sync();
if (branchName !== 'master') {
	// only sync versioned releases to latest directory
	process.exit(0);
}
const deploy = version;

const deployPath = path.resolve('./', '.dist/styleguide', deploy);
const latestPath = path.resolve('./', '.dist/styleguide/latest');

fse.removeSync(latestPath);
fse.copySync(deployPath, latestPath);
