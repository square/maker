const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

(async function() {
	await require('./ensure')();

	// pull
	await exec('git pull');
})();
