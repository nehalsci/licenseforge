const fs = require("node:fs");
const path = require("path");

module.exports = function licenses() {
	const licenses = readLicenseDirectory();
	console.log("Licenses:\n--------------");

	licenses.forEach(license => {
		console.log(`- ${license.name}`);
		console.log("--------------");
	});
}

function readLicenseDirectory() {
	const folderPath = path.join(__dirname, "..", "..", "licenses");

	const files = fs.readdirSync(folderPath);
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