'use strict';

// only supports macos and linux
// assumption is the package.json's os property is limiting the package to these oses
// i am sure if this is installed on some other os fire will rain from the sky

const path = require('path');
const fs = require('fs');
const debug = require('debug')('jqcw');
const BinWrapper = require('bin-wrapper');
const base = 'https://github.com/stedolan/jq/releases/download/jq-1.5';
const platform = process.platform === 'darwin' ? 'osx' : 'linux';
const arch = process.platform === 'darwin' ? 'amd64' : process.arch;
const jqExecutableName = `jq-${platform}-${arch}`;
const bin = new BinWrapper()
  .src(`${base}/jq-osx-amd64`, 'darwin')
  .src(`${base}/jq-linux64`, 'linux', 'x64')
  .src(`${base}/jq-linux32`, 'linux', 'x32')
  .dest(path.join('vendor'))
  .use(jqExecutableName)
  .version('>=1.5');

debug(JSON.stringify({base, platform, arch, jqExecutableName}));

bin.run(['--version'], err => {
  if (err) {
    debug(`Error from bin.run: ${err}`);
  }

  fs.symlink(jqExecutableName, path.join('vendor', 'jq'), err => {
    if (err) {
      debug(`Error creating symlink: ${err}`);
    }
  });
});
