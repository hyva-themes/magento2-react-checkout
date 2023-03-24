const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
  async installRepo(path, directory, repoUri, repoType) {
    console.log(`Installing ${directory}: ${repoUri}`);
    await exec(`git clone ${repoUri} ${path}${directory}`);
    console.log(`${directory} ${repoType} added successfully.`);
  },

  collectConfiguredReposFromEnv(configKey) {
    const { env } = process;
    const configPrefix = `npm_package_config_${configKey}_`;
    const repos = {};

    Object.keys(env).forEach((envProp) => {
      if (envProp.startsWith(configPrefix)) {
        const integrationCode = envProp.replace(configPrefix, '');
        if (integrationCode) {
          repos[integrationCode] = env[envProp];
        }
      }
    });

    return repos;
  },

  async cloneAndConfigureRepos(repoList, installationPath, repoType) {
    const integrationMethodList = Object.keys(repoList);

    await Promise.all(
      integrationMethodList.map(async (repo) => {
        if (!fs.existsSync(`${installationPath}${repo}`)) {
          await this.installRepo(
            installationPath,
            repo,
            repoList[repo],
            repoType
          );
        }
        return 'success';
      })
    );
  },
};
