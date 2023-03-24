const util = require('./integrations/utility');

const themesDirectoryPath = './src/app/themes/';

module.exports = (async () => {
  const themeRepos = util.collectConfiguredReposFromEnv('themeRepositories');

  await util.cloneAndConfigureRepos(themeRepos, themesDirectoryPath, 'theme');

  console.log('Themes successfully added');
})();
