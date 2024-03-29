#!/usr/bin/env node

const argument = process.argv;
argument.splice(0, 2);

switch (argument[0]) {
	case "help": require("./commands/help.js")();
	break;

	case "list": require("./commands/list")();
	break;

	case "create": require("./commands/create.js")(argument[1]);
	break;

	default: {
		require("./commands/create.js")(argument[0]);
	}
}