# JQ CLI Wrapper

This is a simple npm wrapper around [jq](https://stedolan.github.io/jq/) so it
can be pulled in as a Node dependency and used for script commands in the
package.json without the need for a developer to need to install it globally on
their development system.

This wrapper currently only supports the OS X and Linux builds of jq.  More OS
support will be added if needed.  Please submit an issue requesting it or feel
free to add it yourself and submit a pull request.

If there is already a wrapper out there, please let me know.  I was surprised it
did not already exist which is why I created this one for my specific needs.



## Usage

Just include this as a dependency in your package.json.  Once installed you can
reference `jq` directly in the package.json and not need to worry about
installing it globally.
