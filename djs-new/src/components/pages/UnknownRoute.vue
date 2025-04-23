<template>
  <Slide id="unknown-route">
    <UnknownPage type="route" />
  </Slide>
</template>

<style lang="scss">
@use '../../styles/theming';

#unknown-route {
  background: theming.$color-content-bg;
}

#app.dark #unknown-route {
  background: theming.$color-content-bg-dark;
  color: theming.$color-content-text-dark;
}
</style>
