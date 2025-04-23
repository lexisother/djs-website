<template>
  <div id="docs-body">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
const docs = {} as Record<string, unknown>;

function loadDocs() {}
</script>
