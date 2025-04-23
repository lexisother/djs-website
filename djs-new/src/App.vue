<template>
  <div id="app" :class="darkMode && 'dark'">
    <AppNavbar />
    <RouterView
      :darkMode="darkMode"
      @toggleDarkMode="toggleDarkMode"
      @setRepository="setRepository" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from './stores/global';

const store = useGlobalStore();
const { darkMode } = storeToRefs(store);
const { toggleDarkMode, setRepository } = store;
</script>
