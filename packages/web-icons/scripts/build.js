/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const chalk = require('chalk');

const build = async ({
  onBuildStart = () => {},
  onBuildFinish = () => {},
  onBuildError = err => { throw err; },
} = {}) => {
  try {
    onBuildStart();
    await require('./icons');
    onBuildFinish();
  } catch (err) {
    onBuildError(err);
  }
};

if (process.mainModule.filename === __filename) {
  // noinspection JSIgnoredPromiseFromCall
  build({
    onBuildFinish: () => {
      console.log(chalk.bold.green('Build finished!'));
    },
    onBuildError: console.error,
  });
} else {
  module.exports = build;
}
