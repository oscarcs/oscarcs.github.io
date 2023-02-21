<template>
  <nav class="navbar is-dark is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <div class="logo">//</div>
          <div class="logo-text">
            <div class="logo-name">Oscar Sims</div>
            <!-- <div class="logo-title">Software Engineer</div> -->
          </div>
        </router-link>
      </div>
      <div class="navbar-end">
        <router-link class="navbar-item" to="/about">
          <span>About</span>
        </router-link>
        <router-link class="navbar-item" to="/projects">
          <span>Projects</span>
        </router-link>
        <router-link class="navbar-item" to="/writing">
          <span>Writing</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  .navbar {
    // background-color: $slate;
  }

  .logo {
    padding-left: 0.5rem;
    font-size: $logo-size;
  }

  .logo-text {
    margin-left: calc($logo-size / 2);
    margin-right: calc($logo-size / 2);
  }

  .logo-name {
    font-size: calc($logo-size / 2);
  }

  .logo-title {
    font-size: calc(($logo-size / 2) * 0.75);
  }
</style>
