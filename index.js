/* eslint-disable no-console, no-sync, global-require */
'use strict';

const chalk = require('chalk');
const findRoot = require('find-root');
const fs = require('fs');
const path = require('path');

const findProjectRoot = () => {
  try {
    return findRoot(process.cwd());
  } catch (err) {
    if (err.message === 'package.json not found in path') {
      throw new Error('Current working directory is not a Cordova-based project.');
    } else {
      throw err;
    }
  }
};

const findCordova = root => {
  const cdvPath = path.join(root, 'node_modules', 'cordova', 'cordova.js');

  try {
    fs.accessSync(cdvPath, fs.F_OK);

    return cdvPath;
  } catch (err) {
    throw new Error('Can\'t find local cordova version. ' +
      'Please install local cordova first, e.g.: npm install cordova');
  }
};

const runLocalCordova = argv => {
  try {
    const root = findProjectRoot();
    const cdvPath = findCordova(root);

    require(cdvPath).cli(argv);
  } catch (err) {
    console.log(chalk.bold.red(`Error: ${err.message}`));
  }
};

module.exports = runLocalCordova;
