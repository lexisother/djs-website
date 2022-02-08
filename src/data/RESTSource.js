import semver from 'semver';
import DocsSource, { json } from './DocsSource';

class RESTSource extends DocsSource {
  async fetchDocs() {
    const res = await fetch(
      `https://raw.githubusercontent.com/${this.docsRepo}/main/${this.id}/${this.defaultTag}.json`,
    );
    return json(res);
  }
}

const branchBlacklist = new Set(['docs']);
export default new RESTSource({
  id: 'rest',
  name: 'REST',
  global: 'REST',
  docsRepo: 'discordjs/docs',
  repo: 'discordjs/discord.js',
  defaultTag: 'main',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
  tagFilter: tag => semver.gt(tag.replace(/(^@\w+\/\w+@v?)?(?<semver>\d+.\d+.\d+)-?.*/, ''), '0.2.0'),
});
