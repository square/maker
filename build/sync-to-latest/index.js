const path = require('path');
const fse = require('fs-extra');
const branch = require('git-branch');
const { version } = require('../../package.json');

const branchName = branch.sync();
if (branchName !== 'master') {
	// only sync versioned releases to latest directory
	return;
}
const deploy = version;

let deployPath = path.resolve('./', '.dist/styleguide', deploy);
let latestPath = path.resolve('./', '.dist/styleguide/latest');

console.log(deployPath, latestPath);

fse.removeSync(latestPath);
fse.copySync(deployPath, latestPath);
