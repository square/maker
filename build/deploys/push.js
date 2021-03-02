const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

(async function() {
	await require('./ensure')();

	// add all changes
	await exec('git add --all');

	// commit
	await exec('git commit -m "docs: update deploys"')

	// push
	await exec('git push');
})();
