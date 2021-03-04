/*
 * CLI Alerts.
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 *
 * @author Juuso <https://twitter.com/juusojaa/>
 */

const chalk = require('chalk');
const sym = require('log-symbols');
const green = chalk.green;
const greenInverse = chalk.green.inverse;
const redBoldInverse = chalk.red.bold.inverse;
const redBold = chalk.red.bold;
const yellowUnderline = chalk.yellow.underline;
const yellowInverse = chalk.yellow.inverse.bold;
const blueInvB = chalk.blue.inverse.bold;
const blue = chalk.blue;

module.exports = options => {
  const defaultOptions = {
    type: `error`,
    msg: `You forgot to define options.`,
    name: ``
  };
  const opts = {...defaultOptions, ...options };
  const { type, msg, name } = opts;
  const title = name ? name : type.toUpperCase();

  if (type === `success`) {
    console.log(`${sym.success} ${greenInverse(` ${title} `)} ${green(msg)}\n`)
  }

  if (type === `info`) {
    console.log(`${sym.info} ${blueInvB(` ${title} `)} ${blue(msg)}\n`)
  }

  if (type === `error`) {
    console.log(`${sym.error} ${redBoldInverse(` ${title} `)} ${redBold(msg)}\n`)
  }

  if (type === `warning`) {
    console.log(`${sym.warning} ${yellowInverse(` ${title} `)} ${yellowUnderline(msg)}\n`)
  }
}