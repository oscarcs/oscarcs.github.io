<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="scss">

html {
  overflow: auto;
}

.hero.is-dark {
  background-image: url('assets/sky-tower-dark.jpg');
  background-position: bottom 50% right -6%;

  @media (max-width: $desktop) and (min-width: $tablet) {
    background-position: bottom 60% right -30%;
    background-size: 70%;
  }

  @media (max-width: $tablet) {
    background-position: bottom 40% right 200%;
    background-size: 110%;
  }

  background-repeat: no-repeat;
  background-color: black;
  background-size: 44%;
}
</style>
