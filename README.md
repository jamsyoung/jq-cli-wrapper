# JQ CLI Wrapper

This is a simple npm wrapper around [jq](https://stedolan.github.io/jq/) so it
can be pulled in as a node dependency and used for script commands in the
package.json file without the requirement to be globally installed.  While that
was my original reason for creating this wrapper, you could install this
globally as another easy way to get jq installed on your system.

This wrapper currently only supports the following jq binaries:

- OS X 64-bit
- Linux 32-bit
- Linux 64-bit

More OS support will be added if needed.  Please submit an issue requesting it
or feel free to add it yourself and submit a pull request.


## Usage as package dependency

Just include this as a dependency in your package.json.  Once installed you can
reference `jq` directly in the package.json and not need to worry about
installing it globally.  Here is a basic contrived example:

```json
{
  "name": "example",
  "version": "0.1.0",
  "main": "app.js",
  "scripts": {
    "start": "node $(jq -r .main package.json)"
  },
  "dependencies": {
    "jq-cli-wrapper": "*"
  }
}
```


## Usage as a global cli tool

```shell
$ npm install --global jq-cli-wrapper
$ jq --version
jq-1.5
```

NOTE: You may need to open a new Terminal window or tab for `jq` to be in your
PATH after it is installed.
