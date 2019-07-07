
const core = require('../../core');

module.exports.run = async () => {
	core.setModelProp('example_env_os', 'MacOS, Windows');
	core.setModelProp('readme_other', core.fs.readTpl(__dirname, 'readme_other.md', core.getModel()));
	core.setModelProp('shields', core.fs.readTpl(__dirname, 'badges.md', core.getModel()));
	
	core.addAction('cp-gitignore', async () => {
		core.fs.cpTpl(__dirname, '_.gitignore', '.gitignore', core.getModel());
	});	
	core.addAction('cp-travis', async () => {
		core.fs.cpTpl(__dirname, '.travis.yml', '.travis.yml', core.getModel());
	});
	core.addAction('cp-compose', async () => {
		core.fs.cpTpl(__dirname, 'docker-compose.yml', 'docker-compose.yml', core.getModel());
	});
	core.addAction('cp-dockerfile', async () => {
		core.fs.cpTpl(__dirname, 'Dockerfile', 'Dockerfile', core.getModel());
	});
	core.addAction('cp-gulpfile', async () => {
		core.fs.cpTpl(__dirname, 'gulpfile.js', 'gulpfile.js', core.getModel());
	});
	core.addAction('cp-gulpfile', async () => {
		core.fs.cpTpl(__dirname, 'gulpfile.js', 'gulpfile.js', core.getModel());
	});
	core.addAction('cp-main', async () => {
		core.fs.cpTpl(__dirname, 'main.go_', 'main.go', core.getModel());
	});
	core.addAction('cp-package', async () => {
		core.fs.cpTpl(__dirname, 'package.json', 'package.json', core.getModel());
	});
	core.addAction('cp-serve-all', async () => {
		core.fs.cpTpl(__dirname, 'serve-all.sh', 'serve-all.sh', core.getModel());
	});
	core.addAction('cp-confjs', async () => {
		core.fs.cpTpl(__dirname, 'conf.js', 'conf.js', core.getModel());
	});	
	core.addAction('cp-client', async () => {
		core.fs.cpTpl(__dirname, 'client/utils/ready.js', 'client/utils/ready.js', core.getModel());
		core.fs.cpTpl(__dirname, 'client/index.html', 'client/index.html', core.getModel());
		core.fs.cpTpl(__dirname, 'client/index.js', 'client/index.js', core.getModel());
		core.fs.cpTpl(__dirname, 'client/index.scss', 'client/index.scss', core.getModel());
	});		
};

