

const path = require('path');
var memFs = require("mem-fs");
var editor = require("mem-fs-editor");

var store = memFs.create();
var fs = editor.create(store);

function tpl(callerModulePath, p){
	return path.join(callerModulePath, 'templates', p);
}

function readTpl(callerModulePath, p, model){
	p = tpl(callerModulePath, p);
	tmp = p + '.tmp';
	fs.copyTpl(p, tmp, model);

	let content = fs.read(tmp);
	fs.delete(tmp);	
	return content;
}
function cpTpl(callerModulePath, src, dest, model){
	fs.copyTpl(tpl(callerModulePath, src), path.join(process.cwd(), dest), model);	
	
}

module.exports = {
	editor: fs,
	cwd: process.cwd(),
	tpl: tpl,
	readTpl: readTpl,
	cpTpl: cpTpl
};