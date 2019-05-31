'use strict';

const path = require('path');
const fs = require('fs');
const debug = require('debug')('jqcw');
const BinWrapper = require('bin-wrapper');
const base = 'https://github.com/stedolan/jq/releases/download/jq-1.6';
const platform = process.platform === 'darwin' ? 'osx' : 'linux';
const arch = process.platform === 'darwin' ? '-amd64' : process.arch.replace(/^x/, '');
const jqExecutableName = `jq-${platform}${arch}`;
const bin = new BinWrapper()
  .src(`${base}/jq-osx-amd64`, 'darwin')
  .src(`${base}/jq-linux64`, 'linux', 'x64')
  .src(`${base}/jq-linux32`, 'linux', 'x32')
  .dest(path.join('vendor'))
  .use(jqExecutableName)
  .version('>=1.6');

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
