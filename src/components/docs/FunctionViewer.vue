<template>
  <div v-if="func" id="function-viewer" class="docs-page">
    <source-button :meta="func.meta" :docs="docs" />

    <h1>{{ func.name }}</h1>
    <span v-if="func.deprecated" class="badge warn" title="This function is deprecated, and may be removed in a future version.">Deprecated</span>
    <p v-if="func.description" v-html="description" class="func-desc"></p>
    <see v-if="func.see && func.see.length" :see="func.see" :docs="docs" />

    <div v-if="func.params && func.params.length">
      <h2>Parameters</h2>
      <param-table :params="func.params" :docs="docs" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { typeKey, convertLinks } from '../../util';
import ParamTable from './class-viewer/ParamTable.vue';
import SourceButton from './SourceButton.vue';
import See from './See.vue';

export default {
  name: 'function-viewer',
  props: ['docs', 'darkMode'],
  components: {
    ParamTable,
    SourceButton,
    See,
  },

  data() {
    return {
      func: this.docs.functions.find(f => f.name === this.$route.params.function),
    };
  },

  computed: {
    description() {
      return Vue.filter('marked')(convertLinks(this.func.description, this.docs, this.$router, this.$route));
    },
    returnsDescription() {
      const returns = this.func.returns;
      if (returns) return Vue.filter('marked')(convertLinks(returns.description, this.docs, this.$router, this.$route));
      return '';
    },
  },

  methods: {
    typeKey,
  },
};
</script>

<style lang="scss">
  @import '../../styles/theming';

  #function-viewer {
    h1 {
      display: inline-block;
    }

    h2 {
      font-size: 1.3rem;
      margin-top: 40px;
    }

    .param-table-wrapper {
      border: 0;
    }

    code {
      font-family: $font-monospace;
      font-size: 0.8rem;
    }

    :not(pre) > code {
      background: darken($color-content-bg, 3.5%);
      border-radius: 2px;
    }

    #app.dark #function-viewer :not(pre):not(.info):not(.warn) > code {
      background: lighten($color-content-bg-dark, 3.5%);
    }
  }
</style>
