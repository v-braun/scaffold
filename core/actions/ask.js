const generators = require('../../generators');
const core = require('../');

module.exports = async () => {
	let author = 'v-braun';
	let answers = await core.ui.inquirer.prompt([
		{
			type: 'list',
			name: 'generator',
			message: 'what want you to scaffold?',		
			choices: generators.list()
		},
		{
			type: 'input',
			name: 'name',
			message: 'what is the name of your project?',
			default: core.cwdName		
		},
		{
			type: 'input',
			name: 'description',
			message: 'description of the project?',
			default: function(answers){
				return ``;
			}
		}
	]);
	
	core.setModelProp('generator', answers.generator);
	core.setModelProp('name', answers.name);
	core.setModelProp('repo', `https://github.com/${author}/${answers.name}`);	
	core.setModelProp('description', answers.description);	
	core.setModelProp('email', 'mail@viktor-braun.de');	
	core.setModelProp('web', 'viktor-braun.de');	
	core.setModelProp('author', author);	
	core.setModelProp('gravatar', 'https://avatars3.githubusercontent.com/u/4738210?v=3&s=50');	
	
	core.setModelProp('banner', 'https://via.placeholder.com/800x480.png?text=this%20is%20a%20placeholder%20for%20the%20project%20banner');	
	core.setModelProp('installation', '');
	core.setModelProp('usage', '');
	core.setModelProp('configuration', '');

};