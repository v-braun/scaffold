#!/usr/bin/env node


const coreAsk = require('./core/actions/ask')
const coreTpl = require('./core/actions/templates')
const generators = require('./generators');
const core = require('./core');

(async ()=> {

	
	await coreAsk();
	await coreTpl();
	await generators.run();

	await core.runActions();

	let done = new Promise((resolve) => {
		core.fs.editor.commit(function(){
			resolve()
		});
		
	})

	await done;
})().catch(e => {
	console.error(e);
	process.exit(1);
}).then(() => {
	process.exit(0);
});

//var types = process.argv.slice(2);
