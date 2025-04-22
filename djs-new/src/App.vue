<template>
  <div id="app">
    <AppNavbar />
    <RouterView
      :darkMode="darkMode"
      @toggleDarkMode="toggleDarkMode"
      @setRepository="setRepository"></RouterView>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from './stores/global';

const { darkMode, toggleDarkMode, setRepository } = useGlobalStore();
</script>
