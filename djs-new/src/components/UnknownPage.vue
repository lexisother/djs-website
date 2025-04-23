<template>
  <div>
    <h1>Unknown {{ type || 'page' }}</h1>
    <p>This page doesn't actually exist. Oh no!</p>
    <p>Instead, please accept this exceptionally awesome piece of artwork:</p>
    <p><Awesome /></p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ type: string }>();
</script>

<style>
#awesome {
  width: 100%;
  max-width: 476px;
}
</style>
