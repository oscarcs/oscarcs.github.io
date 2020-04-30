<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  @Prop(String) navbarColor!: string;
}
</script>

<style lang="scss">
@import "@/styles/oscar.scss";

// Bulma
@import "~bulma/bulma.sass";
@import "~buefy/src/scss/buefy";

// Custom

html {
  overflow: auto;
}

.navbar-burger {
  height: initial;
}
</style>
