const path = require('path');
const branch = require('git-branch');
const { version } = require('../../package.json');

const branchName = branch.sync();
const deploy = branchName === 'master' ? version : branchName;

let deployPath = path.resolve('./', '.dist/styleguide', deploy);
let latestPath = path.resolve('./', '.dist/styleguide/latest');

console.log(deployPath, latestPath);
