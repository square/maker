// this should only run on CI

const fse = require('fs-extra');
const semver = require('semver');
// const path = require('path');

// current working directory is project root
const branchPackage = fse.readJsonSync('./package.json');
//console.log(branchPackage);


function checkDeps(requiredDeps, installedDeps) {
	let errors = [];
	for (let [requiredDep, requiredVer] of Object.entries(requiredDeps)) {
		if (!installedDeps[requiredDep]) {
			errors.push(`missing required dep: ${requiredDep}@${requiredVer}`);
			continue;
		}
		let installedVer = installedDeps[requiredDep];
		if (installedVer !== requiredVer) {
			errors.push(`expected dep ${installedDep} to be ver ${requiredVer} but found ${installedVer}`);
		}
	}
	if (errors.length > 0) {
		throw new Error(`found dep errors:\n${errors.join('\n')}`);
	}
}

// peer deps should be mirrored in dev deps identically
checkDeps(branchPackage.peerDependencies, branchPackage.devDependencies)
