
const core = require('../../core');

module.exports.run = async () => {
  core.setModelProp('example_env_os', 'iOs 10, etc.');
	
	core.setModelProp('installation', core.fs.readTpl(__dirname, 'installation.md', core.getModel()));
	core.setModelProp('readme_other', core.fs.readTpl(__dirname, 'related-projects.md', core.getModel()));


	core.addAction('cp-gitignore', async () => {
		core.fs.cpTpl(__dirname, '_.gitignore', '.gitignore', core.getModel());
  });	
	core.addAction('cp-podfile', async () => {
		core.fs.cpTpl(__dirname, 'Podfile', 'Podfile', core.getModel());
  });	  
	core.addAction('cp-travis', async () => {
		core.fs.cpTpl(__dirname, '.travis.yml', '.travis.yml', core.getModel());
  });	  	
};