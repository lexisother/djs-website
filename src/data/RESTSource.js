import semver from 'semver';
import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
  id: 'rest',
  name: 'REST',
  global: 'REST',
  docsRepo: 'discordjs/docs',
  repo: 'discordjs/discord.js-modules',
  defaultTag: 'stable',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
  tagFilter: tag => semver.gt(tag.replace(/^v/, ''), '0.2.0'),
});
