# licenseforge
Forge the LICENSE by using a simple cli command [NodeJS]

## Installation
```
npm install -g licenseforge
```
```
yarn global add licenseforge
```

## Command-Line Usage
`forge-license create <name>` | `forge-license create mit`
```
Successfully created the MIT license.
```
`forge-license <name>` | `forge-license mit` - This works too
```
Successfully created the MIT license.
```

`forge-license help`
```
Commands:
--------
- help | List of available commands
-------
- list | Licenses that you can forge
-------
- create | Create the license. [Name argument required]
-------
```

`forge-license list`
```
Licenses:
--------------
- apache-2.0
--------------
- gpl-3.0
--------------
- mit
--------------
- bsd-2-clause
--------------
- bsd-3-clause
--------------
- bsl-1.0
--------------
- cc0-1.0
--------------
- epl-2.0
--------------
```
**Note:** In case you don't see the license of your choice - This is just an example and they are most likely added to the list.

## License
This project is licensed under [MIT](LICENSE).