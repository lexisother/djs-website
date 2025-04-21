import DocsSource, { json } from './DocsSource';

class ProxySource extends DocsSource {
  async fetchDocs() {
    const res = await fetch(
      `https://raw.githubusercontent.com/${this.docsRepo}/main/${this.id}/${this.defaultTag}.json`,
    );
    return json(res);
  }
}

const branchBlacklist = new Set(['docs', 'v8', 'v11', 'v12', 'v13']);
export default new ProxySource({
  id: 'proxy',
  name: 'Proxy',
  global: 'Proxy',
  docsRepo: 'discordjs/docs',
  repo: 'discordjs/discord.js',
  defaultTag: 'main',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
});
