const semver = require('semver');
const packageJson = require('../../package.json');

(function assertPeerDependenciesAsDevDependencies({
	peerDependencies,
	devDependencies,
}) {
	const errors = [];

	for (const depName in peerDependencies) {
		if (!devDependencies.hasOwnProperty(depName)) {
			errors.push(`Missing "${depName}" in devDependencies`);
			continue;
		}

		const peerDepSemver = peerDependencies[depName];
		const devDepSemver = devDependencies[depName];
		if (peerDepSemver !== devDepSemver) {
			errors.push(`devDependency "${depName}@${devDepSemver}" doesn't match "${peerDepSemver}"`);
			continue;
		}
	}

	if (errors.length > 0) {
		console.error(`Error:\n${errors.join('\n')}`);
		process.exit(1);
	}
})(packageJson);
