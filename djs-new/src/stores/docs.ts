import MainSource from '@/data/MainSource';
import CollectionSource from '@/data/CollectionSource';
import CommandoSource from '@/data/CommandoSource';
import BuildersSource from '@/data/BuildersSource';
import VoiceSource from '@/data/VoiceSource';
import RPCSource from '@/data/RPCSource';
import RESTSource from '@/data/RESTSource';
import ProxySource from '@/data/ProxySource';
import type DocsSource from '@/data/DocsSource';
import { type Ref } from 'vue';

interface DocsState {
  sources: Record<string, DocsSource>;
  source: Ref<DocsSource>;
  tag: Ref<string>;
}

export const useDocsStore = defineStore('docs', {
  state: (): DocsState => ({
    sources: {
      [MainSource.id]: MainSource,
      main: MainSource,
      [CollectionSource.id]: CollectionSource,
      [BuildersSource.id]: BuildersSource,
      [VoiceSource.id]: VoiceSource,
      [RESTSource.id]: RESTSource,
      [CommandoSource.id]: CommandoSource,
      [RPCSource.id]: RPCSource,
      [ProxySource.id]: ProxySource,
    },
    source: ref(MainSource),
    tag: ref(MainSource.defaultTag),
  }),

  actions: {
    setSource(id: string) {
      this.source = this.sources[id];
    },

    setTag(newTag: string) {
      this.tag = newTag;
      this.source.recentTag = newTag;
    },
  },
});
