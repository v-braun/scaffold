const fs = require('fs');
const path = require('path');
const core = require('../core');

function list(){
	let currentDir = path.join(__dirname, './');
	let generators = fs.readdirSync(currentDir).filter(p => {
		p = path.join(currentDir, p);
		return fs.lstatSync(p).isDirectory()
	});

	return generators;
}

function has(name){
	let generators = list();
	return generators.indexOf(name) >= 0;
}

function run(){
	const name = core.getModelProp('generator');
	if(!has(name)) {
		core.ui.print.panic('unkndown generator ' + name);
	}
	
	let gen = require('./' + name);
	gen.run();
}

module.exports.list = list;
module.exports.run = run;