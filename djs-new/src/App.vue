<template>
  <div id="app">
    <AppNavbar :repository="repository"></AppNavbar>
    <RouterView :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" @setRepository="setRepository"></RouterView>
    <AppFooter :darkMode="darkMode" @toggleDarkMode="toggleDarkMode"></AppFooter>
  </div>
</template>

<script setup lang="ts">
import MainSource from './data/MainSource';

const darkMode = useLocalStorage("dark-mode", false) 
const repository = ref(MainSource.repo);

const setRepository = (repo: string) => repository.value = repo;

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
}
</script>