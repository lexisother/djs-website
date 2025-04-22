<template>
  <header>
    <container>
      <router-link to="/">discord.js</router-link>

      <nav>
        <router-link to="/docs">Documentation</router-link
        ><!--
        --><a :href="`https://github.com/${repository}`">GitHub</a
        ><!--
        --><a href="https://discordjs.guide/">Guide</a>
      </nav>
    </container>
  </header>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';

const { repository } = storeToRefs(useGlobalStore());
</script>

<style lang="scss">
@use 'sass:color';
@use '../styles/theming';
@use '../styles/mq';

header {
  height: 3rem;
  line-height: 3rem;
  background: theming.$color-navbar-bg;

  a {
    display: inline-block;
    padding: 0 16px;
    text-decoration: none;
    color: white;
  }

  @include mq.mq($until: tablet) {
    a {
      padding: 0 7px;
    }
  }

  & .container > a {
    background: theming.$color-primary;
    font-size: 1.1rem;

    &:hover {
      color: white;
      background: color.adjust(theming.$color-primary, $lightness: -10%);
    }
  }

  nav {
    float: right;

    a:hover {
      color: white;
      background: color.adjust(theming.$color-navbar-bg, $lightness: -10%);
    }
  }
}
</style>
