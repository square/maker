const packageJson = require('../../package.json');

(function assertPeerDependenciesAsDevelopmentDependencies({
	peerDependencies,
	devDependencies,
}) {
	const errors = [];

	Object.keys(peerDependencies).forEach((depName) => {
		// Skip vue since we can't check ranges reliable
		if (depName === 'vue') return;

		if (!devDependencies[depName]) {
			errors.push(`Missing "${depName}" in devDependencies`);
			return;
		}

		const peerDepSemver = peerDependencies[depName];
		const developmentDepSemver = devDependencies[depName];
		if (peerDepSemver !== developmentDepSemver) {
			errors.push(`devDependency "${depName}@${developmentDepSemver}" doesn't match "${peerDepSemver}"`);
		}
	});

	if (errors.length > 0) {
		// eslint-disable-next-line no-console
		console.error(`Error:\n${errors.join('\n')}`);
		// eslint-disable-next-line no-magic-numbers
		process.exit(1);
	}
}(packageJson));
