const fs = require("node:fs");

module.exports = function licenses() {
	const licenses = readLicenseDirectory();
	console.log("Licenses:\n--------------");

	licenses.forEach(license => {
		console.log(`- ${license.name}`);
		console.log("--------------");
	});
}

function readLicenseDirectory() {
	const files = fs.readdirSync("./licenses");
	const array = [];

	files.forEach(name => {
		array.push({
			name: name.toLowerCase(),
			originalName: name
		});
	});

	return array;
}

module.exports.readLicenseDirectory = readLicenseDirectory;