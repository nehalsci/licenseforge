module.exports = function help() {
	printCommands([
	{
		name: "help",
		description: "List of available commands"
	},
	{
		name: "list",
		description: "Licenses that you can forge"
	},
	{
		name: "create",
		description: "Create the license. [Name argument required]"
	}
	]);
}

function printCommands(cmds) {
	if (!Array.isArray(cmds)) return;

	console.log("Commands:\n--------");

	cmds.forEach(function(cmd) {
		console.log(`- ${cmd.name} | ${cmd.description}`);
		console.log("-------");
	});
}