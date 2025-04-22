import MainSource from '@/data/MainSource';
import { type RemovableRef, useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

interface GlobalState {
  darkMode: RemovableRef<boolean>;
  repository: RemovableRef<string>;
}

export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    darkMode: useStorage('dark-mode', false),
    repository: useStorage('repository', MainSource.repo),
  }),

  getters: {},

  actions: {
    toggleDarkMode() {
      this.$patch({
        darkMode: !this.darkMode,
      });
    },
    setRepository(repo: string) {
      this.$patch({
        repository: repo,
      });
    },
  },
});
