<template>
  <div class="param-table-wrapper">
    <table class="param-table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th v-if="hasOptional">Optional</th>
          <th v-if="hasOptional">Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="param in params">
          <td>{{ param.name }}</td>
          <td><types v-for="type in param.type.types" :names="type" :docs="docs" /></td>
          <td v-if="hasOptional">
            <em class="fa fa-check" v-if="param.optional"></em>
          </td>
          <td v-if="hasOptional">
            <em v-if="param.optional && typeof param.default === 'undefined'">none</em>
            <span v-else>{{ param.optional ? param.default : '' }}</span>
          </td>
          <td v-html="description(param)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Types from '../Types.vue';

  export default {
    name: 'param-table',
    props: ['params', 'docs'],
    components: {
      Types,
    },

    computed: {
      hasOptional() {
        return this.params.some(p => p.optional);
      },
    },

    methods: {
      description(param) {
        return Vue.filter('marked')(param.description);
      },
    },
  };
</script>

<style lang="scss">
  @import '../../../styles/theming';
  @import '../../../styles/mq';

  .param-table {
    border-collapse: collapse;
    border: 1px solid darken($color-inactive-border, 5%);

    thead {
      margin: 0;
    }

    th {
      background: darken($color-primary, 10%);
      color: white;
      font-weight: normal;
      text-transform: uppercase;
      padding: 16px;
    }

    th, td {
      padding: 16px;
      text-align: center;
    }

    tr {
      background: darken($color-content-bg, 2%);
    }

    tr:nth-child(odd) {
      background: darken($color-content-bg, 3%);
    }

    @include mq($until: desktop) {
      width: 100%;
      max-width: 100%;
    }
  }

  @include mq($until: desktop) {
    .param-table-wrapper {
      overflow: auto;
    }
  }
</style>