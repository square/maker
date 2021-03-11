const path = require('path');
const fse = require('fs-extra');
const branch = require('git-branch');
const { version } = require('../../package.json');

// branch.sync() doesn't work in the Github Actions env
let branchName = branch.sync();
if (!branchName) {
	// but that's okay because the Github Actions env provides this var
	branchName = process.env.GITHUB_HEAD_REF;
}

if (branchName !== 'master') {
	// only sync versioned releases to latest directory
	process.exit(0);
}
const deploy = version;

const deployPath = path.resolve('./', '.dist/styleguide', deploy);
const latestPath = path.resolve('./', '.dist/styleguide/latest');

fse.removeSync(latestPath);
fse.copySync(deployPath, latestPath);
