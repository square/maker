const semver = require('semver');
const packageJson = require('../../package.json');

(function assertPeerDependenciesAsDevDependencies({
	peerDependencies,
	devDependencies,
}) {
	const errors = [];

	for (const peerDepName in peerDependencies) {
		if (!devDependencies.hasOwnProperty(peerDepName)) {
			errors.push(`Missing "${peerDepName}" from devDependencies`);
			continue;
		}

		const peerDepSemver = peerDependencies[peerDepName];
		if (semver.satisfies(devDependencies[peerDepName], peerDepSemver)) {
			errors.push(`Expected dev-dependency "${peerDepName}" to be in range "${peerDependencies[peerDepName]}"`);
			continue;
		}
	}

	if (errors.length > 0) {
		console.error(`Error:\n${errors.join('\n')}`);
		process.exit(1);
	}
})(packageJson);
