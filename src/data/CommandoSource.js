import semver from 'semver';
import DocsSource, { json } from './DocsSource';

const branchBlacklist = new Set(['gh-pages', 'docs']);

class CommandoSource extends DocsSource {
  async fetchDocs(tag) {
    const res = await fetch(`https://raw.githubusercontent.com/${this.repo}/docs/${tag}.json`);
    return json(res);
  }
}

export default new CommandoSource({
  id: 'commando',
  name: 'Commando',
  global: 'Commando',
  docsRepo: 'discordjs/docs',
  repo: 'discordjs/Commando',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
  tagFilter: tag => semver.gt(tag.replace(/^v/, ''), '0.4.1'),
});
