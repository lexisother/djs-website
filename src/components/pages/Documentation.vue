<template>
  <div id="docs">
    <docs-navbar :sources="sources" :source="source" />
    <router-view :source="source" :tag="tag" :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" @setRepository="setRepository" />
  </div>
</template>

<script>
import MainSource from '../../data/MainSource';
import CollectionSource from '../../data/CollectionSource';
import CommandoSource from '../../data/CommandoSource';
import BuildersSource from '../../data/BuildersSource';
import VoiceSource from '../../data/VoiceSource';
import RPCSource from '../../data/RPCSource';
import RESTSource from '../../data/RESTSource';
import ProxySource from '../../data/ProxySource';
import DocsNavbar from '../docs/Navbar.vue';

export default {
  name: 'documentation',
  props: ['darkMode'],
  components: {
    DocsNavbar,
  },

  data() {
    return {
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
      source: MainSource,
      tag: MainSource.defaultTag,
    };
  },

  methods: {
    setSource(id) {
      this.source = this.sources[id];
    },

    setTag(tag) {
      this.tag = tag;
      this.source.recentTag = tag;
    },

    handleRoute(route) {
      // Set the source, or redirect to a default route
      if (route.params.source && this.sources[route.params.source]) {
        this.setSource(route.params.source);
      } else {
        this.$router.replace({ name: 'docs-file', params: {
          source: MainSource.id,
          tag: MainSource.defaultTag,
          category: MainSource.defaultFile.category,
          file: MainSource.defaultFile.id,
        } });
        return;
      }

      // Set the tag, or redirect to a default route
      if (route.params.tag) {
        this.setTag(route.params.tag);
      } else {
        this.$router.replace({ name: 'docs-file', params: {
          source: this.source.id,
          tag: this.source.recentTag || this.source.defaultTag,
          category: this.source.defaultFile.category,
          file: this.source.defaultFile.id,
        } });
        return;
      }

      // Redirect to a default route
      if (!route.params.file && !route.params.class && !route.params.function && !route.params.typedef && route.name !== 'docs-search') {
        this.$router.replace({ name: 'docs-file', params: {
          source: this.source.id,
          tag: this.tag,
          category: this.source.defaultFile.category,
          file: this.source.defaultFile.id,
        } });
      }
    },

    toggleDarkMode() {
      this.$emit('toggleDarkMode');
    },

    setRepository(repo) {
      this.$emit('setRepository', repo);
    },
  },

  watch: {
    $route(to) {
      this.handleRoute(to);
    },
  },

  created() {
    this.handleRoute(this.$route);
  },
};
</script>
