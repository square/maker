const semver = require('semver');
const packageJson = require('../../package.json');

(function assertPeerDependenciesAsDevDependencies({
	peerDependencies,
	devDependencies,
}) {
	const errors = [];

	for (const peerDepName in peerDependencies) {
		if (!devDependencies.hasOwnProperty(peerDepName)) {
			errors.push(`Missing required peer dependency ${peerDepName} in devDependencies`);
			continue;
		}

		const peerDepRangeOrVer = peerDependencies[peerDepName];
		const devDepRangeOrVer = devDependencies[peerDepName];
		if (devDepRangeOrVer !== peerDepRangeOrVer && !semver.satisfies(devDepRangeOrVer, peerDepRangeOrVer)) {
			errors.push(`Dev dependency ${peerDepName}@${devDepRangeOrVer} does not satisfy peer dependency requiment: ${peerDepRangeOrVer}`);
			continue;
		}
	}

	if (errors.length > 0) {
		console.error(`Error(s):\n${errors.join('\n')}`);
		process.exit(1);
	}
})(packageJson);
