<template>
  <div class="docs">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import handleRoute from '@/utils/handleRoute';
import { useRoute } from 'vue-router';

const route = useRoute();

handleRoute(route);

watchEffect(() => {
  console.log('what the', route.fullPath);
  handleRoute(route);
});
</script>
