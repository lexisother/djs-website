<template>
  <footer>
    <container>
      <strong><router-link to="/">discord.js</router-link></strong>
      <p>A powerful library for interacting with the Discord API</p>
      <stats />
      <a href="" id="dark-mode-link" @click="toggleDarkMode">
        <em class="fa" :class="darkMode ? 'fa-sun-o' : 'fa-moon-o'"></em>
        Turn {{ darkMode ? 'on' : 'off' }} the lights
      </a>
    </container>

    <div id="site-meta">
      <div id="site-meta-label">&pi;</div>
      commit: {{ hash }}<br />
      built at: {{ builtAt.toUTCString() }}
    </div>
  </footer>
</template>

<script>
import Stats from './Stats.vue'

export default {
  name: 'djs-footer',
  props: ['darkMode'],
  components: {
    Stats,
  },

  data() {
    return {
      hash: GIT_COMMIT_HASH,
      builtAt: new Date(BUILT_AT),
    }
  },

  methods: {
    toggleDarkMode(event) {
      this.$emit('toggleDarkMode')
      event.preventDefault()
    },
  },
}
</script>

<style lang="scss">
@use 'sass:color';
@use '../styles/theming';

footer {
  padding: 3rem;
  background: theming.$color-navbar-bg;
  color: theming.$color-footer-text;

  a {
    text-decoration: none;
    color: theming.$color-footer-text;
  }

  a:hover {
    color: color.adjust(theming.$color-footer-text, $lightness: 10%);
  }

  .container {
    text-align: center;
  }

  .stats {
    padding: 0;
    list-style: none;

    li {
      display: inline-block;
      padding-left: 0.3em;

      &:not(:last-child):after {
        content: ',';
      }
    }
  }
}

#dark-mode-link {
  display: inline-block;
  padding: 8px 6px;
  border-radius: 4px;
  background: theming.$color-primary;
  color: white;
  font-size: 0.9rem;

  &:hover {
    background: color.adjust(theming.$color-primary, $lightness: 10%);
  }
}

#site-meta {
  float: left;
  width: 0.9em;
  height: 1em;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.7em;
  color: color.adjust(theming.$color-footer-text, $lightness: -35%);
  transition: all 0.6s;

  &:hover {
    width: 32em;
    height: 3.2em;
    color: color.adjust(theming.$color-footer-text, $lightness: -10%);
  }
}
</style>
