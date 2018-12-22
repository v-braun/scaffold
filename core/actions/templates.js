const path = require('path');
const core = require('../');

module.exports = async function () {	
	core.setModelProp('installation', core.fs.readTpl(__dirname, 'installation.md', core.getModel()));
	core.setModelProp('usage', core.fs.readTpl(__dirname, 'usage.md', core.getModel()));
	core.setModelProp('configuration', core.fs.readTpl(__dirname, 'configuration.md', core.getModel()));

	core.addAction('cp-pr-tpl', async () => {
		core.fs.cpTpl(__dirname, 'PULL_REQUEST_TEMPLATE.md', '.github/PULL_REQUEST_TEMPLATE.md', core.getModel());
	});
	core.addAction('cp-bug-tpl', async () => {
		core.fs.cpTpl(__dirname, 'ISSUE_TEMPLATE/bug_report.md', '.github/ISSUE_TEMPLATE/bug_report.md', core.getModel());
	});	
	core.addAction('cp-feature-tpl', async () => {
		core.fs.cpTpl(__dirname, 'ISSUE_TEMPLATE/feature_request.md', '.github/ISSUE_TEMPLATE/feature_request.md', core.getModel());
	});	
	core.addAction('cp-contributing', async () => {
		core.fs.cpTpl(__dirname, 'CONTRIBUTING.md', 'CONTRIBUTING.md', core.getModel());
	});	
	core.addAction('cp-coc', async () => {
		core.fs.cpTpl(__dirname, 'CODE_OF_CONDUCT.md', 'CODE_OF_CONDUCT.md', core.getModel());
	});		
	core.addAction('cp-license', async () => {
		core.fs.cpTpl(__dirname, 'LICENSE', 'LICENSE', core.getModel());
	});			
	core.addAction('cp-readme', async () => {
		core.fs.cpTpl(__dirname, 'README.md', 'README.md', core.getModel());
	});
};