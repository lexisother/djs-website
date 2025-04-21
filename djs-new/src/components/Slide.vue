<template>
  <div class="slide">
    <Container>
      <slot />
    </Container>
  </div>
</template>

<script lang="ts">
import Container from './Container.vue'
</script>

<style>
.slide {
  padding: 16px;
}
</style>
