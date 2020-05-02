<template>
  <b-navbar :type="'is-dark'" wrapper-class="container" :transparent="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <div class="logo">//</div>
        <div class="logo-text">
          <div class="logo-name">Oscar Sims</div>
          <!-- <div class="logo-title">Software Engineer</div> -->
        </div>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" to="/about">
        <span>About</span>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/projects">
        <span>Projects</span>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/writing">
        <span>Writing</span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Navbar extends Vue {
  @Prop() private color!: string;
}
</script>

<style lang="scss" scoped>
  @import "@/styles/oscar.scss";

  .navbar {
    // background-color: $slate;
  }

  .logo {
    padding-left: 0.5rem;
    font-size: $logo-size;
  }

  .logo-text {
    margin-left: $logo-size / 2;
    margin-right: $logo-size / 2;
  }

  .logo-name {
    font-size: $logo-size / 2;
  }

  .logo-title {
    font-size: ($logo-size / 2) * 0.75;
  }
</style>
