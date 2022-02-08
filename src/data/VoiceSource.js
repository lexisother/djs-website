import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
  id: 'voice',
  name: 'Voice',
  global: 'Voice',
  docsRepo: 'discordjs/docs',
  repo: 'discordjs/voice',
  defaultTag: 'stable',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
});