<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <RouterView></RouterView>
    <AppFooter></AppFooter>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>
