import semver from 'semver';
import DocsSource, { json } from './DocsSource';

class RPCSource extends DocsSource {
  async fetchDocs(tag) {
    const res = await fetch(`https://raw.githubusercontent.com/${this.repo}/docs/${tag}.json`);
    return json(res);
  }
}

export default new RPCSource({
  id: 'rpc',
  name: 'RPC',
  global: 'RPC',
  docsRepo: 'discordjs/docs',
  repo: 'discordjs/RPC',
  defaultTag: 'master',
  branchFilter: branch => branch !== 'docs' && !branch.includes('greenkeeper'),
  tagFilter: tag => semver.gte(tag.replace(/(^@\w+\/\w+@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '3.0.0'),
});
