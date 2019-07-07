
const core = require('../../core');

module.exports.run = async () => {
	core.setModelProp('example_env_os', 'MacOS, Windows');
	core.setModelProp('installation', core.fs.readTpl(__dirname, 'installation.md', core.getModel()));
	core.setModelProp('shields', core.fs.readTpl(__dirname, 'badges.md', core.getModel()));
	
	core.addAction('cp-gitignore', async () => {
		core.fs.cpTpl(__dirname, '_.gitignore', '.gitignore', core.getModel());
	});	
	core.addAction('cp-travis', async () => {
		core.fs.cpTpl(__dirname, '.travis.yml', '.travis.yml', core.getModel());
	});		
	
	core.addAction('cp-main-test', async () => {
		core.fs.cpTpl(__dirname, 'main_test.go_', 'main_test.go', core.getModel());
	});	
	
	core.addAction('cp-main', async () => {
		core.fs.cpTpl(__dirname, 'main.go_', 'main.go', core.getModel());
	});	
};

