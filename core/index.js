const path = require('path');
const ui = require('./ui');
const fs = require('./fs');

var model = {};
var actions = [];

function setModelProp(key, val){
	model[key] = val;
}
function getModelProp(key){
	return model[key];
}

function getModel() {
	return model;
}

function addAction(name, cb){
	actions.push({name: name, cb: cb});
}

async function runActions(){
	for(let action of actions){
		ui.print.info(`run ${action.name}`);
		await action.cb();
		ui.print.success(`${action.name} succeeded`);
	}
}


module.exports = {
	ui: ui,
	fs: fs,
	cwdName: path.basename(process.cwd()),
	setModelProp: setModelProp,
	getModelProp: getModelProp,
	getModel: getModel,
	addAction: addAction,
	runActions: runActions,
}