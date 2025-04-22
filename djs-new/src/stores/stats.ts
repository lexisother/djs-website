import { defineStore } from 'pinia';

interface Data {
  downloads: {
    downloads: { downloads: number }[];
  };
  stars: {
    stargazers_count: number;
  };
  contributors: unknown[];
}

interface StatsState {
  downloads: string | number;
  stars: string;
  contributors: string;
  fetching: boolean;
}

export const useStatsStore = defineStore('stats', {
  state: (): StatsState => ({
    downloads: `${(6500000).toLocaleString()}+`,
    stars: `${(6500).toLocaleString()}+`,
    contributors: '100+',
    fetching: false,
  }),

  actions: {
    async fetchData() {
      if (this.fetching) return;
      this.fetching = true;

      const { data: downloads } = await useFetch<Data['downloads']>(
        'https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/discord.js',
      ).json();
      const { data: stars } = await useFetch<Data['stars']>(
        'https://api.github.com/repos/discordjs/discord.js',
      ).json();
      const { data: contributors } = await useFetch<Data['contributors']>(
        'https://api.github.com/repos/discordjs/discord.js/stats/contributors',
      ).json();

      if (downloads.value) {
        this.downloads = 0;
        for (const item of downloads.value.downloads) this.downloads += item.downloads;
        this.downloads = this.downloads.toLocaleString();
      }
      if (stars.value) {
        this.stars = stars.value.stargazers_count.toLocaleString();
      }
      if (contributors.value) {
        this.contributors = contributors.value.length.toLocaleString();
      }
    },
  },
});
