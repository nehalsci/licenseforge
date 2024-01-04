const fs = require("fs");
const path = require("path");

module.exports = function create(name) {
	const licenses = require("./list.js").readLicenseDirectory();
	let found = false;

	for (let i = 0; i < licenses.length; i++) {
		const license = licenses[i];

		if (license.name === name) {
			found = true;
			break;
		}
	}

	if (!found) {
		console.log("Argument [0]: Invalid license name or command");
		console.log("\nUse 'help' or 'list' to get list of available commands.");
	} else {
		if (existLicense()) {
			return console.info("Error: A file named 'LICENSE' already exist. Please remove it before creating.");
		};

		name = name.toUpperCase();
		const filePath = path.join(__dirname, "..", "..", "licenses", `${name}`);

		fs.readFile(filePath, "utf8", function(err, data) {
			if (err) return console.error("Error: Could not read the license", err);

			fs.writeFile("./LICENSE", data, function(err) {
				if (err) return console.error("Error: Could not create the license", err);

				console.log(`Successfully created the ${name} license.`);
			});
		});
	}
}

function existLicense() {
	const filePath = path.join(process.cwd(), "LICENSE");
	return fs.existsSync(filePath);
}