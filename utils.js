const chalk = require("chalk");
const { inspect } = require("util");

const errorColor = chalk.bold.red;
const infoColor = chalk.bold;
const debugColor = chalk.cyan;
const warningColor = chalk.yellow;

function log(color) {
  const sanitizedArgs = [...arguments]
    .slice(1)
    .map(x => (typeof x === "string" ? x : inspect(x)));
  console.log(chalk.magenta`can-mktorrent:`, color(...sanitizedArgs));
}

module.exports.DEBUG = function DEBUG() {
  log(debugColor, ...arguments);
};

module.exports.INFO = function INFO() {
  log(infoColor, ...arguments);
};

module.exports.ERROR = function ERROR() {
  log(errorColor, ...arguments);
};

module.exports.WARN = function WARN() {
  log(warningColor, ...arguments);
};
