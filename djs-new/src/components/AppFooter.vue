<template>
  <footer>
    <container>
      <strong><RouterLink to="/">discord.js</RouterLink></strong>
      <p>A powerful library for interacting with the Discord API</p>
      <Stats />
      <a href="" id="dark-mode-link" @click.prevent="toggleDarkMode">
        <i-fa-sun v-if="darkMode" style="width: 0.9rem" />
        <i-fa-moon v-else style="width: 0.9rem" />

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

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';

const store = useGlobalStore();
const { darkMode } = storeToRefs(store);
const { toggleDarkMode } = store;

const hash = GIT_COMMIT_HASH;
const builtAt = new Date(BUILT_AT);
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
  display: inline-flex;
  flex-direction: row;
  gap: 0.3rem;
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
