var inquirer = require('inquirer');
var bar = new inquirer.ui.BottomBar();
const logSymbols = require('log-symbols');
const chalk = require('chalk')



function error(msg){
	console.log(logSymbols.error, chalk.default.redBright(msg));
}
function info(msg){
	console.log(logSymbols.info, chalk.default.cyanBright(msg));
}
function warning(msg){
	console.log(logSymbols.warning, chalk.default.yellowBright(msg));
}
function success(msg){
	console.log(logSymbols.success, chalk.default.greenBright(msg));
}
function panic(msg){
	error(msg);
	process.exit(1);
}

module.exports.inquirer = inquirer;
module.exports.bar = bar;
module.exports.print = {
	error: error,
	info: info,
	warning: warning,
	success: success,
	panic: panic
};