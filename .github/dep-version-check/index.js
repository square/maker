// This should only run on CI

const packageJson = require('../../package.json');

function assertPeerDependenciesAsDevDependencies({
	peerDependencies,
	devDependencies,
}) {
	const errors = [];

	for (const peerDepName in peerDependencies) {
		if (!devDependencies.hasOwnProperty(peerDepName)) {
			errors.push(`Missing "${peerDepName}" in devDependencies`);
			continue;
		}

		if (devDependencies[peerDepName] !== peerDependencies[peerDepName]) {
			errors.push(`Expected dev-dependency "${peerDepName}" to have semver "${peerDependencies[peerDepName]}"`);
			continue;
		}
	}

	if (errors.length > 0) {
		console.error(`Error:\n${errors.join('\n')}`);
		process.exit(1);
	}
}

assertPeerDependenciesAsDevDependencies(packageJson);
