<template>
  <ul class="stats">
    <li>{{ downloads }} downloads</li>
    <li>{{ stars }} stars</li>
    <li>{{ contributors }} contributors</li>
  </ul>
</template>

<script setup lang="ts">
import { useStatsStore } from '@/stores/stats';

const store = useStatsStore();
const { downloads, stars, contributors } = storeToRefs(store);

onMounted(() => {
  store.fetchData();
});
</script>
