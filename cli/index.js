#!/usr/bin/env node

const argument = process.argv;
argument.splice(0, 2);

switch (argument[0]) {
	case "help": require("./commands/help.js")();
	break;

	default: {
		console.log("Argument [0]: Invalid license name or command\n\nUse 'help' to get list of available commands.");
	}
}