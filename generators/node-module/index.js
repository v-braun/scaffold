
const core = require('../../core');

module.exports.run = async () => {
  core.setModelProp('example_env_os', 'MacOS, Windows, Linux');
  
	core.addAction('cp-gitignore', async () => {
		core.fs.cpTpl(__dirname, '_.gitignore', '.gitignore', core.getModel());
  });	
	core.addAction('cp-package-json', async () => {
		core.fs.cpTpl(__dirname, '_package.json', 'package.json', core.getModel());
  });	  
	core.addAction('cp-index-js', async () => {
		core.fs.cpTpl(__dirname, 'index.js', 'index.js', core.getModel());
  });
  
  // let choices = {
  //   dev_web_app: 'Simple WebApp for development'
  // }
  
  // let answers = await core.ui.inquirer.prompt([
  //   {
  //     type: 'checkbox',
  //     name: 'extensions',
  //     message: 'choose extensions that should be also scaffolded',
  //     choices: [
  //       choices.dev_web_app
  //     ]
  //   }
  // ]);

  
};