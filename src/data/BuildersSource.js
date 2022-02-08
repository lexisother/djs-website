import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
  id: 'builders',
  name: 'Builders',
  global: 'Builders',
  docsRepo: 'discordjs/docs',
  repo: 'discordjs/builders',
  defaultTag: 'stable',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
});
